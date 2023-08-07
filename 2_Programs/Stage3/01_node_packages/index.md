# Node Package Manager (NPM)

![](../_images/npm-banner.jpeg)

Trang chủ: https://www.npmjs.com

NPM Là một kho lưu trữ các gói (package) / thư viện (libraries) / tiện ích (utilities) dùng cho các dự án có sử dụng NodeJS.

Có khoảng 800.000 packages trên kho lưu trữ npm và hoàn toàn miễn phí (open-source). Hiện nay có rất nhiều dự án phần mềm sử dụng package của npm để phát triển thương mại.

Developer có thể tải về và sử dụng cho dự án cá nhân thông qua npm CLI cũng như có thể upload package của mình lên để chia sẻ cho các developer khác sử dụng.

Một vài kho quản lý lưu trữ khác phục vụ cho các nền tảng và các loại ngôn ngữ lập trình khác nhau:

- Nuget dành cho .NET
- Composer dành cho PHP
- Maven dành cho Java
- PiP dành cho Python

## node_modules

Chứa các gói / thư viện / tiện ích cần thiết cho dự án.
Trong quá trình phát triển dự án phần mềm sẽ tải và sử dụng các package từ NPM. Các gói đó sẽ được chứa trong node_modules

Vì node_modules là một folder có dung lượng lớn nên khi đẩy source code dự án lên các kho lưu trữ code như github, gitlab,... sẽ rất mất thời gian. Thay vào đó ta sẽ bỏ qua thư mục node_modules. Ở các máy của developer khác khi clone project về chỉ cần chạy lệnh `npm install` để build lại node_modules trên chính local của máy đó với thời gian nhanh hơn là đợi download node_modules về.

![](../_images/node_modules_ignore.jpeg)

Cũng vì node_modules khá nặng nên trong một số trường hợp cần xoá đi và install lại thì cũng không thể dùng cách xoá thông thường mà sẽ sử dụng command: `rm -rf node_modules`

![](../_images/heaviest-node_modules.png)

## package.json

![](../_images/package.json.png)

File `package.json` dùng để config dự án sử dụng NodeJS. Chứa các thông tin dự án, các package cần thiết cho dự án và các đoạn script dùng để chạy dự án.

> Tưởng tượng một dự án phần mềm NodeJS như các mảnh ghép, mỗi package tải về như một mảnh ghép trong dự án đó. Và package.json là file tổng hợp tất cả các mảnh ghép hiện có trong dự án lại để dễ quản lý.

`package.json` giúp quá trình làm việc nhóm giữa các developer được thuận tiện hơn khi có thể share với nhau thông tin về cấu hình dự án và tự cài đặt trên máy cá nhân của mình.

![](../_images/package-json-share.png)

### package-json.lock

- Tương tự khi sử dụng yarn sẽ có yarn.lock, pnpm sẽ có pnpm-lock.yaml

### versioning [(link)](https://dev.to/typescripttv/understanding-npm-versioning-3hn4)

![](../_images/npm-versioning.webp)

Phiên bản của các package NPM thường có 3 phần:

- Major: Phiên bản có các cập nhật lớn và quan trọng (tái cấu trúc, implement, cách vận hành...). Những phiên bản này có khả năng không còn tương thích với dự án hay các package khác phiên bản cũ hơn.

- Minor: Phiên bản có các cập nhật trung bình, cân bằng hiệu suất, update thêm các tính năng mới mà không làm thay đổi cấu trúc core hay cách vận hành của package. Không ảnh hưởng đến project và các package khác.

- Patch: Các bản vá để fix các lỗi, thay đổi nhỏ không đáng kể. Không ảnh hưởng đến project và các package khác.

Các package được list trong `package.json` sẽ được khai báo version kèm theo một số kí hiệu đặc biệt:

![](../_images/versioning-dependencies.png)

- `^x.x.x`:

- `~x.x.x`:

### dependencies & devDependencies

## NPM basic commands

### npm init

Dùng để khởi tạo các thông tin ban đầu cho dự án.

Sinh ra file package.json để list các package mình muốn sử dụng và các script để khởi chạy dự án.

![](../_images/npm-init.png)

---

### npm install \<package-name>

### npm uninstall \<package-name>

### npm view \<package-name> versions

## Other

- yarn (https://classic.yarnpkg.com/en)
- pnpm (https://pnpm.io)

## Tham khảo

- https://nodejs.dev/en/learn/an-introduction-to-the-npm-package-manager

- https://www.w3schools.com/whatis/whatis_npm.asp
