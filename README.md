# ĐỀ TÀI 33: HỆ THỐNG WEBSITE TUYỂN DỤNG (JOB BOARD)
## Môn học: Triển khai và Quản trị Hệ thống Phần mềm
**Sinh viên thực hiện:** Nguyễn Như Thành  
**Mã số sinh viên:** DTC245200791  
**Lớp:** K24 - Đại học Kỹ thuật Công nghiệp (ICTU)  
**Repository GitHub:** [https://github.com/dtc245200791-cpu/Website-Tuy-n-d-ng](https://github.com/dtc245200791-cpu/Website-Tuy-n-d-ng)

---

## 1. Giới thiệu Đề tài
Website Tuyển dụng (Job Board) là nền tảng kết nối ứng viên và doanh nghiệp:
* **Ứng viên:** Tìm kiếm việc làm theo ngành nghề, địa điểm, từ khóa; xem chi tiết yêu cầu, chế độ đãi ngộ; nộp hồ sơ ứng tuyển (CV) trực tuyến kèm thư giới thiệu.
* **Doanh nghiệp / Nhà tuyển dụng:** Đăng tin tuyển dụng mới, quản lý trạng thái tin (mở/đóng), duyệt danh sách hồ sơ ứng viên (chờ duyệt, phỏng vấn, trúng tuyển, từ chối), tải về CV ứng viên.
* **Hạ tầng quản trị:** Triển khai hoàn toàn bằng Docker Compose với MySQL 8.0, phpMyAdmin, Nginx Reverse Proxy (HTTPS tự ký, Security Headers), Prometheus, Grafana, Loki và Promtail.

---

## 2. Tiến độ triển khai (Milestone Commits)

| Mốc Commit | Nội dung thực hiện | Trạng thái |
|:---:|---|:---:|
| **Commit 1** | Triển khai Ứng dụng Web Job Board, MySQL 8.0, phpMyAdmin, Nginx Reverse Proxy (HTTPS tự ký + Security Headers) | **Hoàn thành** |
| **Commit 2** | Tích hợp hệ thống giám sát Prometheus + Grafana (Container, Web App, MySQL) | *Đang cập nhật* |
| **Commit 3** | Tích hợp hệ thống log tập trung Loki + Promtail (LogQL) và Hardening hệ thống | *Đang cập nhật* |

---

## 3. Kiến trúc hệ thống (Commit 1)
* **Web Application:** Node.js (Express), Bootstrap/Custom UI, Multer upload CV, tự động migrate & seed database.
* **Database:** MySQL 8.0 lưu trữ thông tin công ty, danh mục, tin tuyển dụng và hồ sơ ứng tuyển.
* **Quản trị Database:** phpMyAdmin chạy ở cổng 8080.
* **Reverse Proxy:** Nginx 1.25 Alpine hỗ trợ HTTP (cổng 80) và HTTPS (cổng 443 với chứng chỉ SSL tự ký), cấu hình đầy đủ các HTTP Security Headers (X-Frame-Options, X-Content-Type-Options, CSP, HSTS...).

---

## 4. Hướng dẫn Khởi chạy Hệ thống

### Yêu cầu:
* Đã cài đặt Docker & Docker Compose trên máy tính.

### Các bước khởi động:
```bash
# 1. Clone mã nguồn
git clone https://github.com/dtc245200791-cpu/Website-Tuy-n-d-ng.git
cd Website-Tuy-n-d-ng

# 2. Khởi động toàn bộ dịch vụ bằng Docker Compose
docker compose up -d --build
```

### Địa chỉ truy cập các dịch vụ:
* **Website Tuyển dụng (HTTP):** [http://localhost](http://localhost)
* **Website Tuyển dụng (HTTPS):** [https://localhost](https://localhost)
* **Quản trị CSDL (phpMyAdmin):** [http://localhost:8080](http://localhost:8080)
  * *Tên đăng nhập:* `jobboard_user` (hoặc `root`)
  * *Mật khẩu:* `JobBoardSecure_2026!@#` (hoặc `RootAdminSecure_2026!@#`)
