import { Drive } from './drive';
import { LibraryEmulation } from './library-emulation'
import { LibraryProtocol } from './library-protocol.enum'
import { Volume } from './volume';

export interface Library {
  id: number
  name: string
  serial: string
  comment?: string
  ready?: boolean
  online?: boolean
  configured?: boolean
  vendor?: string
  product?: string
  acs?: number
  firmware?: string
  dev?: string
  storage_slots?: number
  storage_slots_address?: number
  io_slots?: number
  io_slots_address?: number
  emulation?: LibraryEmulation
  protocol?: LibraryProtocol
  price?: number|string
  drives?: Drive[]
  media?: Volume[]
}
