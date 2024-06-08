import { downloadAllVtexOpenSchemaInGithub } from "./utils/donwloadAllVtexOpenSchemaInGithub";
import openapiTS, { astToString } from "openapi-typescript";
import fs from "node:fs";
import path from "node:path";
import { URL } from "url";
// import { OrdersAPI_PIIversion } from "../generated"


/**
 * @todo Currently there are some with these files and openapi-ts lib. In the 
 * future, try to find the problem of removing this function from the code
 */
function removeErrorsFiles(list: FileToTs[]) {
    const filesWithError = ["PickandPackLastMileProtocolAPI.d.ts"] 

    return list.filter(({tsFileName}) => !filesWithError.includes(tsFileName))
}

const DIST_DIRECTORY_NAME = "generated";

async function createIndexDTS(files: FileToTs[]) {
    const dir = path.resolve(__dirname, `../${DIST_DIRECTORY_NAME}`);
    const filePath = path.join(dir, 'index.d.ts');
    let contents = '';

    files.forEach(({ tsFileName }) => {
        const name = tsFileName.replace('.d.ts', '');
        contents += `export * as ${name} from "./${name}"\n`;
    });

    await fs.promises.writeFile(filePath, contents);
    console.log(`File index.d.ts created`);
}

function setupDist() {
    const dist = path.resolve(__dirname, `../${DIST_DIRECTORY_NAME}`);
    if (!fs.existsSync(dist)) {
        fs.mkdirSync(dist);
    }

    fs.readdirSync(dist).forEach((file) => {
        fs.unlinkSync(path.join(dist, file));
    });
}

type File = {
    filePath: string;
    name: string;
}

type FileToTs = {
    openSchemaFilePath: URL
    tsFileName: string
}

function  fileToTs({filePath, name}: File): FileToTs {
    const tsFileName = name
        .replace(".json", ".d.ts")
        .replace("VTEX - ", "")
        .replaceAll(" ", "")
        .replaceAll("-", "_")
        .replaceAll("&", "And")
        .replaceAll("(", "_")
        .replaceAll(")", "")
        .replace(/(?<=[0-9])\.(?=[0-9])/g, "_")

    return {
        openSchemaFilePath: new URL(`file://${filePath}`),
        tsFileName,
    }
}

async function main() {
    const a = await downloadAllVtexOpenSchemaInGithub()
    const b = a.map(fileToTs)
    const c = removeErrorsFiles(b)

    setupDist()

    console.log("Starting to create files", c);

    for (const {openSchemaFilePath, tsFileName} of c) {
        const dir = path.resolve(__dirname, `../${DIST_DIRECTORY_NAME}`);
        const filePath = path.join(dir, tsFileName);
        console.log({filePath})
        const bb = await openapiTS(openSchemaFilePath);
        const contents = astToString(bb);
        await fs.promises.writeFile(filePath, contents);

        console.log(`File ${tsFileName} created`);
    }

    await createIndexDTS(c);
    console.log("Finished");
}

main()
