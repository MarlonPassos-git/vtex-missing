import { SdkBase, SdkBaseOptions } from "../utils/base"
import { GetAllCollections } from "@vtex-miss/api-types/src/catalog_api/collection_beta/get_all_collections"

type GetAllCollectionsParams = {
  page?: number;
  pageSize?: number;
  orderByAsc?: boolean;
}

export class CollectionBeta extends SdkBase {
  constructor(options?: SdkBaseOptions) {
    super(options)
  }

  /**
   * Retrieves a list of all collections matching a filter.
   * 
   * @visibility private
   * @see [official documentation](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/collection/search)
   * 
   */
  getAllCollections(params?: GetAllCollectionsParams) {
    const base = this.searchParams(params)
    const url = `${this.routes.getAllCollections}${base}`

    return this.fetch.get(url, { 
      // @ts-ignore
      headers: this.defaultHeaders,
    }).json<GetAllCollections>(_=> _)
  }

  private get routes() { 
    const _base = `${this.baseUrl}/api/catalog/pvt/collection`

    return {
      getAllCollections: `${_base}/collections`
    }
  }
}