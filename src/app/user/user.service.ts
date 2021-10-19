import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})

export class userService{
    constructor(private http:HttpClient){}

    userLogin(email:string,password:string){
        return this.http.get(environment.LOGIN_URL);
    }

}