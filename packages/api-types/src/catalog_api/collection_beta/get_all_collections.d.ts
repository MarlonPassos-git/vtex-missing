export type GetAllCollections = Response

export type Response = {
  paging: Paging
  items: Item[]
}

type Paging = {
  page: number
  perPage: number
  total: number
  pages: number
  limit: number
}

type Item = {
  id: number
  name: string
  searchable: boolean
  highlight: boolean
  dateFrom: string
  dateTo: string
  totalSku: number
  totalProducts: number
  type: CollectionType
  lastModifiedBy: null | unknown
}

type CollectionType = 'Manual' | 'Hybrid'
