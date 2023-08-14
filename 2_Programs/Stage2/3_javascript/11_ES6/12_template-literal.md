# Template literals

![](../images/template-string-es6.webp)

Là một syntax của ES6 dùng để biểu diễn giá trị string. Nó cũng có nhiều cái tên / thuật ngữ đồng nghĩa:

- Template Literals
- Template Strings
- String Templates
- Back-Tics Syntax

## Syntax

Template String sẽ có 2 phần:

- ``: Dùng để đánh dấu đây là một string được tạo bởi ES6 template string.

- ${}: Là một placeholder nhận vào giá trị của biến, chỉ hoạt động trong cặp `` (String interpolation)

  ```
    `some content with ${variable}`
  ```

Khai báo string theo cách thông thường

```js
const doubleQuotedString = 'This is a common string.';
const singleQuotedString = 'Also a common string';
```

```js
const emptyLiteralString = ``;
const normalLiteralString = `A normal literal string`;
```

Khai báo string theo ES6 template string

```js
const str = ``;
```

```js
const domain = 'frontend';

console.log(`My domain is ${domain}`);
```

## Template string với reference data type

Khi object được truyền vào trong template string thì tương đương với việc nó sẽ bị convert sang string và không show ra thông tin cần thiết

```js
const domain = {
  name: 'Frontend',
  language: 'Javascript',
};

console.log(`My domain is ${domain}`);
// 'My domain is [object Object]'
```

Sử dụng JSON.stringify() để convert object qua string trước khi truyền vào trong template string

```js
console.log(`My domain is ${JSON.stringify(domain)}`);
// 'My domain is {"name":"Frontend","language":"Javascript"}'
```

## Call function by template string [(link)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

Ngoài việc giúp ta làm việc với string được thuận tiện hơn thì template string có chức năng như một lời gọi hàm.

Hàm được call bằng template string sẽ được define 3 tham số:

- Tham số đầu tiên là 1 mảng chứa tất cả các string thuần.

- Từ tham số thứ 2 trở đi sẽ là các giá trị được truyền vào `${}`.

  ```js
  const sayHello = (...params) => {
    console.log(params);
  };

  const role = 'FE dev';
  const name = 'Beecuto';

  sayHello`My name is ${name} and I am a ${role}`;
  ```

## Kết luận

- Template string giúp khai báo được string nhiều dòng. Tiện ích này cực kì hiệu quả khi sử dụng với những string nhiều dòng dạng html raw

  Normal string:

  ```js
  const htmlElement =
    ' <div class="container">\n' +
    '   <h1>Hello world</h1>\n' +
    '   <p>Lorem Ipsum is simply dummy text</p>\n' +
    ' </div>';
  ```

  Template string:

  ```js
  const htmlElement = `
    <div class="container">
      <h1>Hello world</h1>
      <p>Lorem Ipsum is simply dummy text</p>
    </div>
  `;
  ```

- Có syntax `${}` placeholder để truyền biến vào, giúp dễ đọc hơn

  Normal string:

  ```js
  const name = 'Beecuto';
  const age = 28;

  console.log('Hello, my name is ' + name + ' and I am ' + age + ' years old.');
  ```

  Template string:

  ```js
  const num1 = 10;
  const num2 = 20;

  console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
  ```

## Thực hành

1. Chuyển đổi các loại string sau thành template string:

   ```js
   const student = {
     firstName: 'John',
     lastName: 'Doe',
     age: 30,
   };

   const message =
     'My name is ' +
     student.firstName +
     ' ' +
     student.lastName +
     ' and I am ' +
     student.age +
     ' years old.';

   console.log(message);
   ```

   <details>
     <summary>Answer</summary>

   ```js
   const student = {
     firstName: 'John',
     lastName: 'Doe',
     age: 30,
   };

   const { firstName, lastName, age } = student;

   const message = `My name is ${firstName} ${lastName} and I am ${age} years old.`;

   console.log(message);
   ```

   </details>

2. In đoạn thơ sau ra màn hình và giữ nguyên format (Gồm 4 câu, mỗi câu 1 dòng)

   ```
   The rose is red,
   The violet's blue,
   Sugar is sweet,
   And so are you.
   ```

     <details>
     <summary>Answer</summary>

   ```js
   const poem = `
    The rose is red,
    The violet's blue,
    Sugar is sweet,
    And so are you.
   `;

   console.log(poem);
   ```

   </details>

## Link tham khảo

- https://dev.to/pfacklam/the-power-of-template-literals-4e7e

- https://www.w3schools.com/js/js_string_templates.asp
