import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drang-and-drop',
  templateUrl: './drang-and-drop.component.html',
  styleUrls: ['./drang-and-drop.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrangAndDropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
