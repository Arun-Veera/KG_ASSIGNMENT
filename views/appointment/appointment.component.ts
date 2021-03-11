import { DataService } from '../../services/data.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

interface timeSlot  {
  fromTime: string,
  toTime: string,
  disabled: boolean
}
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  @ViewChild('timeSlotModal') modalContent: TemplateRef<{}> | string = '';
  breadCrumpList = [
    {name: "Home", route: '/home'},
    {name: "Appointment", route: '/appointment'}
  ];
  timeSlotForm: FormGroup = new FormGroup({});
  mTimeSlot: timeSlot [] = [];
  eTimeSlot: timeSlot [] = [];
  currentDate : any;
  modalRef: BsModalRef | undefined;
  fromTime: any;
  toTime: any;
  constructor(private dataService: DataService, private modalService: BsModalService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.timeSlotForm = new FormGroup({
      fromTime: new FormControl('', [Validators.required]),
      toTime: new FormControl({ value: '', disabled: true }, [])
    });
    this.getTimeSlot();
  }

  onChange() {
    this.fromTime = this.timeSlotForm.get('fromTime')?.value;
    console.log('fromTime',this.fromTime);
    const timeArray: string [] = this.fromTime.split(':');
      let hours: any = ( Number(timeArray[0]) > 12 )? Number(timeArray[0]) / 12 : Number(timeArray[1]) ;
      hours = Math.floor(hours)
      let minutes: any = Number(timeArray[1]) + 30;
      hours = ((((hours + 1) < 10) ? '0' : '') + (hours + 1))
      this.toTime = hours + ':' + minutes;
      console.log('this.toTime',this.toTime);
      this.timeSlotForm.get('toTime')?.setValue(this.toTime);
  }

  onSubmit() {
    this.timeSlotForm.setErrors(null);
    if(this.timeSlotForm.valid) {
        const data = {
          fromTime: this.fromTime,
          toTime: this.toTime
        };
        this.dataService.processPost(data, 'insertTimeslot').subscribe((res: any) => {
          if(res?.error) {
            this.toastr.error(res.error);
          } else {
            this.getTimeSlot();
            this.modalRef?.hide();
            this.toastr.success('Successfully added');
          }
        })
    }
  }
  getTimeSlot() {
    this.mTimeSlot = [];
    this.eTimeSlot = [];
    this.dataService.processGet('getTimeslot').subscribe((res: any) => {
        const timeSlotArray: any[] = res;
        for (let index = 0; index < timeSlotArray.length; index++) {
          const element = timeSlotArray[index];
          let result: any = '' ;
          const time = element.fromTime.split(':');
          let hours: any = Number(time[0]);
          let minutes: any = Number(time[1]);
          var prefix = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12;
          hours = hours ? hours : 12;
          result = hours + ':' + minutes + ' ' + prefix,
          element['fromTime'] = result;
          if( element['fromTime']?.includes('AM')) {
            this.mTimeSlot.push(element);
          } else {
            this.eTimeSlot.push(element);
          }
        }      
    })
  }
  openModal() {
    this.modalRef = this.modalService.show(this.modalContent);
  }

}
