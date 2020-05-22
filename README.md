# Demo for issue #1801 in date-fns

https://github.com/date-fns/date-fns/issues/1801

Steps to reproduce:
```bash
npm install
npx flow
```

Output:
```
Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ index.js:3:20

Dependencies of a @flow strict module must also be @flow strict! (nonstrict-import)

     1│ // @flow strict
     2│
     3│ const { format } = require("date-fns");
     4│
     5│ console.log(`Hello world! ${format(Date.now(), "dd.MM.yyyy")}`);
     6│



Found 1 error
```
