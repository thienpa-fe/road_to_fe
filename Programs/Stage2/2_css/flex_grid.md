# Flex & Grid

## Flex (Flexbox)

https://cssreference.io/flexbox/
https://viblo.asia/p/huong-dan-day-du-ve-css-flexbox-maGK7J9a5j2
https://dev.to/harishrajora12/getting-started-with-css-flexbox-tutorial-3g96

- Cấu tạo flexbox

  ![](/Programs/Stage2/2_css/images/flexbox-axis.png)

  - Gồm 2 phần chính là flex container và flex item. Để triển khai một flexbox thì bắt buộc cần phải có đủ 2 thành phần này

- https://yoksel.github.io/flex-cheatsheet/
- https://flexboxsheet.com/

## Các thuộc tính dành cho flex container

- `display`: Để định nghĩa một container là một flexbox

- `flex-direction`: Định nghĩa main axis của flexbox, mặc định sẽ theo chiều ngang (row)

- `justify-content`: Canh các item theo chiều main axis

- `flex-wrap`: Định nghĩa cách mà các item bị rơi xuống dòng khi chiếm hết chiều rộng của container

- `align-items`: Canh toàn bộ các item trong container theo chiều cross axis và chỉ canh 1 line duy nhất trong container

- `align-content`: Căn các item theo flex line, là những line được tạo ra khi item wrap và có thể căn nhiều flex line như thế mỗi khi item bị wrap

- `gap`, `row-gap`, `column-gap`: Định nghĩa khoảng cách theo chiều ngang và chiều dọc theo 4 hướng tương ứng của item

- `flex-flow`: Shorthand của flex-direction và flex-wrap, vd `flex-flow: row wrap;`

## Các thuộc tính dành cho flex items

- `order`: Định nghĩa thứ tự hiển thị của item theo normal flow trong flex container. Đặt giá trị càng nhỏ thì item sẽ được xếp ra trước theo main axis

- `flex-grow`: Định nghĩa một item sẽ chiếm bao nhiêu phần so với khoảng trống còn lại trong container. Sử dụng khi tổng kích cỡ các item nhỏ hơn container và muốn thiết lập để nó có thể nở ra và lấp kín container

  Vd: https://codepen.io/duy-nguyn-the-vuer/pen/aebpLw

- `flex-shrink`: Định nghĩa một item sẽ bị co lại bao nhiêu phần khi không đủ khoảng trống trong container

  https://codepen.io/duy-nguyn-the-vuer/pen/XvWMpE

- `flex-basis`: Định nghĩa kích cỡ ban đầu của item theo chiều rộng hoặc chiều ngang phụ thuộc item đó đang nằm trong container có flex-direction nào. Nó sẽ ghi đè thuộc tính width và height khác nếu được khai báo giá trị

- `align-self`: Hoạt động giống align-items, align-items thì dùng cho container và áp dụng cho tất cả các item bên trong nó. Còn thuộc tính này chỉ áp dụng cho chính item gọi nó

- `flex`: Shorthand biểu diễn cho 3 thuộc tính grow, shrink, size và giá trị mặc định của nó là `flex: 0 1 auto`

## Grid

## Sự khác nhau giữa flex và grid

- Tuy cả 2 đều dùng để xây dựng layout web nhưng nó sẽ hữu ích hơn khi được sử dụng đúng trường hợp cụ thể
  - Flex thường dùng để sắp xếp cho một component
  - Grid thường dùng để dựng cả một layout lớn của trang web mà trong đó có rất nhiều component, ta đã dùng flex để sắp xếp như ở trên
