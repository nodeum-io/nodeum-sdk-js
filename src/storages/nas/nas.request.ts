import { RequestHandler, RequestOptions } from '../../request-handler'
import { Nas } from './nas'

export class NasRequest {
  constructor(private rh: RequestHandler) { }

  /**
   * List NAS
   * @returns All NAS
   */
  list(o?: RequestOptions) {
    return this.rh.request<{ nas: Nas[] }>({
      method: 'GET',
      url: 'api/backend/nas',
    }, o).then(({ nas }) => nas)
  }

  /**
   * Get specific NAS
   * @returns The NAS, including the corresponding NAS Share and Pool
   */
  get(id: number, o?: RequestOptions) {
    return this.rh.request<{ nas: Nas }>({
      method: 'GET',
      url: 'api/backend/nas/:id',
      params: { id },
    }, o).then(({ nas }) => nas)
  }

  /**
   * Create a NAS
   */
  create(nas: Nas, o?: RequestOptions) {
    return this.rh.request<{ nas: Nas }>({
      method: 'POST',
      url: 'api/backend/nas',
      body: { nas },
    }, o).then(({ nas }) => nas)
  }

  /**
   * Update a NAS
   */
  update(nas: Partial<Nas>, id: number = nas.id!, o?: RequestOptions) {
    return this.rh.request<{ nas: Nas }>({
      method: 'PUT',
      url: 'api/backend/nas/:id',
      body: { nas },
      params: { id }
    }, o).then(({ nas }) => nas)
  }

  /**
   * Delete a NAS
   */
  delete(id: number, o?: RequestOptions) {
    return this.rh.request<{ nas: Nas }>({
      method: 'DELETE',
      url: 'api/backend/nas/:id',
      params: { id }
    }, o).then(({ nas }) => nas)
  }
}
