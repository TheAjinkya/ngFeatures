import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardboard',
  templateUrl: './cardboard.component.html',
  styleUrls: ['./cardboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

}
