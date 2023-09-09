# Quy trình phát triền phần mềm (Development Life Cycle)

Một quy trình phát triển phần mềm (software development lifecycle) bao gồm 6 bước cơ bản

- Requirement
- Analyze
- Design
- Coding
- Testing
- Implement and maintain

# 1. Requirement

- Ở phase này bộ phận phân tích yêu cầu (BA - Business Analytics) sẽ gặp và trao đổi với khách hàng về định hướng phát triển sản phẩm, các mong muốn cũng như kế hoạch xây dựng các chức năng trong hệ thống của mình
- Thông thường sẽ có các phiếu điều tra hay các bộ câu hỏi đặc thù của dự án

# 2. Analyze (Đặc tả yêu cầu)

- Sau khi collect cũng như thu thập được dữ liệu sẽ thực hiện phân tích để làm rõ các yêu cầu và hiện thực hoá bằng một tập tài liệu đặc tả hệ thống (SRS)
- Đây là tài liệu quan trọng trong suốt vòng đời của dự án. Các phase tiếp theo sau sẽ dựa trên mô tả chi tiết trong tài liệu và trả lời cho câu hỏi “Hệ thống này dùng làm gì?”
- Phụ thuộc rất nhiều vào khả năng phân tích cũng như làm rõ yêu cầu của BA

  ⇒ Bản thiết kế

  ![](/Programs/Stage3/images/BA-flow.png)

# 3. Design

- Sau khi đã có tài liệu đặc tả, team Design sẽ bắt tay vào việc thiết kế UI/UX (User Interface / User experience) cũng như các workflow của tính năng hệ thống
- Nhiệm vụ của phase này là hiện thực hoá các chức năng hệ thống trong tài liệu đặc tả thành giao diện dạng prototype (nguyên mẫu)
- Sau đó sẽ sử dụng prototype để trao đổi và confirm với client, update chỉnh sửa đến khi client chốt design thì sẽ chuyển qua phase tiếp theo

  ![](/Programs/Stage3/images/design-layout.png)

# 4. Coding

- Phase này team dev sẽ vào việc phát triển sản phẩm. Chuyển hoá prototype chức năng bằng code. Xử lý các chức năng, logic theo nghiệp vụ và yêu cầu
- Sau khi hệ thống hoàn chỉnh và hoạt động được sẽ đi đến phase tiếp theo là testing (kiểm thử)

  ![](/Programs/Stage3/images/coding.jpeg)

# 5. Testing (Giai đoạn kiểm thử)

- Phase này do team tester, Quality Assurance, Quality Control đảm nhận và chịu trách nhiệm
- Dựa vào chức năng mà các bộ test cases sẽ được build và test hệ thống. Nếu phát hiện ra bug thì sẽ được báo và chuyển thành task về cho team dev xử lý đến khi nào pass test cases ở lần test tiếp theo. Quá trình này sẽ được lặp đi lặp lại cho đến khi chức năng hệ thống đã hoạt động thực sự ổn định và đúng với yêu cầu được đặc tả trong tài liệu

- Sau khi quá trình hoàn tất, hệ thống sẽ được triển khai trên môi trường thử nghiệm để khách hàng có thể trực tiếp trải nghiệm và đánh giá. Nếu phát sinh yêu cầu chỉnh sửa. Thì team dự án sẽ thực hiện bổ sung sửa đổi để có thể cho ra phiên bản mới tốt hơn và chuyển đến phase triển khai

  ![](/Programs/Stage3/images/testing.png)

# 6. Implement / Maintenance (Triển khai / bảo trì)

- Ở phase này thì hệ thống đã trong quá trình sẵn sàng triển khai (release).
- Thỉnh thoảng việc triển khai sản phẩm sẽ phụ thuộc vào chiến lược của khách hàng (release theo quý, theo từng đợt, theo từng chức năng,…)
- Bên phát triển phần mềm sẽ có biện pháp hỗ trợ xử lý nếu có lỗi phát sinh trong quá trình sử dụng. Từ đó có 2 công việc thường được thực hiện:
  - Sửa lỗi: Nếu có lỗi phát trình team dev sẽ nhanh chóng can thiệp để xử lý (hot fix) bảo đảm cho hệ thống luôn hoạt động trơn tru và ổn định
  - Bảo trì: Bên phát triền phần mềm sẽ đưa ra các bản cập nhật để tối ưu hệ thống, cải thiện performance và không chỉnh sửa gì nhiều đối với chức năng ban đầu của hệ thống

# Các mô hình SDLC phổ biến

- Cũng gồm các bước ở trên nhưng chúng sẽ được sắp xếp ghép nối với nhau lại thành các mô hình tuỳ thuộc vào quy mô và độ phức tạp của dự án

### Waterfall

  ![](/Programs/Stage3/images/waterfall.png)

Là mô hình đầu tiên được sử dụng rộng rãi và phổ biến trong ngành công nghiệp phần mềm

- Ở giai đoạn này các bước phát triển sẽ được sắp xếp nối tiếp nhau và tuần tự diễn ra. Giai đoạn này hoàn thành rồi mới được chuyển sang giai đoạn tiếp theo và không bao giờ xảy ra sự mâu thuẫn giữa các bước trong mô hình.
- Các giai đoạn chuyển từ mức cao hơn xuống mức thấp hơn. Giống như một thác nước nên có tên là waterfall
- Mô hình này thường được sử dụng cho các dự án có quy mô nhỏ. Lí do sẽ được nêu ở phần ưu - nhược điểm.
- Ưu điểm:
  - Luồng làm việc đơn giản, dễ hiểu, dễ áp dụng nên mô hình này thường áp dụng cho các dự án nhỏ có logic đơn giản và yêu cầu ít thay đổi
  - Các tiêu chí đầu vào và đầu ra được xác định dễ dàng, nhờ đó dễ đánh giá được chất lượng
- Nhược điểm:
  - Phải đợi đến khi sản phẩm hoàn thành user mới được tiếp cận, quy trình waterfall nếu mất 6 tháng tới 1 năm lúc releaes sản phẩm không có gì đảm bảo rằng yêu cầu của user không đổi ⇒ Còn lại trong thời gian đó thì user ngồi cười. Hoàn toàn không biết gì về ứng dụng đang được phát triển
  - Không thích hợp với các dự án lớn phức tạp lâu dài, có yêu cầu thay đổi thường xuyên và tính năng được define liên tục
  - Vì diễn ra tuần tự nên cần phải planning chính xác các bước thật chính xác. Trong mô hình dù có bất cứ sai sót hay thay đổi nào phát sinh cũng sẽ quay lại bước đầu tiên và cứ như thế ⇒ Tốn kém thời gian, chi phí và nhân lực
  - Chỉ có thể next giai đoạn chứ không thể back giai đoạn được vì k thể đánh giá được rủi ro và cách thức thực hiện lại bước trước đó ⇒ Không thể chuẩn bị được giải pháp tốt nhất

### Scrum

  ![](/Programs/Stage3/images/scrum-process.png)

- Nhắc đến scrum phải nhắc đến Agile. Là một triết lí, một nguyên tắc phát triển phần mềm có thể linh hoạt biến đổi dựa theo nhiều yếu tố khác nhau. Agile ra đời khi có đến 70% các dự án phần mềm bị thất bại và sự bất cập của mô hình waterfall cùng các mô hình phát triển khác

- Triết lí Agile:
  - Cá nhân và sự tương tác hơn là quy trình và công cụ (giao tiếp với nhau tốt hơn)
  - Phần mềm chạy tốt hơn là tài liệu đầy đủ; (KH cần 1 sản phẩm có thể chạy đc để trải nghiệm hơn là 1 xấp tài liệu ngồi đọc)
  - Cộng tác với khách hàng hơn là đàm phán hợp đồng;
  - Phản hồi với các thay đổi hơn là bám sát kế hoạch.
  ⇒ Chúng tôi đánh giá cao các mục ở bên trái hơn, mặc dù các điều bên phải vẫn còn giá trị.

- Scrum là một trong những mô hình hiện thực hoá các triết lí Agile (ngoài ra có kanban,…)
