import { RestEndpointMethodTypes } from "@octokit/rest";
import { isOpenSchemaFile } from "./isFileOpenSchema"

type Content = RestEndpointMethodTypes["git"]["getTree"]["response"]["data"]["tree"][number]

export function filterTrees(tree: Content[]) {
    const result = tree.filter(isOpenSchemaFile)

    if (!result) {
        throw new Error("No open schema files found")
    }

    return result
}