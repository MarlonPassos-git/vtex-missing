export type MasterDataV2Schema = {
  title?: string
  /**
   * Use the property v-cache to disable default caching.
   *
   * @see https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema#disabling-default-caching
   */
  'v-cache'?: boolean
  /**
   * Use the property v-default-fields to configure which fields will return without indication in the fields query string.
   *
   * @see https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema#default-fields
   */
  'v-default-fields'?: string[]
  /**
   * Use the property v-indexed to set up indexed fields. You must add the field to the properties to generate the indexer configuration with the right type.
   *
   * @see https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema#indexing-fields
   */
  'v-indexed'?: string[]
  required?: string[]
  /**
   * Use the property v-security to set up which fields are public (request without user authentication).
   *
   * @see https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema#enabling-public-fields
   */
  'v-security'?: VSecurity
  properties: Record<string, Property>
  'v-immediate-indexing'?: boolean
  'v-triggers'?: VTrigger[]
  /**
   * Use the property v-canonicalto to set up another JSON Schema in the same data entity to inheritance.
   *
   * @see https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema#inheritance-of-schemas
   */
  'v-canonicalto'?: string
}

type VTrigger = {
  name: string
  active: boolean
  condition?: string
  action: {
    type: "save"
    dataEntity: string
    json: Record<string, string>
  }
}

type VSecurity = {
  allowGetAll?: boolean
  publicRead?: string[]
  publicWrite?: string[]
  publicJsonSchema?: boolean
  publicFilter?: string[]
}

type PropertyType = 'string' | 'number' | 'boolean' | 'array' | 'object' | 'null' | "integer"
type PropertyFormat = "date-time"

type Property = {
  /**
   * If you want to this property should to not be mandatory use an array with null and your type like this: ['string', 'null']
   */
  type: PropertyType | PropertyType[]
  unique?: boolean
  title?: string
  properties?: Record<string, Property>
  'v-indexed'?: string[]
  format?: PropertyFormat
  maxLength?: number
  enum?: string[]
  required?: boolean
  items?: Property
}

