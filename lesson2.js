/* co the thay doi gia tri bien */
var x = 'thaivm2'; //global scope
let y = '123'; //block scope

/*khong the thay doi gia tri */
const z = 'xyz';

var newVar = `A da tung noi "md18410"`;
var stringBackTick = 'I\'m';

/* xu ly chuoi/string */
// var string1 = "day la 1 doan string";
// var string2 = "md18410";

let userName = 'md18310';


// alert(string2.length); //kiem tra do dai chuoi

// alert(string1.concat(string2)); // concat de cong chuoi/string

// alert(string1.slice(1,4)); // slice(vi tri bat dau, vi tri ket thuc);

// alert(string1.substring(1,6)); //substring(vi tri bat dau, vi tri ket thuc);

// alert(string2.substr(-1,4)); //substr(vi tri bat dau, do dai chuoi)

/* kieu du lieu number */

// / chia
// * nhan
// + cong
// - tru
// % chia day du

/* null and undefined */
// let chuoi;
// let bienUndefined = undefined;

// let bienNull = null;

/* array */
let numbers = new Array(1,2,3,4,5); //khai bao mang [1,2,3,4,5]
let removed = numbers.pop(); //xoa phan tu cuoi cung [1,2,3,4]
numbers.push(6); //them phan tu vao cuoi mang [1,2,3,4,6]
numbers.shift(); //xoa phan tu dau tien cua mang [2,3,4,6]
numbers.unshift(10); //them phan tu vao vi tri dau tien [10,2,3,4,6]
delete numbers[2]; // xoa phan tu o vi tri 2, thay bang gia tri empty

let newArray = [1,3,5,7,9];
newArray.splice(3,1);
// console.log(newArray);

let a = prompt('nhap so bat ky');

if (!isNaN(a)) {
    let checkSoDuong = a >= 0 ? 'dương' : 'âm';
    alert(checkSoDuong);
} else {
    alert('giá trị nhập vào phải là số');
}

