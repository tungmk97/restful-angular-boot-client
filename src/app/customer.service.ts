import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }

  getCustomer(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, customer);
  }

  updateCustomer(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  updateActiveCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  deleteCustomer(id: number): Observable<any> {
    console.log("zo delete");
    // return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    return this.http.delete(this.baseUrl + '/delete/' + id, { responseType: 'text' });
  }

  getCustomerList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getCustomerByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/deleteAll`, { responseType: 'text' });
  }
}
