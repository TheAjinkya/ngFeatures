import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSplideInit(event:any){
    console.log("event", event);
  }

}
