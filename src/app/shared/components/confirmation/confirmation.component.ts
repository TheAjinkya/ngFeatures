import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
