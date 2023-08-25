# Hoisting

## Function

## var let const

### var

- Biến var khi hoisting sẽ được khởi tạo và mang giá trị là undefined

```js
console.log(a); // undefined
var a = 10;
```

```js
var a = 10;
console.log(a); // 10;
```
> Phạm vi lớn hơn sẽ chỉ truy cập được các biến phạm vi nhỏ hơn. Ngược lại thì không được

### let

- Giống var, các biến và hàm được khai báo với let sẽ được đưa lên đầu block. Nhưng var khi hoisting thì được khởi tạo giá trị là undefined, còn let sẽ gây lỗi vì không được khởi tạo ⇒ let phải khai báo trước rồi mới dùng được.

### const

- Các biến được khai báo bằng const không được hoisting.

  ```js
  console.log(age);

  const age; // SyntaxError: Missing initializer in const declaration
  ```

  ```js
  console.log(age); // ReferenceError: age is not defined

  const age = 30;
  ```

## Tham khảo
