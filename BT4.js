const input = prompt("Enter two numbers, seperated by a space").split(' ');
let A = prompt(input[0], 10); 
let B = prompt(input[1], 10);

if (isNaN(A) || A < 0 || A % 1 != 0 || A > 1000
    || isNaN(B) || B < 0 || B % 1 != 0 || B > 1000) {
    document.write("Invalid input");
} else {
    document.write(A + B + A * B);
}

