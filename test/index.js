const { getCode, getCodeAsync } = require('../lib/getCode')
const { requireFromUrlAsync, requireFromString, requireFromUrl } = require('../lib')

// console.log('sync', getCode(url))

// getCodeAsync(url).then((code) => {
//   console.log('async', code)
// })

// requireFromUrlAsync(url).then((axios) => {
//   console.log(`requireFromUrlAsync`, axios)
// })

const main = async (url) => {
  const axios1 = await requireFromUrlAsync(url)
  // console.log(`axios1`, axios1)
  const axios2 = requireFromUrl(url)
  // console.log(`axios2`, axios2)

  console.log((await axios1.get(url)).data)
  // console.log((await axios2.get(url)).data)
}

const url = 'http://127.0.0.1:7799/axios'
main(url)
