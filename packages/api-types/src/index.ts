import { fetchTree, fetchContentByPath } from "./services/github"

async function main() {
    const { tree } = await fetchTree()
}


main()