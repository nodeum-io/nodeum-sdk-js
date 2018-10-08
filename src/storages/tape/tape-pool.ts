import { Pool } from '../pool';
import { Volume } from './volume';

export interface TapePool extends Pool {
  readonly library?: string

  /**
   * List of tapes. When creating/updating, should be submitted as list of barcodes
   */
  media?: string[]|Volume[]
  default?: boolean
  readonly used?: boolean
}
