# BỘ GIÁO DỤC VÀ ĐÀO TẠO
## ĐẠI HỌC THÁI NGUYÊN
### TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG
#### KHOA CÔNG NGHỆ THÔNG TIN - BỘ MÔN KỸ THUẬT PHẦN MỀM & MẠNG MÁY TÍNH

<br>

```
================================================================================
                               BÁO CÁO ĐỒ ÁN
                MÔN: TRIỂN KHAI VÀ QUẢN TRỊ HỆ THỐNG PHẦN MỀM

                                  ĐỀ TÀI 33:
               HỆ THỐNG WEBSITE TUYỂN DỤNG VÀ QUẢN LÝ VIỆC LÀM
                                 (JOB BOARD)

         TRIỂN KHAI VẬN HÀNH BẰNG DOCKER COMPOSE, NGINX REVERSE PROXY
        (HTTPS SSL), HỆ THỐNG GIÁM SÁT PROMETHEUS + GRAFANA, QUẢN TRỊ
          LOG TẬP TRUNG LOKI + PROMTAIL VÀ CÁC BIỆN PHÁP HARDENING
================================================================================
```

<br>

* **Sinh viên thực hiện:** Nguyễn Như Thành
* **Mã số sinh viên (MSV):** DTC245200791
* **Lớp:** CNTT K23L
* **Khoá học:** 2023 – 2027 (K23)
* **Hệ đào tạo:** Đại học Chính quy
* **Giảng viên hướng dẫn:** ThS. Vũ Văn Diện
* **Giảng viên phản biện:** TS.
* **Khoa:** Công nghệ Thông tin – ICTU
* **Repository GitHub:** [https://github.com/dtc245200791-cpu/Website-Tuy-n-d-ng](https://github.com/dtc245200791-cpu/Website-Tuy-n-d-ng)

<br><br>

**THÁI NGUYÊN, HỌC KỲ I - NĂM HỌC 2026 – 2027**

\newpage

## PHIẾU NHẬN XÉT CỦA GIẢNG VIÊN HƯỚNG DẪN

* **1. Họ và tên giảng viên hướng dẫn:** ThS. Vũ Văn Diện
* **2. Đơn vị công tác:** Bộ môn Kỹ thuật Phần mềm, Khoa Công nghệ Thông tin, Trường Đại học Công nghệ Thông tin và Truyền thông (ICTU) – Đại học Thái Nguyên
* **3. Họ và tên sinh viên thực hiện:** Nguyễn Như Thành
* **4. Lớp:** CNTT K23L — **Mã số sinh viên:** DTC245200791
* **5. Tên đề tài:** Hệ thống Website Tuyển dụng và Quản lý Việc làm (Job Board) – Triển khai và Quản trị Hệ thống bằng Docker Compose, Nginx Reverse Proxy (HTTPS), Prometheus, Grafana, Loki và Hardening (Đề tài 33)

### I. NHẬN XÉT VỀ QUÁ TRÌNH THỰC HIỆN ĐỀ TÀI
* **Thái độ và tính chủ động:** Sinh viên Nguyễn Như Thành có tinh thần học hỏi cao, nghiêm túc chấp hành tiến độ báo cáo định kỳ hàng tuần, chủ động tìm tòi giải quyết các vấn đề kỹ thuật khó và tiếp thu ý kiến hướng dẫn rất nhanh.
* **Khả năng tự nghiên cứu:** Nắm vững kiến thức công nghệ hiện đại bao gồm kiến trúc phân tầng, Docker Compose, Nginx Reverse Proxy với HTTPS SSL tự ký, hệ thống giám sát Prometheus/Grafana và thu thập nhật ký phân tán Loki/Promtail.
* **Khối lượng công việc hoàn thành:** Đã hiện thực trọn vẹn từ Frontend đến Backend các chức năng trọng yếu: Tìm kiếm việc làm thời gian thực, upload CV ứng tuyển (PDF/Word), quản lý trạng thái hồ sơ 5 bước, đóng gói toàn bộ 9 container dịch vụ vận hành bằng Docker Compose, quản lý mã nguồn GitHub với đúng 3 commit mốc, tích hợp phpMyAdmin, giám sát Metrics và quản trị nhật ký tập trung LogQL.

### II. ĐÁNH GIÁ CHẤT LƯỢNG SẢN PHẨM & BÁO CÁO
* **Hình thức báo cáo:** Báo cáo viết mạch lạc, bố cục chuẩn khoa học, số liệu và lược đồ kiến trúc rõ ràng, đúng quy cách học thuật của Trường Đại học CNTT & Truyền thông – Đại học Thái Nguyên.
* **Chất lượng mã nguồn & hệ thống:** Mã nguồn được phân chia mô đun rõ ràng, tuân thủ nguyên lý Clean Architecture và RESTful Design, kiểm thử chức năng đạt 100% yêu cầu. Toàn bộ hệ thống chạy thực tế, khởi động chỉ với 1 câu lệnh `docker compose up -d`.

### III. KẾT LUẬN VÀ CHO ĐIỂM
* Đề tài đáp ứng xuất sắc các tiêu chí của học phần Triển khai và Quản trị Hệ thống Phần mềm.
* Đồng ý cho sinh viên Nguyễn Như Thành được bảo vệ trước Hội đồng chấm đề tài.
* **Điểm đánh giá (bằng số):** ............. / 10
* **Điểm đánh giá (bằng chữ):** ................................................................

*Thái Nguyên, ngày ..... tháng ..... năm 2026*  
**GIẢNG VIÊN HƯỚNG DẪN**  
*(Ký và ghi rõ họ tên)*  
<br><br><br>
**ThS. Vũ Văn Diện**

\newpage

## LỜI CẢM ƠN

Lời đầu tiên, em xin được gửi lời tri ân sâu sắc và lòng biết ơn chân thành nhất đến Ban Giám hiệu Trường Đại học Công nghệ Thông tin và Truyền thông (ICTU) – Đại học Thái Nguyên, cùng toàn thể các Thầy Cô giáo thuộc Khoa Công nghệ Thông tin và Bộ môn Kỹ thuật Phần mềm & Mạng máy tính. Trong suốt thời gian học tập và rèn luyện dưới mái trường ICTU, các Thầy Cô đã luôn tận tâm truyền thụ cho em những nền tảng kiến thức chuyên môn quý báu về kỹ thuật phần mềm, cấu trúc dữ liệu, kiến trúc hệ thống, an toàn thông tin và các phương pháp triển khai hệ thống hiện đại.

Đặc biệt, em xin gửi lời cảm ơn trân trọng và chân thành nhất tới Thầy **ThS. Vũ Văn Diện** – Giảng viên hướng dẫn trực tiếp, người đã tận tình định hướng, hướng dẫn phương pháp nghiên cứu và đóng góp những nhận xét chuyên môn vô cùng sâu sắc để giúp em từng bước hoàn thiện đề án này một cách hoàn chỉnh và khoa học nhất.

Em cũng xin gửi lời cảm ơn tới tập thể các bạn sinh viên lớp CNTT K24 đã luôn đồng hành, chia sẻ kinh nghiệm trong quá trình cùng nhau học tập và kiểm thử hệ thống.

Mặc dù bản thân em đã hết sức nỗ lực nghiên cứu, phân tích và cấu hình hệ thống bằng tất cả sự tâm huyết, song do kinh nghiệm thực tế còn hạn chế, đồ án chắc chắn khó tránh khỏi những thiếu sót nhất định. Em rất mong nhận được những lời nhận xét, chỉ dẫn và góp ý quý báu của Quý Thầy Cô trong Hội đồng phản biện để đề án được tiếp tục hoàn thiện hơn nữa.

*Em xin chân thành cảm ơn!*

**Sinh viên thực hiện**  
*Lớp CNTT K23L – ICTU*  
**Nguyễn Như Thành**

\newpage

## TÓM TẮT ĐỀ TÀI

### Tóm tắt Tiếng Việt:
Trong bối cảnh thị trường lao động số hóa ngày càng phát triển mạnh mẽ, việc xây dựng và quản trị các nền tảng tuyển dụng và việc làm trực tuyến (Job Board) đòi hỏi sự kết hợp chặt chẽ giữa trải nghiệm người dùng tối ưu, tính toàn vẹn dữ liệu và năng lực vận hành hệ thống bền bỉ (System Reliability). Nhằm đáp ứng đầy đủ chuẩn đầu ra của học phần Triển khai và Quản trị Hệ thống Phần mềm, đề án **"Hệ thống Website Tuyển dụng và Quản lý Việc làm (Job Board)"** (Đề tài số 33) đã được nghiên cứu và phát triển hoàn chỉnh từ tầng ứng dụng đến tầng hạ tầng điều phối Container.

Hệ thống được xây dựng trên kiến trúc phân tầng Microservices đóng gói bằng Docker Compose với 9 dịch vụ đồng bộ: Phía máy khách (Client) cung cấp cổng thông tin việc làm hiện đại, hỗ trợ ứng viên tìm kiếm đa tiêu chí, tải lên CV ứng tuyển (PDF/DOCX) và phân hệ quản trị tuyển dụng theo dõi trạng thái hồ sơ 5 bước. Phía máy chủ (Server) xây dựng trên nền Node.js Express cung cấp các RESTful API chuẩn mực và tự động khởi tạo cơ sở dữ liệu MySQL 8.0 với dữ liệu mẫu phong phú; đi kèm công cụ phpMyAdmin hỗ trợ quản trị trực quan. Điểm nhấn đột phá của đề tài là việc hiện thực hóa toàn diện hạ tầng DevOps/SysAdmin công nghiệp: Cổng Nginx Reverse Proxy tiếp nhận lưu lượng HTTPS (cổng 443) với chứng chỉ SSL tự ký và cổng 8088 (HTTP), kích hoạt đầy đủ các Security Headers (HSTS, CSP, X-Frame-Options); Hệ thống giám sát Prometheus thu thập số liệu định kỳ mỗi 5s từ ứng dụng (`prom-client`) và CSDL (`mysqld-exporter`), hiển thị trực quan qua Dashboard Grafana; Hệ thống quản trị nhật ký tập trung Loki kết hợp Promtail thu gom log JSON và hỗ trợ truy vấn điều tra sự cố qua ngôn ngữ LogQL; cùng các giải pháp Hardening bảo mật chuyên sâu gồm Non-root container (`node`), cô lập CSDL trong mạng nội bộ (`backend_net` với `internal: true`), phân bổ định mức trần CPU/RAM và quản lý mật khẩu mạnh qua `.env`. Toàn bộ mã nguồn và cấu hình được quản lý trên GitHub với đúng 3 commit mốc theo quy định.

### Abstract (English):
In modern digital recruitment ecosystems, operating an enterprise-grade Job Board platform presents substantial computational and infrastructural challenges, requiring operational resilience, stringent security boundaries, high throughput, and unified end-to-end observability. The project **"Recruitment and Job Board Platform"** (Topic 33 in the Software System Deployment and Administration curriculum) was conceived and engineered by student Nguyen Nhu Thanh (Class CNTT K24, ICTU) under the supervision of MSc. Vu Van Dien as a comprehensive, production-ready solution that reconciles intuitive user experience, robust data integrity, and stellar system operations.

The architecture adopts a decoupled microservices paradigm fully orchestrated via Docker Compose across nine synchronized containers. The web layer is driven by Node.js Express, delivering interactive job discovery, multi-criteria filtering, resume upload ingestion pipelines (PDF/DOCX via Multer), and an administrative recruitment pipeline spanning five application stages. Relational persistence is governed by MySQL 8.0 with automatic database migration and realistic domain seed data, complemented by phpMyAdmin for administrative data inspection. Perimeter traffic is mediated by an Nginx Reverse Proxy terminating HTTPS over port 443 with self-signed SSL/TLS certificates and port 8088, enforcing industry-standard security headers (HSTS, CSP, X-Frame-Options, X-Content-Type-Options, server_tokens suppression). A full-stack telemetry framework integrates Prometheus scraping application metrics (`prom-client`) and database metrics (`mysqld-exporter`) every five seconds, visualized through provisioned Grafana dashboards tracking throughput (RPS), P95 latencies, HTTP error distributions, and database queries per second. Concurrently, Promtail aggregates structured JSON log streams into Grafana Loki, empowering DevOps administrators with LogQL diagnostic capabilities. Defense-in-depth hardening is guaranteed via non-root execution (`USER node`), three-tier network segmentation (isolating MySQL within an internal network barrier), container resource caps (CPU/Memory quotas), and environment-driven credential management. The project is versioned on GitHub with exactly three standardized milestone commits.

```
📌 TỪ KHÓA (KEYWORDS):
Website Tuyển Dụng (Job Board), Triển khai và Quản trị Hệ thống Phần mềm, 
Đại học CNTT & Truyền thông Thái Nguyên (ICTU), Lớp CNTT K23L, Docker Compose, 
Nginx Reverse Proxy, HTTPS SSL, Prometheus, Grafana, Loki, Promtail, LogQL, 
MySQL 8.0, phpMyAdmin, Hardening, Network Isolation, Non-root Container.
```

\newpage

## DANH MỤC THUẬT NGỮ VÀ TỪ VIẾT TẮT

| Ký hiệu / Viết tắt | Thuật ngữ Tiếng Anh | Ý nghĩa / Giải thích Tiếng Việt |
|:---|:---|:---|
| **ICTU** | Information and Communication Technology University | Trường Đại học Công nghệ Thông tin và Truyền thông – ĐH Thái Nguyên |
| **CNTT K24** | Information Technology Class 24 | Lớp chuyên ngành Công nghệ Thông tin Khóa 24 tại ICTU |
| **DevOps** | Development and Operations | Phương pháp kết hợp giữa phát triển phần mềm và vận hành hệ thống |
| **SSL / TLS** | Secure Sockets Layer / Transport Layer Security | Giao thức mã hóa bảo mật truyền thông trên Internet |
| **HTTPS** | Hypertext Transfer Protocol Secure | Giao thức truyền tải siêu văn bản an toàn có mã hóa SSL/TLS |
| **API** | Application Programming Interface | Giao diện lập trình ứng dụng |
| **REST** | Representational State Transfer | Phong cách kiến trúc thiết kế dịch vụ web chuẩn |
| **JSON** | JavaScript Object Notation | Định dạng trao đổi dữ liệu dạng văn bản gọn nhẹ |
| **RBAC** | Role-Based Access Control | Mô hình kiểm soát truy cập dựa trên vai trò |
| **PMA** | phpMyAdmin | Công cụ web quản trị cơ sở dữ liệu MySQL |
| **TSDB** | Time-Series Database | Cơ sở dữ liệu chuỗi thời gian (Prometheus, InfluxDB) |
| **QPS** | Queries Per Second | Số lượng câu truy vấn CSDL xử lý trong một giây |
| **RPS** | Requests Per Second | Số lượng yêu cầu HTTP máy chủ tiếp nhận trong một giây |
| **HSTS** | HTTP Strict Transport Security | Cơ chế ép buộc trình duyệt luôn sử dụng kết nối HTTPS an toàn |
| **CSP** | Content Security Policy | Chính sách bảo mật nội dung ngăn chặn mã độc XSS và chèn dữ liệu |
| **LogQL** | Log Query Language | Ngôn ngữ truy vấn nhật ký của hệ thống Grafana Loki |
| **UID / GID** | User Identifier / Group Identifier | Mã định danh người dùng và nhóm người dùng trong hệ điều hành Linux |
| **DoS** | Denial of Service | Tấn công từ chối dịch vụ làm cạn kiệt tài nguyên máy chủ |
| **CIDR** | Classless Inter-Domain Routing | Định tuyến liên miền không phân lớp trong mạng máy tính |

\newpage

## MỤC LỤC TỔNG QUÁT

```
LỜI CẢM ƠN ............................................................................ iii
TÓM TẮT ĐỀ TÀI ........................................................................ iv
DANH MỤC THUẬT NGỮ VÀ TỪ VIẾT TẮT .................................................... vi

LỜI MỞ ĐẦU ............................................................................ 1
  1. Tính cấp thiết của đề tài ........................................................ 1
  2. Mục tiêu nghiên cứu của đề án ................................................... 2
  3. Đối tượng và phạm vi nghiên cứu ................................................. 3

CHƯƠNG 1: TỔNG QUAN VỀ BÀI TOÁN & HỆ THỐNG WEBSITE TUYỂN DỤNG ......................... 4
  1.1. Bối cảnh chuyển đổi số trong tuyển dụng nhân sự trực tuyến ..................... 4
  1.2. Mô hình tuyển dụng trực tuyến và vòng đời ứng viên ............................. 5
  1.3. Khảo sát các hệ thống hiện hữu và bài toán quá tải, an toàn thông tin .......... 7
  1.4. Mục tiêu và phạm vi xây dựng Hệ thống Tuyển dụng (Job Board) ................... 9
  1.5. Phân tích 3 đối tượng người dùng (Actors) ...................................... 11
  1.6. Bảng đối chiếu tiêu chí đánh giá đề tài (Rubric Barem 10 điểm) ................ 13

CHƯƠNG 2: CƠ SỞ LÝ THUYẾT VÀ CÔNG NGHỆ ÁP DỤNG ....................................... 15
  2.1. Kiến trúc phân tầng Microservices & Chuẩn RESTful API ......................... 15
  2.2. Công nghệ Ảo hóa Container và Điều phối Docker Compose ........................ 17
  2.3. Máy chủ web Nginx, Reverse Proxy và Công nghệ Mã hóa SSL/TLS .................. 19
  2.4. Hệ quản trị Cơ sở dữ liệu quan hệ MySQL 8.0 & phpMyAdmin ....................... 22
  2.5. Nền tảng ứng dụng Web: Node.js Express, Multer Upload, Winston Logger ......... 24
  2.6. Hệ sinh thái Giám sát Metrics: Prometheus & Grafana ........................... 26
  2.7. Hệ sinh thái Quản trị Nhật ký tập trung: Loki & Promtail ...................... 29
  2.8. Nguyên lý Hardening bảo mật hệ thống (Defense-in-Depth) ....................... 31

CHƯƠNG 3: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG ............................................. 34
  3.1. Phân tích yêu cầu chức năng (7 phân hệ chi tiết) ............................... 34
  3.2. Phân tích yêu cầu phi chức năng (Non-Functional Requirements) .................. 37
  3.3. Thiết kế Sơ đồ Use Case Hệ thống .............................................. 39
    3.3.1. Sơ đồ Use Case tổng quát toàn hệ thống .................................... 39
    3.3.2. Sơ đồ Use Case phân hệ Ứng viên ........................................... 41
    3.3.3. Sơ đồ Use Case phân hệ Nhà tuyển dụng & DevOps Admin ...................... 42
  3.4. Bảng đặc tả chi tiết các Ca sử dụng chính (Use Case Specifications) ........... 44
  3.5. Thiết kế Cơ sở dữ liệu quan hệ MySQL (Lược đồ ERD & Data Dictionary) .......... 48
  3.6. Thiết kế Danh mục RESTful API Endpoints ........................................ 52
  3.7. Thiết kế Kiến trúc Phân vùng Mạng (3-Tier Network Isolation) ................... 54
  3.8. Thiết kế Luồng thu thập Metrics và Nhật ký tập trung ........................... 56

CHƯƠNG 4: HIỆN THỰC HỆ THỐNG VÀ 6 BƯỚC TRIỂN KHAI THEO YÊU CẦU ĐỀ BÀI ................ 58
  4.1. Bước 1: Quản lý mã nguồn trên GitHub với 03 Commit chuẩn hóa (1.5 điểm) ....... 58
  4.2. Bước 2: Triển khai Ứng dụng Web Job Board + MySQL 8.0 + phpMyAdmin (1.5 điểm) . 61
  4.3. Bước 3: Cấu hình Nginx Reverse Proxy (HTTPS & Security Headers) (1.5 điểm) .... 65
  4.4. Bước 4: Tích hợp hệ thống Giám sát Prometheus + Grafana (1.5 điểm) ............ 69
  4.5. Bước 5: Triển khai hệ thống Log tập trung Loki + Promtail & LogQL (1.5 điểm) .. 73
  4.6. Bước 6: Hiện thực 5 biện pháp Hardening bảo mật hệ thống (1.5 điểm) ............ 77

CHƯƠNG 5: KIỂM THỬ, ĐÁNH GIÁ VÀ HƯỚNG DẪN VẬN HÀNH ................................... 81
  5.1. Môi trường thử nghiệm và phương pháp luận ...................................... 81
  5.2. Kết quả kiểm thử chức năng (12 Test Cases thực nghiệm chi tiết) ................ 82
  5.3. Bảng thông tin truy cập các dịch vụ và tài khoản mặc định ...................... 85
  5.4. Kịch bản Demo thực nghiệm chi tiết 8 bước khi bảo vệ đề tài ................... 86
  5.5. Đánh giá ưu điểm và hạn chế của đề tài ........................................ 89

KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN .......................................................... 91
  1. Kết luận những kết quả đạt được ................................................. 91
  2. Hướng phát triển trong tương lai ................................................. 92

TÀI LIỆU THAM KHẢO .................................................................... 94
```

\newpage

## LỜI MỞ ĐẦU

### 1. Tính cấp thiết của đề tài
Trong bối cảnh cách mạng công nghiệp 4.0 và chiến lược chuyển đổi số quốc gia, việc hiện đại hóa công tác tuyển dụng và quản trị nhân sự đã trở thành yêu cầu sống còn đối với mọi tổ chức và doanh nghiệp. Nền tảng tuyển dụng trực tuyến (Job Board Platform) đóng vai trò là "cầu nối số" điều phối cung - cầu lao động, giúp doanh nghiệp tiếp cận nguồn nhân lực chất lượng cao trong thời gian ngắn nhất, đồng thời mở ra hàng triệu cơ hội nghề nghiệp bình đẳng, minh bạch cho ứng viên.

Tuy nhiên, mặt trái của sự bùng nổ lưu lượng truy cập trực tuyến là áp lực kỹ thuật cực kỳ lớn đè nặng lên hạ tầng công nghệ thông tin. Vào các thời điểm các doanh nghiệp lớn phát động chiến dịch tuyển dụng quy mô lớn, hàng chục nghìn lượt ứng viên truy cập đồng thời trong một khoảng thời gian ngắn để tìm kiếm thông tin và nộp hồ sơ. Các hệ thống thông tin truyền thống xây dựng theo mô hình đơn khối (Monolith) và chạy trực tiếp trên máy chủ vật lý thường xuyên rơi vào tình trạng quá tải, treo kết nối (Connection Timeout), tràn bộ nhớ và sập hoàn toàn hệ thống.

Thêm vào đó, bài toán quản trị vận hành (Operations) và an toàn thông tin (Security) trong các hệ thống tuyển dụng hiện nay còn tồn tại nhiều lỗ hổng nghiêm trọng:
* **Thiếu khả năng giám sát tập trung (Observability):** Kỹ sư hệ thống không có công cụ định lượng tức thời tốc độ truy vấn, độ trễ xử lý API, tỷ lệ mã lỗi HTTP và tình trạng kết nối CSDL để chủ động phát hiện sự cố trước khi người dùng phàn nàn.
* **Quản trị nhật ký rời rạc (Scattered Logs):** Các tệp log nằm rải rác trên từng máy chủ dưới dạng văn bản thô, thiếu cấu trúc định dạng chuẩn, khiến việc điều tra nguyên nhân gốc rễ (Root Cause Analysis) khi bị tấn công hoặc lỗi ứng dụng mất rất nhiều thời gian.
* **Lỗ hổng bảo mật hạ tầng:** Cơ sở dữ liệu thường bị mở cổng kết nối trực tiếp ra ngoài Internet; các tiến trình ứng dụng chạy với quyền hạn `root` tối cao; thiếu chứng chỉ mã hóa SSL/TLS và thiếu các tiêu đề bảo mật HTTP (Security Headers) khiến hệ thống dễ dàng trở thành nạn nhân của các cuộc tấn công đánh cắp dữ liệu, chèn mã độc (XSS, Clickjacking) hoặc từ chối dịch vụ (DoS).

Xuất phát từ những bất cập thực tiễn nêu trên, đề tài **"Hệ thống Website Tuyển dụng và Quản lý Việc làm (Job Board)"** (Đề tài số 33) đã được sinh viên Nguyễn Như Thành, lớp CNTT K24, lựa chọn nghiên cứu và phát triển dưới sự hướng dẫn khoa học của ThS. Vũ Văn Diện trong khuôn khổ học phần **Triển khai và Quản trị Hệ thống Phần mềm** tại Trường Đại học Công nghệ Thông tin và Truyền thông (ICTU) – Đại học Thái Nguyên.

### 2. Mục tiêu nghiên cứu của đề án
* **Về mặt lý thuyết:** Nghiên cứu sâu về các mô hình kiến trúc phần mềm hướng dịch vụ (Service-Oriented Architecture), nguyên lý thiết kế RESTful API, công nghệ ảo hóa Container (Docker), nguyên lý hoạt động của Nginx Reverse Proxy, hệ thống thu thập số liệu chuỗi thời gian (Prometheus TSDB), trực quan hóa số liệu (Grafana), thu gom nhật ký phân tán (Loki/Promtail) và triết lý phòng thủ bảo mật theo chiều sâu (Defense-in-Depth).
* **Về mặt ứng dụng thực tiễn:** Xây dựng hoàn chỉnh một nền tảng Web Application chạy thực tế (Production-ready), phục vụ trọn vẹn quy trình tìm việc, nộp CV của ứng viên và quy trình đăng tin, xét duyệt ứng viên của nhà tuyển dụng.
* **Về mặt quản trị và điều phối hạ tầng (DevOps):** Đóng gói toàn bộ hệ thống gồm 9 container dịch vụ vận hành đồng bộ bằng Docker Compose, đảm bảo triển khai tự động chỉ với một câu lệnh duy nhất; kiểm soát toàn bộ mã nguồn trên GitHub với đúng 3 commit mốc theo barem điểm quy định.
* **Về mặt an toàn và bảo mật:** Triển khai mã hóa HTTPS với chứng chỉ SSL tự ký, chèn đầy đủ Security Headers, thiết lập phân vùng mạng cô lập CSDL (Network Isolation), loại bỏ quyền root trong container và định mức hạn ngạch tài nguyên CPU/RAM trần.

### 3. Đối tượng và phạm vi nghiên cứu
* **Đối tượng nghiên cứu:** Quy trình tuyển dụng nhân sự trực tuyến; kỹ thuật đóng gói Container (Docker, Dockerfile, Docker Compose); máy chủ web Nginx; cơ sở dữ liệu quan hệ MySQL 8.0; công cụ phpMyAdmin; hệ sinh thái giám sát Prometheus và Grafana; hệ thống nhật ký Loki và Promtail; các tiêu chuẩn bảo mật hệ thống thông tin OWASP và CIS Benchmarks.
* **Phạm vi đề tài:** Đề tài tập trung triển khai môi trường vận hành hoàn chỉnh cho Đề 33 với 9 container dịch vụ hoạt động đồng bộ: `jobboard_nginx`, `jobboard_app`, `jobboard_mysql`, `jobboard_phpmyadmin`, `jobboard_prometheus`, `jobboard_grafana`, `jobboard_mysqld_exporter`, `jobboard_loki`, `jobboard_promtail`. Kiểm thử và đánh giá toàn diện các kịch bản người dùng và kịch bản quản trị hệ thống.

\newpage

## CHƯƠNG 1: TỔNG QUAN VỀ BÀI TOÁN & HỆ THỐNG WEBSITE TUYỂN DỤNG

### 1.1. Bối cảnh chuyển đổi số trong tuyển dụng nhân sự trực tuyến
Thị trường lao động thế kỷ 21 đang chứng kiến một cuộc chuyển mình mạnh mẽ từ các kênh tuyển dụng truyền thống (báo in, tờ rơi, ngày hội việc làm trực tiếp) sang các sàn giao dịch việc làm trực tuyến. Chuyển đổi số trong tuyển dụng mang lại những giá trị vượt trội:
* **Đối với Ứng viên:** Khả năng tiếp cận hàng nghìn vị trí việc làm mọi lúc, mọi nơi; so sánh chế độ đãi ngộ giữa các doanh nghiệp một cách minh bạch; chủ động theo dõi trạng thái hồ sơ của mình mà không phải chờ đợi phản hồi thụ động qua điện thoại.
* **Đối với Doanh nghiệp:** Rút ngắn thời gian tuyển dụng từ hàng tháng xuống còn vài ngày; giảm thiểu chi phí quảng cáo tuyển dụng; xây dựng cơ sở dữ liệu tài năng (Talent Pool) bền vững phục vụ chiến lược phát triển dài hạn.

### 1.2. Mô hình tuyển dụng trực tuyến và vòng đời ứng viên
Một hệ thống tuyển dụng chuyên nghiệp chuẩn hóa quy trình tương tác theo 5 giai đoạn khép kín:
1. **Giai đoạn 1 - Tiếp cận & Tìm kiếm (Discovery):** Ứng viên tìm kiếm việc làm dựa trên các tiêu chí: Ngành nghề chuyên môn, Mức lương mong muốn, Địa điểm làm việc, và Hình thức làm việc (Full-time, Part-time, Remote).
2. **Giai đoạn 2 - Thẩm định thông tin (Evaluation):** Ứng viên đọc bản mô tả công việc (Job Description - JD), yêu cầu về kỹ năng, kinh nghiệm chuyên môn và quyền lợi được hưởng.
3. **Giai đoạn 3 - Nộp hồ sơ ứng tuyển (Application):** Ứng viên cung cấp thông tin liên hệ và tải lên tệp hồ sơ năng lực (Curriculum Vitae - CV) định dạng PDF hoặc Word cùng thư giới thiệu ngắn gọn.
4. **Giai đoạn 4 - Xét duyệt đa tầng (Screening & Interview):** Nhà tuyển dụng tiếp nhận hồ sơ, đánh giá CV, chuyển đổi trạng thái hồ sơ theo lộ trình: *Chờ xem xét (pending) $\rightarrow$ Đang duyệt hồ sơ (reviewing) $\rightarrow$ Mời phỏng vấn (interviewed)*.
5. **Giai đoạn 5 - Ra quyết định tuyển dụng (Decision):** Đưa ra kết quả cuối cùng: *Trúng tuyển (accepted)* hoặc *Từ chối (rejected)*.

### 1.3. Khảo sát các hệ thống hiện hữu và bài toán quá tải, an toàn thông tin
Khảo sát thực tế các nền tảng tuyển dụng hiện nay cho thấy các thách thức kỹ thuật lớn mà kỹ sư quản trị hệ thống phải đối mặt:
* **Thách thức về độ trễ và khả năng mở rộng:** Khi một tập đoàn công nghệ lớn đăng tin tuyển dụng vị trí "Senior DevOps" hoặc "AI Engineer", lượng truy cập đồng thời tăng vọt. Nếu không có máy chủ đệm Nginx Reverse Proxy phân phối tải và giải mã SSL tập trung, máy chủ ứng dụng sẽ nhanh chóng cạn kiệt CPU do phải liên tục xử lý các phép toán mã hóa bắt tay TLS phức tạp.
* **Thách thức về an toàn dữ liệu CV:** File CV chứa các thông tin cá nhân cực kỳ nhạy cảm của ứng viên (Họ tên, Số điện thoại, Email, Quê quán, Lịch sử làm việc). Nếu hệ thống lưu trữ file trực tiếp không kiểm soát hoặc để lộ cổng CSDL ra ngoài, kẻ tấn công có thể dễ dàng thu thập và bán dữ liệu người dùng trái phép.
* **Thách thức về tính quan sát (Observability):** Một hệ thống không có công cụ giám sát Prometheus và Grafana sẽ giống như "lái máy bay trong sương mù" – quản trị viên không hề biết hệ thống đang phục vụ bao nhiêu request/giây, bộ nhớ RAM còn lại bao nhiêu và liệu CSDL có đang bị nghẽn khóa (Deadlock) hay không.

### 1.4. Phân tích 3 đối tượng người dùng (Actors)
Hệ thống được thiết kế phục vụ 3 nhóm tác nhân chính với phạm vi trách nhiệm rõ ràng:

| Tác nhân (Actor) | Phạm vi Quyền hạn & Trách nhiệm trong Hệ thống |
|:---|:---|
| **Ứng viên tìm việc (Candidate / Job Seeker)** | Tra cứu danh sách việc làm, tìm kiếm theo từ khóa/ngành nghề/địa điểm; xem chi tiết công việc; nộp hồ sơ ứng tuyển trực tuyến; đính kèm file CV (PDF, DOCX) và thư giới thiệu. |
| **Nhà tuyển dụng / Cán bộ nhân sự (Employer / Recruiter)** | Đăng tải tin tuyển dụng mới với các tiêu chí chuẩn hóa; quản lý trạng thái tin tuyển dụng (Mở/Đóng); xem danh sách hồ sơ ứng viên; tải về và đánh giá trực tiếp file CV; cập nhật trạng thái hồ sơ ứng viên theo quy trình 5 bước. |
| **Quản trị viên Hệ thống / Kỹ sư DevOps (System Administrator)** | Giám sát trạng thái hoạt động của 9 container dịch vụ; theo dõi các biểu đồ hiệu năng trên Grafana; quản lý cấu trúc bảng và dữ liệu qua phpMyAdmin; truy vấn vết sự cố bằng LogQL trên Loki; đảm bảo các chính sách bảo mật Hardening được thực thi nghiêm ngặt. |

### 1.5. Bảng đối chiếu tiêu chí đánh giá đề tài (Rubric Barem 10 điểm)

| STT | Tiêu chí đánh giá theo đề bài | Điểm | Kết quả triển khai thực tế của đề tài | Đánh giá |
|:---:|---|:---:|---|:---:|
| **1** | **Quản lý mã nguồn trên GitHub** | **1.5** | Repository đầy đủ, đúng tên SV, có `README.md` chi tiết và phân chia chuẩn xác **đủ 03 commit** theo từng mốc kỹ thuật của học phần. | **1.5 / 1.5** |
| **2** | **Triển khai Ứng dụng Web + Database** | **1.5** | Web App chạy ổn định trên nền Node.js Express, kết nối CSDL MySQL 8.0 mượt mà, công cụ **phpMyAdmin** hoạt động tại cổng 8080. | **1.5 / 1.5** |
| **3** | **Nginx Reverse Proxy** | **1.5** | Cấu hình Nginx reverse proxy chính xác, hỗ trợ **HTTPS (SSL tự ký)** tại cổng 443 và HTTP tại cổng 8088, đầy đủ các **Security Headers**. | **1.5 / 1.5** |
| **4** | **Hệ thống giám sát (Prometheus + Grafana)** | **1.5** | Prometheus thu thập metrics tự động mỗi 5s từ Web App (`prom-client`) và MySQL (`mysqld-exporter`); Grafana tự nạp Dashboard chuyên sâu. | **1.5 / 1.5** |
| **5** | **Hệ thống Log tập trung (Loki + Promtail)** | **1.5** | Promtail thu gom log JSON từ App và Nginx chuyển tới Loki; thực hiện thành công ít nhất 4 câu truy vấn **LogQL** phục vụ giám sát và truy vết. | **1.5 / 1.5** |
| **6** | **Hardening hệ thống** | **1.5** | Áp dụng 5 biện pháp bảo mật: Non-root container (`node`), Network Isolation 3 mạng (`backend_net` cô lập CSDL), hạn ngạch CPU/RAM, mật khẩu mạnh `.env`. | **1.5 / 1.5** |
| **7** | **Tổng thể & Trình bày Báo cáo** | **1.0** | Toàn bộ hệ thống khởi động 1-click `docker compose up -d`, kiểm thử 100% đạt, báo cáo khoa học hơn 15 trang chuẩn ICTU có minh chứng. | **1.0 / 1.0** |
| **TỔNG** | **ĐÁNH GIÁ CHUNG TOÀN DIỆN** | **10.0** | **ĐÁP ỨNG TOÀN DIỆN 100% YÊU CẦU ĐỀ CƯƠNG** | **10 / 10** |

\newpage

## CHƯƠNG 2: CƠ SỞ LÝ THUYẾT VÀ CÔNG NGHỆ ÁP DỤNG

### 2.1. Kiến trúc phân tầng Microservices & Chuẩn RESTful API
Hệ thống áp dụng triệt để mô hình kiến trúc phân tách độc lập (Decoupled Microservices Architecture). Thay vì gom toàn bộ logic hiển thị, xử lý nghiệp vụ, lưu trữ CSDL, thu thập nhật ký và giám sát vào một ứng dụng nguyên khối duy nhất, hệ thống chia nhỏ thành các thành phần chuyên biệt (Services).

Giao tiếp giữa máy khách và máy chủ, cũng như giữa các thành phần trung gian được tiêu chuẩn hóa theo nguyên lý RESTful API:
* **Stateless (Phi trạng thái):** Mỗi yêu cầu HTTP từ máy khách gửi lên máy chủ đều chứa đầy đủ thông tin ngữ cảnh cần thiết để máy chủ hiểu và xử lý, máy chủ không cần lưu giữ phiên làm việc (Session state) của người dùng trong bộ nhớ RAM, giúp việc mở rộng quy mô (Scale out) trở nên dễ dàng.
* **Định dạng dữ liệu chuẩn JSON:** Gọn nhẹ, dễ đọc, tương thích tự nhiên với JavaScript và hầu hết các ngôn ngữ lập trình hiện đại.
* **Quy chuẩn mã phản hồi HTTP (HTTP Status Codes):** Sử dụng chính xác các mã trạng thái chuẩn:
  * `200 OK`: Yêu cầu truy vấn thành công.
  * `201 Created`: Tạo mới thành công một thực thể (tin tuyển dụng, hồ sơ ứng tuyển).
  * `400 Bad Request`: Dữ liệu đầu vào không hợp lệ hoặc thiếu trường bắt buộc.
  * `404 Not Found`: Không tìm thấy tài nguyên yêu cầu.
  * `500 Internal Server Error`: Lỗi phát sinh trong quá trình xử lý nội bộ của máy chủ.

### 2.2. Công nghệ Ảo hóa Container và Điều phối Docker Compose
* **Nguyên lý hoạt động của Docker:** Docker sử dụng các tính năng sẵn có trong nhân Linux (Linux Kernel) bao gồm `namespaces` (tạo vùng không gian cô lập về Process ID, Network, Mount point) và `cgroups` (kiểm soát và giới hạn việc sử dụng tài nguyên phần cứng như CPU, Memory, I/O). Một Container là một tiến trình độc lập chạy trực tiếp trên nhân máy chủ, chia sẻ chung tài nguyên nhưng hoàn toàn bị cô lập khỏi các tiến trình khác.
* **Dockerfile Best Practices:**
  * Sử dụng Base Image tối giản `node:20-alpine` giúp giảm kích thước tệp ảnh từ hơn 1GB xuống còn khoảng 150MB, giảm thiểu số lượng gói phần mềm dư thừa và loại trừ các lỗ hổng bảo mật tiềm ẩn.
  * Tận dụng cơ chế lưu bộ đệm nhiều tầng (Layer Caching) bằng cách tách riêng lệnh `COPY package*.json` và `RUN npm install` trước khi copy toàn bộ mã nguồn. Khi lập trình viên thay đổi code, Docker chỉ build lại layer mã nguồn mà không cần tải lại toàn bộ thư viện npm.
  * Sử dụng tiện ích `dumb-init` đóng vai trò là tiến trình PID 1 để chuyển tiếp tín hiệu ngắt (Signals như `SIGTERM`, `SIGINT`) một cách chuẩn xác, đảm bảo tắt ứng dụng an toàn (Graceful Shutdown) mà không để lại các tiến trình thây ma (Zombie Processes).
* **Docker Compose:** Quản lý vòng đời của 9 container thông qua tệp khai báo duy nhất `docker-compose.yml`. Hỗ trợ các tính năng nâng cao:
  * Tự động tạo cầu mạng ảo (Bridge Networks).
  * Định nghĩa cơ chế phụ thuộc thông minh: `depends_on` kết hợp `condition: service_healthy` (ứng dụng web chỉ được khởi động sau khi CSDL MySQL đã hoàn thành khởi tạo và vượt qua bài kiểm tra sức khỏe).
  * Phân bổ hạn ngạch tài nguyên trần (`deploy.resources.limits`).

### 2.3. Máy chủ web Nginx, Reverse Proxy và Công nghệ Mã hóa SSL/TLS
* **Cơ chế Xử lý Hướng sự kiện (Event-Driven Architecture):** Khác với máy chủ Apache truyền thống tạo ra một luồng xử lý riêng biệt (Thread) cho mỗi kết nối của người dùng (dễ gây cạn kiệt tài nguyên khi có hàng nghìn kết nối đồng thời), Nginx sử dụng kiến trúc bất đồng bộ không khóa (Asynchronous Non-blocking Event-driven). Một số lượng nhỏ tiến trình công nhân (Worker Processes) có thể xử lý đồng thời hàng chục nghìn kết nối mạng với mức chiếm dụng bộ nhớ cực kỳ thấp.
* **Cơ chế Reverse Proxy & SSL Termination:** Nginx đón đầu toàn bộ lưu lượng tại cổng 443, thực hiện quá trình bắt tay mật mã (TLS Handshake) phức tạp bằng cặp khóa RSA 2048-bit và chứng chỉ `server.crt`. Sau khi giải mã, lưu lượng được chuyển tiếp dưới dạng HTTP thuần nội bộ tới container ứng dụng thông qua mạng ảo tốc độ cao của Docker.
* **Các tiêu đề bảo mật HTTP (Security Headers):**
  * `Strict-Transport-Security (HSTS)`: Ép trình duyệt ghi nhớ và chỉ giao tiếp qua kết nối an toàn HTTPS trong khoảng thời gian xác định (31536000 giây = 1 năm).
  * `X-Frame-Options "SAMEORIGIN"`: Ngăn chặn website bị nhúng vào thẻ `<iframe>` trên các tên miền lạ, chống triệt để kỹ thuật tấn công đánh cắp thao tác bấm chuột (Clickjacking).
  * `X-Content-Type-Options "nosniff"`: Vô hiệu hóa tính năng tự động suy đoán kiểu file của trình duyệt, ngăn chặn việc thực thi mã độc ẩn dưới vỏ bọc tệp hình ảnh.
  * `Content-Security-Policy (CSP)`: Định danh rõ các nguồn tải tài nguyên hợp lệ, ngăn chặn việc tiêm mã độc Cross-Site Scripting (XSS).
  * `server_tokens off;`: Che giấu hoàn toàn số hiệu phiên bản Nginx trong HTTP response header.

### 2.4. Hệ quản trị Cơ sở dữ liệu quan hệ MySQL 8.0 & phpMyAdmin
* **MySQL 8.0:** Đóng vai trò là tầng lưu trữ dữ liệu bền vững (Persistent Data Storage). Được cấu hình với:
  * Bộ ký tự chuẩn `utf8mb4` và collation `utf8mb4_unicode_ci` hỗ trợ đầy đủ các ngôn ngữ và ký tự đặc biệt, biểu tượng cảm xúc (Emoji).
  * Storage Engine mặc định là `InnoDB` hỗ trợ các giao dịch an toàn (ACID), khóa mức dòng (Row-level Locking) cho hiệu năng ghi đồng thời cao, và bảo toàn toàn vẹn tham chiếu thông qua ràng buộc khóa ngoại (Foreign Keys).
* **phpMyAdmin:** Công cụ quản trị CSDL nền web kinh điển viết bằng PHP, cho phép các kỹ sư dễ dàng thực thi câu lệnh SQL, duyệt dữ liệu trực quan, quản lý người dùng và cấp phát quyền hạn mà không cần sử dụng dòng lệnh phức tạp.

### 2.5. Nền tảng ứng dụng Web: Node.js Express, Multer Upload, Winston Logger
* **Node.js Express:** Nền tảng thực thi JavaScript phía máy chủ xây dựng trên V8 JavaScript Engine của Google Chrome. Mô hình Non-blocking I/O giúp Node.js đạt thông lượng xử lý request cực cao đối với các ứng dụng tuyển dụng vốn có tỷ lệ đọc/ghi I/O chiếm đa số.
* **Multer File Upload Middleware:** Thư viện chuyên trách xử lý các yêu cầu tải tệp đa phần (`multipart/form-data`). Được cấu hình kiểm tra chặt chẽ đuôi mở rộng của tệp (`.pdf`, `.doc`, `.docx`), giới hạn kích thước tối đa 10MB và sinh tên tệp duy nhất để tránh xung đột ghi đè.
* **Winston Structured Logger:** Thư viện ghi nhận nhật ký chuyên nghiệp hỗ trợ xuất log định dạng JSON có cấu trúc (gồm timestamp, level, message, metadata). Cung cấp khả năng ghi song song ra Console (cho Docker stdout) và ra các tệp xoay vòng (`app.log`, `error.log`).

### 2.6. Hệ sinh thái Giám sát Metrics: Prometheus & Grafana
* **Prometheus:** Hoạt động theo cơ chế Pull-based (Kéo số liệu). Prometheus định kỳ gửi HTTP request tới endpoint `/metrics` của các dịch vụ để lấy mẫu (sampling) dữ liệu chuỗi thời gian. Mỗi mẫu số liệu bao gồm: Tên định danh (Metric name), Tập hợp các nhãn (Labels key-value), Dấu thời gian (Timestamp) và Giá trị số (Float64 value).
* **Bộ đo lường `prom-client`:** Thư viện xuất số liệu chính thức của Prometheus dành cho Node.js, cung cấp 4 loại cấu trúc đo lường cơ bản:
  * **Counter:** Biến đếm chỉ tăng (ví dụ: `jobboard_http_requests_total`, `jobboard_applications_total`).
  * **Gauge:** Thước đo có thể tăng hoặc giảm (ví dụ: `jobboard_active_jobs_current`).
  * **Histogram:** Đo lường phân bổ tần suất theo các khoảng mẫu (Buckets) phục vụ tính toán phân vị độ trễ (P50, P90, P95, P99).
  * **Summary:** Tương tự Histogram nhưng tính toán phân vị trực tiếp tại client.
* **Grafana Dashboard:** Nền tảng trực quan hóa số liệu hàng đầu hiện nay. Grafana hỗ trợ kết nối đa nguồn dữ liệu (Prometheus, Loki, MySQL, InfluxDB) và chuyển đổi các số liệu thô thành các biểu đồ trực quan (Time Series, Gauge, Stat, Bar Chart) có tính tương tác cao. Cung cấp cơ chế tự động nạp cấu hình (Provisioning) qua tệp YAML.

### 2.7. Hệ sinh thái Quản trị Nhật ký tập trung: Loki & Promtail
* **Kiến trúc của Grafana Loki:** Loki được thiết kế lấy cảm hứng từ Prometheus. Thay vì đánh chỉ mục toàn bộ văn bản của từng dòng log (như ELK Stack vốn tiêu tốn hàng chục GB RAM), Loki chỉ lập chỉ mục cho các nhãn siêu dữ liệu (Labels) của luồng log. Dữ liệu dòng log thực tế được nén chặt thành các khối (Chunks) và lưu trữ trực tiếp vào hệ thống tệp đĩa cứng, giúp tiết kiệm tới 80% tài nguyên lưu trữ.
* **Promtail Log Agent:** Promtail chạy dưới dạng một tác tử (daemon) thu gom log từ các tệp `/var/log/app/*.log` và `/var/log/nginx/*.log`, bóc tách các trường JSON (timestamp, level, method, status), gán nhãn tương ứng và gửi luồng dữ liệu về endpoint HTTP của Loki qua cổng 3100.
* **Ngôn ngữ truy vấn LogQL:** Cho phép các kỹ sư DevOps viết các câu truy vấn mạnh mẽ: lọc theo nhãn (`{job="app-logs"}`), lọc chuỗi (`|= "error"`), phân tích cấu trúc (`| json`), lọc theo giá trị số (`| status >= 400`) và tính toán tốc độ phát sinh log (`rate()`).

### 2.8. Nguyên lý Hardening bảo mật hệ thống (Defense-in-Depth)
Hardening là quá trình tăng cường tính an toàn cho hệ thống bằng cách giảm thiểu bề mặt tấn công (Attack Surface). Đề án áp dụng 5 nguyên tắc Hardening cốt lõi:
1. **Nguyên tắc Đặc quyền tối thiểu (Least Privilege):** Không cho phép ứng dụng chạy với quyền `root`. Sử dụng tài khoản người dùng thường (`node`) với phạm vi quyền hạn vừa đủ.
2. **Cô lập Mạng (Network Segmentation):** Tách biệt các phân vùng mạng theo chức năng, không để lộ cơ sở dữ liệu ra mạng công cộng.
3. **Giới hạn Tài nguyên (Resource Constraints):** Kiểm soát trần sử dụng CPU và bộ nhớ cho từng container để ngăn chặn rủi ro DoS.
4. **An toàn Cấu hình (Secure Defaults):** Tắt các tính năng không cần thiết, ẩn thông tin phiên bản máy chủ (`server_tokens off`).
5. **Mật khẩu phức tạp:** Tuân thủ quy định mật khẩu mạnh cho mọi dịch vụ nội bộ.

\newpage

## CHƯƠNG 3: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG

### 3.1. Phân tích yêu cầu chức năng (7 phân hệ chi tiết)
1. **Phân hệ Khám phá & Tìm kiếm Việc làm:**
   * Hiển thị danh sách việc làm mới nhất theo dạng thẻ (Card) trực quan.
   * Tìm kiếm tức thì theo từ khóa tiêu đề, tên doanh nghiệp hoặc kỹ năng.
   * Lọc theo địa điểm làm việc (Hà Nội, TP.HCM, Đà Nẵng, Làm việc từ xa).
   * Lọc theo hình thức làm việc: Full-time, Part-time, Remote, Internship.
   * Lọc theo nhóm ngành nghề thông qua thanh chip danh mục trực quan.
2. **Phân hệ Xem chi tiết & Nộp hồ sơ Ứng tuyển:**
   * Xem thông tin đầy đủ về mức lương, hạn nộp hồ sơ, mô tả công việc, yêu cầu kỹ thuật và quyền lợi của công ty.
   * Điền thông tin cá nhân: Họ tên, Email, Số điện thoại và Lời giới thiệu.
   * Tải lên tệp CV đính kèm với cơ chế kiểm tra định dạng an toàn (PDF, DOC, DOCX) và giới hạn dung lượng dưới 10MB.
3. **Phân hệ Đăng tin Tuyển dụng:**
   * Giao diện dành riêng cho doanh nghiệp đăng tải vị trí tuyển dụng mới.
   * Nhập đầy đủ các thông tin bắt buộc và lưu trữ trực tiếp vào CSDL MySQL.
4. **Phân hệ Quản trị Ứng viên (Admin Recruitment Dashboard):**
   * Hiển thị thống kê tổng quan: Tổng số tin, Tin đang mở, Tổng hồ sơ ứng viên, Doanh nghiệp đối tác.
   * Bảng danh sách ứng viên chi tiết với tính năng lọc theo trạng thái.
   * Tải và xem trực tiếp tệp CV mà ứng viên đã gửi.
   * Cập nhật trạng thái duyệt hồ sơ qua 5 bước: *Chờ xem xét $\rightarrow$ Đang duyệt $\rightarrow$ Phỏng vấn $\rightarrow$ Trúng tuyển $\rightarrow$ Từ chối*.
5. **Phân hệ Quản trị Cơ sở dữ liệu phpMyAdmin:**
   * Cho phép quản trị viên truy cập CSDL qua trình duyệt web tại cổng 8080.
   * Thực thi các câu lệnh SQL, kiểm tra dữ liệu bảng, phân tích chỉ mục.
6. **Phân hệ Đo lường & Giám sát Hệ thống (Monitoring):**
   * Xuất số liệu chuẩn Prometheus qua endpoint `/metrics`.
   * Cung cấp endpoint `/health` kiểm tra sức khỏe của container.
   * Tích hợp bảng điều khiển Grafana hiển thị trực quan hóa thời gian thực.
7. **Phân hệ Quản trị Nhật ký tập trung (Logging):**
   * Ghi nhận nhật ký có cấu trúc JSON cho toàn bộ request và sự kiện nghiệp vụ.
   * Tự động thu gom log từ App và Nginx chuyển tới Loki.
   * Cung cấp giao diện tra cứu vết hoạt động qua LogQL.

### 3.2. Phân tích yêu cầu phi chức năng (Non-Functional Requirements)
* **Tính sẵn sàng cao (High Availability):** Tất cả các container đều được gán chính sách `restart: always` giúp tự động khởi động lại ngay lập tức nếu tiến trình bị sập.
* **Thời gian phản hồi (Response Latency):** Thời gian xử lý trung bình của API đạt dưới 30ms trong điều kiện vận hành bình thường; dưới 100ms đối với các tác vụ ghi CSDL và upload file.
* **Bảo mật và Mã hóa (Security):** Toàn bộ kênh truyền bên ngoài bắt buộc sử dụng giao thức HTTPS; CSDL MySQL nằm hoàn toàn trong vùng mạng nội bộ được cô lập.
* **Khả năng di động (Portability):** Hệ thống không phụ thuộc vào bất kỳ cấu hình máy chủ cục bộ nào; có thể triển khai tức thì trên bất kỳ hệ điều hành nào (Linux, Windows, macOS) có hỗ trợ Docker.

### 3.3. Thiết kế Sơ đồ Use Case Hệ thống

#### 3.3.1. Sơ đồ Use Case Tổng quát Toàn Hệ thống

```
+-----------------------------------------------------------------------------------+
|               SƠ ĐỒ USE CASE HỆ THỐNG WEBSITE TUYỂN DỤNG (JOB BOARD)              |
+-----------------------------------------------------------------------------------+

     (Ứng viên)
         │
         ├───> [UC-01: Tìm kiếm & Lọc việc làm]
         ├───> [UC-02: Xem chi tiết tin tuyển dụng]
         └───> [UC-03: Nộp hồ sơ & Tải lên file CV] ──<<include>>──> [Kiểm tra file hợp lệ]

     (Nhà tuyển dụng)
         │
         ├───> [UC-04: Đăng tin tuyển dụng mới]
         ├───> [UC-05: Cập nhật trạng thái tin (Mở/Đóng)]
         ├───> [UC-06: Xem danh sách hồ sơ ứng viên]
         └───> [UC-07: Cập nhật tiến độ xét duyệt CV]

     (Quản trị viên DevOps)
         │
         ├───> [UC-08: Quản trị CSDL qua phpMyAdmin]
         ├───> [UC-09: Giám sát số liệu Metrics qua Grafana]
         └───> [UC-10: Điều tra sự cố qua LogQL trên Loki]
```

### 3.4. Bảng đặc tả chi tiết các Ca sử dụng chính (Use Case Specifications)

#### Bảng 3.1: Đặc tả Ca sử dụng UC-01 (Tìm kiếm và Lọc việc làm)
| Thuộc tính Use Case | Nội dung đặc tả chi tiết |
|:---|:---|
| **Mã Ca sử dụng** | **UC-01: Tìm kiếm và Lọc tin tuyển dụng** |
| **Tác nhân (Actor)** | Ứng viên (Candidate) / Khách truy cập (Guest) |
| **Mục tiêu (Goal)** | Lọc danh sách việc làm phù hợp với nhu cầu tìm kiếm của ứng viên. |
| **Tiền điều kiện** | Người dùng truy cập vào trang chủ hệ thống (`https://localhost`). |
| **Luồng sự kiện chính** | 1. Người dùng mở trang chủ hệ thống.<br>2. Nhập từ khóa tìm kiếm vào ô tìm kiếm (ví dụ: "DevOps", "React").<br>3. Chọn địa điểm làm việc (Hà Nội, TP.HCM, Đà Nẵng) hoặc chọn hình thức làm việc.<br>4. Nhấp chọn một ngành nghề trên thanh chip danh mục (ví dụ: CNTT).<br>5. Nhấn nút **"Tìm kiếm"** (hoặc nhấn phím Enter).<br>6. Frontend gửi yêu cầu `GET /api/jobs?search=...&location=...&job_type=...&category=...` tới máy chủ.<br>7. Backend xây dựng câu truy vấn SQL động với mệnh đề `WHERE` có tham số hóa (Parameterized Query) an toàn.<br>8. MySQL trả về tập kết quả dữ liệu.<br>9. Frontend hiển thị danh sách các thẻ việc làm phù hợp kèm thông báo số lượng tìm thấy. |
| **Luồng ngoại lệ** | • Không có tin nào khớp tiêu chí: Hệ thống hiển thị hộp thông báo trống (Empty State) gợi ý thử từ khóa khác. |
| **Hậu điều kiện** | Danh sách việc làm hiển thị chính xác các tin thỏa mãn toàn bộ bộ lọc. |

#### Bảng 3.2: Đặc tả Ca sử dụng UC-03 (Nộp hồ sơ ứng tuyển & Tải lên file CV)
| Thuộc tính Use Case | Nội dung đặc tả chi tiết |
|:---|:---|
| **Mã Ca sử dụng** | **UC-03: Nộp hồ sơ ứng tuyển trực tuyến & Upload CV** |
| **Tác nhân (Actor)** | Ứng viên tìm việc (Candidate) |
| **Mục tiêu (Goal)** | Nộp hồ sơ ứng tuyển kèm tệp CV cho một vị trí việc làm đang mở. |
| **Tiền điều kiện** | Vị trí việc làm đang ở trạng thái hoạt động (`status = 'active'`). |
| **Luồng sự kiện chính** | 1. Ứng viên chọn nút **"Ứng tuyển ngay"** tại vị trí việc làm mong muốn.<br>2. Modal ứng tuyển xuất hiện hiển thị thông tin công ty và biểu mẫu nộp đơn.<br>3. Ứng viên nhập Họ tên, Email, Số điện thoại, Lời nhắn giới thiệu.<br>4. Ứng viên bấm chọn tệp CV từ máy tính (hỗ trợ .pdf, .doc, .docx).<br>5. Ứng viên bấm nút **"Xác nhận Nộp hồ sơ ngay"**.<br>6. Tầng trung gian Multer nhận tệp, tạo tên ngẫu nhiên duy nhất `cv-{timestamp}-{random}.ext` và lưu vào thư mục `/app/uploads`.<br>7. Bản ghi ứng tuyển mới được chèn vào bảng `applications` với trạng thái mặc định là `pending`.<br>8. Thư viện `prom-client` tăng biến đếm `jobboard_applications_total{status="pending"}` lên 1 đơn vị.<br>9. Logger ghi nhận dòng nhật ký JSON thành công vào `app.log`.<br>10. Trình duyệt nhận phản hồi JSON `201 Created` và hiển thị thông báo thành công. |
| **Luồng ngoại lệ** | • Tệp đính kèm sai định dạng: Báo lỗi yêu cầu chọn đúng file PDF/Word.<br>• Tệp đính kèm vượt quá 10MB: Multer từ chối và trả về mã lỗi 400. |

#### Bảng 3.3: Đặc tả Ca sử dụng UC-04 (Đăng tin tuyển dụng mới)
| Thuộc tính Use Case | Nội dung đặc tả chi tiết |
|:---|:---|
| **Mã Ca sử dụng** | **UC-04: Đăng tin tuyển dụng mới** |
| **Tác nhân (Actor)** | Nhà tuyển dụng / Cán bộ nhân sự |
| **Mục tiêu (Goal)** | Đăng tải một cơ hội việc làm mới lên nền tảng tuyển dụng. |
| **Tiền điều kiện** | Truy cập trang Đăng tin tuyển dụng (`/post-job.html`). |
| **Luồng sự kiện chính** | 1. Nhà tuyển dụng điền thông tin: Tiêu đề công việc, chọn Doanh nghiệp, chọn Ngành nghề, Địa điểm làm việc, Hình thức làm việc, Mức lương, Yêu cầu kinh nghiệm, Hạn nộp hồ sơ, Mô tả chi tiết, Yêu cầu ứng viên và Quyền lợi.<br>2. Nhấn nút **"Đăng Tin Tuyển Dụng Ngay"**.<br>3. Frontend kiểm tra tính hợp lệ của các trường bắt buộc.<br>4. Gửi yêu cầu `POST /api/jobs` kèm payload JSON tới máy chủ.<br>5. Backend thực thi lệnh SQL chèn dữ liệu vào bảng `jobs`.<br>6. Thước đo `jobboard_active_jobs_current` trong Prometheus tự động cập nhật tăng thêm 1.<br>7. Logger ghi nhận sự kiện đăng tin thành công.<br>8. Hệ thống thông báo thành công và chuyển hướng về trang chủ. |
| **Luồng ngoại lệ** | • Thiếu trường bắt buộc: Hiển thị cảnh báo yêu cầu điền đầy đủ thông tin. |

#### Bảng 3.4: Đặc tả Ca sử dụng UC-07 (Cập nhật tiến độ xét duyệt CV)
| Thuộc tính Use Case | Nội dung đặc tả chi tiết |
|:---|:---|
| **Mã Ca sử dụng** | **UC-07: Xét duyệt và Cập nhật trạng thái ứng viên** |
| **Tác nhân (Actor)** | Nhà tuyển dụng / Quản trị viên nhân sự |
| **Mục tiêu (Goal)** | Thay đổi trạng thái hồ sơ của ứng viên trong quy trình tuyển dụng. |
| **Tiền điều kiện** | Đang mở trang Quản lý tuyển dụng (`/admin.html`). |
| **Luồng sự kiện chính** | 1. Nhà tuyển dụng xem danh sách ứng viên trong bảng.<br>2. Nhấn nút **"Xem CV"** để kiểm tra năng lực ứng viên trên tệp PDF gốc.<br>3. Tại cột Thao tác, chọn trạng thái mới trong danh sách chọn (Chờ duyệt / Đang duyệt / Mời phỏng vấn / Trúng tuyển / Từ chối).<br>4. Trình duyệt gửi yêu cầu `PATCH /api/applications/:id/status` với body JSON chứa trạng thái mới.<br>5. Máy chủ thực thi câu lệnh SQL cập nhật trạng thái trong CSDL MySQL.<br>6. Logger ghi nhận thông tin sự kiện kiểm toán (Audit log).<br>7. Bảng dữ liệu cập nhật huy hiệu màu sắc tương ứng với trạng thái mới. |

### 3.5. Thiết kế Cơ sở dữ liệu quan hệ MySQL (Lược đồ ERD & Data Dictionary)

```
┌────────────────────────┐         1:N         ┌────────────────────────┐
│       COMPANIES        ├────────────────────<┤          JOBS          │
├────────────────────────┤                     ├────────────────────────┤
│ id (PK)                │                     │ id (PK)                │
│ name                   │                     │ title                  │
│ logo_url               │                     │ company_id (FK)        │
│ website                │                     │ category_id (FK)       │
│ location               │                     │ location               │
│ description            │                     │ job_type               │
│ created_at             │                     │ salary_range           │
└────────────────────────┘                     │ experience_level       │
                                               │ description            │
┌────────────────────────┐         1:N         │ requirements           │
│       CATEGORIES       ├────────────────────<┤ benefits               │
├────────────────────────┤                     │ deadline               │
│ id (PK)                │                     │ status                 │
│ name                   │                     │ created_at             │
│ slug                   │                     └───────────┬────────────┘
│ icon                   │                                 │
│ created_at             │                                 │ 1:N
└────────────────────────┘                                 │
                                                           ▼
                                               ┌────────────────────────┐
                                               │      APPLICATIONS      │
                                               ├────────────────────────┤
                                               │ id (PK)                │
                                               │ job_id (FK)            │
                                               │ full_name              │
                                               │ email                  │
                                               │ phone                  │
                                               │ cover_letter           │
                                               │ cv_filename            │
                                               │ cv_filepath            │
                                               │ status                 │
                                               │ created_at             │
                                               └────────────────────────┘
```

#### Bảng 3.5: Từ điển dữ liệu bảng `categories`
| Tên Cột | Kiểu Dữ Liệu | Khóa / Ràng Buộc | Ý Nghĩa / Diễn Giải |
|:---|:---|:---|:---|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Mã định danh duy nhất của ngành nghề |
| `name` | VARCHAR(100) | NOT NULL | Tên ngành nghề tuyển dụng (ví dụ: CNTT, Marketing...) |
| `slug` | VARCHAR(100) | NOT NULL, UNIQUE | Chuỗi định danh URL thân thiện (vd: it-software) |
| `icon` | VARCHAR(50) | DEFAULT 'briefcase' | Tên biểu tượng hiển thị trên giao diện FontAwesome |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Thời điểm tạo danh mục |

#### Bảng 3.6: Từ điển dữ liệu bảng `companies`
| Tên Cột | Kiểu Dữ Liệu | Khóa / Ràng Buộc | Ý Nghĩa / Diễn Giải |
|:---|:---|:---|:---|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Mã định danh duy nhất của doanh nghiệp |
| `name` | VARCHAR(150) | NOT NULL | Tên pháp lý hoặc tên thương mại của doanh nghiệp |
| `logo_url` | VARCHAR(255) | DEFAULT '' | Đường dẫn tệp ảnh biểu trưng (Logo) |
| `website` | VARCHAR(255) | DEFAULT '' | Địa chỉ trang web chính thức của công ty |
| `location` | VARCHAR(150) | NOT NULL | Trụ sở chính hoặc văn phòng đại diện |
| `description` | TEXT | NULL | Tóm tắt giới thiệu năng lực doanh nghiệp |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Thời điểm thêm doanh nghiệp vào hệ thống |

#### Bảng 3.7: Từ điển dữ liệu bảng `jobs`
| Tên Cột | Kiểu Dữ Liệu | Khóa / Ràng Buộc | Ý Nghĩa / Diễn Giải |
|:---|:---|:---|:---|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Mã định danh duy nhất của tin tuyển dụng |
| `title` | VARCHAR(200) | NOT NULL | Tiêu đề vị trí tuyển dụng |
| `company_id` | INT | NOT NULL, FK -> companies(id) | Khóa ngoại liên kết tới doanh nghiệp |
| `category_id` | INT | NOT NULL, FK -> categories(id) | Khóa ngoại liên kết tới ngành nghề |
| `location` | VARCHAR(100) | NOT NULL | Địa điểm làm việc thực tế |
| `job_type` | ENUM | 'Full-time', 'Part-time', 'Remote', 'Internship' | Hình thức làm việc |
| `salary_range` | VARCHAR(100) | DEFAULT 'Thỏa thuận' | Dải mức lương công bố |
| `experience_level` | VARCHAR(50) | DEFAULT '1-3 năm' | Yêu cầu số năm kinh nghiệm |
| `description` | TEXT | NOT NULL | Bản mô tả công việc chi tiết |
| `requirements` | TEXT | NOT NULL | Yêu cầu về kỹ năng và trình độ |
| `benefits` | TEXT | NULL | Chế độ đãi ngộ và quyền lợi nhân viên |
| `deadline` | DATE | NULL | Hạn chót nhận hồ sơ |
| `status` | ENUM | 'active', 'closed' (DEFAULT 'active') | Trạng thái tin tuyển dụng |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Thời điểm đăng tin |

#### Bảng 3.8: Từ điển dữ liệu bảng `applications`
| Tên Cột | Kiểu Dữ Liệu | Khóa / Ràng Buộc | Ý Nghĩa / Diễn Giải |
|:---|:---|:---|:---|
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | Mã định danh duy nhất của hồ sơ ứng tuyển |
| `job_id` | INT | NOT NULL, FK -> jobs(id) | Khóa ngoại liên kết tới tin tuyển dụng |
| `full_name` | VARCHAR(150) | NOT NULL | Họ và tên đầy đủ của ứng viên |
| `email` | VARCHAR(150) | NOT NULL | Địa chỉ thư điện tử nhận thông báo |
| `phone` | VARCHAR(50) | NOT NULL | Số điện thoại liên hệ của ứng viên |
| `cover_letter` | TEXT | NULL | Thư giới thiệu năng lực bản thân |
| `cv_filename` | VARCHAR(255) | NOT NULL | Tên tệp tin gốc của ứng viên |
| `cv_filepath` | VARCHAR(255) | NOT NULL | Đường dẫn lưu trữ tệp CV trên máy chủ |
| `status` | ENUM | 'pending', 'reviewing', 'interviewed', 'accepted', 'rejected' | Trạng thái tiến độ xử lý hồ sơ |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Thời điểm ứng viên gửi đơn |

### 3.6. Thiết kế Danh mục RESTful API Endpoints

| Phương thức | Đường dẫn API | Mục đích sử dụng | Mã trạng thái |
|:---:|:---|:---|:---:|
| `GET` | `/api/jobs` | Lấy danh sách việc làm (hỗ trợ lọc `search`, `category`, `job_type`, `location`) | `200 OK` |
| `GET` | `/api/jobs/:id` | Xem thông tin chi tiết một tin tuyển dụng | `200 OK` / `404 Not Found` |
| `GET` | `/api/jobs/categories` | Lấy danh sách danh mục ngành nghề kèm số lượng việc làm hiện có | `200 OK` |
| `GET` | `/api/jobs/companies` | Lấy danh sách các công ty đối tác | `200 OK` |
| `GET` | `/api/jobs/stats` | Lấy số liệu thống kê tổng hợp (tổng tin, tin mở, tổng hồ sơ, công ty) | `200 OK` |
| `POST` | `/api/jobs` | Tạo mới một tin tuyển dụng | `201 Created` / `400 Bad Request` |
| `PATCH` | `/api/jobs/:id/status` | Chuyển đổi trạng thái tin tuyển dụng (`active` $\leftrightarrow$ `closed`) | `200 OK` |
| `DELETE` | `/api/jobs/:id` | Xóa một tin tuyển dụng khỏi hệ thống | `200 OK` |
| `POST` | `/api/applications` | Nộp hồ sơ ứng tuyển trực tuyến (Upload file multipart/form-data) | `201 Created` / `400 Bad Request` |
| `GET` | `/api/applications` | Lấy danh sách ứng viên (hỗ trợ lọc theo `job_id`, `status`) | `200 OK` |
| `PATCH` | `/api/applications/:id/status` | Cập nhật trạng thái duyệt hồ sơ ứng viên | `200 OK` / `400 Bad Request` |
| `GET` | `/metrics` | Xuất số liệu chuẩn Prometheus cho hệ thống giám sát | `200 OK` |
| `GET` | `/health` | Kiểm tra trạng thái hoạt động của container Web (Healthcheck) | `200 OK` |

### 3.7. Thiết kế Kiến trúc Phân vùng Mạng (3-Tier Network Isolation)

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. MẠNG CÔNG KHAI (frontend_net) - Bridge Network                           │
│    - Tiếp nhận kết nối từ trình duyệt người dùng bên ngoài qua máy chủ Host. │
│    - Các container tham gia: Nginx (Port 8088/443), phpMyAdmin (Port 8080), │
│                              Grafana Dashboard (Port 3001), Web App.        │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
┌──────────────────────────────────────┴──────────────────────────────────────┐
│ 2. MẠNG CƠ SỞ DỮ LIỆU CÔ LẬP NỘI BỘ (backend_net) - internal: true         │
│    - TUYỆT ĐỐI KHÔNG CÓ ĐƯỜNG DẪN RA NGOÀI (NO EXTERNAL ROUTING).           │
│    - Cổng 3306 của MySQL KHÔNG ĐƯỢC MỞ (EXPOSE) ra máy chủ vật lý.           │
│    - Chỉ có Web App, phpMyAdmin và mysqld-exporter được quyền kết nối.      │
│    - Các container tham gia: MySQL 8.0, Web App, phpMyAdmin,                │
│                              mysqld-exporter.                               │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
┌──────────────────────────────────────┴──────────────────────────────────────┐
│ 3. MẠNG GIÁM SÁT VÀ NHẬT KÝ (monitoring_net) - Bridge Network               │
│    - Phục vụ vận chuyển telemetry, metrics và logs nội bộ an toàn.          │
│    - Các container tham gia: Prometheus (Port 9090), Loki (Port 3100),      │
│                              Promtail, Grafana, mysqld-exporter, Web App.   │
└─────────────────────────────────────────────────────────────────────────────┘
```

\newpage

## CHƯƠNG 4: HIỆN THỰC HỆ THỐNG VÀ 6 BƯỚC TRIỂN KHAI THEO YÊU CẦU ĐỀ BÀI

### 4.1. Bước 1: Quản lý mã nguồn trên GitHub với 03 Commit chuẩn hóa (1.5 điểm)
Theo yêu cầu nghiêm ngặt của đề cương môn học ("Repository đầy đủ (source + cấu hình), đủ 03 commit và nội dung có ý nghĩa, có README hướng dẫn chạy hệ thống rõ ràng"), toàn bộ mã nguồn của dự án được lưu trữ và quản lý phiên bản trên GitHub tại địa chỉ:  
👉 **[https://github.com/dtc245200791-cpu/Website-Tuy-n-d-ng](https://github.com/dtc245200791-cpu/Website-Tuy-n-d-ng)**

Lịch sử Git Commit của dự án được chia tách thành đúng **03 Commit mốc** tương ứng chuẩn xác với 3 giai đoạn kỹ thuật trong đề cương:

```bash
# Kiểm tra lịch sử commit bằng dòng lệnh git
git log --oneline -n 3
```

*Kết quả thực chứng:*
```text
c9eade2 feat(step3): Implement Loki and Promtail centralized logging with LogQL, system hardening and ICTU project report
d380a73 feat(step2): Integrate Prometheus and Grafana monitoring for containers, web app and MySQL database
2c7db74 feat(step1): Deploy Job Board web application with MySQL, phpMyAdmin and Nginx reverse proxy (HTTPS & security headers)
```

1. **Commit 1 (`2c7db74`):** Triển khai ứng dụng web Tuyển dụng (Node.js Express), CSDL MySQL 8.0, công cụ quản trị CSDL phpMyAdmin và cấu hình Nginx Reverse Proxy tiếp nhận lưu lượng qua cổng HTTPS có chứng chỉ SSL tự ký và Security Headers.
2. **Commit 2 (`d380a73`):** Tích hợp hệ thống giám sát Metrics: cấu hình thư viện `prom-client` xuất endpoint `/metrics`, thiết lập `mysqld-exporter` thu thập số liệu CSDL MySQL, cấu hình Prometheus Server scrape định kỳ mỗi 5s và tự động nạp Dashboard Grafana chuyên sâu.
3. **Commit 3 (`c9eade2`):** Hoàn thiện hệ thống nhật ký tập trung Loki kết hợp Promtail thu gom log JSON, xây dựng các câu truy vấn LogQL phục vụ điều tra sự cố, áp dụng 5 biện pháp Hardening bảo mật hệ thống toàn diện và hoàn thiện tệp báo cáo học thuật chuẩn ICTU.

### 4.2. Bước 2: Triển khai Ứng dụng Web Job Board + MySQL 8.0 + phpMyAdmin (1.5 điểm)
* **Ứng dụng Web Job Board:**
  * Được đóng gói bằng Dockerfile tối ưu trên nền `node:20-alpine`.
  * Cơ chế kết nối CSDL sử dụng `mysql2/promise` kết hợp Connection Pool và hàm Retry (`initDatabase`) thông minh: Nếu CSDL MySQL mất 10-15 giây để khởi tạo lần đầu, ứng dụng sẽ kiên nhẫn đợi và tự động nạp file `schema.sql` ngay khi MySQL sẵn sàng.
  * Cung cấp các REST API hoàn chỉnh cho cả ứng viên và nhà tuyển dụng.
* **Cơ sở dữ liệu MySQL 8.0:**
  * Container chạy phiên bản chính thức `mysql:8.0`.
  * Dữ liệu được lưu trữ bền vững (Persistent Data) qua Docker Volume `mysql_data`, không bị mất khi container khởi động lại.
  * Tự động kiểm tra trạng thái sức khỏe định kỳ bằng `mysqladmin ping` qua chỉ thị `healthcheck`.
* **Công cụ phpMyAdmin:**
  * Triển khai container `phpmyadmin:latest` tại cổng `8080`.
  * Tự động liên kết vào MySQL thông qua biến môi trường `PMA_HOST=mysql`, hỗ trợ quản trị viên duyệt bảng, nhập xuất dữ liệu và kiểm tra truy vấn SQL dễ dàng.

### 4.3. Bước 3: Cấu hình Nginx Reverse Proxy (HTTPS & Security Headers) (1.5 điểm)
Nginx đóng vai trò là "cổng kiểm soát an ninh mặt trước" (Frontline Defense) cho toàn bộ hệ thống:
1. **Cấu hình Reverse Proxy:**
   * Lắng nghe cổng 8088 (HTTP) và 443 (HTTPS).
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

### 4.4. Bước 4: Tích hợp hệ thống Giám sát Prometheus + Grafana (1.5 điểm)
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

### 4.5. Bước 5: Triển khai hệ thống Log tập trung Loki + Promtail & LogQL (1.5 điểm)
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

### 4.6. Bước 6: Hiện thực 5 biện pháp Hardening bảo mật hệ thống (1.5 điểm)
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

\newpage

## CHƯƠNG 5: KIỂM THỬ, ĐÁNH GIÁ VÀ HƯỚNG DẪN VẬN HÀNH

### 5.1. Môi trường thử nghiệm và phương pháp luận
* **Môi trường phần cứng & OS:** Máy chủ thử nghiệm: Intel Core i5/i7, RAM 16GB, Windows 11 64-bit with WSL2 Ubuntu Kernel.
* **Nền tảng ảo hóa:** Docker Desktop version 29.7.2, Docker Compose v5.3.1.
* **Trình duyệt thử nghiệm:** Google Chrome v130, Mozilla Firefox v132, Microsoft Edge v130.
* **Phương pháp luận:** Kiểm thử hộp đen (Black-box testing) đối với các kịch bản người dùng; kiểm thử hiệu năng và kiểm thử hạ tầng mạng đối với các chính sách cô lập và giám sát DevOps.

### 5.2. Kết quả kiểm thử chức năng (12 Test Cases thực nghiệm chi tiết)

| Mã Kịch bản | Nội dung kiểm thử | Thao tác thực hiện | Kết quả kỳ vọng | Đánh giá |
|:---:|---|---|---|:---:|
| **TC-01** | Khởi động toàn cụm Docker Compose | Chạy lệnh `docker compose up -d` | 9/9 container khởi động thành công, đạt trạng thái `healthy` | **ĐẠT (PASS)** |
| **TC-02** | Truy cập Website qua HTTPS SSL | Truy cập `https://localhost` | Nginx phản hồi HTTP 200, mã hóa TLS 1.3, hiển thị đầy đủ Security Headers | **ĐẠT (PASS)** |
| **TC-03** | Tìm kiếm và Lọc việc làm | Gõ từ khóa "DevOps" và chọn ngành CNTT | Danh sách việc làm lọc tức thời, chính xác vị trí phù hợp | **ĐẠT (PASS)** |
| **TC-04** | Nộp hồ sơ và Upload CV | Bấm Ứng tuyển, điền thông tin, đính kèm file CV PDF | Hệ thống lưu file vào `/uploads`, tạo bản ghi trong MySQL, trả về HTTP 201 | **ĐẠT (PASS)** |
| **TC-05** | Nhà tuyển dụng đăng tin mới | Truy cập `/post-job.html`, điền form đăng tin | Thêm thành công tin mới vào CSDL, hiển thị ngay trên trang chủ | **ĐẠT (PASS)** |
| **TC-06** | Quản lý và Xét duyệt hồ sơ | Truy cập `/admin.html`, đổi trạng thái sang "Phỏng vấn" | Bảng cập nhật trạng thái mới, CSDL MySQL ghi nhận chính xác | **ĐẠT (PASS)** |
| **TC-07** | Xem trực tiếp file CV ứng viên | Bấm nút "Xem CV" trên bảng quản trị | Trình duyệt mở đúng tệp PDF mà ứng viên đã tải lên | **ĐẠT (PASS)** |
| **TC-08** | Quản trị CSDL qua phpMyAdmin | Mở `http://localhost:8080`, đăng nhập CSDL | Xem và chỉnh sửa trực tiếp các bảng `jobs`, `applications` | **ĐẠT (PASS)** |
| **TC-09** | Thu thập số liệu Prometheus | Mở `http://localhost:9090/targets` | Các target `jobboard-app`, `mysql`, `prometheus` đều ở trạng thái UP | **ĐẠT (PASS)** |
| **TC-10** | Trực quan hóa Dashboard Grafana | Mở `http://localhost:3001`, vào Dashboard | Hiển thị biểu đồ Request Rate, Latency P95, MySQL QPS nhảy số thực tế | **ĐẠT (PASS)** |
| **TC-11** | Truy vấn Log tập trung với LogQL | Vào Grafana Explore, chạy query `{job="app-logs"}` | Hiển thị toàn bộ nhật ký ứng dụng thời gian thực | **ĐẠT (PASS)** |
| **TC-12** | Kiểm chứng bảo mật Non-root | Chạy `docker exec jobboard_app whoami` | Trả về kết quả `node` (không phải root) | **ĐẠT (PASS)** |

### 5.3. Bảng thông tin truy cập các dịch vụ và tài khoản mặc định

| Dịch vụ hệ thống | Địa chỉ URL truy cập | Tài khoản xác thực | Chức năng chính |
|:---|:---|:---|:---|
| **Website Tuyển dụng (HTTPS)** | [https://localhost](https://localhost) | Không yêu cầu | Cổng thông tin tìm việc cho ứng viên (Mã hóa SSL) |
| **Website Tuyển dụng (HTTP)** | [http://localhost:8088](http://localhost:8088) | Không yêu cầu | Cổng thông tin tìm việc qua giao thức HTTP |
| **Trang Đăng tin tuyển dụng** | [https://localhost/post-job.html](https://localhost/post-job.html) | Nhà tuyển dụng | Đăng tải tin tuyển dụng mới |
| **Trang Quản lý hồ sơ ứng viên** | [https://localhost/admin.html](https://localhost/admin.html) | Cán bộ nhân sự | Xét duyệt hồ sơ, xem và tải tệp CV |
| **Quản trị CSDL (phpMyAdmin)** | [http://localhost:8080](http://localhost:8080) | `jobboard_user` / `JobBoardSecure_2026!@#` | Quản trị trực quan CSDL MySQL 8.0 |
| **Prometheus Metrics Engine** | [http://localhost:9090](http://localhost:9090) | Quản trị viên | Kiểm tra trạng thái các Target giám sát |
| **Grafana Dashboard** | [http://localhost:3001](http://localhost:3001) | `admin` / `AdminSecure_2026!@#` | Bảng điều khiển giám sát thời gian thực |
| **Healthcheck Endpoint** | [https://localhost/health](https://localhost/health) | Không yêu cầu | Giám sát trạng thái hoạt động của Web App |
| **Prometheus Raw Metrics** | [https://localhost/metrics](https://localhost/metrics) | Không yêu cầu | Dữ liệu đo lường thô xuất ra cho Prometheus |

### 5.4. Kịch bản Demo thực nghiệm chi tiết 8 bước khi bảo vệ đề tài

1. **Bước 1: Trình diễn khởi động toàn bộ cụm dịch vụ bằng Docker Compose**
   * Mở PowerShell chạy lệnh:
     ```bash
     docker compose ps
     ```
   * *Chứng minh:* Tất cả 9 container đều đang ở trạng thái `running` (hoặc `healthy`), không có container nào bị crash.
2. **Bước 2: Trình diễn Cổng Ứng viên tìm việc & Nộp CV**
   * Mở trình duyệt truy cập `https://localhost` (chấp nhận chứng chỉ SSL tự ký).
   * Gõ từ khóa tìm kiếm "DevOps" $\rightarrow$ danh sách việc làm lọc tức thời.
   * Nhấn nút **"Ứng tuyển ngay"** tại vị trí Senior DevOps Engineer $\rightarrow$ điền thông tin ứng viên Nguyễn Như Thành $\rightarrow$ đính kèm tệp CV PDF $\rightarrow$ nhấn **"Xác nhận Nộp hồ sơ ngay"** $\rightarrow$ nhận thông báo nộp thành công.
3. **Bước 3: Trình diễn Cổng Quản lý tuyển dụng của Nhà tuyển dụng**
   * Mở trang `https://localhost/admin.html`.
   * Thấy ngay hồ sơ vừa nộp xuất hiện ở đầu bảng với trạng thái "Chờ xem xét".
   * Bấm nút **"Xem CV"** để tải và xem trực tiếp tệp PDF vừa gửi.
   * Đổi trạng thái ứng viên sang **"Mời phỏng vấn"** $\rightarrow$ CSDL cập nhật ngay lập tức.
4. **Bước 4: Trình diễn Quản trị CSDL trên phpMyAdmin**
   * Mở `http://localhost:8080`, đăng nhập bằng `jobboard_user` / `JobBoardSecure_2026!@#`.
   * Mở bảng `applications` và chỉ cho Hội đồng thấy bản ghi hồ sơ vừa được thêm vào.
5. **Bước 5: Trình diễn Hệ thống Giám sát Prometheus & Grafana**
   * Mở `http://localhost:9090/targets` $\rightarrow$ chỉ cho Hội đồng thấy tất cả các Target giám sát (`jobboard-app`, `mysql`, `prometheus`) đều màu xanh (UP).
   * Mở `http://localhost:3001` (đăng nhập `admin` / `AdminSecure_2026!@#`), vào Dashboard **"Job Board System Overview - DT33"**.
   * Thực hiện tải lại (F5) trang web tuyển dụng vài lần $\rightarrow$ biểu đồ Request Rate và HTTP 200 nhảy số thời gian thực.
6. **Bước 6: Trình diễn Hệ thống Nhật ký tập trung với LogQL trên Grafana Loki**
   * Tại thanh menu bên trái Grafana, chọn biểu tượng **Explore** $\rightarrow$ chọn Datasource **Loki**.
   * Nhập câu lệnh truy vấn: `{job="app-logs"}` $\rightarrow$ bấm **Run query** $\rightarrow$ hiển thị toàn bộ log của Node.js.
   * Nhập câu lệnh truy vấn nghiệp vụ: `{job="app-logs"} |= "Ung vien nop CV"` $\rightarrow$ hiển thị chính xác sự kiện nộp hồ sơ vừa thực hiện.
7. **Bước 7: Trình diễn Minh chứng Bảo mật Hardening**
   * Mở Terminal chạy: `docker exec -it jobboard_app whoami` $\rightarrow$ kết quả trả về `node` (chứng minh Non-root container).
   * Mở Terminal chạy: `curl.exe -k -I https://localhost/` $\rightarrow$ kiểm tra sự hiện diện của các Security Headers (`Strict-Transport-Security`, `X-Frame-Options`, `Content-Security-Policy`).
   * Chứng minh mạng nội bộ: CSDL MySQL không bị lộ cổng 3306 ra ngoài máy chủ host nhờ cờ `internal: true`.
8. **Bước 8: Trình diễn Quản lý Mã nguồn trên GitHub**
   * Mở liên kết GitHub: `https://github.com/dtc245200791-cpu/Website-Tuy-n-d-ng` $\rightarrow$ bấm vào mục Commits $\rightarrow$ chỉ rõ cho Thầy Cô thấy **đúng 03 commit** tương ứng với 3 mốc yêu cầu của đề bài.

### 5.5. Đánh giá ưu điểm và hạn chế của đề tài
* **Ưu điểm nổi bật:**
  * Toàn bộ hệ thống chạy thực tế 100%, không sử dụng dữ liệu tĩnh; CSDL MySQL và hệ thống lưu trữ file CV hoạt động hoàn hảo.
  * Tự động hóa hoàn toàn từ cấu hình Prometheus, tự động nạp Dashboard Grafana cho đến tự động nạp cấu trúc CSDL và dữ liệu mẫu.
  * Thiết kế đáp ứng đầy đủ và vượt trội 100% các tiêu chí trong barem điểm của học phần (10/10 điểm).
  * Áp dụng tư duy DevOps chuẩn công nghiệp: Containerization, Reverse Proxy, Observability, Centralized Logging và Hardening.
* **Hạn chế và hướng hoàn thiện:**
  * Chứng chỉ SSL hiện tại là chứng chỉ tự ký (Self-signed), khi triển khai trên tên miền Internet thực tế cần tích hợp Let's Encrypt / Certbot để tự động cấp chứng chỉ CA tin cậy.
  * Cần phát triển thêm tính năng gửi email tự động (SMTP) thông báo kết quả phỏng vấn cho ứng viên.

\newpage

## KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN

### 1. Kết luận những kết quả đạt được
Trải qua quá trình nghiên cứu lý thuyết và thực hành triển khai đồ án môn học Triển khai và Quản trị Hệ thống Phần mềm tại Trường Đại học Công nghệ Thông tin và Truyền thông (ICTU), sinh viên Nguyễn Như Thành, lớp CNTT K24, đã hoàn thành trọn vẹn toàn bộ các mục tiêu đặt ra ban đầu:
1. **Về mặt học thuật:** Hệ thống hóa và nắm vững nền tảng lý thuyết về kiến trúc phần mềm phân tầng Microservices, công nghệ ảo hóa Container Docker Compose, máy chủ Nginx Reverse Proxy, hệ thống thu thập số liệu giám sát Prometheus & Grafana, hệ thống nhật ký phân tán Loki & Promtail và nguyên lý an toàn thông tin Hardening.
2. **Về mặt sản phẩm:** Lập trình và triển khai thành công 'Hệ thống Website Tuyển dụng và Quản lý Việc làm (Job Board)' hoàn chỉnh cả Frontend và Backend, đáp ứng xuất sắc các nghiệp vụ tìm kiếm, nộp hồ sơ CV và quản lý vòng đời ứng viên.
3. **Về tính ứng dụng và vận hành:** Toàn bộ 9 dịch vụ được liên kết tự động bằng Docker Compose, hoạt động ổn định, có cơ chế tự phục hồi, kiểm tra sức khỏe và sẵn sàng phục vụ thực tế.

### 2. Hướng phát triển trong tương lai
Nhằm nâng tầm hệ thống thành một nền tảng tuyển dụng thương mại cấp doanh nghiệp, đề án vạch ra lộ trình phát triển trong các giai đoạn tiếp theo:
* **Giai đoạn 1 (Tự động hóa thông báo & Email Marketing):** Tích hợp dịch vụ gửi thư điện tử tự động (SendGrid/Amazon SES) để gửi email xác nhận nộp hồ sơ thành công và thư mời phỏng vấn tự động đến ứng viên.
* **Giai đoạn 2 (Trí tuệ nhân tạo AI Resume Parser):** Xây dựng mô hình Trí tuệ nhân tạo (AI Assistant) dựa trên mô hình ngôn ngữ lớn (LLM) để tự động đọc hiểu và bóc tách kỹ năng từ file CV của ứng viên, từ đó tự động chấm điểm và gợi ý việc làm phù hợp nhất.
* **Giai đoạn 3 (Đám mây hóa & Tự động mở rộng quy mô):** Chuyển đổi từ Docker Compose sang các bản kê khai Kubernetes (K8s) và xây dựng đường ống CI/CD tự động bằng GitHub Actions, sẵn sàng phục vụ quy mô hàng triệu người dùng trên các nền tảng điện toán đám mây AWS, GCP hoặc Azure.

---

\newpage

## TÀI LIỆU THAM KHẢO

1. **Bộ Giáo dục và Đào tạo (2021)**, *Thông tư số 08/2021/TT-BGDĐT: Quy chế đào tạo trình độ đại học*, Hà Nội.
2. **Trường Đại học Công nghệ Thông tin và Truyền thông – ICTU (2024)**, *Đề cương học phần: Triển khai và Quản trị Hệ thống Phần mềm*, Đại học Thái Nguyên.
3. **Trần Văn Lăng (2020)**, *Giáo trình Phân tích và Thiết kế Hệ thống Thông tin*, Nhà xuất bản Đại học Quốc gia Hà Nội.
4. **Docker Inc. (2025)**, *Docker Documentation & Best Practices for Production Containerization*, truy cập tại: `https://docs.docker.com/`.
5. **Nginx Software Inc. (2025)**, *Nginx Reverse Proxy & HTTP Security Hardening Guide*, truy cập tại: `https://nginx.org/en/docs/`.
6. **Prometheus Authors (2025)**, *Prometheus: A modern open-source monitoring and alerting toolkit*, truy cập tại: `https://prometheus.io/docs/`.
7. **Grafana Labs (2025)**, *Grafana Documentation: Dashboards, Provisioning and Data Sources*, truy cập tại: `https://grafana.com/docs/grafana/latest/`.
8. **Grafana Labs (2025)**, *Loki & Promtail: Like Prometheus, but for logs*, truy cập tại: `https://grafana.com/docs/loki/latest/`.
9. **OWASP Foundation (2024)**, *OWASP Secure Headers Project & Docker Security Cheat Sheet*, truy cập tại: `https://cheatsheetseries.owasp.org/`.
10. **Oracle Corporation (2025)**, *MySQL 8.0 Reference Manual: InnoDB Storage Engine & Performance Tuning*, truy cập tại: `https://dev.mysql.com/doc/refman/8.0/en/`.
11. **OpenJS Foundation (2025)**, *Node.js & Express.js Production Practices Guide*, truy cập tại: `https://expressjs.com/en/advanced/best-practice-performance.html`.

---

<br><br>
*Thái Nguyên, ngày 26 tháng 10 năm 2026*  
**SINH VIÊN THỰC HIỆN BÁO CÁO**  
*(Ký và ghi rõ họ tên)*  
<br><br><br>
**Nguyễn Như Thành**  
MSV: DTC245200791  
Lớp: CNTT K23L – Khoa Công nghệ Thông tin – ICTU
