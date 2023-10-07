/* phạm vi biến
- Toàn cục (global)
- Cục bộ (local)
*/

let bienToanCuc = 5; //biến toàn cục

function tinhTheKy() {
    let soNam = prompt('Nhập số năm: '); //biến cục bộ
    let theKy = Math.ceil(Number(soNam/100)); // tìm số nguyên nhỏ nhất lớn hơn hoặc bằng giá trị truyền vào

    console.log(bienToanCuc);
}
