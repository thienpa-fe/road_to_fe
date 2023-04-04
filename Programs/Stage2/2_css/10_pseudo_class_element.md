# Pseudo Class / Pseudo Element

[https://www.w3schools.com/css/css_pseudo_classes.asp](https://www.w3schools.com/css/css_pseudo_classes.asp)

[https://www.w3schools.com/css/css_pseudo_elements.asp](https://www.w3schools.com/css/css_pseudo_elements.asp)

# Pseudo class

- Là một lớp giả đùng để định nghĩa các state đặc biệt của một element

- Nó không hoàn toàn hiện diện trên layout mà sẽ được apply lên chính phần tử chủ của nó

- Các tác dụng phổ biến

  - Style elemement khi hover con trỏ vào

  - Style cho các thẻ link (`<a></a>`)

- Syntax: Pseudo class sẽ được gọi bằng cách thêm dấu `:` và class name của nó ngay sau selector chính

  ```
    selector:pseudo-class {
      property: value;
    }
  ```

- Bảng pseudo class:

  ![](/Programs/Stage2/2_css/images/pseudo-class.png)

# Pseudo elements

- Dùng để style một số thành phần cụ thể của element như chữ cái đầu tiên (first-letter), style cho placeholder của một input

- Syntax: Pseudo element sẽ được gọi bằng cách thêm dấu `::` và tên của nó ngay sau selector chính

  ```
    selector::pseudo-element {
      property: value;
    }
  ```

- Bảng pseudo element:

  ![](/Programs/Stage2/2_css/images/pseudo-element.png)
