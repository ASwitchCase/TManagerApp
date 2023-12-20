import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from  '@angular/common/http'
import { Territory } from 'src/Models/Territory';
import { Publisher } from 'src/Models/Publisher';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

//Test Creds
//const user = creds

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://territory-api.azurewebsites.net/email'
  constructor(private http: HttpClient) { }

  notifyPublisher(publisher: Publisher,territory:Territory) : Observable<Territory>{
    const mail = {
      recever: publisher.email,
      subject:`Territory for ${publisher.name}`,
      message: `
        Hello ${publisher.name},\n 
        The Attached is a link to your assgined territory.\n
        \n

        Territory#: ${territory.territory_id}\n
        Link: ${territory.drive_link}\n 
      `
    }

    return this.http.post<Territory>(this.apiUrl,mail,httpOptions)
  }
}