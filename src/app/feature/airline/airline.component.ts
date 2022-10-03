import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { AirlineService } from 'src/app/core/services/airline.service';


@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AirlineComponent implements OnInit {

  constructor(private airlineService : AirlineService, private spinner:NgxSpinnerService) { }
  
  passenger:Observable<any> | undefined; 
  page: number = 1;
  isDataAvailable:boolean = false;
  
  ngOnInit(): void {

    this.spinner.show();
    this.airlineService.getAllPassengerData().subscribe((response:any)=>{
      console.log(response.data);
      this.passenger = response.data;
      this.page =  0
      this.isDataAvailable = true;
      this.spinner.hide();
    }) 
  }

}
