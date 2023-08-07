# Default parameter

![](../images/default-params-banner.jpeg)

- ES6 Default Parameter cho phép gán giá trị mặc định cho các tham số trong hàm. Khi hàm được gọi mà không truyền gì vào thì các giá trị mặc định này sẽ được sử dụng như là đối số chính thức của hàm => Bảo đảm function luôn có một giá trị mặc định nào đó thay vì null/undefined.

- Giúp cho việc validate hàm trở nên an toàn và bảo mật hơn. Hạn chế các lỗi do truyền đối số không hợp lệ vào hàm gây treo và crash ứng dụng.

- Syntax

  ```js
  const functionName = (param = defaultValue) => {
    // do something...
  };
  ```

  ```js
  const functionName = (
    param1 = defaultValue1,
    param2 = defaultValue2,
    param3 = defaultValue3
  ) => {
    // do something...
  };
  ```

- Vd: Viết một hàm tính tổng 2 số nguyên đơn giản

  ```js
  const sum = (num1, num2) => num1 + num2;

  console.log(sum(10, 20)); // 30
  ```

  Điều gì xảy ra khi gọi hàm mà không truyền tham số vào:

  ```js
  const sum = (num1, num2) => num1 + num2;

  console.log(sum()); // undefined
  ```

  Khắc phục vấn đề bằng việc sử dụng default parameter:

  ```js
  const sum = (num1 = 0, num2 = 0) => num1 + num2;

  console.log(sum()); // 0
  ```

  Một ví dụ khác: Viết hàm nhận vào một từ và in hoa từ đó

  ```js
  const uppercaseWord = (word) => String(word).toUpperCase();

  console.log(uppercaseWord('hello')); // 'HELLO'

  console.log(uppercaseWord()); // TypeError
  ```

  Sử dụng default parameter:

  ```js
  const uppercaseWord = (word = '') => String(word).toUpperCase();

  console.log(uppercaseWord('hello')); // 'HELLO'

  console.log(uppercaseWord()); // ''
  ```

## Link tham khảo

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

- https://www.javascripttutorial.net/es6/javascript-default-parameters
