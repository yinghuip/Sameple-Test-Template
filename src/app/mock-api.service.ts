import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';

@Injectable(
{
  providedIn:'root'
}
)
export class MockApiService {

  protected secretkey:string = 'Cartoon-Duck-14-Coffee-Glvs';
  constructor(private http: HttpClient){

  }

    /**
 * Returns list of depot object
 * @returns token
 */
  getToken(){
    return of(this.secretkey);
  }


  /**
 * Returns list of depot object
 * @param token
 * @returns list of user object
 */
  getUsers(token:string) {
    if(!this._isAuthenicated(token)) throwError(() => new Error('UnAuthorized'))
    return this.http.get("assets/users.json");
  }

  /**
 * Returns list of depot object
 * @param token
 * @returns list of depot object
 */
  getLocations(token:string) {
    if(!this._isAuthenicated(token)) throwError(() => new Error('UnAuthorized'))
    return this.http.get("assets/locations.json");
  }
  
  private _isAuthenicated(token:string){
    return token === this.secretkey;
  }


}