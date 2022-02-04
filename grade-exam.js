var numbers = 95;

if (50 > numbers) {
    console.log("Grade F");

}
else if (50 <= numbers || 60 > numbers) {
    console.log("Grade D");
}
else if (60 <= numbers || 70 > numbers) {
    console.log("Grade C");
}
else if (70 <= numbers || 80 > numbers) {
    console.log("Grade B");
}
else if (80 <= numbers || 90 > numbers) {
    console.log("Grade A");
}
else if (90 < numbers) {
    console.log("Grade A+");
}