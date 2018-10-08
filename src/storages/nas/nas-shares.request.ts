import { RequestHandler, RequestOptions } from '../../request-handler'
import { NasShare } from './nas-share'

export class NasSharesRequest {
  constructor(private rh: RequestHandler) { }

  /**
   * List NAS Shares
   * @returns All NAS Shares, including the corresponding NAS and id of Pool
   */
  list(o?: RequestOptions) {
    return this.rh.request<{ nas_shares: NasShare[] }>({
      method: 'GET',
      url: 'api/backend/nas/shares',
    }, o).then(({ nas_shares }) => nas_shares)
  }

  /**
   * Get specific NAS Shares
   * @returns The NAS Share, including the corresponding NAS and Pool
   */
  get(id: number, o?: RequestOptions) {
    return this.rh.request<{ nas_share: NasShare }>({
      method: 'GET',
      url: 'api/backend/nas/shares/:id',
      params: { id },
    }, o).then(({ nas_share }) => nas_share)
  }

  /**
   * Create a NAS Share
   */
  create(nas_share: NasShare, o?: RequestOptions) {
    return this.rh.request<{ nas_share: NasShare }>({
      method: 'POST',
      url: 'api/backend/nas/shares',
      body: { nas_share },
    }, o).then(({ nas_share }) => nas_share)
  }

  /**
   * Update a NAS Share
   */
  update(nas_share: Partial<NasShare>, id: number = nas_share.id!, o?: RequestOptions) {
    return this.rh.request<{ nas_share: NasShare }>({
      method: 'PUT',
      url: 'api/backend/nas/shares/:id',
      body: { nas_share },
      params: { id }
    }, o).then(({ nas_share }) => nas_share)
  }

  /**
   * Delete a NAS Share
   */
  delete(id: number, o?: RequestOptions) {
    return this.rh.request<{ nas_share: NasShare }>({
      method: 'DELETE',
      url: 'api/backend/nas/shares/:id',
      params: { id }
    }, o).then(({ nas_share }) => nas_share)
  }

  /**
   * Test draft NAS Share connectivity
   */
  test(nas_share: Partial<NasShare>, o?: RequestOptions) {
    return this.rh.request({
      method: 'GET',
      url: 'api/backend/nas/shares/test',
    }, o)
  }
}
