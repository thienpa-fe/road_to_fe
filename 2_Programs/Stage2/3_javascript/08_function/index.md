# Function

## Định nghĩa

- Function (hàm) bản chất là một block code được đặt tên - Là một hoặc một chuỗi các statement dùng để thực hiện một tác vụ nào đó hoặc tính toán và trả ra một giá trị

## Gọi một function

## Return value

- Vì sao một hàm luôn return ra một giá trị nào đó
  - Cần một giá trị để đó thể tiếp tục tính toán -> Vì chương trình là một hệ thống các function hoạt động cùng nhau (hàm này phải biết dữ liệu trả ra của hàm khác để mà xử lý tiếp)

## Pass by value & pass by reference

![](../images/pass-by-value-reference.gif)

## Function declaration & Function Expression

- Function declaration
- Function expression

## Pure function

## HOF (Higher order function)

![](../images/higher-order-func.png)

-

## First class function

## Callback function (Hàm gọi lại)

When a function is called, a new stack frame is created and added to the top of the stack, containing the function's execution context. This frame is popped off the stack when the function completes.

https://www.programiz.com/javascript/function

## Execution Context

- Execution context: Mỗi một function hay method khi được gọi sẽ tạo ra một execution context và this trong những trường hợp này sẽ đặc biệt khác nhau.

  ```js
  const student = {
    name: 'Peter',
    gotoWork: function () {
      console.log('this in gotoWork', this);

      function doSomething() {
        console.log('this in doSomething');
        console.log(this);
      }

      const doSomething2 = () => {
        console.log('this in doSomething');
        console.log(this);
      };

      doSomething();
      doSomething2();
    },
  };
  student.gotoWork();
  ```
## call bind apply