export const environment = {
  production: true,

  firebase: {
    apiKey: "AIzaSyDtJMc9yrEOMzQBCNy9eWRdoMyM-rO0a1A",
    authDomain: "hdlr-55f2a.firebaseapp.com",
    databaseURL: "https://hdlr-55f2a.firebaseio.com",
    projectId: "hdlr-55f2a",
    storageBucket: "hdlr-55f2a.appspot.com",
    messagingSenderId: "673426778818"
  }

};

export function getApiUrl(user: string, repo: string) {
  return "https://api.bitbucket.org/2.0/repositories/" + user + "/" + repo + "/downloads?pagelen=100&fields=values.name,values.downloads,values.created_on,values.size,next"
}

export function getChangelogUrl() {
  return "https://cylonu87.github.io/HDLR/assets/changelog.json"
}
