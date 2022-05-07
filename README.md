# require-from-remote

Require a remote bundle from url in the nodejs environment

Can be used with [packing-node-module](https://www.npmjs.com/package/packing-node-module)

## How To Use

### API

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

## Use with [packing-node-module](https://www.npmjs.com/package/packing-node-module)

1. Use [packing-node-module](https://www.npmjs.com/package/packing-node-module) to package your module or code

2. Upload the code to your cdn or server

3. Use [require-from-remote](https://www.npmjs.com/package/require-from-remote) to require url
