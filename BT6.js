const A = prompt("Enter a letter").toLowerCase();
const N = (prompt("Enter a number."), 10);
const apb = 'abcdefghijklmnopqrstuvwxyz';

var index = apb.indexOf(A);
if (N < 0 || isNaN(N)) {
    document.write("Invalid input");
} else {
    var newIndex = (index + N) % 26;
    if (newIndex < 0) {
        newIndex = newIndex + 26;
    }
    document.write(apb[newIndex]);
}