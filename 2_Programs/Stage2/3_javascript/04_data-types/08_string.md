# String

![](../images/string-banner.png)

## Syntax
- String có thể được khai báo theo các cách sau:
  ```js
    const myName
  ```

Viết một nháy đơn trong chuỗi vd: "Hello 'World'"

- String là một kiểu dữ liệu đặc biệt, nó bất biến (immutable). Có nghĩa là khi đã được define ra thì không thay đổi giá trị, chỉ có tạo ra biến mới và gán lại giá trị cho nó

  ```js
  let str = 'Hi';
  str[0] = 'h'; // error
  alert(str[0]); // doesn't work
  ```

- Khác nhau giữa Primitive String và String object

  ```jsx
  a = 'foo';
  a.b = 'bar';
  alert('a.b = ' + a.b); //Undefined

  A = new String('foo');
  A.b = 'bar';
  alert('A.b = ' + A.b); // bar
  ```

- String được khai báo với kiểu bình thường thì nó không thể đính kèm thêm 1 thuộc tính nào nữa nên việc gọi như ở treen sẽ dẫn tới undefined
- Chưa kể khi `typeof` nó ra thì giữa 2 cái cũng khác nhau, 1 cái là string, 1 cái là object


<!-- Immutate string -->
