import type { RestEndpointMethodTypes } from "@octokit/rest"

type Content = RestEndpointMethodTypes["git"]["getTree"]["response"]["data"]["tree"][number]

export function isOpenSchemaFile ({path}: Content) {
    if (!path) return false

    const regex = new RegExp(/VTEX.*\.json$/)

    return regex.test(path)
}