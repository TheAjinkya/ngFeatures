import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmail-login',
  templateUrl: './gmail-login.component.html',
  styleUrls: ['./gmail-login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GmailLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
