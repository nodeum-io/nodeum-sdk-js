import { TapePool } from './tape-pool';
import { Library } from './library';

export interface Volume {
  id: number
  barcode: string
  location: string
  free: number
  total: number
  library?: Library
  pool?: TapePool
  date_in?: string
  date_move?: string
  ejected?: boolean
  mounted?: boolean
  known?: boolean
  scratch?: boolean
  write_protect?: boolean

  stats?: {
    mounts?: number
    datasets_written_percentage?: number
    datasets_read_percentage?: number
  }
}
