import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TableService {

  private webApi = '../../assets/data/table-data.json';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

constructor(private httpClient: HttpClient) { }

  getTableData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.webApi);
  }
}
