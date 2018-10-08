import { request as http, ClientRequest } from 'http'
import { parse } from 'url'
import {
  Config,
  RequestHandler as IRequestHandler,
  Request,
  RequestOptions,
  StandardResponse,
} from '../request-handler'

export { Config } from '../request-handler'

export class RequestHandler extends IRequestHandler {
  request<T>(request: Request, options: RequestOptions = {}): PromiseLike<T & StandardResponse> {
    let req: ClientRequest
    let aborted: boolean = false

    if (typeof options.getAbortSwitch === 'function') {
      options.getAbortSwitch(() => {
        aborted = true
        if (req) {
          req.abort()
        }
      })
    }

    const { protocol, hostname, port, path } =
        parse(this.getUrl(request.url, request.params))

    const { method, body } = request

    let auth: string | undefined = undefined

    if (this.config.user) {
      auth = `${this.config.user}:${this.config.password}`
    }

    return new Promise((resolve, reject) => {
      if (aborted) {
        return reject(Error('Aborted request'))
      }

      req = http({
        method, protocol, hostname, port, path, auth,
        headers: {
          'content-type': 'application/json',
        },
      }, res => {
        res.setEncoding('utf8')

        let data = ''
        res.on('data', (chunk) => {
          data += chunk
        })
        res.on('end', () => {
          try {
            resolve(this.handleResult(data))
          } catch (err) {
            reject(err)
          }
        });
      })

      if (body) {
        req.write(JSON.stringify(body))
      }

      req.end()
    })
  }
}
