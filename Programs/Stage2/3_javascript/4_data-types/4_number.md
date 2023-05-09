# Number

- Kiểu number đại diện cho các giá trị số trong JS bao gồm số nguyên (integer) và số thực (decimal), số âm và số d
- Bản chất của number trong JS là các số chấm phẩy động (floating-point numbers). Ví dụ:

```js
console.log(0.1 + 0.2); // outputs 0.30000000000000004
```

## Khai báo biến number

```js
  const myNumber = 1000000;
  const myBetterNumber = 1_000_000; // 1000000
  const myInvalidNumber = 1__000___000; // caught SyntaxError: Only one underscore is allowed as numeric separator

  const price = 9.99;
  const tax = 0.08;
  const discount = .05; // valid but not recommeded

```

- Một số giá trị có sẵn
  ```js
  Number.MAX_VALUE; // 1.7976931348623157e+308
  Number.MIN_VALUE; // 5e-324
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
