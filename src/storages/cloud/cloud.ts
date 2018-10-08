import { Provider } from './provider.enum';

export interface Cloud {
  id?: number
  name: string
  provider: Provider
  url?: string
  url_proxy?: string
  region: string
  access_key?: string
  secret_key?: string
}
