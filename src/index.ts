import * as requireFromString from 'require-from-string';
import { getCode, getCodeAsync } from './getCode';

type T_URL = string
type T_Module = any

const moduleCache: Map<T_URL, T_Module> = new Map()

const requireFromUrlAsync = async (url: string) => {
  if (!moduleCache.has(url)) {
    const code = await getCodeAsync(url)
    const _module = requireFromString(code)
    moduleCache.set(url, _module)
  }
  return moduleCache.get(url)
}

const requireFromUrl = (url: string) => {
  if (!moduleCache.has(url)) {
    const code = getCode(url)
    const _module = requireFromString(code)
    moduleCache.set(url, _module)
  }
  return moduleCache.get(url)
}

export { requireFromUrlAsync, requireFromString, requireFromUrl }

