import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubUserService } from 'src/app/core/services/github-user.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubUsersComponent implements OnInit {

  constructor(private githubUsers:GithubUserService, private spinner: NgxSpinnerService) {
   
   }

  usersData :Observable<any> | undefined;

  ngOnInit(): void {
    
    this.usersData = this.githubUsers.getUsersData();

  }

}
