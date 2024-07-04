import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input("parentData")  public name:any;
  @Output() public childEvent = new EventEmitter();

  public employeeList:any;

  constructor(private _testService: TestService) { }

  fireEvent(){
    this.childEvent.emit("Hey Dinesh Patil, how are you!")
  }

  ngOnInit(): void {
    this._testService.getEmployeeList()
    .subscribe(data => this.employeeList = data);
  }

}
