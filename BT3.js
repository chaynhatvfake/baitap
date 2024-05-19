const A = prompt("Enter a letter").toLowerCase();
const N = (prompt("Enter a number."), 10);
const apb = 'abcdefghijklmnopqrstuvwxyz';

var idx = apb.indexOf(A);
if (N < 0 || isNaN(N)) {
    document.write("Invalid input");
} else {
    var newIdx = (index + N) % 26;
    if (newIdx < 0) {
        newIdx = newIdx + 26;
    }
    document.write(apb[newIdx]);
}

