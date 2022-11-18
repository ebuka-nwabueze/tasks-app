import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TaskType} from "src/types/types"


const httpOptions  = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5001/tasks"

  constructor(private http: HttpClient) { }

  getTasks(): Observable<TaskType[]>{
    return this.http.get<TaskType[]>(this.apiUrl)
  }

  deleteTasks(task: TaskType): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${task.id}`)
  }

  toggleTask(task: TaskType): Observable<TaskType>{
    return this.http.put<TaskType>(`${this.apiUrl}/${task.id}`,task,httpOptions)
  }


}
