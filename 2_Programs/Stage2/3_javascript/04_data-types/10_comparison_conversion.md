# Comparison & Conversion

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
## Conversion
  - Đây là cơ chế khi ta thực hiện tác vụ tính toán giữa hai hay nhiều giá trị khác kiểu dữ liệu với nhau. JS sẽ thực hiện chuyển đổi các toán hạng về cùng kiểu dữ liệu với nhau, sau đó mới thực hiện tính toán

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
