export const environment = {
  production: true
};

export function getApiUrl(user: string, repo: string) {
  return "https://api.bitbucket.org/2.0/repositories/" + user + "/" + repo + "/downloads?pagelen=100&fields=values.name,values.downloads,values.created_on,values.size,next"
}

export function getChangelogUrl() {
  return "https://cylonu87.github.io/HDLR/assets/changelog.json"
}
