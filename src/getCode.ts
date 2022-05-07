import axios from 'axios'
import { spawnSync } from 'child_process'

type T_response = {
	code: string
	success: boolean
	message?: string
}

const fetchCode = async (url: string): Promise<T_response> => {
	const response: T_response = { code: '', success: false }
	const [err, res] = await axios.get(url).then(
		(res) => [null, res],
		(err) => [err, null]
	)
	if (err) {
		response.message = JSON.stringify(err)
	} else if (typeof res.data !== 'string') {
		response.message = `code type error. ${res.data}`
	} else {
		response.code = res.data || ''
		response.success = true
	}
	return response
}

const getCode = (url: string) => {
	const { success, code, message }: T_response = JSON.parse(
		spawnSync('node', ['getCode.js', url], {
			cwd: __dirname,
			stdio: ['ignore', 'pipe', 'ignore'],
		}).stdout.toString()
	)

	if (success) return code
	throw new Error(message)
}

const getCodeAsync = async (url: string): Promise<string> => {
	const { success, code, message } = await fetchCode(url)
	if (success) return code
	throw new Error(message)
}

export { getCode, getCodeAsync }

if (process.argv[2]) {
	const url = process.argv[2]
	fetchCode(url).then((res) => {
		process.stdout.write(JSON.stringify(res), () => process.exit(0))
	})
}
