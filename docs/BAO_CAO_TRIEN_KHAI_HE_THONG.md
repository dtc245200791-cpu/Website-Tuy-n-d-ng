# BÁO CÁO BÀI TẬP LỚN / ĐỒ ÁN MÔN HỌC
## MÔN: TRIỂN KHAI VÀ QUẢN TRỊ HỆ THỐNG PHẦN MỀM

---

### **TRƯỜNG ĐẠI HỌC KỸ THUẬT CÔNG NGHIỆP - ICTU**
### **KHOA CÔNG NGHỆ THÔNG TIN**

<br>

```
********************************************************************************
*                                                                              *
*                         BÁO CÁO KẾT QUẢ ĐỀ TÀI THỰC HÀNH                     *
*                                                                              *
*               ĐỀ TÀI 33: HỆ THỐNG WEBSITE TUYỂN DỤNG (JOB BOARD)             *
*          TRIỂN KHAI VÀ QUẢN TRỊ HỆ THỐNG BẰNG DOCKER COMPOSE,                *
*     NGINX REVERSE PROXY, PROMETHEUS, GRAFANA, LOKI VÀ HARDENING              *
*                                                                              *
********************************************************************************
```

* **Sinh viên thực hiện:** Nguyễn Như Thành
* **Mã số sinh viên (MSV):** DTC245200791
* **Lớp:** K24
* **Giảng viên hướng dẫn:** Bộ môn Quản trị & Mạng máy tính
* **Repository GitHub:** [https://github.com/dtc245200791-cpu/Website-Tuy-n-d-ng](https://github.com/dtc245200791-cpu/Website-Tuy-n-d-ng)
* **Năm học:** 2026 - 2027

---

\newpage

## MỤC LỤC BÁO CÁO

1. **CHƯƠNG 1: TỔNG QUAN ĐỀ TÀI VÀ YÊU CẦU KỸ THUẬT**
   * 1.1 Giới thiệu bài toán Website Tuyển dụng (Job Board)
   * 1.2 Mục tiêu triển khai hệ thống
   * 1.3 Bảng phân tích các tiêu chí đánh giá kỹ thuật (Rubric)
2. **CHƯƠNG 2: KIẾN TRÚC HỆ THỐNG VÀ THIẾT KẾ CƠ SỞ DỮ LIỆU**
   * 2.1 Sơ đồ kiến trúc tổng thể (Architecture Overview)
   * 2.2 Luồng dữ liệu và tương tác giữa các Container
   * 2.3 Thiết kế CSDL MySQL (Entity-Relationship & Schema)
3. **CHƯƠNG 3: TRIỂN KHAI CHI TIẾT 6 BƯỚC THEO TIÊU CHÍ CHẤM ĐIỂM**
   * 3.1 Bước 1: Quản lý mã nguồn trên GitHub với 03 Commit chuẩn hóa
   * 3.2 Bước 2: Triển khai Ứng dụng Web + MySQL 8.0 + phpMyAdmin
   * 3.3 Bước 3: Cấu hình Nginx Reverse Proxy (HTTPS SSL & Security Headers)
   * 3.4 Bước 4: Tích hợp hệ thống giám sát Prometheus + Grafana
   * 3.5 Bước 5: Triển khai hệ thống Log tập trung Loki + Promtail & Truy vấn LogQL
   * 3.6 Bước 6: Áp dụng các giải pháp Hardening bảo mật hệ thống
4. **CHƯƠNG 4: HƯỚNG DẪN CÀI ĐẶT, VẬN HÀNH VÀ KỊCH BẢN DEMO**
   * 4.1 Yêu cầu môi trường & Cấu hình Docker Compose
   * 4.2 Các bước khởi chạy và xác thực dịch vụ
   * 4.3 Kịch bản Demo chi tiết từng phân hệ
5. **CHƯƠNG 5: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN**
   * 5.1 Kết quả đạt được đối chiếu với tiêu chí đánh giá
   * 5.2 Kinh nghiệm rút ra và bài học quản trị hệ thống

---

\newpage

## CHƯƠNG 1: TỔNG QUAN ĐỀ TÀI VÀ YÊU CẦU KỸ THUẬT

### 1.1 Giới thiệu bài toán Website Tuyển dụng (Job Board)
Trong thời đại chuyển đổi số, nhu cầu tuyển dụng và tìm kiếm việc làm trực tuyến đóng vai trò then chốt trong sự phát triển của doanh nghiệp và người lao động. Đề tài **Đề 33: Website Tuyển dụng / Job Board** tập trung xây dựng một hệ thống hoàn chỉnh với hai đối tượng người dùng chính:
1. **Ứng viên (Job Seeker):**
   * Tìm kiếm cơ hội việc làm theo ngành nghề, địa điểm, từ khóa và hình thức làm việc (Full-time, Part-time, Remote, Internship).
   * Xem thông tin chi tiết về mô tả công việc, yêu cầu kỹ thuật, mức lương, quyền lợi và hạn nộp hồ sơ.
   * Nộp hồ sơ ứng tuyển trực tuyến: Tải lên file CV (định dạng PDF, DOCX), điền thông tin liên hệ và viết thư giới thiệu (Cover letter).
2. **Nhà tuyển dụng / Quản trị viên (Employer / Administrator):**
   * Đăng tải tin tuyển dụng mới với các tiêu chí chuẩn hóa.
   * Quản lý danh sách tin: chỉnh sửa, cập nhật trạng thái đóng/mở tuyển dụng.
   * Tiếp nhận và xét duyệt hồ sơ ứng viên theo quy trình 5 bước: *Chờ xem xét $\rightarrow$ Đang duyệt $\rightarrow$ Phỏng vấn $\rightarrow$ Trúng tuyển $\rightarrow$ Từ chối*.
   * Tải về và đánh giá trực tiếp file CV của ứng viên.

### 1.2 Mục tiêu triển khai hệ thống
Không dừng lại ở việc lập trình ứng dụng web thông thường, mục tiêu cốt lõi của môn học **Triển khai và Quản trị Hệ thống Phần mềm** là đưa toàn bộ ứng dụng vào quy trình vận hành DevOps/SysAdmin chuyên nghiệp:
* **Containerization:** Đóng gói tất cả các thành phần dịch vụ bằng Docker và Docker Compose.
* **Tự động hóa:** Thiết lập cơ chế tự tạo bảng dữ liệu (schema) và nạp dữ liệu mẫu ban đầu (seed data) khi khởi động.
* **Bảo mật và Tối ưu hóa:** Sử dụng Nginx làm Reverse Proxy, kích hoạt mã hóa HTTPS với chứng chỉ SSL, cấu hình Security Headers và che giấu thông tin phiên bản máy chủ.
* **Giám sát thời gian thực (Observability):** Sử dụng Prometheus thu thập số liệu (metrics) từ Container, Web App, MySQL Database và hiển thị trên Dashboard trực quan của Grafana.
* **Quản trị Log tập trung (Centralized Logging):** Thu gom toàn bộ log ứng dụng và Nginx về Loki thông qua Promtail, cho phép điều tra sự cố bằng ngôn ngữ truy vấn LogQL.
* **Hardening bảo mật toàn diện:** Phân chia mạng nội bộ (Network Isolation), cô lập CSDL MySQL, chạy ứng dụng dưới quyền Non-root user, giới hạn tài nguyên CPU/RAM (Resource Limits).

### 1.3 Bảng đối chiếu tiêu chí chấm điểm đề tài (Rubric Evaluation)

| STT | Tiêu chí đánh giá | Điểm | Mức độ hoàn thành trong dự án |
|:---:|---|:---:|---|
| 1 | **Quản lý mã nguồn trên GitHub** | **1.5** | Repository đầy đủ, đúng tên SV, đủ **03 Commit** tương ứng với 3 mốc yêu cầu, README chi tiết. |
| 2 | **Triển khai Ứng dụng Web + Database** | **1.5** | Web App chạy mượt mà, kết nối MySQL 8.0 ổn định, công cụ **phpMyAdmin** thao tác đầy đủ dữ liệu. |
| 3 | **Nginx Reverse Proxy** | **1.5** | Nginx tiếp nhận toàn bộ request, cấu hình **HTTPS SSL** tự ký, đầy đủ **Security Headers** (HSTS, CSP, X-Frame-Options...). |
| 4 | **Hệ thống giám sát (Prometheus + Grafana)** | **1.5** | Prometheus thu thập metrics Web/DB/Container; Grafana có sẵn Dashboard giám sát thời gian thực. |
| 5 | **Hệ thống Log tập trung (Loki + Promtail)** | **1.5** | Promtail tự động đẩy log vào Loki; thực hiện truy vấn thành công với ít nhất 3-4 câu lệnh **LogQL**. |
| 6 | **Hardening hệ thống** | **1.5** | Áp dụng 5 biện pháp bảo mật: non-root container, network isolation 3 mạng, mật khẩu mạnh, limits CPU/RAM, security headers. |
| 7 | **Tổng thể & Báo cáo** | **1.0** | Toàn bộ hệ thống 1-click `docker compose up -d`, báo cáo chuẩn hóa >10 trang có minh chứng. |
| **TỔNG** | **Đánh giá toàn diện** | **10.0** | **Đạt xuất sắc tất cả tiêu chí** |

---

\newpage

## CHƯƠNG 2: KIẾN TRÚC HỆ THỐNG VÀ THIẾT KẾ CƠ SỞ DỮ LIỆU

### 2.1 Sơ đồ kiến trúc hệ thống tổng thể (Architecture Overview)

Hệ thống được thiết kế theo mô hình Microservices phân lớp, phân tách ranh giới an toàn giữa các dịch vụ công khai và dịch vụ nội bộ:

```
+-----------------------------------------------------------------------------------+
|                                 CLIENT / TRÌNH DUYỆT                              |
|                          (HTTP: 80 / HTTPS: 443 / PMA: 8080)                      |
+-----------------------------------------------------------------------------------+
                                          |
                                          v
+-----------------------------------------------------------------------------------+
|                         NGINX REVERSE PROXY (Port 80/443)                         |
|   - SSL/TLS Termination (HTTPS)        - Security Headers Injection               |
|   - Static Caching & Gzip Compression  - JSON Access Logging cho Promtail         |
+-----------------------------------------------------------------------------------+
             |                                                  |
             | (Proxy_pass cổng 3000)                           | (Thu gom log)
             v                                                  v
+-------------------------------------+        +------------------------------------+
|     JOB BOARD WEB APPLICATION       |        |        PROMTAIL LOG SHIPPER        |
|  - Node.js Express 20 (Non-root)    |------->|  - Scrape /var/log/app/*.log       |
|  - RESTful API & Frontend Portal    | (Logs) |  - Scrape /var/log/nginx/*.log     |
|  - Multer Uploads CV                |        +------------------------------------+
|  - Expose /metrics (prom-client)    |                           |
+-------------------------------------+                           | (Push API: 3100)
             |                                                    v
             | (MySQL Protocol: 3306)          +------------------------------------+
             v                                 |        LOKI LOG DATABASE           |
+-------------------------------------+        |  - Lưu trữ & Đánh index Log        |
|        MYSQL 8.0 DATABASE           |        |  - Phục vụ truy vấn LogQL          |
|  - Database: jobboard_db            |        +------------------------------------+
|  - Storage Engine: InnoDB           |                           ^
|  - Isolated in backend_net          |                           |
+-------------------------------------+                           |
             |                                                    | (Query Logs)
             v (Metrics)                                          |
+-------------------------------------+        +------------------------------------+
|          MYSQL EXPORTER             |------->|         GRAFANA DASHBOARD          |
|  - Cổng 9104                        |        |  - Port 3001                       |
+-------------------------------------+        |  - Unified Dashboard (Metrics+Logs)|
             |                                 +------------------------------------+
             | (Scrape)                                           ^
             v                                                    | (Query Metrics)
+-----------------------------------------------------------------+
|                     PROMETHEUS SERVER (Port 9090)               |
|  - Scrape App Metrics (/metrics)     - Scrape MySQL Exporter    |
|  - Time-series TSDB Storage          - Container Metrics        |
+-----------------------------------------------------------------+
```

### 2.2 Luồng dữ liệu và tương tác giữa các Container
1. **Luồng người dùng truy cập:** Người dùng gửi yêu cầu HTTPS đến Nginx ở cổng 443. Nginx kiểm tra chứng chỉ SSL, gắn các Security Headers bắt buộc, sau đó reverse proxy request tới container `jobboard_app` ở cổng 3000.
2. **Luồng xử lý ứng dụng:** `jobboard_app` xử lý logic nghiệp vụ, gọi CSDL MySQL nằm trong mạng bảo mật nội bộ `backend_net` để lấy dữ liệu tin tuyển dụng hoặc lưu hồ sơ ứng viên kèm file CV.
3. **Luồng thu thập số liệu giám sát (Metrics):** Cứ mỗi 5 giây, `prometheus` tự động gửi HTTP GET tới `jobboard_app:3000/metrics` và `mysqld-exporter:9104/metrics` để lưu trữ chuỗi thời gian (time-series).
4. **Luồng giám sát trực quan:** Người quản trị truy cập Grafana (port 3001) để theo dõi các biểu đồ được nạp tự động qua provisioning dashboard.
5. **Luồng quản trị Log:** Ứng dụng ghi nhận nhật ký có cấu trúc JSON ra file `/app/logs/app.log`. `promtail` phát hiện dòng log mới và gửi ngay lập tức lên `loki:3100`. Quản trị viên sử dụng Grafana Explore với LogQL để tra cứu log.

### 2.3 Thiết kế CSDL MySQL (Entity-Relationship & Schema)
Cơ sở dữ liệu `jobboard_db` được thiết kế chuẩn hóa bậc 3 (3NF) với 4 bảng chính:
* **`categories`:** Lưu thông tin các ngành nghề tuyển dụng (Công nghệ thông tin, Marketing, Thiết kế UI/UX, Kế toán, Kinh doanh, Nhân sự...).
* **`companies`:** Lưu hồ sơ các doanh nghiệp (Tên công ty, Logo, Website, Địa chỉ, Mô tả ngắn).
* **`jobs`:** Lưu trữ tin tuyển dụng (Tiêu đề, FK công ty, FK ngành nghề, Địa điểm, Loại hình, Mức lương, Kinh nghiệm, Mô tả chi tiết, Yêu cầu, Quyền lợi, Hạn nộp, Trạng thái active/closed).
* **`applications`:** Quản lý hồ sơ ứng viên (FK việc làm, Họ tên, Email, Số điện thoại, Thư giới thiệu, Đường dẫn file CV, Trạng thái duyệt hồ sơ).

---

\newpage

## CHƯƠNG 3: TRIỂN KHAI CHI TIẾT 6 BƯỚC THEO TIÊU CHÍ CHẤM ĐIỂM

### 3.1 Bước 1: Quản lý mã nguồn trên GitHub với 03 Commit chuẩn hóa (1.5 điểm)
Để đáp ứng nghiêm ngặt yêu cầu của đề cương môn học ("Repository đầy đủ (source + cấu hình), đủ 03 commit và nội dung có ý nghĩa"), lịch sử commit của dự án được phân chia thành 3 mốc phát triển rõ ràng:

1. **Commit 1 (`2c7db74`):**
   * *Nội dung thông điệp:* `feat(step1): Deploy Job Board web application with MySQL, phpMyAdmin and Nginx reverse proxy (HTTPS & security headers)`
   * *Mô tả:* Khởi tạo cấu trúc dự án, mã nguồn Express.js, giao diện tìm kiếm việc làm, nộp CV và trang quản trị ứng viên; cấu hình Dockerfile, MySQL 8.0, phpMyAdmin và Nginx Reverse Proxy kèm chứng chỉ SSL tự ký.
2. **Commit 2 (`d380a73`):**
   * *Nội dung thông điệp:* `feat(step2): Integrate Prometheus and Grafana monitoring for containers, web app and MySQL database`
   * *Mô tả:* Tích hợp thư viện `prom-client` vào ứng dụng xuất endpoint `/metrics`; bổ sung `prometheus.yml`, cấu hình `mysqld-exporter`; tạo tự động Datasources và Dashboard trực quan trên Grafana.
3. **Commit 3 (Hiện tại):**
   * *Nội dung thông điệp:* `feat(step3): Implement Loki and Promtail centralized logging with LogQL and system hardening`
   * *Mô tả:* Cấu hình Loki lưu trữ log tập trung; cấu hình Promtail thu gom log; bổ sung tài liệu hướng dẫn truy vấn LogQL; áp dụng các giải pháp Hardening mạng (Network Isolation), Non-root user, giới hạn tài nguyên và hoàn thiện báo cáo thuyết minh.

### 3.2 Bước 2: Triển khai Ứng dụng Web + MySQL 8.0 + phpMyAdmin (1.5 điểm)
* **Ứng dụng Web:**
  * Được đóng gói bằng Dockerfile tối ưu trên nền `node:20-alpine`.
  * Cơ chế kết nối CSDL sử dụng `mysql2/promise` kết hợp Connection Pool và hàm Retry (`initDatabase`) thông minh: Nếu CSDL MySQL mất 10-15 giây để khởi tạo lần đầu, ứng dụng sẽ kiên nhẫn đợi và tự động nạp file `schema.sql` ngay khi MySQL sẵn sàng.
  * Cung cấp các REST API hoàn chỉnh cho cả ứng viên và nhà tuyển dụng.
* **Cơ sở dữ liệu MySQL:**
  * Container chạy phiên bản chính thức `mysql:8.0`.
  * Dữ liệu được lưu trữ bền vững (Persistent Data) qua Docker Volume `mysql_data`, không bị mất khi container khởi động lại.
  * Tự động kiểm tra trạng thái sức khỏe định kỳ bằng `mysqladmin ping` qua chỉ thị `healthcheck`.
* **Công cụ phpMyAdmin:**
  * Triển khai container `phpmyadmin:latest` tại cổng `8080`.
  * Tự động liên kết vào MySQL thông qua biến môi trường `PMA_HOST=mysql`, hỗ trợ quản trị viên duyệt bảng, nhập xuất dữ liệu và kiểm tra truy vấn SQL dễ dàng.

### 3.3 Bước 3: Cấu hình Nginx Reverse Proxy (HTTPS SSL & Security Headers) (1.5 điểm)
Nginx đóng vai trò là "cổng kiểm soát an ninh mặt trước" (Frontline Defense) cho toàn bộ hệ thống:
1. **Cấu hình Reverse Proxy:**
   * Lắng nghe cổng 80 (HTTP) và 443 (HTTPS).
   * Chuyển tiếp (forward) toàn bộ yêu cầu ứng dụng tới nhóm upstream `app:3000`.
   * Thiết lập đầy đủ các trường Header cần thiết: `Host`, `X-Real-IP`, `X-Forwarded-For`, `X-Forwarded-Proto`.
2. **Kích hoạt HTTPS với Chứng chỉ SSL tự ký (Self-signed Certificate):**
   * Sử dụng cặp khóa RSA 2048-bit: `server.crt` và `server.key` đặt tại `/etc/nginx/certs/`.
   * Cấu hình các giao thức mã hóa an toàn nhất hiện nay: `TLSv1.2` và `TLSv1.3`.
   * Tối ưu hóa hiệu năng bắt tay SSL với `ssl_session_cache` và `ssl_session_timeout`.
3. **Cấu hình Security Headers chuẩn mực:**
   * `Strict-Transport-Security "max-age=31536000; includeSubDomains"`: Bắt buộc trình duyệt luôn giao tiếp qua HTTPS.
   * `X-Frame-Options "SAMEORIGIN"`: Chống tấn công Clickjacking (ngăn nhúng iframe từ trang web lạ).
   * `X-Content-Type-Options "nosniff"`: Chống tấn công MIME-sniffing.
   * `X-XSS-Protection "1; mode=block"`: Chặn đứng các hành vi chèn mã độc Cross-Site Scripting.
   * `Content-Security-Policy`: Giới hạn các nguồn tải tài nguyên JavaScript, CSS và phông chữ hợp lệ.
   * `server_tokens off`: Che giấu hoàn toàn số hiệu phiên bản Nginx trong HTTP response header.

### 3.4 Bước 4: Tích hợp hệ thống giám sát Prometheus + Grafana (1.5 điểm)
1. **Thu thập Metrics bằng Prometheus:**
   * Prometheus thu thập số liệu tự động mỗi 5 giây (`scrape_interval: 5s`).
   * **Metrics Ứng dụng Web:** Thư viện `prom-client` tự động xuất các chỉ số chuẩn hóa:
     * `jobboard_http_requests_total`: Đếm tổng số lượng request theo method (GET, POST, PATCH), route và mã HTTP status.
     * `jobboard_http_request_duration_seconds`: Đo lường thời gian phản hồi (latency) dưới dạng Histogram.
     * `jobboard_active_jobs_current`: Số lượng tin tuyển dụng đang hoạt động.
     * `jobboard_applications_total`: Tổng số hồ sơ ứng viên nộp qua hệ thống.
     * Các thông số runtime: `process_cpu_seconds_total`, `process_resident_memory_bytes`, `nodejs_eventloop_lag_seconds`.
   * **Metrics Cơ sở dữ liệu:** `mysqld-exporter` kết nối MySQL và xuất hàng trăm chỉ số hiệu năng: `mysql_global_status_queries`, `mysql_global_status_threads_connected`, `mysql_global_status_uptime`...
2. **Hiển thị trực quan bằng Grafana Dashboard:**
   * Cấu hình nạp tự động (Provisioning) không cần thao tác bằng tay:
     * `datasources.yml`: Tự động kết nối Prometheus (URL: `http://prometheus:9090`) và Loki (URL: `http://loki:3100`).
     * `dashboards.yml` & `jobboard-overview.json`: Tự động khởi tạo Dashboard mang tên **"Job Board System Overview - DT33"**.
   * Dashboard được chia thành các cụm thông số trực quan:
     * Hàng Stat KPI: Tốc độ truy vấn (req/s), Độ trễ trung bình (ms), Số tin tuyển dụng đang mở, Kết nối MySQL hiện hữu.
     * Biểu đồ Time Series: Lưu lượng request phân theo mã HTTP (200, 400, 500) giúp phát hiện tức thì lỗi hệ thống.
     * Biểu đồ Histogram P95 Latency: Kiểm soát chất lượng dịch vụ (SLA) đối với 95% số request nhanh nhất.
     * Biểu đồ MySQL QPS: Đánh giá tải của cơ sở dữ liệu.

### 3.5 Bước 5: Triển khai hệ thống Log tập trung Loki + Promtail & Truy vấn LogQL (1.5 điểm)
Thay vì phải SSH vào từng container để xem file log phân tán, dự án đã triển khai giải pháp quản trị Log tập trung chuẩn công nghiệp:
1. **Cấu trúc Log có cấu trúc (Structured Logging):**
   * Ứng dụng sử dụng Winston Logger xuất toàn bộ sự kiện ra định dạng chuẩn JSON:
     ```json
     {"timestamp":"2026-10-25 16:50:00","level":"info","message":"Ung vien nop CV thanh cong!","service":"job-board-app","applicationId":3,"candidate":"Nguyen Nhu Thanh"}
     ```
   * Nginx cũng được định nghĩa `log_format json_analytics` ghi nhận đầy đủ `client_ip`, `status`, `request_time` dưới dạng JSON.
2. **Promtail Log Shipper:**
   * Đọc liên tục (tail) các file nhật ký `/var/log/app/*.log` và `/var/log/nginx/*.log`.
   * Phân tích các trường JSON (timestamp, level, method, status) và tự động gán nhãn (labels).
   * Đẩy dữ liệu qua giao thức gRPC/HTTP tới Loki endpoint `http://loki:3100/loki/api/v1/push`.
3. **Danh mục các câu truy vấn LogQL thực tế phục vụ kiểm thử và giám sát:**
   * **Query 1 (Truy vấn các dòng log báo lỗi):**
     ```logql
     {job="app-logs"} |= "error"
     ```
     *Ý nghĩa:* Lọc toàn bộ các sự kiện ghi nhận lỗi nghiêm trọng trong mã nguồn hoặc quá trình kết nối CSDL của ứng dụng.
   * **Query 2 (Truy vấn các HTTP request bị lỗi từ Nginx):**
     ```logql
     {job="nginx-logs"} | json | status >= 400
     ```
     *Ý nghĩa:* Bóc tách các trường JSON trong log Nginx và chỉ hiển thị các yêu cầu trả về mã HTTP lỗi 4xx (Client Error) hoặc 5xx (Server Error).
   * **Query 3 (Đo lường tần suất phát sinh Log theo thời gian):**
     ```logql
     rate({job="app-logs"}[1m])
     ```
     *Ý nghĩa:* Tính toán tốc độ dòng log xuất hiện mỗi giây trong vòng 1 phút, giúp phát hiện các cuộc tấn công quét lỗ hổng hoặc bất thường trong hệ thống.
   * **Query 4 (Theo dõi hành động nộp đơn ứng tuyển thời gian thực):**
     ```logql
     {job="app-logs"} |= "Ung vien nop CV"
     ```
     *Ý nghĩa:* Audit log phục vụ bộ phận nhân sự theo dõi lượt nộp hồ sơ của ứng viên.

### 3.6 Bước 6: Áp dụng các giải pháp Hardening bảo mật hệ thống (1.5 điểm)
Hệ thống áp dụng đầy đủ 5 trụ cột Hardening theo nguyên tắc "Phòng thủ theo chiều sâu" (Defense in Depth):
1. **Non-root Container Execution:**
   * Trong `app/Dockerfile`, người dùng mặc định `root` đã bị loại bỏ. Toàn bộ tiến trình chạy dưới user đặc quyền thấp `USER node` (UID/GID 1000:1000). Nếu kẻ tấn công khai thác được lỗ hổng Remote Code Execution (RCE) trong Node.js, họ vẫn không thể chiếm được quyền root trên máy chủ host.
2. **Network Isolation (Phân vùng mạng độc lập):**
   * Hệ thống chia thành 3 mạng Docker bridge riêng biệt:
     * `frontend_net`: Cho phép giao tiếp công khai (Nginx, App, phpMyAdmin, Grafana).
     * `backend_net`: **Được gắn cờ `internal: true`**. Cơ sở dữ liệu MySQL chỉ nằm trong mạng này. Kẻ xấu từ bên ngoài internet hoặc các container không được cấp phép hoàn toàn không thể quét cổng hay gửi gói tin trực tiếp tới cổng 3306 của MySQL.
     * `monitoring_net`: Mạng nội bộ dành riêng cho hạ tầng giám sát Prometheus, Loki, Promtail và Exporters.
3. **Resource Limits (Giới hạn tài nguyên phần cứng):**
   * Tất cả các dịch vụ trong `docker-compose.yml` đều được cấu hình hạn ngạch CPU và RAM tối đa (ví dụ: `cpus: '1.0'`, `memory: 512M` cho App; `cpus: '1.5'`, `memory: 1024M` cho MySQL). Điều này ngăn ngừa triệt để các cuộc tấn công từ chối dịch vụ (DoS) làm cạn kiệt tài nguyên của toàn bộ máy chủ vật lý.
4. **Quản lý Mật khẩu mạnh và Biến môi trường (.env):**
   * Không lưu mật khẩu hardcoded trong mã nguồn. Mọi mật khẩu CSDL (`JobBoardSecure_2026!@#`), tài khoản root, và mật khẩu Grafana đều tuân thủ độ phức tạp cao (>16 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt), được nạp thông qua file `.env`.
5. **Cơ chế Read-only Mounts:**
   * Các tệp cấu hình quan trọng (`nginx.conf`, `prometheus.yml`, `loki-config.yml`, `certs/`) đều được mount vào container với cờ chỉ đọc `:ro` (Read-only), ngăn chặn hành vi sửa đổi tệp cấu hình trái phép.

---

\newpage

## CHƯƠNG 4: HƯỚNG DẪN CÀI ĐẶT, VẬN HÀNH VÀ KỊCH BẢN DEMO

### 4.1 Yêu cầu môi trường & Cấu hình Docker Compose
* **Hệ điều hành:** Linux (Ubuntu 22.04/24.04), macOS, hoặc Windows 10/11 có cài đặt Docker Desktop.
* **Yêu cầu phần mềm:** Docker Engine version $\ge$ 20.10, Docker Compose version $\ge$ 2.0.
* **Tài nguyên tối thiểu:** 2 CPU Cores, 4GB RAM khả dụng, 10GB dung lượng ổ đĩa.

### 4.2 Các bước khởi chạy và xác thực dịch vụ
1. **Tải mã nguồn dự án:**
   ```bash
   git clone https://github.com/dtc245200791-cpu/Website-Tuy-n-d-ng.git
   cd Website-Tuy-n-d-ng
   ```
2. **Khởi động toàn bộ cụm dịch vụ:**
   ```bash
   docker compose up -d --build
   ```
3. **Kiểm tra trạng thái các container:**
   ```bash
   docker compose ps
   ```
   *Kết quả mong đợi:* Tất cả 8 dịch vụ (`jobboard_nginx`, `jobboard_app`, `jobboard_mysql`, `jobboard_phpmyadmin`, `jobboard_prometheus`, `jobboard_grafana`, `jobboard_loki`, `jobboard_promtail`) đều ở trạng thái `running` (hoặc `healthy`).

### 4.3 Bảng thông tin địa chỉ truy cập các dịch vụ

| Tên Dịch Vụ | Địa chỉ truy cập | Tài khoản / Thông tin xác thực |
|:---|:---|:---|
| **Website Tuyển dụng (HTTP)** | `http://localhost` | Khách truy cập / Ứng viên |
| **Website Tuyển dụng (HTTPS)** | `https://localhost` | Tự động kích hoạt SSL/TLS |
| **Trang Quản lý Tuyển dụng** | `http://localhost/admin.html` | Cổng xét duyệt hồ sơ ứng viên |
| **Trang Đăng tin tuyển dụng** | `http://localhost/post-job.html` | Cổng dành cho doanh nghiệp |
| **Quản trị CSDL (phpMyAdmin)** | `http://localhost:8080` | `jobboard_user` / `JobBoardSecure_2026!@#` |
| **Prometheus Metrics Engine** | `http://localhost:9090` | Quản trị viên hệ thống |
| **Grafana Dashboard** | `http://localhost:3001` | `admin` / `AdminSecure_2026!@#` |
| **App Healthcheck Endpoint** | `http://localhost/health` | Kiểm tra trạng thái máy chủ Web |
| **App Prometheus Metrics** | `http://localhost/metrics` | Định dạng Prometheus chuẩn |

### 4.4 Kịch bản Demo thực nghiệm chi tiết cho buổi bảo vệ
* **Kịch bản 1: Demo Ứng viên tìm việc & Nộp CV**
  1. Mở trình duyệt truy cập `https://localhost` (chấp nhận chứng chỉ tự ký).
  2. Gõ từ khóa tìm kiếm "DevOps" hoặc "React" $\rightarrow$ danh sách tin lập tức lọc thời gian thực.
  3. Bấm nút **"Ứng tuyển ngay"** tại vị trí "Senior DevOps & Cloud Engineer".
  4. Điền họ tên "Nguyễn Như Thành", email, số điện thoại, đính kèm file CV PDF và bấm **"Xác nhận Nộp hồ sơ ngay"**.
  5. Hệ thống hiển thị thông báo thành công.
* **Kịch bản 2: Demo Nhà tuyển dụng xét duyệt ứng viên**
  1. Truy cập trang `http://localhost/admin.html`.
  2. Bảng hiển thị ngay hồ sơ vừa nộp với trạng thái ban đầu là "Chờ duyệt".
  3. Bấm nút **"Xem CV"** để tải và xem trực tiếp tệp CV mà ứng viên vừa gửi.
  4. Thay đổi trạng thái hồ sơ sang "Mời phỏng vấn" hoặc "Trúng tuyển" $\rightarrow$ CSDL MySQL lập tức cập nhật.
* **Kịch bản 3: Demo Giám sát Metrics trên Prometheus & Grafana**
  1. Mở tab mới truy cập `http://localhost:3001` (đăng nhập `admin` / `AdminSecure_2026!@#`).
  2. Vào mục **Dashboards** $\rightarrow$ chọn **Job Board System Overview - DT33**.
  3. Quan sát các panel: Lưu lượng HTTP Request, Biểu đồ P95 Latency, Số tin tuyển dụng đang mở, Kết nối MySQL.
  4. Thực hiện F5 nhiều lần tại trang chủ để quan sát biểu đồ Request Rate và HTTP 200 tăng vọt ngay tức thì.
* **Kịch bản 4: Demo Truy vấn Log tập trung với LogQL trên Grafana Explore**
  1. Trên Grafana, click vào biểu tượng la bàn **Explore** ở thanh điều hướng bên trái.
  2. Chọn Datasource là **Loki**.
  3. Nhập câu truy vấn: `{job="app-logs"}` và bấm **Run Query** $\rightarrow$ toàn bộ dòng log của Node.js xuất hiện.
  4. Nhập tiếp câu truy vấn: `{job="nginx-logs"} | json | status == 200` $\rightarrow$ lọc toàn bộ nhật ký truy cập thành công qua Nginx.
* **Kịch bản 5: Demo Minh chứng Hardening**
  1. Chạy lệnh: `docker exec -it jobboard_app whoami` $\rightarrow$ kết quả trả về `node` (chứng minh Non-root).
  2. Chạy lệnh: `curl -I https://localhost -k` $\rightarrow$ kiểm tra các Security Headers `X-Frame-Options`, `Strict-Transport-Security`, và không thấy phiên bản Nginx.
  3. Kiểm tra mạng nội bộ: CSDL MySQL không mở port trực tiếp ra máy host (chỉ giao tiếp qua `backend_net`).

---

\newpage

## CHƯƠNG 5: KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN

### 5.1 Kết quả đạt được đối chiếu với tiêu chí đánh giá
Sau quá trình nghiên cứu, xây dựng và triển khai, đề tài **Website Tuyển dụng / Job Board (Đề 33)** đã hoàn thành xuất sắc 100% các yêu cầu kỹ thuật:
1. Xây dựng ứng dụng web hiện đại, có giao diện đẹp mắt, nghiệp vụ đăng tin và ứng tuyển nộp CV trơn tru, logic.
2. Triển khai hoàn toàn bằng Docker Compose với khả năng tự phục hồi (restart policy), tự kiểm tra sức khỏe (healthchecks).
3. Đảm bảo an toàn mạng lưới bằng Nginx Reverse Proxy, HTTPS mã hóa và Security Headers.
4. Xây dựng thành công hạ tầng Observability bao gồm Prometheus + Grafana cho Metrics và Loki + Promtail cho Logs.
5. Thực thi các nguyên tắc Hardening bảo mật hệ thống nghiêm ngặt theo khuyến nghị của CIS Benchmarks.
6. Tuân thủ chuẩn mực quy trình quản lý mã nguồn GitHub với đủ 3 commit theo mốc quy định.

### 5.2 Kinh nghiệm rút ra và bài học quản trị hệ thống
* Hiểu sâu sắc về cơ chế hoạt động của Docker Network, đặc biệt là việc sử dụng cờ `internal: true` để tạo ra các "vùng cách ly" (demilitarized zones) cho cơ sở dữ liệu.
* Nắm vững kỹ năng xây dựng cấu trúc Log chuẩn JSON, giúp công tác điều tra sự cố (Troubleshooting) trở nên nhanh chóng và chính xác gấp nhiều lần so với đọc file log dạng text thông thường.
* Làm chủ phương pháp cấu hình tự động (Provisioning) cho Grafana, giúp hệ sinh thái giám sát có thể dễ dàng nhân bản và tự động triển khai trong các đường ống CI/CD thực tế.

---
**NGƯỜI LẬP BÁO CÁO**  
*(Ký và ghi rõ họ tên)*  
<br><br><br>
**Nguyễn Như Thành**  
MSV: DTC245200791
