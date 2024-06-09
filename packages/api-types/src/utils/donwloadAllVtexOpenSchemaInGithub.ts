import { RestEndpointMethodTypes } from "@octokit/rest"
import { fetchContentByPath, fetchContextByUrl, fetchTree } from "../services/github"
import { filterTrees } from "./filterTrees"
import pMap from "p-map"
import { createFileFrontBase64 } from "./createFileFrontBase64"

type Content = RestEndpointMethodTypes["git"]["getTree"]["response"]["data"]["tree"][number]
export async function downloadAllVtexOpenSchemaInGithub() {
    const { tree } = await fetchTree()
    const openOpiTrees = filterTrees(tree)
    const only5item = openOpiTrees.slice(0, openOpiTrees.length - 1)
    return pMap(only5item, fetchContentCreateFile, { concurrency: 5 })
}

async function fetchContentCreateFile(openSchemas: Content) {
    if  (!openSchemas) {
        throw new Error("No open schema files found")
    }

    if (!openSchemas.path) {
        throw new Error("No path found")
    }
    console.log(`Downloading ${openSchemas.path}`)
    const content = await fetchContentByPath(openSchemas.path)

    if (!("name" in content)) {
        throw new Error("No name found")
    }

    const { download_url } = content

    if (!download_url) {
        throw new Error("No download_url found")
    }

    let contentFile: string = ""
    let encoding: string = ""
    
    if ("encoding" in content) {
        if (content.encoding === "base64") {
            contentFile = content.content
            encoding = content.encoding
        } else {
            if (!content.download_url) {
                throw new Error("No download_url found")
            }
            contentFile = await fetchContextByUrl(content.download_url)
            encoding = "utf-8"
        }
    }

    const filePath = createFileFrontBase64({
        encoding,
        content: contentFile,
        name: content.name
    })

    console.log(`${openSchemas.path} downloaded and file created`)

    return {
        filePath,
        name: content.name
    }
} 

