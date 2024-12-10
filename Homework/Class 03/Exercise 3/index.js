console.log("Connected");

function calculateAge(birthYear, currentYear) {
    let age = currentYear - birthYear;
    return `You are ${age} years old`;
}

console.log(calculateAge(1996, 2024));
console.log(calculateAge(2000, 2024));
console.log(calculateAge(2004, 2024));

function calAge(birthYear) {
    const d = new Date();
    let currentYear = d.getFullYear();
    let age = (currentYear - birthYear);
    return `You are ${age} years old`;
}

console.log(calAge(2006));