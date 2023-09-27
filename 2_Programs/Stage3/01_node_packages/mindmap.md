# Node Package Manager (NPM)

## Định nghĩa

- Trang chủ: https://www.npmjs.com.
- Là kho lưu trữ các packages, libraries.
- Phục vụ cho việc phát triển phần mềm chạy trên NodeJS.
- Có khoảng 800k packages trên kho lưu trữ npm và hoàn toàn miễn phí (open-source).
- Hiện nay có rất nhiều dự án phần mềm sử dụng package của npm để phát triển thương mại.
- Một vài kho quản lý lưu trữ khác phục vụ cho các nền tảng và các loại ngôn ngữ lập trình khác nhau.
  - Nuget dành cho .NET.
  - Composer dành cho PHP.
  - Maven dành cho Java.
  - PiP dành cho Python.

## Công dụng

- Lưu trữ tập trung các tiện ích phát triển phần mềm.
- Developer có thể tải về và sử dụng cho dự án thông qua npm CLI.
- Developer upload package của mình lên để chia sẻ cho các developer khác sử dụng.

## Làm việc với NPM

- package json

  - Chứa thông tin về dự án
    - Tên dự án
    - Version
    - Bản quyền
  - Các thư viện đang được sử dụng:
    - dependencies:
      - Chứa các package cần thiết để dự án có thể chạy được ở môi trường production.
      - Các package này sẽ được cài đặt và build trên môi trường production.
    - devDependencies:
      - Chứa các package hỗ trợ phục vụ developer trong việc phát triển như code formatter, lint, test, transpiler...
      - Các package này sẽ không được cài đặt và build trên môi trường production.
  - Các script để chạy dự án.

- node_modules

  - Chứa các packages đã cài đặt từ NPM.
  - Khi cài đặt một package thì npm cũng sẽ cài đặt luôn các package thành phần cần thiết -> size sẽ rất lớn.
  - Vì dung lượng lớn và nặng nên thường không được lưu trên remote repository.

- Versioning

  - Version của một package được chia ra làm 3 phần:
    - **Major**: Phiên bản có các cập nhật lớn và quan trọng (tái cấu trúc, implement, cách vận hành...). Những phiên bản này có khả năng không còn tương thích với dự án hay các package khác phiên bản cũ hơn.
    - **Minor**: Phiên bản có các update thêm các tính năng mới mà không làm thay đổi cấu trúc core hay cách vận hành của package. Không ảnh hưởng đến project và các package khác.
    - **Patch**: Các bản vá để fix các lỗi, thay đổi nhỏ không đáng kể. Không ảnh hưởng đến sự ổn định project và các package khác.
  - Kí hiệu:
    - `^x.x.x`: Cho phép update version của package này lên latest version của minor và patch Nhưng vẫn giữ cố định major version hiện tại. Vd ^5.0.1 -> ^5.0.2 hoặc ^5.1.0 chứ không lên ^6.0.0.
    - `~x.x.x`: Cho phép update version của package này lên latest patch version. Chỉ cập nhật những bug fixes hay hotfixes của các bản vá. Major và minor version sẽ được giữ nguyên.
    - `x.x.x`: NPM sẽ tải chính xác version đã được khai báo.
  - Kiểm tra versioning tại https://semver.npmjs.com

- package-lock.json

  - Lưu giữ chính xác version của các package được cài đặt trong dự án. Khi install node_modules thì npm sẽ dựa trên các version này để tải về các package tương ứng. Nếu không có thì npm sẽ dựa vào version được định nghĩa trong package.json => Bảo đảm các package sử dụng trong hệ thống giữ phiên bản ổn định.

- NPM CLI
  - `npm init`: Sinh ra file package.json và cho phép cấu hình các thông tin cơ bản của dự án.
  - `npm install`: Tự động các packages dựa theo dependencies và trong file packge.json và package-lock.json.
  - `npm install <package_name>`: Cài đặt một package vào node_modules của dự án.
  - `npm uninstall <package_name>`: Gỡ bỏ một package ra khỏi node_modules của dự án.
  - `npm run <script>`: Chạy các script được khai báo trong package.json (run, build, test, lint...).
  - `npm view <package-name> versions`: Kiểm tra toàn bộ các version hiện có của một package.

## Tài liệu tham khảo

- Một số công cụ làm việc với NPM:

  - yarn: https://yarnpkg.com
  - pnpm: https://pnpm.io

- Documents
  - https://nodejs.dev/en/learn/an-introduction-to-the-npm-package-manager
  - https://www.w3schools.com/whatis/whatis_npm.asp
  - https://tienvm.com/tim-hieu-ve-semantic-versioning
