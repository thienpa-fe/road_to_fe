# Array

Bản chất của array thực ra là một loại của object. Cụ thể là `loại object có key là số nguyên và có thuộc tính length biểu diễn số phần tử chứa trong nó`

```js
typeof []; // "object"
```

> Mặc dù là một loại object nhưng array vẫn có các hàm xử lý riêng rất hiệu quả khi làm việc với dữ liệu dạng collection

- Vị trí đầu tiên của phần tử trong mảng có index = 0

- Đó là dựa vào `zero-based indexing`

## Array like object

## Object like array

## Đọc thêm

Vì sao phần tử đầu tiên trong mảng có index = 0 ?

Đó là vì cơ chế zero-based indexing. Được sử dụng với lí do cần nhất quán với con trỏ trong số học: Trong lập trinh cấp thấp, các mảng thường được lưu vào các ô nhớ có địa chỉ liền kề. Sử dụng zero-based indexing để đánh index cho các phần tử trong mảng là cách đơn giản và đồng bộ nhất.
