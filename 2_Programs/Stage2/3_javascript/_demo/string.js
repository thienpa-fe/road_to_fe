/**
 * 1. Làm sao để đảo ngược một chuỗi
 * 2. Làm sao để in hoa chữ cái đầu của một string
 * 3. Làm sao để remove khoảng trắng trong string
 * 4. Làm sao để convert một string thành kiểu boolean
 * 5. Làm sao để xoá một substring trong một string
 * 6. Làm sao để kiểm tra một string là empty
 * 7. Làm sao để thêm khoảng trắng (space) vào trước mỗi chữ viết hoa
 * 8. Làm sao để chuyển chuyển đổi một dãy số tài khoản ngân hàng gồm 16 số thành dạng `**********101095`
 */

const inputString = 'helloworld!';

// Bai 1
const reversedString = inputString.split('').reverse().join('');
console.log(inputString, reversedString);

// Bai 2
const upperCaseFirstCharString =
  inputString[0].toUpperCase() + inputString.substring(1);
console.log(inputString, upperCaseFirstCharString);

// Bai 3
// Bai 4
// Bai 5
// Bai 6
// Bai 7
// Bai 8
