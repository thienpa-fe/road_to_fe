# Strict mode

![](../images/use-strict-banner.png)

Chế độ nghiêm ngặt thường được sử dụng trong source code của các thư viện hay framework giúp cho việc viết code được chặt chẽ hơn tránh các lỗi lặt vặt nhưng gây hậu quả nghiêm trọng.

Bản thân JS từ khi được tạo ra là một ngôn ngữ khá là linh hoạt và "dễ dãi":

  - Không cần định nghĩa kiểu dữ liệu, gán cho nó giá trị gì thì nó sẽ là kiểu dữ liệu của giá trị đó

    ```js
    const final = 1;
    final = 'hello';
    final = true;
    final = {};
    final = [];
    final = null;
    final = undefined;
    final = 'end';

    console.log(final); // end => JS vẫn hoạt động bình thường, không lỗi
    ```

  - Có thể dùng trước một biến rồi định nghĩa sau

    ```js
    username = 'myadmin'; // JS hasn't error here

    let username;
    ```

- Để kích hoạt strict mode, chỉ cần thêm `'strict-mode'` vào line đầu tiên của file JS

  ```javascript
  'use strict';

  // Code JS here...
  ```

- Ở chế độ strict mode, một biến sẽ không thể sử dụng hay gán giá trị nếu như nó chưa được khai báo, nếu cố tình làm vậy sẽ bị quăng lỗi

  ```js
  'use strict';
  x = 3.14; // Uncaught ReferenceError: x is not defined
  ```
