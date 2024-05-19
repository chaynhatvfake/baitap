var N = (prompt("Enter a number"), 10);

if (isNaN(N) || N < 0 || N % 1 != 0 || N > 15) {
    document.write("Invalid input");
} else {
    var min = N + 1;
    var max = N ** 2;
    var counter = (min, max) => Math.floor(Math.abs(max - min) + 1); 
    document.write(counter(min, max));
}
