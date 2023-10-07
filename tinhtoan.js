let a = prompt('Nhập giá trị số a:');
let b = prompt('Nhập giá trị số b:');
let o = prompt('Nhập toán tử (+, -, *, /):');

switch(o) {
    case '+':
        let tong = Number(a) + Number(b);
        alert(`${a} + ${b} = ${tong}`);
        break;
    case '-':
        let hieu = Number(a) - Number(b);
        alert(`${a} - ${b} = ${hieu}`);
        break;
    case '*':
        let tich = Number(a) * Number(b);
        alert(`${a} * ${b} = ${tich}`);
        break;
    case '/':
        let thuong = Number(a) / Number(b);
        alert(`${a} / ${b} = ${thuong}`);
        break;
    default:
        alert('Toán tử nhập vào không hợp lệ');
        break;
}
