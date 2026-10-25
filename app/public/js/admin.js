async function loadStats() {
  try {
    const res = await fetch('/api/jobs/stats');
    const data = await res.json();
    if (data.success) {
      document.getElementById('statTotalJobs').textContent = data.data.total_jobs;
      document.getElementById('statActiveJobs').textContent = data.data.active_jobs;
      document.getElementById('statApplications').textContent = data.data.total_applications;
      document.getElementById('statCompanies').textContent = data.data.total_companies;
    }
  } catch (err) {
    console.error('Loi load stats:', err);
  }
}

async function loadApplications() {
  const filterStatus = document.getElementById('filterStatus').value;
  const params = new URLSearchParams();
  if (filterStatus) params.append('status', filterStatus);

  try {
    const res = await fetch(`/api/applications?${params.toString()}`);
    const data = await res.json();
    if (data.success) {
      renderApplications(data.data);
    }
  } catch (err) {
    console.error('Loi load applications:', err);
    document.getElementById('applicantTableBody').innerHTML = `
      <tr><td colspan="8" style="text-align: center; color: var(--danger); padding: 1.5rem;">Lỗi tải dữ liệu ứng viên</td></tr>
    `;
  }
}

function renderApplications(apps) {
  const tbody = document.getElementById('applicantTableBody');
  if (apps.length === 0) {
    tbody.innerHTML = `
      <tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 2rem;">Chưa có hồ sơ ứng tuyển nào phù hợp.</td></tr>
    `;
    return;
  }

  tbody.innerHTML = apps.map(app => `
    <tr>
      <td style="font-weight: 600;">#${app.id}</td>
      <td>
        <div style="font-weight: 700; color: var(--secondary);">${app.full_name}</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">${app.cover_letter ? app.cover_letter.substring(0, 40) + '...' : 'Không có lời nhắn'}</div>
      </td>
      <td>
        <div style="font-weight: 600;">${app.job_title}</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">${app.company_name}</div>
      </td>
      <td>
        <div><i class="fa-regular fa-envelope"></i> ${app.email}</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);"><i class="fa-solid fa-phone"></i> ${app.phone}</div>
      </td>
      <td>
        <a href="${app.cv_filepath}" target="_blank" class="btn btn-outline btn-sm" style="font-size: 0.8rem;">
          <i class="fa-solid fa-file-pdf" style="color: #ef4444;"></i> Xem CV
        </a>
      </td>
      <td style="font-size: 0.85rem; color: var(--text-muted);">
        ${new Date(app.created_at).toLocaleDateString('vi-VN')}
      </td>
      <td>
        <span class="status-badge status-${app.status}">${formatStatus(app.status)}</span>
      </td>
      <td>
        <select onchange="updateStatus(${app.id}, this.value)" class="form-control" style="font-size: 0.8rem; padding: 0.3rem 0.5rem; width: auto;">
          <option value="pending" ${app.status === 'pending' ? 'selected' : ''}>Chờ duyệt</option>
          <option value="reviewing" ${app.status === 'reviewing' ? 'selected' : ''}>Đang duyệt</option>
          <option value="interviewed" ${app.status === 'interviewed' ? 'selected' : ''}>Phỏng vấn</option>
          <option value="accepted" ${app.status === 'accepted' ? 'selected' : ''}>Trúng tuyển</option>
          <option value="rejected" ${app.status === 'rejected' ? 'selected' : ''}>Từ chối</option>
        </select>
      </td>
    </tr>
  `).join('');
}

function formatStatus(status) {
  switch (status) {
    case 'pending': return 'Chờ xem xét';
    case 'reviewing': return 'Đang duyệt';
    case 'interviewed': return 'Mời phỏng vấn';
    case 'accepted': return 'Trúng tuyển';
    case 'rejected': return 'Từ chối';
    default: return status;
  }
}

async function updateStatus(appId, newStatus) {
  try {
    const res = await fetch(`/api/applications/${appId}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    });
    const data = await res.json();
    if (data.success) {
      loadApplications();
    } else {
      alert('Không thể cập nhật trạng thái');
    }
  } catch (err) {
    alert('Lỗi: ' + err.message);
  }
}

document.getElementById('filterStatus').addEventListener('change', loadApplications);
document.getElementById('btnRefresh').addEventListener('click', () => {
  loadStats();
  loadApplications();
});

// Initial load
loadStats();
loadApplications();
