import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL: string = "https://www.breakingbadapi.com/api/"

  constructor(private httpClient : HttpClient) { }

  async getCharacters(){
    let urlEndpoint = 'characters'
    let headers = new HttpHeaders().set('Accept', '*/*')                       
    return this.getPromise(this.httpClient.get(this.URL+urlEndpoint, {headers: headers}))
  }

  async getEpisodes(){
    let urlEndpoint = 'episodes'
    let headers = new HttpHeaders().set('Accept', '*/*')
    return this.getPromise(this.httpClient.get(this.URL+urlEndpoint, {headers: headers}))
  }

  private getPromise(obs: Observable<any>):Promise<any>{
    return new Promise((resolve)=>{obs.subscribe(r=> resolve(r),error=>resolve(error))})
  }
}