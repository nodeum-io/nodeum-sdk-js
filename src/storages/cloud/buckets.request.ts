import { RequestHandler, RequestOptions } from '../../request-handler'
import { Bucket } from './bucket'

export class BucketsRequest {
  constructor(private rh: RequestHandler) { }

  /**
   * List Buckets
   * @returns All Buckets, including their Cloud and Pool
   */
  list(o?: RequestOptions) {
    return this.rh.request<{ buckets: Bucket[] }>({
      method: 'GET',
      url: 'api/backend/clouds/buckets',
    }, o).then(({ buckets }) => buckets)
  }

  /**
   * List Buckets
   * @returns All Buckets, including their Pool
   */
  listByCloud(name: string, o?: RequestOptions) {
    return this.rh.request<{ buckets: Bucket[] }>({
      method: 'GET',
      url: 'api/backend/clouds/:name/buckets',
      params: { name },
    }, o).then(({ buckets }) => buckets)
  }

  /**
   * Synchronize bucket with cloud
   * @returns The updated buckets
   */
  sync(name: string, o?: RequestOptions) {
    return this.rh.request<{ buckets: Bucket[] }>({
      method: 'GET',
      url: 'api/backend/clouds/:name/buckets',
      params: { name },
    }, o).then(({ buckets }) => buckets)
  }

  /**
   * Update a Bucket. May only change its price
   */
  update(bucket: Partial<Bucket>, id: number = bucket.id!, o?: RequestOptions) {
    return this.rh.request<{ bucket: Bucket }>({
      method: 'PUT',
      url: 'api/backend/clouds/buckets/:id',
      body: { bucket },
      params: { id }
    }, o).then(({ bucket }) => bucket)
  }
}
