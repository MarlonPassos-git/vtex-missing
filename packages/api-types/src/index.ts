import { fetchTree, fetchContentByPath } from "./services/github"

async function main() {
    const { tree } = await fetchTree()
    
    console.log(tree)

    const [{ path }] = tree

    const content = await fetchContentByPath(path)

    console.log(content)
}


main()