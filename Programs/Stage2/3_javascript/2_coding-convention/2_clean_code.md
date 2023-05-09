# Clean code

> Viết code cũng như viết chính tả. Đúng chính tả thì câu từ mới hay và có nghĩa. Cũng như code có clean thì mới dễ đọc fix lỗi và tối ưu hệ thống

## Clean code là gì ?

- Clean code là một các nguyên tắc đã được nghiên cứu và đúc kết qua thời gian dài. Gồm bộ các nguyên tắc trong việc trình bày và triển khai cấu trúc code, logic sao cho dễ đọc dễ bảo trì nhưng cũng ngắn gọn và không dài dòng khi số lượng code và file trong một project vốn dĩ đã quá khổng lồ và phức tạp.

- Ngày nay đã có những thư viện hay công cụ như prettier, eslint, sonarlint, việc của dev chỉ cần tập trung vào phát triển logic. Còn lại chất lượng code hay đánh giá logic sẽ có các thư viện này hỗ trợ

  ![](../images/prettier.png)
  ![](../images/eslint.png)
  ![](../images/sonarlint.png)

## Clean code vs Bad code ?

- Một đoạn code được đánh giá là clean hay bad dựa trên nhiều yếu tố như cách trình bày, cách define vấn đề và triển khai logic để giải quyết vấn đề (syntax & logic)

  ### Logic quality

  - Bad code:

    ```js
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
    ```

  - Good code:
    ```js
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
    ```

  ### Syntax quality

  - Bad code:
    <!-- prettier-ignore -->
    ```html
    <div><h1>Header</div><div><p>content</p>
      </div>
    </div>
    ```

  - Good code:
    ```html
    <div>
      <h1>Header</div>
      <div>
        <p>content</p>
      </div>
    </div>
    ```

## Cách giải quyết

- Để nâng cao khả năng viết clean code:
  - **Logic quality**: Không ngừng luyện tập nâng cao khả năng tư duy logic, giải quyết vấn đề bằng cách tìm hiểu nghiên cứu các thuật toán và triển khai nhiều ví dụ giải quyết vấn đề bằng việc coding
  - **Syntax quality**: Việc trình bày code sạch đẹp rất quan trọng và nên được hình thành thói quen càng sơms càng tốt. Hiện nay có Prettier extension (sẽ tìm hiểu ở dưới) rất phổ biển phục vụ việc format lại code theo config giúp tiết kiệm thời gian cho dev trong việc coding mà vẫn đảm bảo clean

### Prettier (https://prettier.io)

![](../images/prettier.png)

- Đây là extension giúp format code cho dev theo style định sẵn trong file config.
- Để install global prettier trong máy có thể chạy lệnh:

```bash
  npm i -g prettier && prettier -v
```

![](../images/install-prettier.png)

### Naming everything

- Pascal case, kebab case, camel case
- Variable
  - Normal variable
  - constant
  - Boolean variable
- Function
- File name
- Class

### Condition statements

### Code Indentation

### Lines / Chars



### Be cafeful with Magic Number

#### Magic Number là gì ?


#### Cách giải quyết