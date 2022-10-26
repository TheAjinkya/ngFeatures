import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordianComponent implements OnInit {

  constructor() { }
  panelOpenState = false;

  ngOnInit(): void {
  }

}
