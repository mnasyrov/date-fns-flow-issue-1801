// @flow strict

const { format } = require("date-fns");

console.log(`Hello world! ${format(Date.now(), "dd.MM.yyyy")}`);
