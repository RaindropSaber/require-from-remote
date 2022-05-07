# require-from-remote

require a moudle from remote url in the nodejs environment

## How To Use

```js
const { requireFromUrlAsync, requireFromString, requireFromUrl } = require('require-from-remote')

//sync require
const testModule = requireFromUrl('https://github.com/RaindropSaber/require-from-remote/blob/main/test/testModule.js')

//async require
const testModule2 = await requireFromUrlAsync(
	'https://github.com/RaindropSaber/require-from-remote/blob/main/test/testModule.js'
)

//require by string

const test = requireFromString(
	'(()=>{"use strict";var e={d:(o,t)=>{for(var r in t)e.o(t,r)&&!e.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:t[r]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{default:()=>t});const t=()=>{console.log("hello world")};module.exports=o})();'
)
```
