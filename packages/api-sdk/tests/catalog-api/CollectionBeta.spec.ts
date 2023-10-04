import { CollectionBeta } from '../../src/catalog-api/CollectionBeta'
import { mock,mockClear } from 'jest-mock-extended';
import type xfetch from 'xfetch-js';

describe('CollectionBeta', () => {
  const baseUrl = 'https://example.com'
  const defaultHeaders = { 'X-Example-Header': 'example' }
  let collectionBeta: CollectionBeta

  describe('getAllCollections', () => {
    const fetcher = mock< typeof xfetch>()
    beforeEach(() => {
      jest.clearAllMocks();
      mockClear(fetcher)

      collectionBeta = new CollectionBeta({
        fetcher,
        baseUrl,
        defaultHeaders,
      })
    })

    it('should call the correct URL with default parameters', async () => {
      const expectedUrl = `${baseUrl}/api/catalog_system/pvt/collection/search?page=1&pageSize=10&orderByAsc=true`
      const mockResponse = { json: jest.fn().mockResolvedValue([])}
      fetcher.get.mockReturnValue(mockResponse as any)

      const result = await collectionBeta.getAllCollections({
        page: 1,
        pageSize: 10,
        orderByAsc: true,
      })

      expect(fetcher.get).toHaveBeenCalledWith(expectedUrl, { headers: defaultHeaders })
      expect(result).toEqual([])
    })

    it('should call the correct URL with custom parameters', async () => {
      const expectedUrl = `${baseUrl}/api/catalog_system/pvt/collection/search`
      const mockResponse = { json: jest.fn().mockResolvedValue([])}
      fetcher.get.mockReturnValue(mockResponse as any)

      const result = await collectionBeta.getAllCollections()

      fetcher.get.calledWith(expectedUrl, { headers: defaultHeaders })
      expect(result).toEqual([])
    })
  })
})