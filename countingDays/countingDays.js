// Function to calculate the day of the week using the formula-based approach
function dayOfWeek(dateString) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateString);
    const dayIndex = date.getDay(); // returns 0 - 6
    return days[dayIndex];
    // Sunday - Saturday : 0 - 6
}
//----------------------------------------

let countingSundays = (firstYear, lastYear) => {
    //let padded = String(num).padStart(2, '0');
    let count = 0
    let year = lastYear - firstYear
    for(let i = 0; i <= year; i++) {
        for(let j = 1; j <= 12; j++) {
            let dateString = `${firstYear+ i}-${String(j).padStart(2, '0')}-01` 
            let dow = dayOfWeek(dateString)
            if(dow === 'Sunday') count++            
        }
    }
    return count
}

console.log(countingSundays(1901, 2000))


/*

Final Calculation:
The formula: (y + y/4 − y/100 + y/400 + t[m−1] + d) % 7 calculates the day of the week by summing the day (d), month code (t[m - 1]), and adjusted year values.

The result is then taken modulo 7, which gives a value between 0 and 6, corresponding to the days of the week: 0 = Sunday, 1 = Monday, ..., 6 = Saturday.

*/