# [do-pipeline](https://github.com/davidroman0O/do-pipeline/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/davidroman0O/do-pipeline/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/do-pipeline.svg?style=flat)](https://www.npmjs.com/package/do-pipeline) 


`do-pipeline` is a minimalist pipeline library for your data workflows.

- **Put your params first** then let's chain your functions
- **Promise based**: it's `bluebird` friendly
- **Pipelineception**: you can put pipelines into a pipeline and so on!
- **So simple it works everywhere** and it's way more easier to read!

Give me a star is you liked it 🤩

Thank you for using this small piece of code in your projects 😍

# Install it

```shell
npm i --save do-pipeline
```

# Usage


```
//	with import
import Pipeline from 'do-pipeline';
//	with require
const Pipeline = require('do-pipeline);
```


Simple usage :

```

const Pipeline = require("do-pipeline");
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

For more example, just take a look at the [unit test file](https://github.com/davidroman0O/do-pipeline/blob/master/src/lib/pipeline.spec.ts) !

Have fun 😄
