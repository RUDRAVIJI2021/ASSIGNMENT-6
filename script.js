function calculateGrade() {
let tamil = Number(prompt("Enter Tamil marks:"));
let english = Number(prompt("Enter English marks:"));
let maths = Number(prompt("Enter Maths marks:"));
let science = Number(prompt("Enter Science marks:"));
let social = Number(prompt("Enter Social marks:"));

function isvalidMarks(mark) {
    return isNaN(mark) || mark < 0 || mark > 100;
}
if (isvalidMarks(tamil) || isvalidMarks(english) || isvalidMarks(maths) || isvalidMarks(science) || isvalidMarks(social)) {
    alert("enter valid range of 0 to 100.");
}
else {

    let total = (english + tamil + maths + science + social);
    console.log("Total score  " + total);
    let average = total / 5;
    console.log("Average Score " + average);

        if (average >= 90) {
            console.log(" Grade is A+");
            return "A+";
        }
        else if (average >= 80 && average < 90) {
            console.log(" Grade is A");
            return "A";

        }
        else if (average >= 70 && average < 80) {
            console.log("Grade is B");
            return "B";

        }
        else if (average >= 60 && average < 70) {
            console.log(" Grade is C");
            return "C";

        }

        else if (average >= 50 && average < 60) {
            console.log(" Grade is D");
            return "D";
        }
        else {
            console.log( "Grade is F");
            return "F";
        }


    }
    let result = alert(`Total: ${total}\nAverage: ${average}\nYour Grade is: ${grade}`);


}


    