# Đơn vị CSS (CSS Units)

## Định nghĩa

- Đơn vị trong CSS dùng để đo lường các giá trị của thuộc tính như chiều cao, chiều rộng, độ đậm dày font chữ, border, độ toả bóng,...

- Các đơn vị hiện có được sủ dụng bao gồm: px, pt, in, pc, mm, cm, em, ex, ch, rem, vw, vh, vmin, vmax, %...

- Hệ thống đơn vị CSS chia làm 2 loại là đơn vị tương đối và đơn vị tuyệt đối

## Đơn vị tương đối (Relative Units)

- Các đơn vị nhóm này sẽ được tính toán tương đối dựa vào một giá trị gốc nào đó có sẵn được định nghĩa ở các phần tử cha hoặc phần tử cấp cao hơn liền kề

- Thường áp dụng cho những phần tử cần độ co giãn cao, thích ứng với các màn hình thiết bị với độ phân giải khác nhau

- Các đơn vị phổ biến nhóm này:

  - `%`: Phụ thuộc vào thẻ cha chứa element có cùng property được định nghĩa bằng đơn vị %

  - `rem`(root em): Phụ thuộc vào element root (tức là phần tử html nếu có định nghĩa)

    ```css
    html {
      font-size: 16px;
    }

    .my-quote {
      /* 2rem = 2 * 16px = 32px */
      font-size: 2rem;
    }
    ```

  - `em`: Không viết tắt cho gì cả, mang ý nghĩa là `Gấp x lần giá trị dựa theo giá trị mặc định` hoặc dựa vào phần tử cha chứa nó có define thuộc tính font-size. Mặc định ở đây `1em = 16px`

  - Vd: Khi phần tử cha define một thuộc tính css là `font-size: 16px` thì khi phần tử con set `font-size: 2em`. Nó sẽ dựa vào giá trị mặc định để tính ra chỉ số font-size. Tức là `2em => 16px * 2 = 32px`. Vậy phần tử con sẽ có thuộc tính là 32px dựa vào công thức trên

  - `vw, vh`: Viewport Width, Viewport Height là % độ rộng, độ cao của trình duyệt đang mở ở bất cứ kích thước nào, `1vh` sẽ tương ứng với 1% độ cao và `1vw` sẽ tương ứng với 1% độ rộng. Đơn vị này thường dùng cho việc làm sidebar hay những thứ dựa theo kích thước của viewport

## Đơn vị tuyệt đối (Absolute Units)

- Các đơn vị nhóm này sẽ có giá trị cố định luôn và không thay đổi hay tăng giảm phụ thuộc vào chỉ số của phần tử khác và sẽ hiển thị như nhau trên mọi thiết bị
- Đơn vị tuyệt đối thường không được sử dụng cho các element container co giãn theo chiều rộng màn hình

> 1px của CSS khác với 1px trên màn hình. 1px của CSS có thể gồm nhiều px trên màn hình
> Đọc thêm về đơn vị tại [đây](https://viblo.asia/p/cung-tim-hieu-ve-nguyen-tu-cua-the-gioi-front-end-phan-1-pixel-4P856PoOZY3)

![](/Programs/Stage2/2_css/images/css-units.png)

## So sánh

- Các element được style bằng `đơn vị tuyệt đối` thì các đặc điểm về kích thước của nó sẽ không thay đổi khi có yếu tố tác động (zoom to trình duyệt, resize cửa sổ,.. ), được set cứng.

- Các element được style bằn `đơn vị tương đối` thì kích thước và đặc điểm không cố định, bị thay đổi khi element cha mà nó phụ thuộc bị thay đổi.

## Lưu ý

- Giá trị số rồi mới đến đơn vị: `2px, 10%, 5vh,...`
- Khi sử dụng CSS cùng với đơn vị thì không được có space giữa giá trị số và đơn vị:

  ```css
  h1 {
    font-size: 30px; /* true */
    padding: 50 vh; /* false */
    width: 70 %; /* false */
  }
  ```

- Nếu giá trị số = 0 thì có thể không cần ghi thêm đơn vị tính

  ```css
  h1 {
    padding: 0px;
  }
  ```

  ```css
  h1 {
    padding: 0;
  }
  ```

- Giá trị mặc định sẽ là 1em = 1rem = 16px;
- Font-size hiện tại của trình duyệt là 1em = 100% = 16px, vậy nên 10px sẽ là 62.5%, việc đưa giá trị mặc định về giá trị chuẩn (10px) như thế này sẽ dễ dàng cho việc tính toán size và giá trị

  ```css
  html {
    font-size: 62.5%;
  }
  ```

  ```css
  h1 {
    font-size: 2.5rem; /* 2.5 * 10 = 25px */
  }
  ```
