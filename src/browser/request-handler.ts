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
    let signal: AbortSignal | undefined = undefined
    if (typeof options.getAbortSwitch === 'function') {
      const ctrl = new AbortController()
      signal = ctrl.signal

      options.getAbortSwitch(() => {
        ctrl.abort()
      })
    }

    let headers = new Headers({
      'content-type': 'application/json',
    })

    if (this.config.user) {
      headers.append('Authorization', `Basic ${btoa(`${this.config.user}:${this.config.password}`)}`)
    }

    return fetch(
      this.getUrl(request.url, request.params),
      {
        method: request.method,
        body: JSON.stringify(request.body),
        headers,
        signal,
      }
    )
      .then(res => res.text())
      .then(data => this.handleResult<T>(data))
  }
}
