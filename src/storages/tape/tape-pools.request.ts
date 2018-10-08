import { RequestHandler, RequestOptions } from '../../request-handler'
import { TapePool } from './tape-pool'

export class TapePoolsRequest {
  constructor(private rh: RequestHandler) { }

  /**
   * List Tape Pools
   * @returns All Tape Pools, including the corresponding Tapes
   */
  list(o?: RequestOptions) {
    return this.rh.request<{ pools: TapePool[] }>({
      method: 'GET',
      url: 'api/backend/pools',
    }, o).then(({ pools }) => pools)
  }

  /**
   * Create a Tape Pool
   */
  create(pool: TapePool, o?: RequestOptions) {
    return this.rh.request({
      method: 'POST',
      url: 'api/backend/pools',
      body: { pool },
    }, o)
  }

  /**
   * Update a Tape Pool
   */
  update(pool: Partial<TapePool>, name: string = pool.name!, o?: RequestOptions) {
    return this.rh.request({
      method: 'PUT',
      url: 'api/backend/pools/:name',
      body: { pool },
      params: { name }
    }, o)
  }

  /**
   * Delete a Tape Pool
   */
  delete(name: string, o?: RequestOptions) {
    return this.rh.request({
      method: 'DELETE',
      url: 'api/backend/pools/:name',
      params: { name }
    }, o)
  }
}
