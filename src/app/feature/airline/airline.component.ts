import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AirlineService } from 'src/app/core/services/airline.service';


@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AirlineComponent implements OnInit {

  constructor(private airlineService : AirlineService) { }
  
  passenger:Observable<any> | undefined; 
  page: number = 1;
  
  ngOnInit(): void {
    this.airlineService.getAllPassengerData().subscribe((response:any)=>{
      console.log(response.data);
      this.passenger = response.data;
      this.page =  0
    }) 
  }

}
