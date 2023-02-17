// // username, age, job


// let fname = prompt('Enter your name: ');
// let age = prompt('Enter your age: ');
// let job = prompt('Enter your job: ');

// console.log(`User info:\n Name: ${fname}\n age: ${age}\n job: ${job}`);



// enter gender, age
let gender = prompt("Enter you gender: ");
let age = prompt("Enter your age: ");

if (gender === 'erkak' && age >= 20) {
    console.log(`Siz ${gender} kishisiz, siz ${age} yoshdasiz va siz qurilishda ishlasangiz bo'ladi`);
} else if (gender === 'erkak' && age < 20) {
    console.log("O'qing ukam");
} else if (gender === 'ayol' && age >= 20) {
    console.log(`Siz ${gender} kishisiz, siz ${age} yoshdasiz va siz oqituvchilikda ishlasangiz bo'ladi`);
} else if (gender === 'ayol' && age < 20) {
    console.log("O'qing singlim")
} else {
    console.log(`togri ma'lumot kiriting`)
}