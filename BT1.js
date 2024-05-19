var N = (prompt("Enter a number"), 10);

if (isNaN(N) || N < 0 || N % 1 != 0 || N > 50) {
    document.write("Invalid input");
} else {
    var min = 0;
    var max = (N - 1) / 2;
    var counter = (min, max) => Math.floor(Math.abs(max - min) + 1);
    document.write(counter(min, max));
}

