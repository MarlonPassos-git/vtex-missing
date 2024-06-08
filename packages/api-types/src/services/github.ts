import { Octokit } from "@octokit/rest"

const OWNER = "vtex";
const REPO = "openapi-schemas";
const BRANCH = "master";

const octokit = new Octokit();


export async function fetchTree() {
  const { data } = await octokit.rest.git.getTree({
    owner: OWNER,
    repo: REPO,
    tree_sha: BRANCH,
  });

  return data;
};

export async function fetchContentByPath(path: string) {
  const { data } = await octokit.rest.repos.getContent({
    owner: OWNER,
    repo: REPO,
    path,
    ref: BRANCH,
  });

  return data;
}