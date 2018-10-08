import { LibraryEmulation } from './library-emulation'

export interface Drive {
  id: number
  serial: string
  configured?: boolean
  scsi_address?: string
  online?: boolean
  name?: string
  comment?: string
  vendor?: string
  product?: string
  emulation?: LibraryEmulation
  firmware?: string
  dev?: string
  gdev?: string
  mount_count?: number
  barcode?: string
  full?: number
  current_task?: string
  current_action?: string
  bandwidth?: number
  acs?: number
  lsm?: number
  panel?: number
  transport?: number
}
