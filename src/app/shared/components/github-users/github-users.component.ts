import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GithubUserService } from 'src/app/core/services/github-user.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubUsersComponent implements OnInit, OnDestroy {

  constructor(private githubUsers:GithubUserService, private spinner: NgxSpinnerService) {
   
   }

  usersData :Observable<any> | undefined;

  subscription = new Subscription() 

  ngOnInit(): void {
    
    this.subscription = this.githubUsers.getUsersData().subscribe(response=>{
      this.usersData = response
    })

  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
  
}
