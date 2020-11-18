import { Component, OnInit } from '@angular/core';
import { DateReport } from 'src/app/models/dateReport';
import { AdminserviceService } from 'src/app/services/admin/adminservice.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.sass']
})
export class ReportsComponent implements OnInit {
  date_start: string = '2020-11-10'; 
  date_finish: string = '2020-11-16'; 
  reports: DateReport[] = []; 
  constructor(private adminService: AdminserviceService) { }
  
  ngOnInit(): void {
    
  }
  datePickedStart(){
    console.log(this.date_start); 
  }
  datePickedFinish(){
    console.log(this.date_finish);
  }
  generateReport(){
    this.adminService.generateReportDate(this.date_start, this.date_finish)
    .subscribe(
      (res: DateReport[])=>
      {
        this.reports = res;
      },
      err=>console.log(err)
    );
  }
  reformatDate(date: string){
    let reformat = new Date(date).toString();
    return reformat; 
  }

}
