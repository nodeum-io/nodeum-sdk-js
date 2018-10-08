import { Nas } from './nas'
import { NasPool } from './nas-pool'

export interface NasShare {
  id?: number
  path: string
  options?: string
  username?: string
  password?: string
  nas?: Nas
  pool?: NasPool
}
