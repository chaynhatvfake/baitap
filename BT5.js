const input = prompt("Enter A letter ");

if (input.length != 1) {
    document.write("Don't you know what A letter is?");
} else {
    document.write(input.toUpperCase());
}