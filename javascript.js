var moment = require("moment");
const chalk = require('chalk');
var userTime = new Date();
console.log(chalk.cyan.underline(moment().format('dddd')));
console.log(moment().format('LT'));
currentTime = userTime.getHours();

if(currentTime >= 12 && currentTime <= 5)
{
    console.log(chalk.blue.underline("Good afternoon!!!"));
}
else if(currentTime > 0 && currentTime < 12)
{
    console.log(chalk.yellow.underline("Good morning!!!"));
}
else
{
    console.log(chalk.gray.underline("Good evening!!!"));
}