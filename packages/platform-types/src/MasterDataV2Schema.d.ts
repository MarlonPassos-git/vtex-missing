export type MasterDataV2Schema<T extends string = string> = {
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
  'v-default-fields'?: T[]
  /**
   * Use the property v-indexed to set up indexed fields. You must add the field to the properties to generate the indexer configuration with the right type.
   *
   * @see https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema#indexing-fields
   */
  'v-indexed'?: T[]
  /**
   * 
   */
  required?: T[]
  /**
   * Use the property v-security to set up which fields are public (request without user authentication).
   *
   * @see https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema#enabling-public-fields
   */
  'v-security'?: VSecurity<T>
  properties: Record<T, Property>
  'v-immediate-indexing'?: boolean
  /**
   * Use the property v-triggers to set up triggers in the data entity. 
   * Like: "when a new document is created, a trigger can be set up to send an email to the user."
   * 
   * @see https://developers.vtex.com/docs/guides/setting-up-triggers-in-master-data-v2
   */
  'v-triggers'?: VTrigger[]
  /**
   * Use the property v-canonicalto to set up another JSON Schema in the same data entity to inheritance.
   *
   * @see https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema#inheritance-of-schemas
   */
  'v-canonicalto'?: string
}

/**
 * @see https://developers.vtex.com/docs/guides/setting-up-triggers-in-master-data-v2#trigger-properties
 */
type VTrigger = {
  /* A descriptive name for your trigger, limited to 100 characters. */
  name: string
  /* Whether the trigger is enabled (true) or disabled (false). */
  active: boolean
  /**
    * A rule that validates the document before executing the trigger.
    * Setting up condition rules is very similar to using query parameters 
    * when making a call to Master Data API v2's Search documents. However,
    * differently from the API, you should not include _where in the 
    * condition string
    *  
    * @example 
    * `status=ready-for-handling`
    * `createdIn between 2001-01-01 AND 2016-01-01`
    * `email=my@email.com` 
    * @see https://developers.vtex.com/docs/guides/setting-up-triggers-in-master-data-v2#condition
    */
  condition?: string
  /* The action that will be executed. */
  action: Actions
  /* The scheduled date to execute the action*/
  runAt?: any
  /* Percentage value used for A/B testing */
  weight?: any
  /* Defines the retry policy, specifying the number of attempts and delay between them */
  retry?: Retry
}

type Actions = HttpAction | EmailAction | MessageCenterAction | SaveAction

type EmailAction = {
  type: "email",
  provider: string
  subject: string
  to: string[]
  bcc: string[]
  replyTo: string
  /**
   * @example My email with document {!id}.
   */
  body: string
}

type MessageCenterAction = {
  type: "t-email",
  template: string
  provider: string
  subject: string
  to: string[]
  bcc: string[]
  replyTo: string
  body: Record<string, string>
}

type SaveAction = {
  type: "save",
  dataEntity: string,
  fields: Record<string, string>
}

type HttpAction = {
  type: "http",
  /**
   * @example "http://mydomain.com/api/test" 
   */
  uri: string,
  method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH",
  headers: Record<string, unknown>,
  /**
   * @example 
   * {"id": {!id}, "test": "testValue", "count": 25}
   */
  body: Record<string, unknown>
}

/**
 * To schedule an action in the future
 * 
 * @example Schedule the execution 10 minutes later.
 * {"dateTime": "now", "increment": { "addMinutes": 10 }}
 * @example Schedule the execution six months after the field value `createdIn`.
 * {"dateTime": "{!createdIn}", "increment": { "addMonths": 6 }}
 */
type RunAt = {
  /**
   * To consider the date and time of the trigger as the start date, use `now` as the value.
   * 
   * To consider the date and time of a specific field, use {!fieldName} as the value.
   * 
   * @example 
   * "now"
   * "{!createdIn}"
   * 
   * 
   */
  dateTime: string
  increment: AddTime
}

/**
 * @default 
 * {times: 3, delay: {addMinutes: 10}
 */
type Retry = {
  times: number
  delay: AddTime
}

type AddTime = {
  addMinutes: number
  addHours: number
  addDays: addMonths
  addMonths: number
  addYears: addYears
}

type VSecurity<T extends string = string> = {
  allowGetAll?: boolean
  publicRead?: T[]
  publicWrite?: T[]
  publicJsonSchema?: boolean
  publicFilter?: T[]
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

