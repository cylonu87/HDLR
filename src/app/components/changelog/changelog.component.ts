import { Component, OnInit } from '@angular/core';
import { ChangelogService } from '../../services/changelog.service';
import { catchError } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

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
