import { Pool } from '../pool';
import { Bucket } from './bucket';

export interface CloudPool extends Pool {
  buckets?: Bucket[]|number[]
}
