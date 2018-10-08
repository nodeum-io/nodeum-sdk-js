import { RequestHandler, RequestOptions } from '../../request-handler'
import { CloudPool } from './cloud-pool'

export class CloudPoolsRequest {
  constructor(private rh: RequestHandler) { }

  /**
   * List Cloud Pools
   * @returns All Cloud Pools, including the corresponding Buckets and Clouds
   */
  list(o?: RequestOptions) {
    return this.rh.request<{ pools: CloudPool[] }>({
      method: 'GET',
      url: 'api/backend/clouds/pools',
    }, o).then(({ pools }) => pools)
  }

  /**
   * Get specific Cloud Pools
   * @returns The Cloud Pool, including the corresponding Buckets and Clouds
   */
  get(name: string, o?: RequestOptions) {
    return this.rh.request<{ pool: CloudPool }>({
      method: 'GET',
      url: 'api/backend/clouds/pools/:name',
      params: { name },
    }, o).then(({ pool }) => pool)
  }

  /**
   * Create a Cloud Pool
   */
  create(pool: CloudPool, o?: RequestOptions) {
    return this.rh.request<{ pool: CloudPool }>({
      method: 'POST',
      url: 'api/backend/clouds/pools',
      body: { pool },
    }, o).then(({ pool }) => pool)
  }

  /**
   * Update a Cloud Pool
   */
  update(pool: Partial<CloudPool>, name: string = pool.name!, o?: RequestOptions) {
    return this.rh.request<{ pool: CloudPool }>({
      method: 'PUT',
      url: 'api/backend/clouds/pools/:name',
      body: { pool },
      params: { name }
    }, o).then(({ pool }) => pool)
  }

  /**
   * Delete a Cloud Pool
   */
  delete(name: string, o?: RequestOptions) {
    return this.rh.request<{ pool: CloudPool }>({
      method: 'DELETE',
      url: 'api/backend/clouds/pools/:name',
      params: { name }
    }, o).then(({ pool }) => pool)
  }
}
