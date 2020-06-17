function mostFrequentDays(year) {
    //your code here
    let lastDate = new Date(year + "-12-31T00:00:00.000Z").getDay();
    let firstDate = new Date(year + "-01-01T00:00:00.000Z").getDay();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let result = new Set([weekday[firstDate], weekday[lastDate]]);
    if (lastDate === 1 && firstDate === 0)
        result = new Set([weekday[lastDate], weekday[firstDate]]);

    return [...result];
}
function mostFrequentDays(year) {
    var days = [
        new Date(year, 0, 1).getDay(),
        new Date(year, 11, 31).getDay()
    ];

    if (days[0] === days[1])
        days.pop();

    else if (!days[0] || days[0] > days[1] && days[1])
        days.reverse();

    return days.map(n => ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur'][n] + 'day');
}
console.log(mostFrequentDays(1984));
console.log(mostFrequentDays(1983));