let allJobs = [];
let selectedCategory = '';

async function fetchCategories() {
  try {
    const res = await fetch('/api/jobs/categories');
    const data = await res.json();
    if (data.success) {
      renderCategoryChips(data.data);
    }
  } catch (err) {
    console.error('Loi tai danh muc:', err);
  }
}

function renderCategoryChips(categories) {
  const container = document.getElementById('categoryChips');
  container.innerHTML = `
    <div class="category-chip ${selectedCategory === '' ? 'active' : ''}" data-slug="">
      <i class="fa-solid fa-layer-group"></i> Tất cả ngành nghề
    </div>
  `;

  categories.forEach(cat => {
    const chip = document.createElement('div');
    chip.className = `category-chip ${selectedCategory === cat.slug ? 'active' : ''}`;
    chip.dataset.slug = cat.slug;
    chip.innerHTML = `<i class="fa-solid fa-${cat.icon || 'tag'}"></i> ${cat.name} (${cat.job_count})`;
    chip.addEventListener('click', () => {
      document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedCategory = cat.slug;
      fetchJobs();
    });
    container.appendChild(chip);
  });

  container.querySelector('[data-slug=""]').addEventListener('click', (e) => {
    document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
    e.currentTarget.classList.add('active');
    selectedCategory = '';
    fetchJobs();
  });
}

async function fetchJobs() {
  const search = document.getElementById('searchInput').value.trim();
  const location = document.getElementById('locationInput').value.trim();
  const jobType = document.getElementById('typeSelect').value;

  const params = new URLSearchParams();
  if (search) params.append('search', search);
  if (location) params.append('location', location);
  if (jobType) params.append('job_type', jobType);
  if (selectedCategory) params.append('category', selectedCategory);

  try {
    const res = await fetch(`/api/jobs?${params.toString()}`);
    const data = await res.json();
    if (data.success) {
      allJobs = data.data;
      renderJobList(data.data);
      document.getElementById('jobResultCount').textContent = `Tìm thấy ${data.count} vị trí việc làm phù hợp`;
    }
  } catch (err) {
    console.error('Loi tai tin tuyen dung:', err);
    document.getElementById('jobResultCount').textContent = 'Lỗi kết nối khi tải danh sách việc làm';
  }
}

function renderJobList(jobs) {
  const container = document.getElementById('jobList');
  if (jobs.length === 0) {
    container.innerHTML = `
      <div style="background: white; padding: 3rem; text-align: center; border-radius: var(--radius); border: 1px solid var(--border);">
        <i class="fa-regular fa-folder-open" style="font-size: 3rem; color: #cbd5e1; margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.2rem; color: var(--secondary);">Không tìm thấy tin tuyển dụng nào</h3>
        <p style="color: var(--text-muted); margin-top: 0.5rem;">Hãy thử tìm kiếm với từ khóa khác hoặc xóa bộ lọc.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = jobs.map(job => `
    <div class="job-card">
      <div class="job-info">
        <img src="${job.logo_url || 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=128&q=80'}" alt="${job.company_name}" class="company-logo">
        <div>
          <a href="#" class="job-title" onclick="openApplyModal(${job.id}); return false;">${job.title}</a>
          <div class="company-meta">
            <span><i class="fa-regular fa-building"></i> ${job.company_name}</span>
            <span><i class="fa-solid fa-location-dot"></i> ${job.location}</span>
            <span><i class="fa-regular fa-calendar"></i> Hạn nộp: ${job.deadline ? job.deadline.split('T')[0] : 'Không giới hạn'}</span>
          </div>
          <div class="job-tags">
            <span class="tag tag-salary"><i class="fa-solid fa-money-bill-wave"></i> ${job.salary_range}</span>
            <span class="tag tag-type"><i class="fa-solid fa-briefcase"></i> ${job.job_type}</span>
            <span class="tag tag-category">${job.category_name}</span>
            <span class="tag" style="background: #f1f5f9; color: #475569;"><i class="fa-solid fa-user-clock"></i> ${job.experience_level}</span>
          </div>
        </div>
      </div>
      <div class="job-action">
        <button class="btn btn-primary" onclick="openApplyModal(${job.id})">
          <i class="fa-solid fa-paper-plane"></i> Ứng tuyển ngay
        </button>
      </div>
    </div>
  `).join('');
}

async function openApplyModal(jobId) {
  try {
    const res = await fetch(`/api/jobs/${jobId}`);
    const data = await res.json();
    if (!data.success) return alert('Không thể lấy chi tiết việc làm');

    const job = data.data;
    document.getElementById('modalJobTitle').textContent = job.title;
    document.getElementById('applyJobId').value = job.id;

    document.getElementById('jobDetailContent').innerHTML = `
      <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;">
        <img src="${job.logo_url}" style="width: 50px; height: 50px; border-radius: 8px; border: 1px solid var(--border);">
        <div>
          <h4 style="font-size: 1.15rem; font-weight: 700;">${job.company_name}</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem;"><i class="fa-solid fa-location-dot"></i> ${job.location} • <i class="fa-solid fa-money-bill"></i> ${job.salary_range}</p>
        </div>
      </div>

      <div style="margin-bottom: 1rem;">
        <h5 style="font-weight: 700; margin-bottom: 0.35rem; color: var(--secondary);">Mô tả công việc:</h5>
        <p style="white-space: pre-line; color: var(--text-main); font-size: 0.95rem;">${job.description}</p>
      </div>

      <div style="margin-bottom: 1rem;">
        <h5 style="font-weight: 700; margin-bottom: 0.35rem; color: var(--secondary);">Yêu cầu ứng viên:</h5>
        <p style="white-space: pre-line; color: var(--text-main); font-size: 0.95rem;">${job.requirements}</p>
      </div>

      <div>
        <h5 style="font-weight: 700; margin-bottom: 0.35rem; color: var(--secondary);">Chế độ đãi ngộ:</h5>
        <p style="white-space: pre-line; color: var(--text-main); font-size: 0.95rem;">${job.benefits || 'Theo quy chế của công ty'}</p>
      </div>
    `;

    document.getElementById('applyModal').classList.add('active');
  } catch (err) {
    console.error('Loi chi tiet viec lam:', err);
  }
}

// Close Modal
document.getElementById('closeModalBtn').addEventListener('click', () => {
  document.getElementById('applyModal').classList.remove('active');
});

document.getElementById('applyModal').addEventListener('click', (e) => {
  if (e.target.id === 'applyModal') {
    document.getElementById('applyModal').classList.remove('active');
  }
});

// Submit Application
document.getElementById('applicationForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  try {
    const res = await fetch('/api/applications', {
      method: 'POST',
      body: formData
    });
    const result = await res.json();

    if (result.success) {
      alert('Ứng tuyển thành công! Nhà tuyển dụng đã nhận được CV của bạn.');
      document.getElementById('applicationForm').reset();
      document.getElementById('applyModal').classList.remove('active');
    } else {
      alert('Lỗi: ' + (result.message || 'Không thể nộp hồ sơ'));
    }
  } catch (err) {
    alert('Lỗi gửi hồ sơ: ' + err.message);
  }
});

// Search listeners
document.getElementById('btnSearch').addEventListener('click', fetchJobs);
document.getElementById('searchInput').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') fetchJobs();
});
document.getElementById('typeSelect').addEventListener('change', fetchJobs);

// Initial Load
fetchCategories();
fetchJobs();
