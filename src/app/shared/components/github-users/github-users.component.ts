import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubUserService } from 'src/app/core/services/github-user.service';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubUsersComponent implements OnInit {

  constructor(private githubUsers:GithubUserService) {
    this.githubUsers.getUsersData().subscribe((response:any)=>{
      this.usersData = response;
      console.log("Response", this.usersData);
    })
   }

  usersData :Observable<any> | undefined;

  ngOnInit(): void {
    
    

  }

}
