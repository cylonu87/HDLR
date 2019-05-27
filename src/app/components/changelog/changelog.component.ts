import { Component, OnInit } from '@angular/core';
import { ChangelogService } from '../../services/changelog.service';
import { catchError, map } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { shallowEqualArrays } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})
export class ChangelogComponent implements OnInit {
  changelog;

  constructor(private changelogService: ChangelogService) { }

  ngOnInit() {
    this.changelogService.getChangelog()
    .pipe(
      map( (issues: any[]) => {
        let changelog = new Array()

        for(let i = 0; i < issues.length; i++) {
          let tmp = issues[i].body as string
          let tokens = tmp.split("\r\n")
          let changes = new Array()

          for(let j = 0; j < tokens.length; j++) {
            let t = tokens[j].substring(1).trim()
            if(t.length > 0) {
              changes.push(t)
            }
          }

          let version = {
            "version": issues[i].title,
            "changes": changes
          }

          changelog.push(version)
        }

        return changelog
      }),
      catchError( (err: HttpErrorResponse) => { 
        return throwError(err.message)
      } )
    )
    .subscribe(
      changelog => this.changelog = changelog,
      error => {
        console.log(error)
      }
    )
  }

}
