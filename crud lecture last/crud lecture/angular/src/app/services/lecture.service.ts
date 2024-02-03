import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { lecture } from '../models/lecture.model';

const baseUrl = 'http://localhost:8080/api/lectures';

@Injectable({
  providedIn: 'root'
})
export class lectureService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<lecture[]> {
    return this.http.get<lecture[]>(baseUrl);
  }

  get(id: any): Observable<lecture> {
    return this.http.get<lecture>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<lecture[]> {
    return this.http.get<lecture[]>(`${baseUrl}?title=${title}`);
  }
}