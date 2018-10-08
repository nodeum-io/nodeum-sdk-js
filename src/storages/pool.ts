import { PoolType } from './pool-type.enum'

export interface Pool {
  id?: number
  name: string
  comment?: string
  type: PoolType
}
