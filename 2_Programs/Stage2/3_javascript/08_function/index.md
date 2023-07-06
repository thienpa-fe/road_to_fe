# Function

Để giải quyết một vấn đề phức tạp, ta chia thành nhiều vấn đề nhỏ. Mỗi vấn đề nhỏ muốn giải quyết lại cần nhiều bước để thực hiện. Các bước đó có thể gom thành một hàm.

## Định nghĩa

![](../images/Appleslicing_function.png)

- "Hàm" trong đời sống: ăn, ngủ, nghỉ,...
- Function (hàm) trong JS bản chất là một block code được đặt tên hoặc không đặt tên (anonymous) - Là một hoặc một chuỗi các statement dùng để thực hiện một tác vụ nào đó hoặc tính toán và trả ra một giá trị

## Tính chất

- Function được chia làm 2 loại

  - Built-in
  - Tự định nghĩa

- Hàm không tự thực thi khi đang được khai báo.

  Chỉ thực thi khi sử dụng lời gọi hàm `()`.

  ```js
  function sayHello() {
    console.log('Hello world!'); // this line will not be execute
  }

  sayHello(); // Excecute! -> 'Hello world!'
  ```

- Có thể nhận vào tham số hoặc không.
- Luôn luôn return về giá trị:

  - Ngầm định (implicit): undefined
  - Tường minh (explicit): Dev tự định nghĩa

- Lợi ích:

  - Định nghĩa các hàm giúp code được tách bạch để dễ quản lý và sửa đổi.

  - Dễ đọc, dễ bảo trì nâng cấp sau này.

  - Nếu không có function. Tất cả logic không liên quan gì đến nhau dồn chung lại một chỗ => Dẫn đến việc không thể mở rộng hệ thống cũng như rất tốn thời gian và công sức nếu như có lỗi phát sinh.

## Định nghĩa một function

### Tham số (parameter) và đối số (argument)

- Tham số: Là một biến được định nghĩa khi khai báo hàm, như là một chỗ trống sẵn để dành cho input truyền vào khi gọi hàm.
- Đối số: Là biến được truyền vào trực tiếp cho hàm để hàm có thể dựa vào đó và xử lý.

  ```js
  function sayHello(name) {
    // name is parameter
    console.log('Hello ' + name);
  }

  const name = 'Ple';
  sayHello(name); // name is argument
  ```

- Một hàm chỉ nên có tối đa 3 tham số

- Tưởng tượng như một cái box. Ta có thể truyền tham số đầu vào (input) để hàm có thể xử lý dựa trên tham số đó và trả ra kết quả ta mong muốn (output).
- Giá trị trả ra (output) của hàm này có thể là input của hàm khác.

![](../images/composite-function.png)

### Function declaration

- Sử dụng keyword `function` để định nghĩa.

  ```js
  function nameOfFunction() {
    // function body
  }
  ```

### Function expression

- Khai báo biến và gán một function cho biến đó.
- Function này được gọi là anonymous function. Chỉ gọi được thông qua biến mà nó được gán vào.

  ```js
  const nameOfFunction = function () {
    // function body
  };
  ```

  > Vì sử dụng `=`nên mới được gọi là expression

- Một biến thể của function expression sẽ là arrow function:

  ```js
  const num = (param) => {
    // statements
  };
  ```

### So sánh function declaration và function expression

|          | Function declaration                                    | Function expression                                                                                                                                  |
| -------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Syntax   | Sử dụng keyword `function` khai báo độc lập             | Gán function vào biến                                                                                                                                |
| Hoisting | Gọi hàm trước rồi khai báo sau                          | Function chỉ được tạo khi chương trình thực thi đến đoạn code khai báo và chỉ sử dụng trong một thơi điểm nhất định. Phải khai báo rồi mới dùng được |
| Use case | Dùng khi muốn định nghĩa một hàm và gọi mọi lúc mọi nơi | Vì được gán vào biến nên function sử dụng khi muốn định nghĩa trong một scope nào đó giúp global scope sạch hơn                                      |
| Name     | Được đặt tên theo naming convention                     | Function không có tên, chỉ được gọi nhờ vào biến mà function được gán                                                                                |

## Return value

- Vì sao một hàm luôn return ra một giá trị nào đó ?
  - Cần một giá trị để đó thể tiếp tục tính toán -> Vì chương trình là một hệ thống các function hoạt động cùng nhau (hàm này phải biết dữ liệu trả ra của hàm khác để mà xử lý tiếp)

## Pass by value & pass by reference

![](../images/pass-by-value-reference.gif)

- Trong JS, tuỳ vào kiểu dữ liệu là primitive hay reference mà cách lưu giá trị xuống bộ nhớ sẽ khác nhau
- Truyền tham số hàm cũng vậy, tuỳ vào kiểu dữ liệu của tham số mà hàm cũng sẽ có cách xử lý các giá trị input đó khác nhau

### Pass by value

- Khi tham số có kiểu dữ liệu primitive. Thì giá trị của tham số sẽ được copy ra. Lúc này tham số truyền vào hàm và tham số tồn tại trong hàm là 2 giá trị khác nhau. Nên việc thay đổi sẽ không gây ảnh hưởng đến nhau.

  ```js
  let age = 28;

  function makeYounger(age) {
    age -= 10;
  }

  makeYounger(age);
  console.log('new age: ' + age);
  ```

### Pass by reference

- Khi tham số có kiểu dữ liệu reference. Thì lúc này thứ được truyền vào hàm chính là tham chiếu địa chỉ của tham số đó. Nên nếu trong hàm có bất cứ thay đổi nào thì sẽ ảnh hưởng đến cả 2, gây ra side effect bên ngoài hàm.

  ```js
  let student = {
    age: 28,
  };

  function makeYounger(student) {
    student.age -= 10;
  }

  makeYounger(student);
  console.log(student);
  ```

## Function declaration & Function Expression

- Function declaration
- Function expression

## IIFE function [(link)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

- IFFE: Immediately Invoked Function Expression - Hàm gọi ngay lập tức.
- Đặc điểm:

  - Phần khai báo hàm sẽ được thực thi ngay lập tức mà không cần call.

  - Hàm chỉ chạy một lần sau đó sẽ giải phóng khỏi bộ nhớ.

    ```js
    (function () {
      // …
    })();

    (() => {
      // …
    })();
    ```

  - Hàm IIFE có truyền tham số

    ```js
    (function (num1, num2) {
      console.log(num1 + num2);
    })(1, 2);
    ```

  - Trường hợp sử dụng

    - Sử dụng để init nhanh một giá trị nào đó và đóng gói các variable trong một scope kín không thể truy cập

      ```js
      (() => {
        var age = 30;
        console.log(age); // 30
      })();

      console.log(age); // ReferenceError: age is not defined
      ```

    - Function không cần tái sử dụng lại
    - Dùng để viết thư viện. Vì khi nhúng thư viện (như carousel, slide show) vào src project của mình thì thư viện vẫn chạy tốt và không conflict với code có sẵn của mình vì nó tách bạch hẳn ra giữa src thư viện và src của project

## Callback function (Hàm gọi lại)

- Một hàm được truyền vào dưới dạng tham số của một hàm khác và được gọi lại trong context của hàm khác thì đó là hàm callback
- Callback có thể áp dụng để viết code đồng bộ (sync) và bất đồng bộ (async)

```js
function getTodoList() {
  // ...
}

function doSomething(callback) {
  // ...
  console.log(typeof callback); // 'function'
}

doSomething(getTodoList);
```

- Callback in sync

  - Ví dụ: Viết một chương trình dùng để tính tổng 2 số và in ra kết quả

    ```js
    function sum(num1, num2, callback) {
      return num1 + num2;
    }

    console.log(sum(1, 2));
    ```

    Sử dụng callback:

    ```js
    function showData(result) {
      console.log(result);
    }

    function sumAndMore(num1, num2, callback) {
      callback(num1 + num2);
    }

    sumAndMore(1, 2, showData);
    ```

- Callback in async

  - Ví dụ: Get dữ liệu của một student từ server và in ra thông tin. Mô phỏng việc lấy dữ liệu bằng setTimeout()

    ```js
    let student = {};

    function showStudent(data) {
      console.log(data);
    }

    function getStudentFromServer(callback) {
      setTimeout(function () {
        const response = {
          name: 'Ple',
          age: 28,
        };

        student = { ...response };
        callback(response);
      }, 3000);
    }

    // without callback
    showStudent(student);

    // use callback
    getStudentFromServer(showStudent);
    ```

- Callback giải quyết tốt các vấn đề về bất đồng bộ, nhưng đối với những tác vụ cần nhiều step mà vẫn phải sử dụng callback, việc sử dụng quá nhiều hàm callback lồng nhau sẽ tạo ra `callback hell`. Sau này để khắc phục người ta sinh ra Promise và async await.
  ![](../images/callback-hell.png)

## Execution Context

- Execution context: Mỗi một function hay method khi được gọi sẽ tạo ra một execution context và this trong những trường hợp này sẽ khác nhau.

Ví dụ 1:

![](../images/execution-context-2.png)

Ví dụ 2:

![](../images/execution-context.webp)

## Thực hành

1. Viết một hàm dùng để xác nhận một số có phải là số chẵn hay không?
2. Viết một hàm yêu cầu người dùng nhập tên và in ra "Hello + tên người dùng đó"
3. Viết một hàm dùng để lọc ra các phần tử chẵn của một mảng
4. Viết một hàm trả về giá trị nhỏ thứ 2 trong một mảng
5. Viết một hàm tạo ra mã số nhân viên có tiền tố "PLE-XXXXXX" trong đó XXXXXX được sinh ra ngẫu nhiên
6. Tìm hiểu khái niệm higher order function và first class function
