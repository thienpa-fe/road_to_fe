#NOTE: Chuyển bài này ra sau bài object. Hiểu object mới hiểu về cách truy cập prop k tồn tại sẽ trả về undefined

# null & undefined

![](../images/null-vs-undefined.png)
https://javascript.plainenglish.io/why-does-javascript-have-both-null-and-undefined-6a42fcca9301

## Null là gì ?

- Kiểu dữ liệu null đại diện cho một giá trị không tồn tại một cách có chủ đích và giá trị của nó cũng là null luôn.

- Vì sao null là primitive value mà typeof lại trả về "object" ?

  - Hiện tại nó đang là bug trong suốt quá trình phát triển của JS và nó không thể fix vì sẽ làm hỏng rất nhiều script khác nên quyết định giữ lại và để nó tồn tại song song cùng với sự phát triển của JS

  - Link tham khảo:
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null
    - https://javascript.plainenglish.io/why-does-javascript-have-both-null-and-undefined-6a42fcca9301

## Undefined là gì ?

- Khai báo biến mà k gán giá trị
- Param của một hàm không được truyền

```js
function doSomething(name) {
  console.log(name); // undefined
}

doSomething(); // Không truyền gì vào
```

- Return của một function: Như cái hộp vậy, sẽ luôn return và k có kqa thi return undefined. Có thể hứng vào một biến và kiểm tra thử

```js
const sayHello = function () {
  console.log('Say Hello');
};

const returValue = sayHello();
console.log(returnValue); // undefined
```

- Truy cập vào một properties không tồn tại trong object

```js
const student = {
  name: 'John Wick',
  address: 'Continental',
};

console.log(student.age); // undefined
console.log(student.age.year); // Uncaught TypeError: Cannot read properties of undefined (reading 'year')
```

## Phân biệt null vs undefined

- Giống nhau: Biến có kiểu dữ liệu null hoặc undefined đều có ý nghĩa đại diện cho dữ liệu không tồn tại hoặc hiện không có sẵn.

  ```js
  console.log(null == undefined); // true
  console.log(null === undefined); // false
  ```

- Khác nhau:

  - `undefined`: Đại diện cho các biến chưa được gán giá trị hay không có giá trị liên kết với biến. undefined sẽ mặc định được gán trong các trường hợp:

    - Biến được khởi tạo nhưng chưa gán giá trị

      ```js
      let x;
      console.log(x); // undefined
      ```

    - Giá trị trả về của một function
      ```js
      function sum(a, b) {
        const sum = a + b;
      }
      console.log(sum(3, 4)); //undefined
      ```
    - Truy cập vào một thuộc tính của object / phần tử của array không tồn tại

      ```js
      const nums = [1, 3, 4];
      console.log(nums[10]); // undefined
      const obj = { name: 'John' };
      console.log(obj.age); // undefined
      ```

      -

  - `null`: Đại diện cho việc giá trị của biến mà nó liên kết không tồn tại

    ```js
    let y = null;
    console.log(y); // null
    ```

  - Check với `typeof`:

    ```js
    console.log(typeof undefined); //undefined
    console.log(typeof null); //object
    ```

  - Giá trị toán học:

    ```js
    console.log(undefined + 1);
    //NaN
    console.log(null + 1);
    //1
    ```
