-- Database schema for Job Board (Website Tuyen Dung)
CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  icon VARCHAR(50) DEFAULT 'briefcase',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS companies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  logo_url VARCHAR(255) DEFAULT '',
  website VARCHAR(255) DEFAULT '',
  location VARCHAR(150) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS jobs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  company_id INT NOT NULL,
  category_id INT NOT NULL,
  location VARCHAR(100) NOT NULL,
  job_type ENUM('Full-time', 'Part-time', 'Remote', 'Internship') DEFAULT 'Full-time',
  salary_range VARCHAR(100) DEFAULT 'Thỏa thuận',
  experience_level VARCHAR(50) DEFAULT '1-3 nam',
  description TEXT NOT NULL,
  requirements TEXT NOT NULL,
  benefits TEXT,
  deadline DATE,
  status ENUM('active', 'closed') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS applications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  job_id INT NOT NULL,
  full_name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  cover_letter TEXT,
  cv_filename VARCHAR(255) NOT NULL,
  cv_filepath VARCHAR(255) NOT NULL,
  status ENUM('pending', 'reviewing', 'interviewed', 'accepted', 'rejected') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Seed Data
INSERT IGNORE INTO categories (id, name, slug, icon) VALUES
(1, 'Cong nghe Thong tin (IT)', 'it-software', 'code'),
(2, 'Marketing & Truyen thong', 'marketing', 'trending-up'),
(3, 'Thiet ke UI/UX & Do hoa', 'design-uiux', 'palette'),
(4, 'Ke toan & Tai chinh', 'finance-accounting', 'dollar-sign'),
(5, 'Kinh doanh & Ban hang (Sales)', 'sales-business', 'shopping-bag'),
(6, 'Nhan su & Tuyen dung (HR)', 'human-resources', 'users');

INSERT IGNORE INTO companies (id, name, logo_url, website, location, description) VALUES
(1, 'FPT Software & Cloud Solutions', 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=128&q=80', 'https://fptsoftware.com', 'Ha Noi / Da Nang / TP.HCM', 'Cong ty cong nghe thong tin hang dau khu vuc Viet Nam va chau A.'),
(2, 'Viettel Digital Services', 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=128&q=80', 'https://viettel.vn', 'Ha Noi', 'Tap doan Cong nghiep - Vien thong Quan doi, tien phong chuyen doi so quoc gia.'),
(3, 'VNG Tech Corporation', 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=128&q=80', 'https://vng.com.vn', 'TP. Ho Chi Minh', 'Ky lan cong nghe dau tien cua Viet Nam voi he sinh thai Zalo, game va cloud.'),
(4, 'NextTech FinTech Group', 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=128&q=80', 'https://nexttech.asia', 'Ha Noi', 'Tap doan cong nghe tai chinh va thuong mai dien tu da quoc gia.');

INSERT IGNORE INTO jobs (id, title, company_id, category_id, location, job_type, salary_range, experience_level, description, requirements, benefits, deadline, status) VALUES
(1, 'Senior DevOps & Cloud Engineer (Docker/K8s)', 1, 1, 'Ha Noi (Hybrid)', 'Full-time', '30 - 45 trieu VNĐ', '3+ nam kinh nghiem',
'Phu trach trien khai ha tang container, CI/CD pipeline, quan tri cluster Kubernetes, he thong monitoring Prometheus + Grafana va log tap trung tren he thong cloud.',
'- Thanh thao Docker, Docker Compose, Linux administration\n- Co kinh nghiem voi Prometheus, Grafana, Loki/ELK\n- Hieu biet ve Nginx reverse proxy, SSL/TLS, bao mat ha tang web\n- Uu tien ung vien co chung chi AWS hoac CKA',
'- Thuong hieu qua du an, luong thang 13-14\n- Bao hiem suc khoe cao cap FPT Care\n- Ho tro thi chung chi quoc te\n- Laptop MacBook Pro duoc cap moi',
'2026-11-30', 'active'),

(2, 'Backend Developer (Node.js / Express / MySQL)', 2, 1, 'Ha Noi', 'Full-time', '20 - 35 trieu VNĐ', '2-4 nam',
'Xay dung va toi uu hoa cac microservices xu ly giao dich toc do cao, thiet ke database MySQL chuan hoa, viet API RESTful phuc vu hang trieu nguoi dung.',
'- Thanh thao Node.js, Express.js, TypeScript\n- Kinh nghiem sau voi CSDL quan he MySQL, toi uu index va query\n- Hieu biet ve RESTful API, JWT, CORS, Security headers\n- Co kinh nghiem lam viec voi Redis va Docker la loi the',
'- Thu nhap canh tranh, thuong le tet hap dan\n- Moi truong chuyen nghiep, co hoi thang tien ro rang\n- Du lich hang nam, kham suc khoe dinh ky',
'2026-12-15', 'active'),

(3, 'Senior Frontend Engineer (React.js / Next.js)', 3, 1, 'TP. Ho Chi Minh', 'Full-time', '25 - 40 trieu VNĐ', '3+ nam',
'Phat trien giao dien web dashboard quan tri va portal nguoi dung voi React, toi uu hieu nang Core Web Vitals, Responsive tren moi thiet bi.',
'- Chuyen sau React, Hooks, Redux Toolkit hoac Zustand\n- Thanh thao HTML5, CSS3, TailwindCSS\n- Tu duy UI/UX tot, chu trong micro-interactions va toc do tai trang\n- Co kinh nghiem consume REST API va WebSocket',
'- Thuong co phieu ESOP theo ket qua cong viec\n- Bep an cong ty mien phi, khu vui choi giai tri hien dai\n- 15 ngay phep nam',
'2026-11-25', 'active'),

(4, 'Chuyen vien UI/UX Designer', 3, 3, 'TP. Ho Chi Minh', 'Remote', '18 - 28 trieu VNĐ', '2+ nam',
'Nghien cuu hanh vi nguoi dung, thiet ke wireframe, prototype va design system cho cac ung dung web va di dong.',
'- Su dung thanh thao Figma, FigJam\n- Hieu biet ve User Flow, Information Architecture, Accessibility (a11y)\n- Co portfolio san pham thuc te ro rang',
'- Lam viec tu xa linh hoat (100% Remote)\n- Duoc cap ban quyen cac tool thiet ke ban quyen\n- Ho tro chi phi internet hang thang',
'2026-12-05', 'active'),

(5, 'Digital Marketing Lead / Growth Marketer', 4, 2, 'Ha Noi', 'Full-time', '22 - 32 trieu VNĐ', '2-3 nam',
'Len chien luoc quang cao da kenh (Google Ads, Meta, TikTok), toi uu chi phi thu hut ung vien va doanh nghiep doi tac.',
'- Kinh nghiem chay Performance Ads ngan sach lon\n- Biet su dung Google Analytics 4, Tag Manager de do luong chuyen doi\n- Ky nang viet content thu hut, bat trend nhanh',
'- Hoa hong theo KPI tang truong\n- Tham gia cac hoi thao cong nghe marketing lon',
'2026-11-20', 'active'),

(6, 'Chuyen vien Tuyen dung & Nhan su (IT Recruiter)', 1, 6, 'Da Nang', 'Full-time', '15 - 22 trieu VNĐ', '1-2 nam',
'Tim kiem, tiep can va phong van cac ung vien tiem nang trong linh vuc cong nghe thong tin cho cac du an outsource quoc te.',
'- Co kinh nghiem sourcing tren LinkedIn, TopCV, GitHub\n- Giao tiep tot, tieng Anh doc hieu kha\n- Nhiet tinh, chu dong va chiu duoc ap luc cong viec',
'- Phu cap com trua, gui xe\n- Thuong nong theo so luong onboard ung vien thanh cong',
'2026-12-10', 'active');

INSERT IGNORE INTO applications (id, job_id, full_name, email, phone, cover_letter, cv_filename, cv_filepath, status) VALUES
(1, 1, 'Nguyen Nhu Thanh', 'dtc245200791@ictu.edu.vn', '0987654321', 'Em co kinh nghiem trien khai he thong Docker Compose, Nginx, Prometheus va Grafana...', 'CV_NguyenNhuThanh_DevOps.pdf', '/uploads/sample_cv_1.pdf', 'interviewed'),
(2, 2, 'Nguyen Van A', 'nguyenvana@gmail.com', '0912345678', 'Toi da tung tham gia phat trien du an he thong Backend Node.js ket noi MySQL 2 nam...', 'CV_NguyenVanA_Backend.pdf', '/uploads/sample_cv_2.pdf', 'reviewing');
