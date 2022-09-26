// Bai 1:
// Input: luong 1 ngay, so ngay lam
// Process:
// 1. Lay dc input (hardcode), tao 2 bien luong 1 ngay = 100000,so ngay lam =20
// 2.Tinh luong: so ngay lam * luong 1 ngay
// 3.Xuat KQ
// Output:Tinh luong(tien)

var salaryPerDay = 100000;
var workingDay = 20;
var totalDay = salaryPerDay * workingDay;
console.log(totalDay);

// Bai 2:
// Input: cho 5 so thuc n1,n2,n3,n4,n5
// Process:
// 1.Nhap vao 5 so thuc n1,n2,n3,n4,n5
// 2.Tinh gia tri trung binh 5 so: (n1+n2+n3+n4+n5)/5
// 3.Xuat KQ
// Output: Tinh kQ trung binh 5 so

var n1 = 2,
  n2 = 4,
  n3 = 6,
  n4 = 10,
  n5 = 18;
var averageValue = (n1 + n2 + n3 + n4 + n5) / 5;
console.log(averageValue);

// Bai 3:
// Input: 1 USD = 23000 vnd
// Process:
// 1.Nguoi dung nhap vao gia tri usd
// 2.quy doi so tien usd sang vnd
// 3.Xuat ra kq tien vnd
// Output: Tinh tien tien sau quy doi

var moneyUsd = 2;
var conversionResults = moneyUsd * 23500;
console.log(conversionResults + "vnd");

// Bai4:
// Input: chieu dai, chieu rong;
// Process:
// 1.Nhap vao chieu dai, chieu rong
// 2.Tinh chu vi = (chieu dai + chieu rong ) * 2;
// 3.Tinh dien tich = chieu dai * chieu rong;
// 4.Xuat KQ chu vi, dien tich;
// Output: tinh va xuat ra chu vi dien tich

var longs = 10;
var width = 20;
var perimeter = (longs + width) * 2;
var area = longs * width;
console.log("chu vi hcn:" + perimeter);
console.log("dien tich hcn:" + area);

// Bai5:
// Input:cho 1 so co 2 chu so
// Process:
// 1.Nhap vao 1 so co 2 chu so vd:34
// 2.dau tien tach lay ki so hang don vi = so % 10;
// 3.tach lay ki so hang chuc = so / 10;
// 4.Kq = kisohangdonvi + kisohangchuc;
// Output:Tinh tong 2 ki so vd:3+4=7

var n = 34;
var units = Math.floor(n % 10);
var dozen = Math.floor(n / 10);
var result = units + dozen;
console.log("Tong 2 ki so la: ", result);
