import { CloudPool } from './cloud-pool';
import { Cloud } from './cloud';

export interface Bucket {
  id: number
  name: string
  files_count: number
  files_size: number
  location: string
  price?: number|string
  pool?: CloudPool
  cloud?: Cloud
}
