import { RequestHandler, RequestOptions } from '../../request-handler'
import { Cloud } from './cloud'

export class CloudsRequest {
  constructor(private rh: RequestHandler) { }

  /**
   * List Cloud Connectors
   * @returns All Cloud Connectors
   */
  list(o?: RequestOptions) {
    return this.rh.request<{ connectors: Cloud[] }>({
      method: 'GET',
      url: 'api/backend/clouds',
    }, o).then(({ connectors }) => connectors)
  }

  /**
   * Get specific Cloud Connector
   * @returns The Cloud Connector
   */
  get(name: string, o?: RequestOptions) {
    return this.rh.request<{ connector: Cloud }>({
      method: 'GET',
      url: 'api/backend/clouds/:name',
      params: { name },
    }, o).then(({ connector }) => connector)
  }

  /**
   * Create a Cloud Connector
   */
  create(connector: Cloud, o?: RequestOptions) {
    return this.rh.request<{ connector: Cloud }>({
      method: 'POST',
      url: 'api/backend/clouds',
      body: { connector },
    }, o).then(({ connector }) => connector)
  }

  /**
   * Update a Cloud Connector
   */
  update(connector: Partial<Cloud>, name: string = connector.name!, o?: RequestOptions) {
    return this.rh.request<{ connector: Cloud }>({
      method: 'PUT',
      url: 'api/backend/clouds/:name',
      body: { connector },
      params: { name }
    }, o).then(({ connector }) => connector)
  }

  /**
   * Delete a Cloud Connector
   */
  delete(name: string, o?: RequestOptions) {
    return this.rh.request<{ connector: Cloud }>({
      method: 'DELETE',
      url: 'api/backend/clouds/:name',
      params: { name }
    }, o).then(({ connector }) => connector)
  }

  /**
   * Test draft Cloud Connector connectivity
   */
  test(connector: Partial<Cloud>, o?: RequestOptions) {
    return this.rh.request({
      method: 'GET',
      url: 'api/backend/clouds/test',
    }, o)
  }
}
