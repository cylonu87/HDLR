import { Injectable } from '@angular/core';
import { getChangelogUrl } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChangelogService {

  constructor(private httpClient: HttpClient) { 
  }

  getChangelog() {
    let url = getChangelogUrl()
    return this.httpClient.get(url, {
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "cylonu87"
      }
    })
  }

}
