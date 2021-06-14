import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getSessionsByPin(pin: any, date: any)
  {
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`);
  }

  getStates()
  {
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/admin/location/states`);
  }
  getDistricts(id:string)
  {
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`)
  }
  getSessionsByDistricts(id:any,date:any)
  {
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`)
  }

}
