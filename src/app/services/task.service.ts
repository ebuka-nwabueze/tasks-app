import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TaskType} from "src/types/types"




@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5001/tasks"

  constructor(private http: HttpClient) { }

  getTasks(): Observable<TaskType[]>{
    return this.http.get<TaskType[]>(this.apiUrl)
  }

}
