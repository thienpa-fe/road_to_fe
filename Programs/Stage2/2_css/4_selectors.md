# CSS Selectors

## Định nghĩa

- Là những bộ chọn theo các điều kiện yếu tố khác nhau cho phép chiết tách thành element trên html để áp dụng style css hoặc xử lý logic

## Id

Vì id là unique (duy nhất) nên với một id thì chỉ chọn được một element duy nhất. Không thể đặt cho nhiều html element cùng một id giống nhau

```css
#my-id {
  background: red;
}
```

## Class

- Khác với id, class có thể được đặt cho nhiều element khác nhau và khi style sẽ có hiệu lực cho tất cả các element mang selector classname đó

  ```
  .<classname> {
    <style>: <value>
  }
  ```

  ```css
  .my-class {
    background: red;
  }
  ```

- Ví dụ:

  ```html
  <html>
    <head>
      <style>
        .hometown {
          background: yellow;
        }
      </style>
    </head>
    <body>
      <h1>Demo of the .class selector</h1>

      <p>My name is Donald.</p>
      <p class="hometown">I live in Ducksburg.</p>

      <p>My name is Dolly.</p>
      <p class="hometown">I also live in Ducksburg.</p>
    </body>
  </html>
  ```

  ![](/Programs/Stage2/2_css/images/class-selector.png)

## Tagname

- Selector cơ bản, select theo tag name (là các bộ thẻ hiện có trong html), tuy nhiên selector này không cụ thể nên nó sẽ select luôn tất cả các tag name của các component khác dẫn đến việc style sẽ bị áp dụng vô tội vạ không kiểm soát được

  ⇒ Nên chỉ dùng trong trường hợp đang select tagname này trong một selector khác vd như `.header p` hoặc `#main-layout h1`

  ```css
  h1 {
    background-color: yellow;
  }

  p {
    color: yellow;
  }
  ```

## (\*) Universal Selector

- Kí hiệu bằng dấu `*`. Selector này áp dụng lên toàn bộ các element có trong layout html
- Thường dùng để định nghĩa một vài thuộc tính global áp dụng cho toàn bộ trang web để tạo thành một thẻ thống nhất (như font chữ, cỡ chữ, kích thước chuẩn,…)

  ```css
  * {
    color: pink;
  }
  ```

  ![](/Programs/Stage2/2_css/images/universal-selector.png)

```
Các selector có thể nối với nhau và càng có độ cụ thể thì càng tốt, như vậy style sẽ được apply chính xác hơn cho element mình cần và không bị lẫn lộn với các element khác
```

## Sibling Selectors (> ~ +)

### Descendant Selector

https://www.w3schools.com/css/tryit.asp?filename=trycss_sel_element_element

```css
div p {
}
```

- Chọn tất cả thẻ p là hậu duệ của thẻ div, có nghĩa là nếu các thẻ p này được bọc thêm trong các thẻ khác nữa thì nó vẫn sẽ được chọn

### Child Selector (>)

https://www.w3schools.com/css/tryit.asp?filename=trycss_sel_element_gt

```css
div > p {
}
```

- Chọn tất cả các thẻ p là con trực tiếp của div. Nếu thẻ p được bọc bởi một thẻ khác thì không đáp ứng và không được chọn

### Adjacent Sibling Selector (+) (Liền kề)

https://www.w3schools.com/css/tryit.asp?filename=trycss_sel_element_pluss

```css
div + p {
}
```

- Chọn tất cả thẻ p nằm liền kề ngay sau thẻ div

### General Sibling Selector (~)

https://www.w3schools.com/css/tryit.asp?filename=trycss_sel_element_tilde

```css
div ~ p {
}
```

- Chọn tất cả thẻ p (cùng cấp với thẻ div và từ thẻ div trở về sau). Những thẻ p nằm phía trước thẻ div sẽ không được chọn
