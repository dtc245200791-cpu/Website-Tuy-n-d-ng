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
| **Commit 2** | Tích hợp hệ thống giám sát Prometheus + Grafana (Container, Web App, MySQL Exporter) | **Hoàn thành** |
| **Commit 3** | Tích hợp hệ thống log tập trung Loki + Promtail (LogQL) và Hardening hệ thống | *Đang cập nhật* |

---

## 3. Kiến trúc Hệ thống Giám sát (Commit 2)
1. **Prometheus Server (Port 9090):**
   * Tự động thu thập (scrape) định kỳ 5s một lần các thông số hệ thống.
   * Scrape Web Application metrics qua endpoint `/metrics` (`prom-client`).
   * Scrape MySQL metrics qua `mysqld-exporter` (queries, connections, buffer pool...).
2. **Grafana Dashboard (Port 3001):**
   * Tự động cấu hình Datasource Prometheus (`provisioning/datasources`).
   * Tự động nạp Dashboard giám sát tổng thể: **Job Board System Overview - DT33** (`provisioning/dashboards`).
   * Các chỉ số hiển thị:
     * Request Rate (req/s), Latency trung bình (s), Tỷ lệ lỗi HTTP Status.
     * Số lượng tin tuyển dụng active, số lượng ứng viên nộp hồ sơ.
     * Số kết nối MySQL hiện hành, số câu truy vấn MySQL/giây (QPS).

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
  * *Tài khoản:* `jobboard_user` / `JobBoardSecure_2026!@#`
* **Prometheus Server:** [http://localhost:9090](http://localhost:9090)
* **Grafana Dashboard:** [http://localhost:3001](http://localhost:3001)
  * *Tài khoản Grafana:* `admin` / `AdminSecure_2026!@#`
