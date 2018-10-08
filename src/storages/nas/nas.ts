import { NasShare } from './nas-share'
import { NasType } from './nas-type.enum'

export interface Nas {
  id?: number
  name: string
  host: string
  type: NasType
  comment?: string
  price?: number|string
  shares?: NasShare[]
}
