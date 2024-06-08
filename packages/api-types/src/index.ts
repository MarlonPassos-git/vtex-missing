import { fetchTree, fetchContentByPath } from "./services/github"
import { isOpenSchemaFile } from "./utils/isFileOpenSchema"

async function main() {
    const { tree } = await fetchTree()
    const openSchemas = tree.filter(isOpenSchemaFile) 
    console.log(openSchemas)

    const [{ path }] = openSchemas

    const content = await fetchContentByPath(path)

    console.log(content)
}


main()