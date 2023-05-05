# Basic HTML tags

## Text / Paragraph

### [Heading](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_headings)

```HTML
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

> _Có thể làm heading to ra nữa được không ?_

### [Paragraph](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_paragraphs1)

Content giữa cặp thẻ p sẽ được hiển thị tuỳ theo kích cỡ co dãn của trình duyệt và theo normal flow, mình không thể kiểm soát được việc ngắt dòng hay khoảng cách của nó kể cả có cố ý code như vậy

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

> Muốn định dạng được một cách thủ công đoạn text theo ý mình thì thay vì dùng `<p>` ta sẽ dùng thẻ`<pre>`

## Formatting

### [Horizontal Rule](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_headings_hr)

Thẻ này sẽ hiển thị đường thẳng kẻ ngang để ngăn cách giữa các đoạn

```html
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr />
<h2>This is heading 2</h2>
<p>This is some other text.</p>
<hr />
```

- `<i>`: In nghiêng
- `<b>, <strong>`: In đậm
- `<u>`: Gạch chân
- `<strike>`: Gạch ngang
- `<mark>`: Hightlight đoạn văn bản lên, giống bôi bút lông vàng
- `<small>`: Định dạng chữ nhỏ hơn bình thường

## Links / Import

- `<a>`:

```html
<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>
```

- `<link>`:

```html
<link rel="stylesheet" href="styles.css" />
<link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
```

- `<script>`:

```html
<script>
  document.getElementById('demo').innerHTML = 'Hello JavaScript!';
</script>

<script type="text/javascript">
  console.log('hello');
</script>
```

## [List](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_lists_intro)

Sử dụng thẻ `<ul>` hoặc `<ol>` đi cùng với các thẻ `<li>`

- `<ul>`: List không có thứ tự. Các chỉ mục của list sẽ là các icon biểu tượng. Có thể chọn thông qua thuộc tính css `list-style-type`
- `<ol>`: List có đánh số thứ tự. Các chỉ mục của list sẽ được đánh thứ tự từ nhỏ đến lớn
- Các thẻ `<li>` đại diện cho những item / phần tử nằm trong list đó. Bản thân nó cũng chứa được 1 list con khác và các html elements

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<h2>An Ordered HTML List</h2>

<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

- Cặp thẻ `<dl> <dt>` ít dùng

# Table

- Dùng cặp thẻ `<table>`

```html
<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table>
```

- Thẻ `<table>`: Định dạng một table
- Thẻ `<tr>`: Định dạng một row trong table đó
- Thẻ `<th>`: Định dạng tiêu đề của table
- Thẻ `<td>`: Định dạng nội dung của một column theo thứ tự từ trái sang phải

## Form

- Dùng để thu thập thông tin của người dùng
- [Simple Demo](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit)

```html
<form action="/action_page.php" method="get">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" /><br /><br />
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname" /><br /><br />
  <input type="submit" value="Submit" />
</form>
```

## Input

- Thường dùng để điền thông tin
- Thường đi kèm với thẻ `<form> `

```html
<input type="button" />
<input type="checkbox" />
<input type="color" />
<input type="date" />
<input type="datetime-local" />
<input type="email" />
<input type="file" />
<input type="hidden" />
<input type="image" />
<input type="month" />
<input type="number" />
<input type="password" />
<input type="radio" />
<input type="range" />
<input type="reset" />
<input type="search" />
<input type="submit" />
<input type="tel" />
<input type="text" />
<input type="time" />
<input type="url" />
<input type="week" />
```

## Image

- Để hiển thị được hình ảnh trên web thì ta sẽ sử dụng thẻ `<img />`
- Thẻ img sẽ có các attribute kèm theo để tuỳ chỉnh các thuộc tính

  - `src`: Dùng để đặt đường dẫn của image. Có thể là path trong thư mục dự án hoặc một đường link ở ngoài internet
  - `alt`: Chứa một đoạn text mô tả cho ảnh, dùng trong trường hợp ảnh không load được hoặc bị lỗi thì sẽ sử dụng đến tên alt này
  - `width / height`: Chỉnh chiều rộng và chiều cao cho bức ảnh. Tuy vậy nhưng vẫn khuyến khích set height, width cho image bằng `style` để nó có thể linh hoạt hơn về kích cỡ cũng như các thuộc tính đi kèm

  ```html
  <img src="img_chania.jpg" alt="Flowers in Chania" />
  ```

- Ngoài ra html còn cung cấp thêm thẻ `<picture>` giúp cho việc hiển thị hình ảnh thêm linh hoạt. Cụ thể là các ảnh sẽ được thay đổi tuỳ vào các kích cỡ khác nhau của màn hình
  - Thẻ `<picture>` cho phép chứa nhiều thẻ source bên trong để config các hình ảnh bằng attribute srcset. attribute media để chỉ định size nào thì sẽ show ảnh nào
  - Có 1 thẻ img chính để hiển thị hình ảnh mặc định
