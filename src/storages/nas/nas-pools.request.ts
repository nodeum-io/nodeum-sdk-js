import { RequestHandler, RequestOptions } from '../../request-handler'
import { NasPool } from './nas-pool'

export class NasPoolsRequest {
  constructor(private rh: RequestHandler) { }

  /**
   * List NAS Pools
   * @returns All NAS Pools, including the corresponding NAS Share and NAS
   */
  list(o?: RequestOptions) {
    return this.rh.request<{ pools: NasPool[] }>({
      method: 'GET',
      url: 'api/backend/nas/pools',
    }, o).then(({ pools }) => pools)
  }

  /**
   * Get specific NAS Pools
   * @returns The NAS Pool, including the corresponding NAS Share and NAS
   */
  get(id: number, o?: RequestOptions) {
    return this.rh.request<{ pool: NasPool }>({
      method: 'GET',
      url: 'api/backend/nas/pools/:id',
      params: { id },
    }, o).then(({ pool }) => pool)
  }

  /**
   * Create a NAS Pool
   */
  create(pool: NasPool, o?: RequestOptions) {
    return this.rh.request<{ pool: NasPool }>({
      method: 'POST',
      url: 'api/backend/nas/pools',
      body: { pool },
    }, o).then(({ pool }) => pool)
  }

  /**
   * Update a NAS Pool
   */
  update(pool: Partial<NasPool>, id: number = pool.id!, o?: RequestOptions) {
    return this.rh.request<{ pool: NasPool }>({
      method: 'PUT',
      url: 'api/backend/nas/pools/:id',
      body: { pool },
      params: { id }
    }, o).then(({ pool }) => pool)
  }

  /**
   * Delete a NAS Pool
   */
  delete(id: number, o?: RequestOptions) {
    return this.rh.request<{ pool: NasPool }>({
      method: 'DELETE',
      url: 'api/backend/nas/pools/:id',
      params: { id }
    }, o).then(({ pool }) => pool)
  }
}
