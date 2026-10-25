# ĐỀ TÀI 33: HỆ THỐNG WEBSITE TUYỂN DỤNG (JOB BOARD)
## Môn học: Triển khai và Quản trị Hệ thống Phần mềm
* **Sinh viên thực hiện:** Nguyễn Như Thành  
* **Mã số sinh viên (MSV):** DTC245200791  
* **Lớp:** CNTT K24 – Trường Đại học Công nghệ Thông tin và Truyền thông (ICTU) – Đại học Thái Nguyên  
* **Giảng viên hướng dẫn:** ThS. Vũ Văn Diện  
* **Giảng viên phản biện:** TS. Trần Văn Minh  
* **Repository GitHub:** [https://github.com/dtc245200791-cpu/Website-Tuy-n-d-ng](https://github.com/dtc245200791-cpu/Website-Tuy-n-d-ng)  
* **Tài liệu Báo cáo chi tiết chuẩn mẫu ICTU (15+ trang):** [docs/BAO_CAO_CHI_TIET_DU_AN_WEBSITE_TUYEN_DUNG_ICTU.md](docs/BAO_CAO_CHI_TIET_DU_AN_WEBSITE_TUYEN_DUNG_ICTU.md)  
* **Bản Word tải về (.docx):** [docs/BAO_CAO_CHI_TIET_DU_AN_WEBSITE_TUYEN_DUNG_ICTU.docx](docs/BAO_CAO_CHI_TIET_DU_AN_WEBSITE_TUYEN_DUNG_ICTU.docx)

---

## 1. Giới thiệu Đề tài
Website Tuyển dụng (Job Board) là nền tảng quản trị và kết nối ứng viên với các cơ hội nghề nghiệp:
* **Ứng viên:** Tìm kiếm việc làm thời gian thực theo từ khóa, ngành nghề, địa điểm; xem chi tiết lương, yêu cầu, quyền lợi; nộp hồ sơ ứng tuyển trực tuyến kèm tải lên file CV (PDF/DOCX) và thư giới thiệu.
* **Nhà tuyển dụng / Quản trị viên:** Đăng tin tuyển dụng mới; xem danh sách và cập nhật trạng thái hồ sơ ứng viên (*Chờ xem xét $\rightarrow$ Đang duyệt $\rightarrow$ Phỏng vấn $\rightarrow$ Trúng tuyển $\rightarrow$ Từ chối*); xem và tải về file CV của ứng viên.
* **Hạ tầng quản trị hệ thống:** Toàn bộ dịch vụ được đóng gói và vận hành tự động bằng Docker Compose bao gồm: Node.js Express, MySQL 8.0, phpMyAdmin, Nginx Reverse Proxy (HTTPS SSL, Security Headers), Prometheus, Grafana, Loki, Promtail và các giải pháp Hardening bảo mật.

---

## 2. Tiến độ triển khai (03 Milestone Commits theo yêu cầu Đề tài)

Repository tuân thủ chặt chẽ yêu cầu phân chia 3 commit mốc của giảng viên:

| Mốc Commit | SHA Commit | Nội dung thực hiện | Trạng thái |
|:---:|:---:|---|:---:|
| **Commit 1** | `2c7db74` | `feat(step1): Deploy Job Board web application with MySQL, phpMyAdmin and Nginx reverse proxy (HTTPS & security headers)` | **ĐẠT** |
| **Commit 2** | `d380a73` | `feat(step2): Integrate Prometheus and Grafana monitoring for containers, web app and MySQL database` | **ĐẠT** |
| **Commit 3** | Latest | `feat(step3): Implement Loki and Promtail centralized logging with LogQL and system hardening` | **ĐẠT** |

---

## 3. Kiến trúc Cụm Dịch vụ Docker Compose

Hệ thống bao gồm **8 container dịch vụ** hoạt động đồng bộ:

```text
[Internet/Clients]
       │
       ▼ (Ports 80, 443)
┌─────────────────────────────────────────────────────────────┐
│ 1. Nginx Reverse Proxy (SSL Termination + Security Headers) │
└──────────────────────┬──────────────────────────────────────┘
                       │
       ┌───────────────┴───────────────┐
       ▼ (Internal: 3000)              ▼ (Port: 8080)
┌──────────────────────────────┐ ┌───────────────────────────┐
│ 2. Web App (Node.js Express) │ │ 3. phpMyAdmin             │
│    - Non-root user (node)    │ │    - Database Admin Tool  │
└──────────────┬───────────────┘ └─────────────┬─────────────┘
               │ (backend_net - internal)      │
               ▼                               ▼
┌────────────────────────────────────────────────────────────┐
│ 4. MySQL 8.0 Database (Tự động migrate tables & seed data) │
└──────────────────────────────┬─────────────────────────────┘
                               │
               ┌───────────────┴───────────────┐
               ▼ (Port: 9104)                  ▼
┌──────────────────────────────┐ ┌───────────────────────────┐
│ 5. MySQL Exporter            │ │ 6. Prometheus (Port 9090) │
│    - Scrape DB Metrics       │ │    - Scrape App & DB      │
└──────────────┬───────────────┘ └─────────────┬─────────────┘
               │                               │
               └───────────────┬───────────────┘
                               ▼
┌────────────────────────────────────────────────────────────┐
│ 7. Grafana Dashboard (Port 3001 - Tự nạp Datasource & UI)  │
└────────────────────────────────────────────────────────────┘
                               ▲
                               │ (Truy vấn LogQL)
┌──────────────────────────────┴─────────────────────────────┐
│ 8. Loki (Port 3100)  ◄───  Promtail Log Shipper (Thu gom)  │
└────────────────────────────────────────────────────────────┘
```

---

## 4. Danh sách Địa chỉ Truy cập và Tài khoản Mặc định

| Dịch vụ | URL Truy cập | Tài khoản / Mật khẩu |
|:---|:---|:---|
| **Website Tuyển dụng (HTTP)** | [http://localhost](http://localhost) | Khách / Ứng viên |
| **Website Tuyển dụng (HTTPS)** | [https://localhost](https://localhost) | Tự động mã hóa TLS |
| **Quản trị Tuyển dụng & CV** | [http://localhost/admin.html](http://localhost/admin.html) | Quản trị viên nhân sự |
| **Đăng tin Tuyển dụng mới** | [http://localhost/post-job.html](http://localhost/post-job.html) | Nhà tuyển dụng |
| **Quản trị CSDL (phpMyAdmin)** | [http://localhost:8080](http://localhost:8080) | `jobboard_user` / `JobBoardSecure_2026!@#` |
| **Prometheus Metrics Engine** | [http://localhost:9090](http://localhost:9090) | Quản trị viên hệ thống |
| **Grafana Dashboard** | [http://localhost:3001](http://localhost:3001) | `admin` / `AdminSecure_2026!@#` |
| **Endpoint Sức khỏe (Health)** | [http://localhost/health](http://localhost/health) | Trạng thái container |
| **Endpoint Metrics ứng dụng** | [http://localhost/metrics](http://localhost/metrics) | prom-client xuất số liệu |

---

## 5. Truy vấn Nhật ký Hệ thống bằng LogQL (Loki + Promtail)

Truy cập Grafana $\rightarrow$ **Explore** $\rightarrow$ chọn Datasource **Loki** để chạy các câu truy vấn sau:

1. **Truy vấn các dòng log thông báo lỗi trong ứng dụng:**
   ```logql
   {job="app-logs"} |= "error"
   ```
2. **Truy vấn các HTTP request trả về lỗi từ Nginx (Mã trạng thái $\ge$ 400):**
   ```logql
   {job="nginx-logs"} | json | status >= 400
   ```
3. **Đo lường tần suất phát sinh dòng log theo thời gian thực (Log rate per minute):**
   ```logql
   rate({job="app-logs"}[1m])
   ```
4. **Theo dõi sự kiện ứng viên nộp hồ sơ CV thành công:**
   ```logql
   {job="app-logs"} |= "Ung vien nop CV"
   ```

---

## 6. Biện pháp Hardening Bảo mật Hệ thống đã Áp dụng

1. **Non-root Container:** Web App chạy dưới người dùng `node` (UID: 1000), loại bỏ hoàn toàn đặc quyền `root`.
2. **Network Isolation:** Phân chia 3 mạng Docker (`frontend_net`, `backend_net`, `monitoring_net`). Trong đó `backend_net` có thuộc tính `internal: true`, cô lập cổng 3306 của MySQL khỏi mạng ngoài.
3. **Giới hạn tài nguyên (Resource Limits):** Tất cả container đều được gán định mức `cpus` và `memory` trần để chống tấn công DoS làm treo máy chủ host.
4. **Security Headers Nginx:** Tích hợp `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, `Content-Security-Policy` và tắt hiển thị phiên bản `server_tokens off`.
5. **Mật khẩu phức tạp & Biến môi trường:** Toàn bộ thông tin nhạy cảm được cấu hình thông qua `.env` với mật khẩu mạnh trên 16 ký tự.

---

## 7. Hướng dẫn Khởi động và Vận hành

### Khởi động hệ thống:
```bash
docker compose up -d --build
```

### Kiểm tra trạng thái các container:
```bash
docker compose ps
```

### Tắt hệ thống:
```bash
docker compose down
```
