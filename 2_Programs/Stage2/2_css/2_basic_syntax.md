# Basic Syntax

- Trong file CSS. Cú pháp cơ bản để khai báo một đoạn code CSS như sau:

  - Cú pháp khai báo ngang

  ![](/Programs/Stage2/2_css/images/basic-syntax-1.png)

  - Cú pháp khai báo dọc

  ![](/Programs/Stage2/2_css/images/basic-syntax-2.png)

- Thành phần của một block code CSS bao gồm:
  - `Selector`: Đại diện cho html element đang được chọn để style css vào (Có thể chọn theo tagname, class, id,... Sẽ tìm hiểu ở phần [CSS Selectors](/Programs/Stage2/2_css/3_selectors.md))
  - `Declaration`: Phần thân của selector, định nghĩa style cho element như màu sắc, kích cỡ. Có thể chứa được nhiều cặp property - value ngăn cách với nhau bằng dấu ;

## Lưu ý

- Không thêm khoảng cách vào giữa value và đơn vị của nó, nếu không CSS property sẽ không hoạt động
  ```
  Incorrect (space): margin-left: 20 px;
  Correct (nospace): margin-left: 20px;
  ```
