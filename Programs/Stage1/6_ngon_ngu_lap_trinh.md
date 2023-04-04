# Ngôn ngữ lập trình / Framework / Library

- Ngôn ngữ tự nhiên là hệ thống các bảng chữ cái, ghép nối thành từ, từ ghép thành câu mà con người dùng để giao tiếp nhau

- Ngôn ngữ lập trình là hệ thống các bảng chữ cái, kí hiệu, cú pháp mà con người dùng để viết ra được những dòng code, những dòng code tạo thành những chương trình giao tiếp với máy tính và yêu cầu máy tính thực thi

- Tuỳ vào các nền tảng mà các ngôn ngữ lập trình được thiết kế để tối ưu cho việc viết phần mềm cho Desktop Application, Web Application, Mobile Application, Game, AI ML…

# Các loại ngôn ngữ lập trình

- Ngôn ngữ bậc cao:

  - Là ngôn ngữ gần với chúng ta nhất, tự nhiên nhất, gần như là ngôn ngữ tự nhiên và viết theo bộ cú pháp được quy định sẵn tuỳ theo mỗi loại ngôn ngữ và mục đích

  - Cú pháp sẽ gần gũi với dev hơn, bao gồm các keyword có nghĩa

- Ngôn ngữ bậc thấp:

  - Ngôn ngữ máy (Machine Language)

    - Là ngôn ngữ mà máy tính có thể hiểu và thực thi trực tiếp được

    - Ngôn ngữ máy được sinh ra sau khi quá trình biên dịch code kết thúc

    - Thường sẽ khó đọc, được mã hoá với kí tự khó hiểu

- Cách hoạt động:

  - Lập trình viên dùng ngôn ngữ lập trình bậc cao để viết ra các dòng code

  - Khi run code thì code sẽ được bộ compiler cài sẵn trong máy (hoặc các môi trường chuyên dụng) biên dịch (compile) thành ngôn ngữ bậc thấp.
    Máy tính thì không hiểu được ngôn ngữ bậc cao do dev viết ra, nên khi code đã được biên dịch thành ngôn ngữ bậc thấp thì máy đã có thể hiểu được và thực thi theo
    ⇒ Đó là cách giao tiếp cơ bản giữa lập trình viên và máy tính

    ![](/Programs/Stage1/images/nnlt-1.png)
    ![](/Programs/Stage1/images/nnlt-2.png)

# Thành phần của một ngôn ngữ lập trình

- Một ngôn ngữ lập trình khi được phát triển đều bắt buộc phải có các thành phần sau:
  - Mục đích để tạo ra ngôn ngữ (Phục vụ cho loại hệ thống nào, nên tảng nào)
  - Syntax
  - Kiểu dữ liệu
  - Hệ thống keyword và các câu lệnh điều kiện, vòng lặp
  - Utilities
  - Luồng thực thi code

# Framework là gì ?

- Là các quy định, cấu trúc được định nghĩa sẵn cho một hệ thống, một project để phát triển một ứng dụng phục vụ mục đích nào đó được dễ dàng hơn, tối ưu hơn và tiết kiệm thời gian hơn cho lập trình viên

- Đối với các dự án càng ngày càng scale lớn lên. Thì việc các đoạn code, các function sẽ trở nên hỗn loạn và phức tạp và cần phải có một hệ thống để giải quyết, định nghĩa ra những quy tắc để lập lại trật tự, để code dễ đọc và bảo trì hơn

- Để sử dụng được framework. Dev phải sử dụng và hiểu được ngôn ngữ mà framework đó hỗ trợ (Giống như nông dân phải biết làm nông thì mới sử dụng được bộ công cụ giúp tăng hiệu suất làm việc)

# Library là gì ?

- Là các đoạn code, là các hàm được viết để phục vụ một mục đích nào đó

- Có thể xem nó như các tiện ích con, khi cần dùng thì cài vào dự án của mình để sử dụng

- Vd: Đang code một chức năng cần sinh mã ngẫu nhiên, thay vì tự code, ta sẽ có thư viện chuyên làm việc đó và cài vào project
