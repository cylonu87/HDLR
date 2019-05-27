// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

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
  //return "http://localhost:4200/assets/changelog.json"
  //return "http://localhost:4200/assets/changelog.txt"
  return "https://api.github.com/repos/cylonu87/HDLR/issues?state=closed&creator=cylonu87"

}


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
