import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../customer.service';
import { CustomerListComponent } from '../customer-list/customer-list.component';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input() customer: Customer;
  isEdited = false;

  constructor(private customerService: CustomerService, private listComponent: CustomerListComponent) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.customerService.updateCustomer(this.customer.id,
      { name: this.customer.name, age: this.customer.age, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.customer = data as Customer;
        },
        error => console.log(error));
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customer.id)
      .subscribe(
        data => {
          console.log('reload data by monkey');
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

  saveCustomer(customer) {
    this.customerService.updateCustomer(this.customer.id,
      { name: customer.name, age: customer.age}).subscribe (
        data => {
          this.customer = data as Customer
        },
        error => console.log(error));

  }
}
