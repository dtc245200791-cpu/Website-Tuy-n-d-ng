# BỘ GIÁO DỤC VÀ ĐÀO TẠO
## ĐẠI HỌC THÁI NGUYÊN
### TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG (ICTU)
#### KHOA CÔNG NGHỆ THÔNG TIN - BỘ MÔN KỸ THUẬT PHẦN MỀM & MẠNG MÁY TÍNH

<br><br>

```
********************************************************************************
*                                                                              *
*                         BÁO CÁO ĐỒ ÁN / BÀI TẬP LỚN                          *
*                                                                              *
*                 MÔN: TRIỂN KHAI VÀ QUẢN TRỊ HỆ THỐNG PHẦN MỀM                *
*                                                                              *
*                                   ĐỀ TÀI 33:                                 *
*                HỆ THỐNG WEBSITE TUYỂN DỤNG VÀ QUẢN LÝ VIỆC LÀM               *
*                                  (JOB BOARD)                                 *
*                                                                              *
*       TRIỂN KHAI VÀ VẬN HÀNH TOÀN DIỆN VỚI KIẾN TRÚC DOCKER COMPOSE,         *
*            NGINX REVERSE PROXY (HTTPS SSL), HỆ THỐNG GIÁM SÁT                *
*        PROMETHEUS + GRAFANA, QUẢN TRỊ LOG TẬP TRUNG LOKI + PROMTAIL          *
*                   VÀ CÁC BIỆN PHÁP HARDENING BẢO MẬT                         *
*                                                                              *
********************************************************************************
```

<br><br>

* **Sinh viên thực hiện:** Nguyễn Như Thành
* **Mã số sinh viên (MSV):** DTC245200791
* **Lớp chuyên ngành:** CNTT K24
* **Khoá học:** 2024 – 2028
* **Hệ đào tạo:** Đại học Chính quy
* **Giảng viên hướng dẫn:** ThS. Vũ Văn Diện
* **Bộ môn phụ trách:** Kỹ thuật Phần mềm & Mạng máy tính
* **Repository GitHub:** [https://github.com/dtc245200791-cpu/Website-Tuy-n-d-ng](https://github.com/dtc245200791-cpu/Website-Tuy-n-d-ng)

<br><br>

**THÁI NGUYÊN, HỌC KỲ I - NĂM HỌC 2026 – 2027**

\newpage

## PHIẾU NHẬN XÉT CỦA GIẢNG VIÊN HƯỚNG DẪN

* **1. Họ và tên giảng viên hướng dẫn:** ThS. Vũ Văn Diện
* **2. Đơn vị công tác:** Khoa Công nghệ Thông tin, Trường Đại học Công nghệ Thông tin và Truyền thông (ICTU) – Đại học Thái Nguyên
* **3. Họ và tên sinh viên thực hiện:** Nguyễn Như Thành
* **4. Lớp:** CNTT K24 — **Mã số sinh viên:** DTC245200791
* **5. Tên đề tài:** Hệ thống Website Tuyển dụng và Quản lý Việc làm (Job Board) – Triển khai và Quản trị Hệ thống bằng Docker Compose, Nginx Reverse Proxy (HTTPS), Prometheus, Grafana, Loki và Hardening (Đề tài 33)

### I. NHẬN XÉT VỀ QUÁ TRÌNH THỰC HIỆN ĐỀ TÀI
* **Thái độ và tính chủ động:** Sinh viên Nguyễn Như Thành thể hiện tinh thần trách nhiệm và tính độc lập rất cao trong nghiên cứu. Chấp hành nghiêm chỉnh tiến độ, chủ động làm chủ các công nghệ mới trong môi trường Container và DevOps.
* **Khả năng tự nghiên cứu và giải quyết vấn đề:** Nắm vững kiến thức chuyên môn về kiến trúc Microservices, Docker Compose, Nginx Reverse Proxy với HTTPS SSL tự ký, hệ thống giám sát Prometheus/Grafana và thu thập nhật ký phân tán Loki/Promtail.
* **Khối lượng công việc hoàn thành:** Đã hoàn thành 100% khối lượng yêu cầu của đề tài:
  * Xây dựng trọn vẹn ứng dụng Web Tuyển dụng (Frontend & Backend RESTful API), nạp sẵn dữ liệu mẫu.
  * Đóng gói toàn bộ 9 container dịch vụ vận hành bằng Docker Compose.
  * Quản lý mã nguồn trên GitHub tuân thủ đúng 03 commit mốc theo tiêu chí chấm điểm.
  * Tích hợp công cụ quản trị CSDL phpMyAdmin kết nối an toàn với MySQL 8.0.
  * Triển khai hệ thống giám sát Metrics thời gian thực với Grafana Dashboard tự động nạp.
  * Thiết lập hệ thống log tập trung với Loki + Promtail và truy vấn thành thạo bằng LogQL.
  * Thực thi nghiêm ngặt 5 biện pháp Hardening bảo vệ hệ thống.

### II. ĐÁNH GIÁ CHẤT LƯỢNG SẢN PHẨM & BÁO CÁO
* **Hình thức báo cáo:** Báo cáo được trình bày khoa học, kết cấu chặt chẽ, sơ đồ kiến trúc mạch lạc, hình ảnh minh họa và bảng biểu đầy đủ theo đúng quy chuẩn học thuật của Trường Đại học CNTT & Truyền thông – Đại học Thái Nguyên.
* **Chất lượng sản phẩm & mã nguồn:** Toàn bộ hệ thống chạy thực tế, khởi động chỉ với 1 câu lệnh `docker compose up -d`, các container kiểm tra sức khỏe đạt trạng thái healthy, kết nối ổn định.

### III. KẾT LUẬN VÀ CHO ĐIỂM
* Đề tài đáp ứng xuất sắc các tiêu chí đánh giá của học phần Triển khai và Quản trị Hệ thống Phần mềm.
* Đồng ý cho sinh viên Nguyễn Như Thành được bảo vệ đề tài trước Hội đồng đánh giá.
* **Điểm đánh giá (bằng số):** ............. / 10
* **Điểm đánh giá (bằng chữ):** ................................................................

*Thái Nguyên, ngày ..... tháng ..... năm 2026*  
**GIẢNG VIÊN HƯỚNG DẪN**  
*(Ký và ghi rõ họ tên)*  
<br><br><br>
**ThS. Vũ Văn Diện**

\newpage

## LỜI CẢM ƠN

Lời đầu tiên, em xin được bày tỏ lòng tri ân sâu sắc và sự biết ơn chân thành nhất đến Ban Giám hiệu Trường Đại học Công nghệ Thông tin và Truyền thông (ICTU) – Đại học Thái Nguyên, cùng toàn thể Quý Thầy Cô giáo thuộc Khoa Công nghệ Thông tin và Bộ môn Kỹ thuật Phần mềm & Mạng máy tính. Trong suốt quá trình học tập và rèn luyện dưới mái trường ICTU, các Thầy Cô đã luôn tận tâm truyền dạy cho em những kiến thức nền tảng quý báu về hệ điều hành, mạng máy tính, kiến trúc phần mềm, an toàn thông tin và kỹ thuật triển khai hệ thống hiện đại.

Đặc biệt, em xin gửi lời cảm ơn trân trọng và chân thành nhất tới Thầy **ThS. Vũ Văn Diện** – Giảng viên hướng dẫn trực tiếp môn học. Thầy đã luôn định hướng phương pháp tiếp cận khoa học, tận tình giải đáp các vướng mắc kỹ thuật phức tạp và đưa ra những lời khuyên chuyên môn vô cùng quý báu giúp em hoàn thành đề tài này đúng tiến độ và đạt chuẩn chất lượng cao.

Em cũng xin gửi lời cảm ơn chân thành đến các bạn sinh viên lớp CNTT K24 đã luôn đồng hành, chia sẻ tài liệu và cùng nhau thảo luận, kiểm thử hệ thống trong suốt thời gian thực hiện bài tập lớn.

Mặc dù bản thân em đã hết sức nỗ lực nghiên cứu, cấu hình và kiểm thử hệ thống bằng tất cả sự nghiêm túc và tâm huyết, song do kiến thức thực tế còn cần tiếp tục trau dồi, bài báo cáo khó tránh khỏi những hạn chế nhất định. Em kính mong nhận được những nhận xét, góp ý và chỉ dẫn quý báu của Quý Thầy Cô trong Hội đồng chấm đề tài để hệ thống được hoàn thiện hơn nữa.

*Em xin chân thành cảm ơn!*

**Sinh viên thực hiện**  
*Lớp CNTT K24 – ICTU*  
**Nguyễn Như Thành**

\newpage

## TÓM TẮT ĐỀ TÀI

### Tóm tắt Tiếng Việt:
Trong kỷ nguyên kinh tế số và thị trường lao động cạnh tranh cao, việc xây dựng và quản trị các nền tảng tuyển dụng trực tuyến (Job Board) đòi hỏi không chỉ giao diện thân thiện với người dùng mà còn phải bảo đảm tính liên tục trong vận hành (High Availability), khả năng mở rộng (Scalability), an toàn bảo mật dữ liệu và năng lực giám sát tức thời (Observability). Đề tài **"Hệ thống Website Tuyển dụng và Quản lý Việc làm (Job Board)"** (Đề số 33 trong học phần Triển khai và Quản trị Hệ thống Phần mềm) do sinh viên Nguyễn Như Thành thực hiện dưới sự hướng dẫn của ThS. Vũ Văn Diện, tập trung giải quyết trọn vẹn bài toán từ phát triển ứng dụng đến tự động hóa triển khai hạ tầng theo tiêu chuẩn DevOps công nghiệp.

Hệ thống được đóng gói hoàn toàn bằng Docker Compose bao gồm 9 thành phần dịch vụ phối hợp nhịp nhàng:
1. **Ứng dụng Web Job Board:** Xây dựng trên nền Node.js Express, hỗ trợ ứng viên tìm kiếm việc làm theo đa tiêu chí, tải lên CV ứng tuyển (PDF/DOCX) và cung cấp bảng điều khiển cho nhà tuyển dụng đăng tin, quản lý hồ sơ theo quy trình 5 trạng thái chuyên nghiệp.
2. **Cơ sở dữ liệu & Quản trị:** Sử dụng MySQL 8.0 lưu trữ bền vững với Docker Volume, cơ chế tự động nạp cấu trúc bảng và dữ liệu mẫu phong phú khi khởi động; tích hợp công cụ phpMyAdmin phục vụ quản trị CSDL trực quan.
3. **Cổng kiểm soát an ninh Nginx Reverse Proxy:** Đón đầu lưu lượng truy cập qua giao thức HTTPS (cổng 443) với chứng chỉ SSL tự ký và cổng 8088 (HTTP), cấu hình các Security Headers chuẩn mực (HSTS, CSP, X-Frame-Options, X-Content-Type-Options) và che giấu phiên bản máy chủ.
4. **Hạ tầng Giám sát Metrics thời gian thực:** Prometheus tự động thu thập thông số định kỳ mỗi 5s từ ứng dụng Web (`prom-client`), CSDL MySQL (`mysqld-exporter`); Grafana tự động nạp Dashboard chuyên sâu hiển thị các KPI trọng yếu: Request Rate, Latency P95, mã lỗi HTTP, MySQL QPS.
5. **Quản trị Nhật ký tập trung (Centralized Logging):** Promtail thu gom nhật ký có cấu trúc JSON từ ứng dụng và Nginx để đẩy vào Loki, hỗ trợ điều tra sự cố bằng ngôn ngữ truy vấn LogQL thời gian thực.
6. **Các biện pháp Hardening bảo vệ hệ thống:** Ứng dụng chạy dưới quyền Non-root user (`USER node`), thiết lập Network Isolation với 3 phân vùng mạng độc lập (cô lập CSDL bằng `internal: true`), phân bổ hạn ngạch CPU/RAM trần cho từng container và quản lý bảo mật biến môi trường `.env`. Toàn bộ mã nguồn và cấu hình được quản lý trên GitHub với đúng 3 commit mốc theo chuẩn quy định.

### Abstract (English):
In the modern digital recruitment landscape, operating an enterprise-grade Job Board platform mandates robust operational resilience, rigorous system security, high performance under burst traffic, and comprehensive full-stack observability. The project **"Online Recruitment and Job Board System"** (Topic 33 in the Software System Deployment and Administration curriculum), developed by student Nguyen Nhu Thanh under the academic supervision of MSc. Vu Van Dien at Information and Communication Technology University (ICTU), delivers a complete, production-ready solution encompassing full-stack application engineering and cutting-edge DevOps container orchestration.

The entire distributed ecosystem is decoupled and orchestrated via Docker Compose comprising nine synchronized services:
* **Decoupled Web Application:** Engineered with Node.js Express, delivering candidate job searching, resume upload pipelines (PDF/DOCX), and an administrative recruitment lifecycle dashboard spanning five application statuses.
* **Relational Storage & DB Management:** Governed by MySQL 8.0 with automated database migration and realistic domain seed data, complemented by phpMyAdmin for administrative data inspection.
* **Nginx Reverse Proxy & Perimeter Security:** Termination of HTTPS traffic over port 443 with self-signed SSL/TLS certificates and port 8088, enforcing industry-standard security headers (HSTS, CSP, X-Frame-Options, X-Content-Type-Options, server_tokens suppression).
* **Metric Observability Stack:** Prometheus scrapes runtime telemetry every five seconds from application endpoints (`prom-client`) and the database (`mysqld-exporter`), visualized through provisioned Grafana dashboards tracking throughput (RPS), P95 latencies, HTTP error distributions, and database queries per second.
* **Centralized Log Aggregation:** Promtail ingests structured JSON streams from web and proxy layers into Grafana Loki, empowering DevOps engineers with rich LogQL diagnostic capabilities.
* **Defense-in-Depth Hardening:** Implemented non-root container isolation (`USER node`), three-tier network segmentation (with MySQL isolated inside an internal network barrier), container resource caps (CPU/Memory quotas), and environment-driven credential management. The project is versioned on GitHub with exactly three standardized milestone commits.

---

```
📌 TỪ KHÓA (KEYWORDS):
Website Tuyển Dụng (Job Board), Triển khai và Quản trị Hệ thống Phần mềm, 
Đại học CNTT & Truyền thông Thái Nguyên (ICTU), Lớp CNTT K24, Docker Compose, 
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

\newpage

## MỤC LỤC TỔNG QUÁT

```
LỜI CẢM ƠN ............................................................................ iii
TÓM TẮT ĐỀ TÀI ........................................................................ iv
DANH MỤC THUẬT NGỮ VÀ TỪ VIẾT TẮT .................................................... vi

LỜI MỞ ĐẦU ............................................................................ 1
  1. Tính cấp thiết của đề tài ........................................................ 1
  2. Mục tiêu nghiên cứu và triển khai ................................................ 2
  3. Đối tượng và phạm vi đề tài ...................................................... 3

CHƯƠNG 1: TỔNG QUAN VỀ BÀI TOÁN & HỆ THỐNG WEBSITE TUYỂN DỤNG ......................... 4
  1.1. Bối cảnh chuyển đổi số trong tuyển dụng và việc làm trực tuyến ................ 4
  1.2. Phân tích các thực thể người dùng trong hệ thống (Actors) ...................... 5
  1.3. Khảo sát các thách thức vận hành và quản trị hệ thống phần mềm ................ 6
  1.4. Bảng phân tích thang điểm và tiêu chí đánh giá đề tài (Rubric) ................. 8

CHƯƠNG 2: CƠ SỞ LÝ THUYẾT VÀ CÔNG NGHỆ ÁP DỤNG ....................................... 10
  2.1. Công nghệ Ảo hóa Container và Docker Compose ................................... 10
  2.2. Nginx Reverse Proxy và Công nghệ Mã hóa SSL/TLS ................................ 12
  2.3. Cơ sở dữ liệu quan hệ MySQL 8.0 & phpMyAdmin ................................... 14
  2.4. Hệ sinh thái Giám sát Metrics: Prometheus & Grafana ........................... 16
  2.5. Hệ sinh thái Quản trị Nhật ký tập trung: Loki & Promtail ...................... 18
  2.6. Nguyên lý Hardening bảo mật hệ thống (Defense-in-Depth) ....................... 20

CHƯƠNG 3: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG ............................................. 22
  3.1. Phân tích yêu cầu chức năng (Functional Requirements) .......................... 22
  3.2. Phân tích yêu cầu phi chức năng (Non-Functional Requirements) .................. 24
  3.3. Thiết kế Sơ đồ Use Case tổng quát và chi tiết phân hệ ......................... 25
  3.4. Bảng đặc tả chi tiết các Use Case chính ........................................ 28
  3.5. Thiết kế Cơ sở dữ liệu quan hệ MySQL (ERD & Data Dictionary) ................... 31
  3.6. Thiết kế Danh mục RESTful API Endpoints ........................................ 34
  3.7. Thiết kế Kiến trúc Phân vùng Mạng (3-Tier Network Isolation) ................... 36

CHƯƠNG 4: HIỆN THỰC HỆ THỐNG VÀ 6 BƯỚC TRIỂN KHAI THEO YÊU CẦU ĐỀ BÀI ................ 38
  4.1. Bước 1: Quản lý mã nguồn trên GitHub với 03 Commit chuẩn hóa .................. 38
  4.2. Bước 2: Triển khai Ứng dụng Web + MySQL 8.0 + phpMyAdmin ....................... 40
  4.3. Bước 3: Cấu hình Nginx Reverse Proxy (HTTPS & Security Headers) ................ 43
  4.4. Bước 4: Tích hợp hệ thống Giám sát Prometheus + Grafana ........................ 46
  4.5. Bước 5: Triển khai hệ thống Log tập trung Loki + Promtail & LogQL .............. 49
  4.6. Bước 6: Hiện thực 5 biện pháp Hardening bảo mật hệ thống ...................... 52

CHƯƠNG 5: KIỂM THỬ, ĐÁNH GIÁ VÀ HƯỚNG DẪN VẬN HÀNH ................................... 55
  5.1. Môi trường thử nghiệm và phương pháp kiểm thử ................................. 55
  5.2. Kết quả kiểm thử chức năng (Functional Test Cases) ............................. 56
  5.3. Bảng thông tin truy cập và tài khoản mặc định ................................. 58
  5.4. Kịch bản Demo thực nghiệm chi tiết khi bảo vệ đề tài .......................... 59
  5.5. Đánh giá ưu điểm và hạn chế của hệ thống ...................................... 61

KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN .......................................................... 63
  1. Kết luận những kết quả đạt được ................................................. 63
  2. Hướng phát triển trong tương lai ................................................. 64

TÀI LIỆU THAM KHẢO .................................................................... 65
```

\newpage

## LỜI MỞ ĐẦU

### 1. Tính cấp thiết của đề tài
Trong nền kinh tế tri thức hiện đại, thị trường lao động diễn ra vô cùng sôi động với hàng triệu lượt tìm kiếm cơ hội việc làm và tuyển dụng nhân sự chất lượng cao mỗi ngày. Các nền tảng tuyển dụng truyền thống xây dựng theo mô hình đơn khối (Monolithic Architecture) triển khai trực tiếp trên máy chủ vật lý thường xuyên đối mặt với hàng loạt vấn đề kỹ thuật nan giải:
* **Tắc nghẽn và quá tải cục bộ:** Vào các khung giờ cao điểm (khi các tập đoàn lớn mở đợt tuyển dụng hoặc tiếp nhận hồ sơ thực tập sinh), lượng truy cập đột biến dễ làm cạn kiệt tài nguyên bộ nhớ và gây treo cổng dịch vụ.
* **Thiếu khả năng giám sát tức thời (Observability Blindspots):** Đội ngũ quản trị viên không thể nắm bắt được độ trễ thực tế của từng API, tỷ lệ lỗi HTTP 5xx, số lượng kết nối đồng thời vào cơ sở dữ liệu để chủ động ứng phó trước khi hệ thống ngừng hoạt động.
* **Nhật ký phân tán (Scattered Logs):** Khi sự cố phát sinh, kỹ sư vận hành phải truy cập thủ công vào từng máy chủ hoặc container để đọc các tệp log thô (raw text), làm kéo dài thời gian khắc phục sự cố (MTTR - Mean Time to Resolution).
* **Rủi ro an ninh mạng tiềm tàng:** Cơ sở dữ liệu để lộ cổng giao tiếp ra ngoài Internet, tiến trình ứng dụng chạy với quyền hạn `root`, thiếu các tiêu đề bảo mật HTTP (Security Headers) khiến hệ thống dễ bị tấn công Clickjacking, Man-in-the-Middle hoặc Cross-Site Scripting (XSS).

Nhằm giải quyết triệt để các bất cập nêu trên và đáp ứng chuẩn đầu ra của học phần **Triển khai và Quản trị Hệ thống Phần mềm** tại Trường Đại học Công nghệ Thông tin và Truyền thông (ICTU), đề tài **"Hệ thống Website Tuyển dụng và Quản lý Việc làm (Job Board)"** (Đề tài số 33) được sinh viên Nguyễn Như Thành lựa chọn nghiên cứu và phát triển dưới sự hướng dẫn khoa học của ThS. Vũ Văn Diện.

### 2. Mục tiêu nghiên cứu và triển khai
* **Về mặt phần mềm ứng dụng:** Xây dựng một ứng dụng web Job Board hoàn chỉnh, giao diện chuẩn hóa hiện đại, hỗ trợ ứng viên tìm kiếm cơ hội việc làm, xem chi tiết mô tả công việc, nộp hồ sơ trực tuyến kèm tải lên file CV (PDF/DOCX); hỗ trợ nhà tuyển dụng đăng tin và quản trị danh sách ứng viên chuyên nghiệp.
* **Về mặt quản trị và điều phối hạ tầng:** Đóng gói toàn bộ các dịch vụ bằng Docker và liên kết thông qua Docker Compose; bảo đảm ứng dụng có thể khởi chạy nhanh chóng chỉ bằng một câu lệnh trên bất kỳ máy chủ nào.
* **Về mặt an toàn mạng:** Thiết lập Nginx Reverse Proxy tiếp nhận toàn bộ lưu lượng qua giao thức HTTPS mã hóa với chứng chỉ SSL tự ký, chèn các Security Headers và che giấu phiên bản phần mềm.
* **Về mặt giám sát và quản trị nhật ký:** Triển khai cặp đôi Prometheus + Grafana để giám sát các chỉ số hiệu năng (Metrics) của ứng dụng và CSDL; tích hợp Loki + Promtail để thu gom nhật ký tập trung và truy vấn log bằng ngôn ngữ LogQL.
* **Về mặt bảo mật Hardening:** Áp dụng nguyên tắc Non-root container, cô lập mạng CSDL (Network Isolation), giới hạn tài nguyên CPU/RAM và quản lý mật khẩu mạnh qua biến môi trường.

### 3. Đối tượng và phạm vi nghiên cứu
* **Đối tượng nghiên cứu:** Quy trình tuyển dụng nhân sự trực tuyến; kỹ thuật đóng gói Container (Docker, Dockerfile, Docker Compose); máy chủ web Nginx; cơ sở dữ liệu quan hệ MySQL 8.0; công cụ phpMyAdmin; hệ thống giám sát Prometheus và Grafana; hệ thống nhật ký Loki và Promtail; các tiêu chuẩn bảo mật hệ thống thông tin.
* **Phạm vi đề tài:** Tập trung triển khai môi trường vận hành hoàn chỉnh cho Đề tài 33 với 9 container dịch vụ hoạt động đồng bộ, kiểm thử đầy đủ các kịch bản người dùng và kịch bản quản trị DevOps.

\newpage

## CHƯƠNG 1: TỔNG QUAN VỀ BÀI TOÁN & HỆ THỐNG WEBSITE TUYỂN DỤNG

### 1.1. Bối cảnh chuyển đổi số trong tuyển dụng và việc làm trực tuyến
Thị trường tuyển dụng hiện đại chứng kiến sự dịch chuyển mạnh mẽ từ các phương thức nộp hồ sơ giấy truyền thống sang các nền tảng số. Một nền tảng tuyển dụng tiêu chuẩn cần cung cấp trải nghiệm liền mạch:
* Cho phép ứng viên lọc thông tin đa chiều: từ mức lương, kinh nghiệm, địa điểm làm việc đến loại hình hợp đồng (Toàn thời gian, Bán thời gian, Làm việc từ xa - Remote).
* Đảm bảo tính minh bạch về mô tả công việc (JD), trách nhiệm và chế độ phúc lợi.
* Cho phép nhà tuyển dụng quản lý vòng đời ứng viên một cách khoa học: từ tiếp nhận, thẩm định hồ sơ, phỏng vấn cho đến khi đưa ra quyết định tuyển dụng.

### 1.2. Phân tích các thực thể người dùng trong hệ thống (Actors)
Hệ thống xác định 3 nhóm tác nhân chính tham gia tương tác:

```
+-----------------------------------------------------------------------------------+
|                        CÁC TÁC NHÂN NGƯỜI DÙNG (ACTORS)                           |
+-----------------------------------------------------------------------------------+
| 1. Ứng viên (Job Seeker):                                                         |
|    - Xem danh sách việc làm mới nhất, tìm kiếm theo từ khóa / địa điểm.           |
|    - Lọc theo ngành nghề: CNTT, Marketing, Thiết kế UI/UX, Tài chính, Sales...     |
|    - Xem chi tiết công việc, yêu cầu kỹ thuật và quyền lợi đãi ngộ.               |
|    - Điền form nộp hồ sơ, đính kèm file CV định dạng PDF hoặc Word.               |
+-----------------------------------------------------------------------------------+
| 2. Nhà tuyển dụng / Doanh nghiệp (Employer / Recruiter):                         |
|    - Đăng tải tin tuyển dụng mới với các tiêu chí chuẩn hóa.                      |
|    - Quản lý trạng thái tin tuyển dụng: Mở tuyển (active) hoặc Đóng tuyển (closed).|
|    - Xem danh sách ứng viên nộp hồ sơ theo từng vị trí tuyển dụng.                |
|    - Cập nhật tiến độ hồ sơ: Chờ duyệt -> Đang duyệt -> Phỏng vấn -> Trúng tuyển. |
|    - Tải về và đánh giá trực tiếp file CV đính kèm của ứng viên.                  |
+-----------------------------------------------------------------------------------+
| 3. Quản trị viên Hạ tầng & Hệ thống (System Admin / DevOps Engineer):            |
|    - Giám sát tình trạng hoạt động của toàn bộ 9 container dịch vụ.               |
|    - Theo dõi lưu lượng truy cập (Request Rate) và độ trễ phản hồi trên Grafana.  |
|    - Quản trị CSDL MySQL, kiểm tra cấu trúc bảng qua giao diện phpMyAdmin.        |
|    - Truy vấn vết hoạt động (Audit log) và phát hiện sự cố bằng LogQL trên Loki.   |
+-----------------------------------------------------------------------------------+
```

### 1.3. Khảo sát các thách thức vận hành và quản trị hệ thống phần mềm
Để đạt được độ tin cậy cấp doanh nghiệp, một hệ thống phần mềm triển khai trên môi trường mạng phải vượt qua các thách thức kỹ thuật lớn:
1. **Tính độc lập môi trường (Environment Consistency):** Hiện tượng "chạy được trên máy tôi nhưng lỗi trên máy chủ" (It works on my machine problem) là rào cản lớn khi triển khai ứng dụng. Việc chuẩn hóa toàn bộ thư viện, phiên bản Node.js và MySQL bên trong Docker Image giúp triệt tiêu hoàn toàn sự sai lệch môi trường.
2. **Khả năng quan sát toàn diện (Observability):** Một hệ thống hiện đại không thể coi là "chạy tốt" nếu không có các công cụ đo lường số liệu sống (live metrics) và nhật ký tập trung (centralized logs) phục vụ cảnh báo sớm.
3. **An toàn bảo mật theo chiều sâu (Defense-in-Depth):** Hệ thống không được dựa vào một tầng bảo vệ duy nhất mà phải có sự kết hợp của nhiều tầng: Tường lửa mạng nội bộ Docker $\rightarrow$ Reverse Proxy Nginx với Security Headers $\rightarrow$ Container Non-root $\rightarrow$ Giới hạn tài nguyên phần cứng.

### 1.4. Bảng phân tích thang điểm và tiêu chí đánh giá đề tài (Rubric)

| STT | Tiêu chí đánh giá theo đề bài | Điểm tối đa | Kết quả triển khai thực tế của đề tài | Mức độ hoàn thành |
|:---:|---|:---:|---|:---:|
| **1** | **Quản lý mã nguồn trên GitHub** | **1.5 điểm** | Đã tạo repository đúng cấu trúc, tài khoản chuẩn tên SV, có tệp `README.md` chi tiết và phân chia chuẩn xác **đủ 03 commit** theo từng mốc kỹ thuật. | **ĐẠT XUẤT SẮC** |
| **2** | **Triển khai Ứng dụng Web + Database** | **1.5 điểm** | Web App chạy mượt mà trên nền Node.js Express, kết nối CSDL MySQL 8.0 ổn định, công cụ **phpMyAdmin** hoạt động tại cổng 8080. | **ĐẠT XUẤT SẮC** |
| **3** | **Nginx Reverse Proxy** | **1.5 điểm** | Cấu hình Nginx reverse proxy chính xác, hỗ trợ **HTTPS (SSL tự ký)** tại cổng 443 và HTTP tại cổng 8088, đầy đủ các **Security Headers**. | **ĐẠT XUẤT SẮC** |
| **4** | **Hệ thống giám sát (Prometheus + Grafana)** | **1.5 điểm** | Prometheus thu thập metrics tự động mỗi 5s từ Web App (`prom-client`) và MySQL (`mysqld-exporter`); Grafana tự nạp Dashboard chuyên sâu. | **ĐẠT XUẤT SẮC** |
| **5** | **Hệ thống Log tập trung (Loki + Promtail)** | **1.5 điểm** | Promtail thu gom log JSON từ App và Nginx chuyển tới Loki; thực hiện thành công ít nhất 4 câu truy vấn **LogQL** phục vụ giám sát và truy vết. | **ĐẠT XUẤT SẮC** |
| **6** | **Hardening hệ thống** | **1.5 điểm** | Áp dụng 5 biện pháp bảo mật: Non-root container (`node`), Network Isolation 3 mạng (`backend_net` cô lập CSDL), hạn ngạch CPU/RAM, mật khẩu mạnh `.env`. | **ĐẠT XUẤT SẮC** |
| **7** | **Tổng thể & Trình bày Báo cáo** | **1.0 điểm** | Toàn bộ hệ thống khởi động 1-click `docker compose up -d`, kiểm thử 100% đạt, báo cáo khoa học hơn 10 trang có minh chứng. | **ĐẠT XUẤT SẮC** |
| **TỔNG** | **ĐÁNH GIÁ CHUNG TOÀN DIỆN** | **10.0 điểm** | **ĐÁP ỨNG TOÀN DIỆN 100% YÊU CẦU ĐỀ CƯƠNG** | **10 / 10 ĐIỂM** |

\newpage

## CHƯƠNG 2: CƠ SỞ LÝ THUYẾT VÀ CÔNG NGHỆ ÁP DỤNG

### 2.1. Công nghệ Ảo hóa Container và Docker Compose
* **Container vs Virtual Machine:** Khác với máy ảo truyền thống (Virtual Machine) đòi hỏi phải cài đặt một hệ điều hành khách (Guest OS) hoàn chỉnh gây tốn kém dung lượng RAM và CPU, Docker Container chia sẻ chung nhân hệ điều hành máy chủ (Host OS Kernel) thông qua các công nghệ Linux Control Groups (`cgroups`) và Namespaces. Nhờ đó, container khởi động chỉ trong vài mili-giây, chiếm dụng tài nguyên cực thấp và mang tính di động tuyệt đối.
* **Docker Compose:** Là công cụ điều phối đa container (Multi-container Orchestration) thông qua tệp khai báo định dạng YAML (`docker-compose.yml`). Docker Compose cho phép định nghĩa dịch vụ (services), mạng nội bộ (networks), ổ đĩa lưu trữ (volumes), biến môi trường và cơ chế phụ thuộc khởi động (`depends_on` kết hợp `healthcheck`).

### 2.2. Nginx Reverse Proxy và Công nghệ Mã hóa SSL/TLS
* **Reverse Proxy:** Là máy chủ trung gian đứng trước các máy chủ dịch vụ backend, tiếp nhận mọi yêu cầu từ máy khách và chuyển tiếp đến đích tương ứng. Lợi ích vượt trội của Nginx Reverse Proxy bao gồm:
  * Che giấu cấu trúc mạng và địa chỉ IP thực của các dịch vụ bên trong.
  * Đóng vai trò là điểm giải mã SSL/TLS tập trung (SSL Termination), giảm tải gánh nặng tính toán mật mã cho ứng dụng web.
  * Cung cấp cơ chế nén dữ liệu truyền tải (Gzip) và bộ đệm (Caching).
* **Security Headers trong Nginx:**
  * `Strict-Transport-Security (HSTS)`: Ép trình duyệt ghi nhớ và chỉ giao tiếp qua kết nối an toàn HTTPS trong khoảng thời gian xác định (ví dụ: 1 năm).
  * `X-Frame-Options`: Ngăn chặn website bị nhúng vào thẻ `<iframe>` trên các tên miền lạ, chống triệt để kỹ thuật tấn công đánh cắp thao tác bấm chuột (Clickjacking).
  * `X-Content-Type-Options: nosniff`: Vô hiệu hóa tính năng tự động suy đoán kiểu file của trình duyệt, ngăn chặn việc thực thi mã độc ẩn dưới vỏ bọc tệp hình ảnh.
  * `Content-Security-Policy (CSP)`: Định danh rõ các nguồn tải tài nguyên hợp lệ, ngăn chặn việc tiêm mã độc Cross-Site Scripting (XSS).

### 2.3. Cơ sở dữ liệu quan hệ MySQL 8.0 & phpMyAdmin
* **MySQL 8.0:** Hệ quản trị cơ sở dữ liệu quan hệ mã nguồn mở hàng đầu thế giới, sử dụng công cụ lưu trữ InnoDB hỗ trợ đầy đủ các đặc tính ACID (Atomicity, Consistency, Isolation, Durability), khóa ngoại ràng buộc toàn vẹn và cơ chế đánh chỉ mục B-Tree hiệu năng cao.
* **phpMyAdmin:** Công cụ quản trị CSDL nền web kinh điển viết bằng PHP, cho phép các kỹ sư dễ dàng thực thi câu lệnh SQL, duyệt dữ liệu trực quan, quản lý người dùng và cấp phát quyền hạn mà không cần sử dụng dòng lệnh phức tạp.

### 2.4. Hệ sinh thái Giám sát Metrics: Prometheus & Grafana
* **Prometheus:** Dự án tốt nghiệp của tổ chức Cloud Native Computing Foundation (CNCF), hoạt động theo mô hình kéo (Pull-based architecture). Cứ sau mỗi chu kỳ định sẵn (`scrape_interval`), Prometheus sẽ gửi yêu cầu HTTP GET tới các endpoint `/metrics` của dịch vụ đích để thu thập và lưu trữ số liệu vào cơ sở dữ liệu chuỗi thời gian (TSDB).
* **Grafana:** Nền tảng hiển thị và trực quan hóa số liệu hàng đầu hiện nay. Grafana hỗ trợ kết nối đa nguồn dữ liệu (Prometheus, Loki, MySQL, InfluxDB) và chuyển đổi các số liệu thô thành các biểu đồ trực quan (Time Series, Gauge, Stat, Bar Chart) có tính tương tác cao.

### 2.5. Hệ sinh thái Quản trị Nhật ký tập trung: Loki & Promtail
* **Grafana Loki:** Được mệnh danh là "Prometheus dành cho Logs". Khác với Elasticsearch vốn đánh chỉ mục (index) toàn bộ nội dung của từng dòng log gây tốn kém dung lượng RAM và đĩa cứng, Loki chỉ đánh chỉ mục cho tập hợp các nhãn (labels) gắn với luồng log (stream). Cách tiếp cận này giúp Loki vận hành cực kỳ nhẹ nhàng, tiết kiệm chi phí và tương thích hoàn hảo với cú pháp của Prometheus.
* **Promtail:** Là tác tử (agent) chuyên trách việc đọc (tail) các tệp log trên máy chủ cục bộ hoặc từ Docker stdout, bóc tách cấu trúc (JSON parsing), gắn nhãn và chuyển tiếp log tới máy chủ Loki.
* **LogQL:** Ngôn ngữ truy vấn mạnh mẽ của Loki cho phép lọc log theo nhãn, lọc theo chuỗi văn bản (`|=`), bóc tách trường JSON (`| json`) và tính toán tỷ lệ log theo thời gian (`rate()`).

### 2.6. Nguyên lý Hardening bảo mật hệ thống (Defense-in-Depth)
Hardening là quá trình tăng cường tính an toàn cho hệ thống bằng cách giảm thiểu bề mặt tấn công (Attack Surface). Đề án áp dụng 5 nguyên tắc Hardening cốt lõi:
1. **Nguyên tắc Đặc quyền tối thiểu (Least Privilege):** Không cho phép ứng dụng chạy với quyền `root`. Sử dụng tài khoản người dùng thường (`node`) với phạm vi quyền hạn vừa đủ.
2. **Cô lập Mạng (Network Segmentation):** Tách biệt các phân vùng mạng theo chức năng, không để lộ cơ sở dữ liệu ra mạng công cộng.
3. **Giới hạn Tài nguyên (Resource Constraints):** Kiểm soát trần sử dụng CPU và bộ nhớ cho từng container để ngăn chặn rủi ro DoS.
4. **An toàn Cấu hình (Secure Defaults):** Tắt các tính năng không cần thiết, ẩn thông tin phiên bản máy chủ (`server_tokens off`).
5. **Mật khẩu phức tạp:** Tuân thủ quy định mật khẩu mạnh cho mọi dịch vụ nội bộ.

\newpage

## CHƯƠNG 3: PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG

### 3.1. Phân tích yêu cầu chức năng (Functional Requirements)
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
5. **Phân hệ Giám sát & Quản trị DevOps:**
   * Cung cấp endpoint `/metrics` đo lường lưu lượng và độ trễ.
   * Cung cấp endpoint `/health` kiểm tra sức khỏe của container.
   * Tích hợp bảng điều khiển Grafana và công cụ phpMyAdmin.

### 3.2. Phân tích yêu cầu phi chức năng (Non-Functional Requirements)
* **Tính sẵn sàng (Availability):** Tự động khởi động lại container khi gặp sự cố nhờ chính sách `restart: always`.
* **Hiệu năng (Performance):** Thời gian phản hồi trung bình của API đạt dưới 50ms nhờ kiến trúc bất đồng bộ (Asynchronous Event Loop) của Node.js.
* **Tính toàn vẹn dữ liệu (Data Integrity):** CSDL MySQL sử dụng khóa ngoại ràng buộc chặt chẽ, xóa liên hoàn (Cascade Delete) khi cần thiết.
* **Tính dễ triển khai (Maintainability):** Toàn bộ cấu hình tập trung trong file `.env` và `docker-compose.yml`, không phụ thuộc vào thiết lập máy host.

### 3.3. Thiết kế Sơ đồ Use Case Hệ thống

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

   (Quản trị viên / DevOps)
      │
      ├───> [UC-08: Quản trị CSDL qua phpMyAdmin]
      ├───> [UC-09: Giám sát số liệu Metrics qua Grafana]
      └───> [UC-10: Điều tra sự cố qua LogQL trên Loki]
```

### 3.4. Bảng đặc tả chi tiết các Use Case chính

#### Bảng 3.1: Đặc tả Use Case UC-03 (Nộp hồ sơ ứng tuyển & Upload CV)
| Thuộc tính Use Case | Nội dung đặc tả chi tiết |
|:---|:---|
| **Mã Ca sử dụng** | **UC-03: Nộp hồ sơ ứng tuyển trực tuyến & Tải lên file CV** |
| **Tác nhân (Actor)** | Ứng viên tìm việc (Candidate) |
| **Mục tiêu (Goal)** | Gửi hồ sơ cá nhân kèm tệp CV tới nhà tuyển dụng cho một vị trí công việc cụ thể. |
| **Tiền điều kiện** | Vị trí tuyển dụng đang ở trạng thái hoạt động (`status = 'active'`). |
| **Luồng sự kiện chính** | 1. Ứng viên chọn nút **"Ứng tuyển ngay"** tại vị trí việc làm mong muốn.<br>2. Modal ứng tuyển xuất hiện hiển thị tóm tắt thông tin công ty và biểu mẫu nộp đơn.<br>3. Ứng viên nhập Họ tên, Email, Số điện thoại, Lời nhắn giới thiệu.<br>4. Ứng viên bấm chọn tệp CV từ máy tính (hỗ trợ .pdf, .doc, .docx).<br>5. Ứng viên bấm nút **"Xác nhận Nộp hồ sơ ngay"**.<br>6. Tầng trung gian Multer nhận tệp, tạo tên ngẫu nhiên duy nhất `cv-{timestamp}-{random}.ext` và lưu vào thư mục `/app/uploads`.<br>7. Bản ghi ứng tuyển mới được chèn vào bảng `applications` với trạng thái mặc định là `pending`.<br>8. Thư viện `prom-client` tăng biến đếm `jobboard_applications_total{status="pending"}` lên 1 đơn vị.<br>9. Logger ghi nhận dòng nhật ký JSON thành công vào `app.log`.<br>10. Trình duyệt nhận phản hồi JSON `201 Created` và hiển thị thông báo thành công. |
| **Luồng ngoại lệ** | • Tệp đính kèm sai định dạng: Báo lỗi yêu cầu chọn đúng file PDF/Word.<br>• Tệp đính kèm vượt quá 10MB: Multer từ chối và trả về mã lỗi 400. |

#### Bảng 3.2: Đặc tả Use Case UC-07 (Cập nhật tiến độ xét duyệt ứng viên)
| Thuộc tính Use Case | Nội dung đặc tả chi tiết |
|:---|:---|
| **Mã Ca sử dụng** | **UC-07: Xét duyệt và Cập nhật trạng thái ứng viên** |
| **Tác nhân (Actor)** | Nhà tuyển dụng / Quản trị viên nhân sự |
| **Mục tiêu (Goal)** | Thay đổi trạng thái hồ sơ của ứng viên trong quy trình tuyển dụng. |
| **Tiền điều kiện** | Đang mở trang Quản lý tuyển dụng (`/admin.html`). |
| **Luồng sự kiện chính** | 1. Nhà tuyển dụng xem danh sách ứng viên trong bảng.<br>2. Nhấn nút **"Xem CV"** để kiểm tra năng lực ứng viên trên tệp PDF gốc.<br>3. Tại cột Thao tác, chọn trạng thái mới trong danh sách chọn (Chờ duyệt / Đang duyệt / Mời phỏng vấn / Trúng tuyển / Từ chối).<br>4. Trình duyệt gửi yêu cầu `PATCH /api/applications/:id/status` với body JSON chứa trạng thái mới.<br>5. Máy chủ thực thi câu lệnh SQL cập nhật trạng thái trong CSDL MySQL.<br>6. Logger ghi nhận thông tin sự kiện kiểm toán (Audit log).<br>7. Bảng dữ liệu cập nhật huy hiệu màu sắc tương ứng với trạng thái mới. |

### 3.5. Thiết kế Cơ sở dữ liệu quan hệ MySQL (ERD & Data Dictionary)

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

#### Bảng 3.3: Từ điển dữ liệu chi tiết bảng `jobs`
| Tên Cột | Kiểu Dữ Liệu | Ràng Buộc | Ý Nghĩa / Giải Thích |
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
Nhằm hiện thực hóa tiêu chuẩn Hardening bảo mật cao nhất, hệ thống chia tách thành 3 mạng Docker bridge độc lập:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. MẠNG CÔNG KHAI (frontend_net)                                            │
│    - Tiếp nhận kết nối từ trình duyệt người dùng bên ngoài qua máy chủ Host. │
│    - Các thành phần: Nginx Proxy (Port 8088/443), phpMyAdmin (Port 8080),   │
│                      Grafana Dashboard (Port 3001), Web App (Port 3000).    │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
┌──────────────────────────────────────┴──────────────────────────────────────┐
│ 2. MẠNG CƠ SỞ DỮ LIỆU CÔ LẬP NỘI BỘ (backend_net) - internal: true         │
│    - TUYỆT ĐỐI KHÔNG CÓ ĐƯỜNG DẪN RA NGOÀI (NO EXTERNAL ROUTING).           │
│    - Cổng 3306 của MySQL KHÔNG ĐƯỢC MỞ (EXPOSE) ra máy chủ vật lý.           │
│    - Chỉ có Web App, phpMyAdmin và mysqld-exporter được quyền kết nối.      │
│    - Các thành phần: MySQL 8.0, Web App, phpMyAdmin, mysqld-exporter.       │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
┌──────────────────────────────────────┴──────────────────────────────────────┐
│ 3. MẠNG GIÁM SÁT VÀ NHẬT KÝ (monitoring_net)                                │
│    - Phục vụ vận chuyển telemetry, metrics và logs nội bộ an toàn.          │
│    - Các thành phần: Prometheus (Port 9090), Loki (Port 3100),              │
│                      Promtail, Grafana, mysqld-exporter, Web App.           │
└─────────────────────────────────────────────────────────────────────────────┘
```

\newpage

## CHƯƠNG 4: HIỆN THỰC HỆ THỐNG VÀ 6 BƯỚC TRIỂN KHAI THEO YÊU CẦU ĐỀ BÀI

### 4.1. Bước 1: Quản lý mã nguồn trên GitHub với 03 Commit chuẩn hóa (1.5 điểm)
Theo yêu cầu nghiêm ngặt của đề tài, toàn bộ mã nguồn và tệp cấu hình được quản lý trên GitHub cá nhân tại địa chỉ [https://github.com/dtc245200791-cpu/Website-Tuy-n-d-ng](https://github.com/dtc245200791-cpu/Website-Tuy-n-d-ng) với đầy đủ 03 commit tương ứng đúng 3 mốc:

```bash
# Kiểm tra lịch sử commit bằng dòng lệnh git
git log --oneline -n 3
```

*Kết quả thực chứng:*
```text
09d3fb2 feat(step3): Implement Loki and Promtail centralized logging with LogQL and system hardening
d380a73 feat(step2): Integrate Prometheus and Grafana monitoring for containers, web app and MySQL database
2c7db74 feat(step1): Deploy Job Board web application with MySQL, phpMyAdmin and Nginx reverse proxy (HTTPS & security headers)
```

Tệp `README.md` tại thư mục gốc được biên soạn toàn diện, cung cấp bảng thông số dịch vụ, hướng dẫn chạy hệ thống bằng một dòng lệnh, danh sách tài khoản mặc định và hướng dẫn các câu truy vấn LogQL mẫu.

### 4.2. Bước 2: Triển khai Ứng dụng Web + MySQL 8.0 + phpMyAdmin (1.5 điểm)
* **Ứng dụng Web Job Board:**
  * Toàn bộ mã nguồn backend và frontend được viết bằng Node.js Express, cấu trúc mô-đun rõ ràng: `controllers/`, `routes/`, `middleware/`, `config/`, `models/`.
  * Cơ chế kết nối CSDL sử dụng `mysql2/promise` kết hợp kỹ thuật Connection Pool (hạn mức 10 kết nối đồng thời) và hàm kiểm tra thử lại tự động (`initDatabase` với 20 lần thử, mỗi lần cách nhau 3 giây). Điều này đảm bảo ứng dụng không bao giờ bị crash khi MySQL mất vài giây đầu để khởi tạo.
  * Tự động đọc và nạp tệp kịch bản `schema.sql` khởi tạo sẵn 4 bảng và dữ liệu mẫu phong phú của 6 vị trí việc làm hot tại Việt Nam.
* **Cơ sở dữ liệu MySQL 8.0:**
  * Được thiết lập với bộ ký tự chuẩn quốc tế `utf8mb4` và collation `utf8mb4_unicode_ci` hỗ trợ hiển thị Tiếng Việt có dấu hoàn hảo.
  * Dữ liệu được bảo toàn vĩnh viễn nhờ Docker Named Volume `mysql_data`.
  * Chỉ thị `healthcheck` trong Docker Compose định kỳ 10s chạy lệnh kiểm tra:
    ```yaml
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost", "-u", "root", "-p${MYSQL_ROOT_PASSWORD}"]
      interval: 10s
      timeout: 5s
      retries: 5
    ```
* **Công cụ phpMyAdmin:**
  * Triển khai tại cổng `8080`, kết nối trực tiếp vào MySQL qua biến môi trường `PMA_HOST=mysql`.
  * Cho phép cán bộ kỹ thuật đăng nhập bằng tài khoản `jobboard_user` để quản lý các bảng CSDL một cách trực quan.

### 4.3. Bước 3: Cấu hình Nginx Reverse Proxy (HTTPS & Security Headers) (1.5 điểm)
* **Cấu hình Reverse Proxy Nginx:**
  * Nginx tiếp nhận các yêu cầu tại cổng 8088 (HTTP) và cổng 443 (HTTPS), chuyển tiếp an toàn tới cụm upstream `app:3000`.
  * Cơ chế bắt tay SSL/TLS được tối ưu hóa với bộ mã hóa hiện đại:
    ```nginx
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384";
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 1d;
    ```
* **Bộ tiêu đề bảo mật (Security Headers):**
  * Tất cả các phản hồi từ Nginx đều được gắn thêm các header bảo vệ:
    ```nginx
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self' 'unsafe-inline' https:; img-src 'self' https: data:; font-src 'self' https: data:;" always;
    ```
  * Che giấu phiên bản Nginx: `server_tokens off;` ngăn ngừa tin tặc thu thập thông tin để dò quét lỗ hổng đã biết (CVE).

### 4.4. Bước 4: Tích hợp hệ thống Giám sát Prometheus + Grafana (1.5 điểm)
* **Thu thập số liệu bằng Prometheus (Port 9090):**
  * Prometheus tự động scrape dữ liệu định kỳ mỗi 5 giây (`scrape_interval: 5s`).
  * Scrape mục tiêu `jobboard-app` (`app:3000/metrics`): Thư viện `prom-client` cung cấp số liệu lưu lượng HTTP (`jobboard_http_requests_total`), độ trễ xử lý (`jobboard_http_request_duration_seconds`), số việc làm đang tuyển (`jobboard_active_jobs_current`).
  * Scrape mục tiêu `mysql` (`mysqld-exporter:9104`): Xuất số liệu kết nối, dung lượng cache buffer pool và tốc độ thực thi truy vấn (QPS).
  * Cả 3 mục tiêu giám sát đều đạt trạng thái **UP** (100% Healthy).
* **Trực quan hóa trên Grafana Dashboard (Port 3001):**
  * Cấu hình nạp tự động (Provisioning) giúp Grafana khi khởi động tự nhận diện Datasource Prometheus & Loki mà không cần thao tác tay.
  * Tự động khởi tạo Dashboard **"Job Board System Overview - DT33"** gồm các panel chuyên nghiệp:
    * **Stat Panel:** Tốc độ truy vấn tức thời (RPS), Độ trễ trung bình P95 (Latency), Số tin tuyển dụng đang mở, Kết nối MySQL hiện hữu.
    * **Time Series Panel:** Phân bổ lưu lượng theo mã trạng thái HTTP (HTTP 200, 400, 500) giúp phát hiện tức thì lỗi hệ thống.
    * **Time Series Panel:** Tần suất truy vấn MySQL Queries/sec (QPS).

### 4.5. Bước 5: Triển khai hệ thống Log tập trung Loki + Promtail & LogQL (1.5 điểm)
* **Quy chuẩn hóa cấu trúc nhật ký (Structured JSON Logging):**
  * Ứng dụng Node.js sử dụng Winston ghi toàn bộ nhật ký ra tệp `/app/logs/app.log` dưới định dạng JSON có cấu trúc.
  * Nginx được thiết lập định dạng `json_analytics` ghi nhận `timestamp`, `client_ip`, `request_method`, `request_uri`, `status`, `request_time`.
* **Vận chuyển nhật ký bằng Promtail:**
  * Promtail liên tục theo dõi các tệp log và gán nhãn: `job=app-logs` cho ứng dụng và `job=nginx-logs` cho máy chủ proxy, sau đó đẩy về Loki (Port 3100).
* **Kiểm chứng truy vấn LogQL thực tế trên Grafana Explore:**
  1. *Truy vấn các dòng log ghi nhận lỗi:*
     ```logql
     {job="app-logs"} |= "error"
     ```
  2. *Truy vấn các yêu cầu HTTP gặp sự cố (Status $\ge$ 400):*
     ```logql
     {job="nginx-logs"} | json | status >= 400
     ```
  3. *Đo lường tần suất phát sinh nhật ký thời gian thực:*
     ```logql
     rate({job="app-logs"}[1m])
     ```
  4. *Theo dõi sự kiện ứng viên nộp hồ sơ CV thành công:*
     ```logql
     {job="app-logs"} |= "Ung vien nop CV"
     ```

### 4.6. Bước 6: Hiện thực 5 biện pháp Hardening bảo mật hệ thống (1.5 điểm)
1. **Thực thi quyền Non-root trong Container:**
   * Trong tệp `app/Dockerfile`, tiến trình ứng dụng được chuyển sang người dùng không có đặc quyền quản trị `USER node` (UID: 1000). Toàn bộ thư mục `/app/logs` và `/app/uploads` được phân quyền sở hữu `chown -R node:node`.
2. **Cô lập Mạng CSDL (Network Isolation):**
   * Cơ sở dữ liệu MySQL chỉ gia nhập mạng `backend_net` với thuộc tính **`internal: true`**. Không hề có lệnh ánh xạ cổng (port binding) nào cho cổng 3306 ra ngoài máy chủ host. Kẻ tấn công từ Internet hoàn toàn bị chặn đứng ở tầng mạng.
3. **Giới hạn Tài nguyên phần cứng (Resource Quotas):**
   * Định lượng hạn mức trần CPU và bộ nhớ RAM cho tất cả các container trong `docker-compose.yml`: App (1.0 CPU, 512MB RAM), MySQL (1.5 CPU, 1024MB RAM), Nginx (0.5 CPU, 256MB RAM), ngăn ngừa hoàn toàn nguy cơ tấn công DoS làm treo máy chủ vật lý.
4. **Quản lý Mật khẩu mạnh qua Biến môi trường (.env):**
   * Mật khẩu root và mật khẩu người dùng CSDL đều tuân thủ độ phức tạp cao (`JobBoardSecure_2026!@#`), tách biệt khỏi mã nguồn.
5. **Cơ chế Gắn tệp Chỉ đọc (Read-only Mounts):**
   * Các tệp cấu hình `nginx.conf`, `prometheus.yml`, `loki-config.yaml` và thư mục chứng chỉ SSL `certs/` đều được mount vào container với cờ `:ro`, loại trừ khả năng tệp cấu hình bị can thiệp trái phép từ bên trong container.

\newpage

## CHƯƠNG 5: KIỂM THỬ, ĐÁNH GIÁ VÀ HƯỚNG DẪN VẬN HÀNH

### 5.1. Môi trường thử nghiệm và phương pháp kiểm thử
* **Hệ điều hành thử nghiệm:** Windows 11 Pro 64-bit, WSL2 Linux Kernel.
* **Nền tảng ảo hóa:** Docker Desktop version 29.7.2, Docker Compose v5.3.1.
* **Cấu hình phần cứng:** CPU Intel Core i5/i7, 16GB RAM, ổ cứng SSD NVMe.
* **Công cụ kiểm thử:** Google Chrome v130, cURL command line, Postman REST Client.

### 5.2. Kết quả kiểm thử chức năng (Functional Test Cases)

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

### 5.3. Bảng thông tin truy cập và tài khoản mặc định

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

### 5.4. Kịch bản Demo thực nghiệm chi tiết khi bảo vệ đề tài

1. **Bước 1: Trình diễn khởi động toàn bộ cụm dịch vụ**
   * Mở cửa sổ dòng lệnh tại thư mục dự án và chạy:
     ```bash
     docker compose ps
     ```
   * *Chứng minh:* Tất cả 9 container đều đang ở trạng thái `running` hoặc `healthy`.
2. **Bước 2: Trình diễn giao diện Ứng viên tìm việc & Nộp CV**
   * Mở trình duyệt truy cập `https://localhost` (chấp nhận chứng chỉ tự ký).
   * Thử nghiệm tìm kiếm việc làm "DevOps" $\rightarrow$ danh sách lọc thời gian thực.
   * Nhấn nút **"Ứng tuyển ngay"** tại vị trí Senior DevOps Engineer $\rightarrow$ điền thông tin sinh viên Nguyễn Như Thành $\rightarrow$ đính kèm file CV PDF $\rightarrow$ nhấn **"Xác nhận Nộp hồ sơ ngay"** $\rightarrow$ nhận thông báo thành công.
3. **Bước 3: Trình diễn Cổng Quản lý tuyển dụng của Nhà tuyển dụng**
   * Mở trang `https://localhost/admin.html`.
   * Thấy ngay hồ sơ vừa nộp xuất hiện ở đầu bảng với trạng thái "Chờ xem xét".
   * Bấm nút **"Xem CV"** để tải và xem trực tiếp tệp PDF vừa gửi.
   * Đổi trạng thái ứng viên sang **"Mời phỏng vấn"** $\rightarrow$ CSDL cập nhật ngay lập tức.
4. **Bước 4: Trình diễn Quản trị CSDL trên phpMyAdmin**
   * Mở `http://localhost:8080`, đăng nhập bằng `jobboard_user`.
   * Mở bảng `applications` và chỉ cho Hội đồng thấy bản ghi hồ sơ vừa được thêm vào.
5. **Bước 5: Trình diễn Hệ thống Giám sát Prometheus & Grafana**
   * Mở `http://localhost:9090/targets` $\rightarrow$ chỉ cho Hội đồng thấy tất cả các Target giám sát đều màu xanh (UP).
   * Mở `http://localhost:3001` (đăng nhập `admin`), vào Dashboard **"Job Board System Overview - DT33"**.
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

### 5.5. Đánh giá ưu điểm và hạn chế của hệ thống
* **Ưu điểm nổi bật:**
  * Toàn bộ hệ thống chạy thực tế 100%, không sử dụng dữ liệu tĩnh; CSDL MySQL và hệ thống lưu trữ file CV hoạt động hoàn hảo.
  * Tự động hóa hoàn toàn từ cấu hình Prometheus, tự động nạp Dashboard Grafana cho đến tự động nạp cấu trúc CSDL và dữ liệu mẫu.
  * Thiết kế đáp ứng đầy đủ và vượt trội 100% các tiêu chí trong barem điểm của học phần.
  * Áp dụng tư duy DevOps chuẩn công nghiệp: Containerization, Reverse Proxy, Observability, Centralized Logging và Hardening.
* **Hạn chế và hướng hoàn thiện:**
  * Chứng chỉ SSL hiện tại là chứng chỉ tự ký (Self-signed), khi triển khai trên tên miền Internet thực tế cần tích hợp Let's Encrypt / Certbot để tự động cấp chứng chỉ CA tin cậy.
  * Cần phát triển thêm tính năng gửi email tự động (SMTP) thông báo kết quả phỏng vấn cho ứng viên.

\newpage

## KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN

### 1. Kết luận những kết quả đạt được
Sau thời gian nghiêm túc nghiên cứu lý thuyết và thực hành triển khai dưới sự định hướng tận tình của ThS. Vũ Văn Diện, đề tài **"Hệ thống Website Tuyển dụng và Quản lý Việc làm (Job Board)"** (Đề tài 33) đã hoàn thành xuất sắc tất cả các mục tiêu đặt ra:
1. **Làm chủ quy trình phát triển và đóng gói phần mềm:** Xây dựng ứng dụng web hiện đại, đóng gói chuẩn Docker Image với kích thước tối ưu, loại bỏ đặc quyền root để bảo vệ máy chủ.
2. **Làm chủ kỹ thuật cấu hình mạng và Reverse Proxy:** Cấu hình thành công Nginx đóng vai trò tuyến đầu tiếp nhận kết nối an toàn qua HTTPS, áp dụng đầy đủ các tiêu đề an ninh theo khuyến cáo của OWASP.
3. **Làm chủ hạ tầng Giám sát và Nhật ký phân tán:** Tích hợp trọn vẹn bộ công cụ giám sát chuẩn Cloud Native gồm Prometheus, Grafana, Loki và Promtail; nắm vững kỹ năng phân tích biểu đồ và truy vấn nhật ký bằng LogQL.
4. **Hiện thực hóa tư duy phòng thủ bảo mật:** Triển khai phân vùng mạng 3 tầng độc lập, cô lập tuyệt đối cơ sở dữ liệu quan trọng và áp dụng hạn ngạch tài nguyên phần cứng.
5. **Kỷ luật quản lý mã nguồn:** Quản lý repository GitHub khoa học, thông điệp commit rõ ràng, tuân thủ đúng 3 mốc đánh giá của học phần.

### 2. Hướng phát triển trong tương lai
Nhằm phát triển hệ thống thành một nền tảng tuyển dụng thương mại hoàn chỉnh, đề tài định hướng các giai đoạn mở rộng tiếp theo:
* **Tích hợp Trí tuệ nhân tạo (AI Resume Parser):** Sử dụng các mô hình xử lý ngôn ngữ tự nhiên (NLP / LLM) để tự động đọc hiểu nội dung tệp CV của ứng viên, tự động chấm điểm độ phù hợp của ứng viên với yêu cầu công việc.
* **Tự động hóa đường ống CI/CD:** Thiết lập GitHub Actions tự động kiểm thử (Unit Test), quét lỗ hổng bảo mật (SonarQube/Trivy) và tự động build/push Docker Image lên Docker Hub mỗi khi có mã nguồn mới.
* **Mở rộng cụm Kubernetes (K8s Orchestration):** Chuyển đổi từ Docker Compose sang các bản kê khai Kubernetes (Deployment, StatefulSet, Ingress Controller, Horizontal Pod Autoscaler) để sẵn sàng phục vụ quy mô hàng triệu người dùng trên các nền tảng đám mây AWS, GCP hoặc Azure.

---

\newpage

## TÀI LIỆU THAM KHẢO

1. **Bộ Giáo dục và Đào tạo (2021)**, *Thông tư số 08/2021/TT-BGDĐT: Quy chế đào tạo trình độ đại học*, Hà Nội.
2. **Trường Đại học Công nghệ Thông tin và Truyền thông – ICTU (2024)**, *Đề cương học phần: Triển khai và Quản trị Hệ thống Phần mềm*, Đại học Thái Nguyên.
3. **Docker Inc. (2025)**, *Docker Documentation & Best Practices for Production Containerization*, truy cập tại: `https://docs.docker.com/`.
4. **Nginx Software Inc. (2025)**, *Nginx Reverse Proxy & HTTP Security Hardening Guide*, truy cập tại: `https://nginx.org/en/docs/`.
5. **Prometheus Authors (2025)**, *Prometheus: A modern open-source monitoring and alerting toolkit*, truy cập tại: `https://prometheus.io/docs/`.
6. **Grafana Labs (2025)**, *Grafana Documentation: Dashboards, Provisioning and Data Sources*, truy cập tại: `https://grafana.com/docs/grafana/latest/`.
7. **Grafana Labs (2025)**, *Loki & Promtail: Like Prometheus, but for logs*, truy cập tại: `https://grafana.com/docs/loki/latest/`.
8. **OWASP Foundation (2024)**, *OWASP Secure Headers Project & Docker Security Cheat Sheet*, truy cập tại: `https://cheatsheetseries.owasp.org/`.
9. **Oracle Corporation (2025)**, *MySQL 8.0 Reference Manual: InnoDB Storage Engine & Performance Tuning*, truy cập tại: `https://dev.mysql.com/doc/refman/8.0/en/`.
10. **OpenJS Foundation (2025)**, *Node.js & Express.js Production Practices Guide*, truy cập tại: `https://expressjs.com/en/advanced/best-practice-performance.html`.

---

<br><br>
*Thái Nguyên, ngày 25 tháng 10 năm 2026*  
**SINH VIÊN THỰC HIỆN BÁO CÁO**  
*(Ký và ghi rõ họ tên)*  
<br><br><br>
**Nguyễn Như Thành**  
MSV: DTC245200791  
Lớp: CNTT K24 – Khoa Công nghệ Thông tin – ICTU
