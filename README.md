# do-pipeline

Simple function DO i use everyday

```bash
npm i --save do-pipeline
```

# Usage

```

const Pipeline = require("do-pipeline").default;
const Promise = require("bluebird");

const capitalize = str => str[0].toUpperCase() + str.substring(1);
const splitOnSpaces = str => str.trim().split(" ");
const getLastOfArr = arr => arr.pop();
const toUpper = values => values.toUpperCase();
const wait = async values => {
  await Promise.delay(500);
  return values;
};

Pipeline([
  "love food",
  capitalize,
  wait,
  splitOnSpaces,
  getLastOfArr,
  toUpper
])
.then(data => console.log(data)); 

// FOOD

```
