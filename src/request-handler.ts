export interface Config {
  entryPoint: string
  user?: string
  password?: string
}

type UrlParams = { [key: string]: number | string }
export interface Request {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTION'
  body?: any
  params?: UrlParams
}

export interface RequestOptions {
  getAbortSwitch?: (abort: Function) => void
}

export interface Response<T, U extends keyof T | undefined> {
  res(): PromiseLike<U extends keyof T ? T[U] : StandardResponse & T>
  abort(): void
}

export interface StandardResponse {
  code: number
  error?: string
  error_parameters?: any[]
  status: 'OK' | 'SUCCESS' | 'ERROR'
  message: string
}

export abstract class RequestHandler {
  constructor(protected config: Config) {
  }

  abstract request<T>(request: Request, options?: RequestOptions): PromiseLike<T & StandardResponse>

  getUrl(url: string, params: UrlParams = {}): string {
    Object.keys(params).forEach(key => {
      let value = `${params[key]}`

      value = encodeURIComponent(value)

      const keyRegExp = new RegExp(`:${key}\\b`)

      if (keyRegExp.test(url)) {
        url = url.replace(keyRegExp, value)
      } else {
        const questionMark = url.indexOf('?')
        if (questionMark < 0) {
          url += '?'
        } else if (questionMark !== url.length - 1) {
          url += '&'
        }
        url += `${key}=${value}`
      }
    })

    return `${this.config.entryPoint}/${url}`
  }

  handleResult<T>(data: string): StandardResponse & T {
    const parsedData: StandardResponse & T = JSON.parse(data)

    if (parsedData.code >= 400 && parsedData.code < 600 ||
        parsedData.status === 'ERROR') {
      throw parsedData
    } else {
      return parsedData
    }
  }
}
