# Number

![](../images/number-banner.png)

Kiểu number đại diện cho các giá trị số trong JS bao gồm số nguyên (integer) và số thực (float), số âm và số dương

## Khai báo biến number

```js
  const myNumber = 1000000;
  const myBetterNumber = 1_000_000; // 1000000
  const myInvalidNumber = 1__000___000; // caught SyntaxError: Only one underscore is allowed as numeric separator

  const price = 9.99;
  const tax = 0.08;
  const discount = .05; // valid but not recommeded

```

## Số nguyên (Integer numbers)

```js
let counter = 100;
```

## NaN (Not a Number)

- Đại diện cho một giá trị không phải là Number. Bất cứ phương thức nào của Number mà không convert được giá trị truyền vào thì sẽ trả về NaN
- Khi cố gắng parse một giá trị thành number mà không thành công, nó sẽ trả về undefined

  ```js
  Number('unicorn'); // NaN
  Number(undefined); // NaN

  parseInt('100'); // 100
  parseInt(true); // 1
  parseInt({}); // NaN
  ```

## Một số hàm phổ biến

- Các hàm xử lí tính toán với kiểu number đa phần được hỗ trợ bởi `Math()`. Là một object built-in của JS. Ngoài ra còn có hàm từ prototype Number. Math() chỉ hoạt động với kiểu number, không làm việc với kiểu bigInt.

  - toFixed(n): Format một số thành một string và nối thêm n chữ số thập phân. Không làm thay đổi number ban đầu.

    ```js
    const myNumber = 123;
    myNumber.toFixed(5); // "123.00000"
    ```

  - toString(): Chuyển đổi một number thành một string. Không làm thay đổi number ban đầu.

    ```js
    const myNumber = 123;
    myNumber.toString(); // "123"
    ```

  - parseInt(): Chuyển đổi một chuỗi hợp lệ thành một số nguyên
    ```js
    parseInt(100); // 100
    parseInt(100.5); // 100
    parseInt('100'); // 100
    parseInt('abc'); // NaN
    ```
  - parseFloat(): Chuyển đổi một chuỗi hợp lệ thành một số thực
    ```js
    parseFloat(100.5); // 100.5
    parseFloat('200.9'); // 200.9
    parseFloat('abc'); // NaN
    ```
  - Math.random(): Trả về một số random trong khoảng từ 0 - 1
    ```js
    Math.random(); // 0.06168198920030177
    ```
  - Math.floor(): Làm tròn một số xuống số nhỏ nhất bằng số truyền vào
    ```js
    Math.floor(6.5); // 6
    ```
  - Math.ceil(): Làm tròn một số lên số lớn nhất bằng số truyền vào
    ```js
    Math.ceil(6.5); // 7
    ```
  - Math.pow(): Luỹ thừa một số

    ```js
    Math.pow(2, 3); // 2^3 = 16;
    ```

  - Math.min(): Nhận vào một mảng và trả về phần tử có giá trị nhỏ nhất

    ```js
    Math.min(2, 3, 1); // 1
    Math.min(-2, -3, -1); // -3
    Math.min(); // Infinity
    ```

  - Math.max(): Nhận vào một mảng và trả về phần tử có giá trị lớn nhất

    ```js
    Math.max(2, 3, 1); // 3
    Math.max(-2, -3, -1); // -1
    Math.max(); // Infinity
    ```

  - Math.abs(): Trả về giá trị tuyệt đối của một number

    ```js
    Math.abs(); // NaN
    Math.abs(5); // 5
    Math.abs(-5); // -5
    ```

## Các phép tính toán của number với các kiểu dữ liệu khác

- Tìm hiểu nhiều hơn ở phần [Conversion](./10_comparison_conversion.md)

## Tài liệu tham khảo

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
