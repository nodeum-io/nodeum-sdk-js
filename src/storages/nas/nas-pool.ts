import { Pool } from '../pool'
import { NasShare } from './nas-share'

export interface NasPool extends Pool {
  shares?: NasShare[]
  files_size?: number
  files_count?: number
}
