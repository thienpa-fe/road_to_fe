# Introduction

- JS là ngôn ngữ lập trình được tạo ra để khiến trang web trở nên tương tác được với người dùng thông qua những xử lý theo yêu cầu của người dùng và tính toán đưa ra sự thay đổi trên giao diện

# Vì sao tên nó là JavaScript ?

![](https://techvccloud.mediacdn.vn/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png)

- Khi JS được tạo ra, tên ban đầu của nó là "LiveScript". Tất nhiên `java` và `javascript` là 2 ngôn ngữ khác nhau hoàn toàn, thời gian này `Java` là một ngôn ngữ mạnh và phổ biến. Nên người tạo ra ngôn ngữ này sẽ quyết định "dựa trend" Java như một phiên bản mới của Java, từ đó cái tên JavaScript ra đời

- JS ngày nay không chỉ chạy được trên trình duyệt, nhờ một môi trường thực thi (NodeJS) JS bây giờ có thể chạy đa nền tảng như ở phía server hoặc các thiết bị khác

# JavaScript hoạt động như thế nào

- Khi trình duyệt tải file html, nó sẽ tải theo các file js về và tuỳ vào option sẽ quyết định các mà những file js đó được thực thi

# Import JavaScript

- Có 2 cách để có thể sử dụng JS trong html

  - External resources: Import các file js từ bên ngoài vào thông qua thẻ `<script></script>` đi kèm các attributes để config cho việc tải và thực thi code js:
    - src: Đường dẫn liên kết đến file js cần tải
    - defer
    - async
    - type
    - charset

    ```html
    <script src="myscripts.js"></script>
    ```
