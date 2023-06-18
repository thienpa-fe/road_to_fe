# Comparison & Conversion

## Conversion

- Khi thực hiện tác vụ tính toán hay so sánh giữa hai hay nhiều giá trị khác kiểu dữ liệu. JS sẽ thực hiện chuyển đổi các toán hạng về cùng một kiểu dữ liệu với nhau theo một số __nguyên tắc cụ thể__, sau đó mới thực hiện tính toán hoặc so sánh
- Có rất nhiều cách để convert giá trị từ kiểu này về kiểu kia. Một trong những cách đơn giản nhất là sử dụng các hàm có sẵn của JS dành cho các kiểu dữ liệu như Boolean, String, Number, Object...
- [Bảng giá trị convert giữa các kiểu dữ liệu với nhau.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#comparing_equality_methods)

- Hãy cùng làm một bài toán nhỏ, phép so sánh dưới đây trả về gì?
  ```js
  console.log(Boolean("0")); // ?
  console.log("0" == true) // ?
  ```

## Một số nguyên tắc chuyển đổi kiểu dữ liệu
- Không phải cứ so sánh thì JS sẽ cố gắn
- `null/undefined`: Giá trị có kiểu dữ liệu này sẽ luôn bằng chính nó, và không thể so sánh được với bất kì giá trị nào khác
## Comparison

- JS cung cấp rất nhiều kiểu dữ liệu nhưng để so sánh chúng với nhau trong một số điều kiện thì không hề dễ:

  ```js
    false == false;
    null == undefined
    null == false
    undefined == false
    NaN == NaN
    NaN == false
    NaN == true
    63 == false
    63 == true
    0 == false
    "63" == true
    "63" == false
    "0" == true
    "0" == false
    !"0" == !false
    "" == false
    [] == ""
    [] == false
    [] == "0"
    [] == 0
    [] == ![]
    "0" == !"0"
    0 == {}
    [1] < 2

    a = {}
    b = {}

    a < b
    a > b
    a == b
    a <= b
    a >= b
  ```


### Number

#### number với string

- Với phép `+`, number sẽ được convert qua string và thành phép nối string
- Với những phép tính khác như `-, *, /` thì string sẽ được convert thành number và thực hiện tính toán như bình thường

  ```js
  const result = 10 + '10'; // '1010'
  const result2 = 10 / '2'; // 5
  const result3 = 10 * '2'; // 20
  const result3 = 10 - '2'; // 8
  ```

#### number với array

- Với phép `+`, array sẽ được convert thành số có giá trị bằng với số phần tử nó đang chứa

  ```js

  ```

- Phép chia

#### number với object

#### number với boolean

#### number với undefined / number với null

### String

### Boolean

### Array

### Object

### Null & undefined

## Rules

- Nếu một trong 2 vế là kiểu boolean, thì

## Tham khảo

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#type_coercion
- https://viblo.asia/p/variables-comparison-in-javascript-3ZabG9QwGzY6
