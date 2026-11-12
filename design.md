# Design — HyperData Lab JSM Download Landing Page

## 1. Mục tiêu và phạm vi

Landing page giới thiệu và phân phối ứng dụng desktop JSM của HyperData Lab. Tên hiển thị dùng trong thiết kế là **HyperData Lab JSM**; mã nguồn hiện có một vài cách viết khác nhau cho phần mở rộng JSM, vì vậy không bung acronym trong headline cho đến khi nhóm chốt tên chính thức.

Đối tượng chính là sinh viên nghiên cứu, học viên cao học, giảng viên và tác giả cần kiểm tra phong cách bản thảo hoặc tìm tạp chí phù hợp.

Hành động chính: tải bản Windows x64 từ một URL phát hành công khai đã cấu hình.  
Hành động phụ: xem tính năng, cách sử dụng và yêu cầu hệ thống.

Landing page là ứng dụng web React riêng. JSM hiện tại là Flutter desktop app với backend FastAPI; không dùng widget Flutter để dựng trang web.

## 2. Sản phẩm và nội dung

Các khả năng đã thấy trong frontend JSM:

- Tải bản thảo dạng TXT hoặc PDF, giới hạn hiện tại 15 MB.
- Phân tích phong cách viết và các bước tu từ của bản thảo so với tạp chí mục tiêu.
- Hiển thị điểm phù hợp, cảnh báo phong cách và câu tham khảo kèm DOI khi có dữ liệu.
- Gợi ý tạp chí dựa trên hồ sơ phong cách viết.
- Xem lại lịch sử đánh giá.

Thông điệp chính đề xuất:

**Tiêu đề:** “Chọn tạp chí phù hợp. Hoàn thiện bản thảo tự tin hơn.”  
**Mô tả:** “JSM phân tích phong cách viết học thuật, đối chiếu bản thảo với hồ sơ tạp chí và giúp bạn tìm nơi gửi phù hợp hơn.”  
**CTA:** “Tải JSM cho Windows”  
**CTA phụ:** “Xem cách hoạt động”

Không hứa hẹn bài báo sẽ được chấp nhận. Không mô tả công cụ như trình kiểm tra đạo văn. Số liệu, nguồn dữ liệu và kỳ cập nhật chỉ xuất hiện khi có bằng chứng sản phẩm.

## 3. Hướng hình ảnh

Dùng ảnh HyperData Lab do người dùng cung cấp và design tokens hiện có trong app làm chuẩn:

- Giao diện sáng, nền giấy xanh xám rất nhạt.
- Thanh điều hướng và card trắng.
- Navy đậm cho tiêu đề, xám xanh cho mô tả.
- Xanh dương làm màu nhận diện cho CTA và trạng thái đang chọn.
- Bóng mềm, đường viền mảnh, khoảng trắng thoáng.
- Hero hai cột: nội dung ở trái, bảng tải app hoặc ảnh màn hình ứng dụng ở phải.

Giữ cảm giác học thuật, thân thiện và rõ ràng. Tránh neon, nền tối, gradient nhiều màu và hiệu ứng chuyển động quá mạnh.

## 4. Design tokens

Các giá trị dưới đây khớp với palette hiện tại trong JSM frontend, tại lib/app/theme/app_colors.dart.

| Vai trò | Token gợi ý | HEX |
|---|---|---:|
| Primary | jsm-primary | #0071BC |
| Primary hover | jsm-primary-hover | #005F9E |
| Primary tint | jsm-primary-tint | #F0F7FC |
| Selection tint | jsm-selection | #E1F0FA |
| Page background | jsm-background | #F7F9FA |
| Surface | jsm-surface | #FFFFFF |
| Surface soft | jsm-surface-soft | #F3F6F9 |
| Surface muted | jsm-surface-muted | #EDF3F7 |
| Main text | jsm-ink | #122331 |
| Secondary text | jsm-text-secondary | #647381 |
| Muted text | jsm-text-subtle | #8B9AA4 |
| Border | jsm-border | #DCE4E9 |
| Soft border | jsm-border-soft | #E8EEF2 |

Dùng Manrope cho tiêu đề, nội dung, nút và metadata; fallback Roboto, Arial, sans-serif. Đây là font chính và fallback chain của app hiện tại.

Màu trạng thái success/error/warning chỉ dùng cho trạng thái tương ứng; không dùng thay màu nhận diện. Giữ chữ trên CTA primary màu trắng.

## 5. Cấu trúc landing page

### Header

- Wordmark HyperData Lab, không gắn badge JSM cạnh logo. Logo image: 34x34 px; wordmark: 19 px. Favicon uses a tight crop from assets/app_logo.png to fill the tab icon.
- Điều hướng: Tính năng, Cách hoạt động, Tải ứng dụng, Hỏi đáp.
- CTA chính “Tải cho Windows”.
- Mobile: luôn hiện chữ HyperData Lab; menu Sheet trượt vào bằng Motion và CTA tải vẫn nhìn thấy rõ.

### Hero

- Eyebrow: “JOURNAL SYSTEM MINER” hoặc bản dịch “PHÂN TÍCH PHONG CÁCH TẠP CHÍ”.
- H1 và mô tả theo nội dung mục 2.
- CTA chính tải Windows; CTA phụ cuộn đến tính năng hoặc hướng dẫn.
- Hình bên phải là screenshot thật của JSM: chọn tạp chí, tải bản thảo, trạng thái phân tích hoặc hồ sơ phong cách.
- Nếu dùng ảnh sản phẩm giả lập, ghi rõ “Ảnh minh họa”.

### Download panel

Một card trắng nổi bật ngay trong hero hoặc ngay sau hero:

- Nền tảng: Windows x64.
- Định dạng gói, phiên bản, ngày phát hành và dung lượng.
- Nút tải liên kết đến URL public của bản phát hành hiện hành.
- Link hướng dẫn cài đặt và checksum nếu bản phát hành có cung cấp.
- Nếu chưa có URL public, trạng thái nút là “Bản tải sắp có”; không gắn href giả hoặc đường dẫn máy local.

Build hiện có archive Windows x64 trong thư mục build của jsm-fe, nhưng đó là file cục bộ. Workflow CI hiện build Windows app và chưa có bước upload release asset. Chỉ bật CTA sau khi có URL phát hành ổn định. Không hiển thị các nền tảng chưa có artifact xác nhận.

### Tính năng

Bố cục 3–4 card gọn:

1. Kiểm tra bản thảo TXT/PDF và chọn tạp chí mục tiêu.
2. Xem điểm phù hợp cùng cảnh báo về phong cách và cấu trúc tu từ.
3. Đọc câu tham khảo và DOI khi kết quả có dữ liệu nguồn.
4. Nhận danh sách tạp chí đề xuất và xem lại lịch sử đánh giá.

### Cách hoạt động

1. Chọn hoặc tìm tạp chí mục tiêu.
2. Tải bản thảo TXT/PDF.
3. Xem kết quả, gợi ý và các nguồn tham khảo.

### Ảnh sản phẩm và FAQ

- Dùng screenshot thật, cắt theo cùng tỉ lệ và không làm lộ dữ liệu cá nhân.
- FAQ tập trung vào định dạng tệp, giới hạn 15 MB, nền tảng được hỗ trợ, cài đặt và cách cập nhật.
- Câu trả lời về lưu trữ bản thảo và quyền riêng tư phải khớp với chính sách đã xác minh.
- Footer có link tải, hướng dẫn, phiên bản, giấy phép/chính sách và kênh hỗ trợ khi đã có URL thực tế.

## 6. Hành vi tải xuống

- Landing page hiện chỉ quảng bá Windows x64 vì đây là target build/release được xác nhận trong repo frontend.
- Dùng URL HTTPS ổn định từ GitHub Releases hoặc hosting phát hành chính thức; không dùng đường dẫn E:\jsm\... trên trang công khai.
- Nút tải phải có trạng thái đang tải, lỗi tải và thành công mở/tải file.
- Hiển thị đúng tên file, version, dung lượng, ngày phát hành và checksum từ manifest phát hành.
- Trước khi công khai archive, rà soát nội dung package và cấu hình runtime. Archive build hiện tại có chứa file .env; xác minh file này chỉ chứa cấu hình public trước khi đưa bất kỳ package nào lên hosting.
- Không đưa các nút macOS, Linux, Android, iOS hoặc web app vào trang nếu chưa có bản phát hành tương ứng.

## 7. Thư viện UI và chuyển động

### Shadcn UI

Dùng làm lớp component tương tác và accessibility:

- Button cho CTA tải và liên kết phụ.
- Card cho download panel và feature cards.
- Badge cho nền tảng, phiên bản và trạng thái phát hành.
- Accordion cho FAQ.
- Sheet cho điều hướng mobile.
- Tooltip chỉ dùng cho metadata cần giải thích.

### Aceternity UI

Dùng có chọn lọc để tạo chiều sâu thị giác:

- Spotlight hoặc hiệu ứng nền nhẹ trong hero, giới hạn màu về primary blue với opacity thấp.
- Hover Border Gradient trên download card hoặc CTA phụ.
- Bento Grid cho khu vực tính năng nếu nội dung cần nhấn mạnh không đều.

Không chồng nhiều hiệu ứng trong cùng một section. Nội dung tải xuống, phiên bản và trạng thái phát hành phải luôn nổi bật hơn trang trí.

### Phụ thuộc bắt buộc

| Package/cấu hình | Mục đích |
|---|---|
| Tailwind CSS | Class styling cần cho component Aceternity |
| Motion hoặc Framer Motion | Animation theo import của component được chép |
| clsx | Ghép class có điều kiện |
| tailwind-merge | Gộp và xử lý xung đột utility Tailwind |
| Hàm cn() | Kết hợp clsx và tailwind-merge, đặt trong src/lib/utils.ts |
| shadcn/ui | Khởi tạo cấu hình, component đặt trong source của landing page |

Kiểm tra import và dependency riêng của từng component Aceternity trước khi thêm vào. Không cài cả motion và framer-motion nếu các component đã chọn chỉ cần một package.

Tài liệu: [Aceternity UI components](https://ui.aceternity.com/components) · [shadcn/ui components](https://ui.shadcn.com/docs/components).

## 8. Responsive, chuyển động và accessibility

- Desktop: container tối đa 1200px; hero hai cột, download panel có chiều rộng đủ để đọc metadata.
- Tablet/mobile: xếp hero thành một cột; chuyển download card lên gần CTA; menu dùng Sheet.
- Card và bảng không gây tràn ngang; screenshot có thể crop nhưng không cắt nội dung quan trọng.
- Hiệu ứng chỉ phục vụ thứ bậc thông tin: reveal nhẹ khi vào viewport, hover nâng tối đa 1–2px.
- Tôn trọng prefers-reduced-motion; trạng thái tải không chỉ biểu đạt bằng animation.
- CTA cao tối thiểu 44px, focus-visible rõ, hỗ trợ keyboard và screen reader.
- Duy trì tương phản WCAG AA cho chữ thường; kiểm tra riêng chữ trắng trên primary blue và muted text trên nền sáng.
- Dùng heading theo thứ tự, semantic landmarks, alt text cho screenshot và mô tả bằng chữ cho biểu đồ/ảnh dashboard.

## 9. Điều kiện hoàn thành thiết kế

- Trang giới thiệu đúng app HyperData Lab JSM và khả năng kiểm tra bản thảo/gợi ý tạp chí.
- Màu sắc khớp screenshot và AppColors hiện có.
- CTA Windows chỉ hoạt động khi release URL đã cấu hình; không có link tải giả.
- Không hiển thị nền tảng chưa có artifact phát hành.
- Nội dung package, quyền riêng tư, version và checksum được xác minh trước khi công khai.
- Aceternity dùng cho hiệu ứng chọn lọc; shadcn/ui dùng cho primitive và tương tác.
## 10. Lựa chọn component cho bản build

- Navbar: Aceternity Floating Navbar, ẩn khi cuộn xuống và hiện lại khi cuộn lên; menu mobile dùng Sheet.
- Hero: Aceternity Spotlight màu xanh dương nhẹ, kết hợp lưới nền mờ.
- Primitive tương tác theo cấu trúc shadcn/ui: Button, Card, Badge, Accordion và Sheet; hàm cn() dùng clsx cùng tailwind-merge.
- Chuyển động dùng Motion; giao diện tôn trọng prefers-reduced-motion.
- Nút tải Windows chỉ liên kết tới URL public qua VITE_JSM_WINDOWS_DOWNLOAD_URL; khi chưa cấu hình, nút hiển thị trạng thái “Bản tải Windows sắp có”.

## 11. Ngôn ngữ, icon và hover

- Landing page hỗ trợ tiếng Việt và tiếng Anh; mặc định là tiếng Việt, lựa chọn đã lưu trong localStorage được ưu tiên.
- Icon giao diện dùng Heroicons React.
- Viền button giữ nguyên khi hover. Button outline dùng nền trung tính; button primary giữ màu hover hiện có.
- Favicon dùng logo chữ H tại public/assets/app_logo.png.