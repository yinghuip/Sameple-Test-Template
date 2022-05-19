import { Component } from '@angular/core';
import { MockApiService } from './mock-api.service';

/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'simple-example',
  templateUrl: 'simple-example.html',
  styleUrls: ['simple-example.css'],
})
export class AngularAssessmentExample {
  users: User[] = [];
  Locations: Location[] = [];
  constructor(private mockApi: MockApiService) {
    this.getUsers();
  }

  getToken() {
    //TODO: get token from mock api
  }

  getUsers() {
    //TODO get user from mockApi and bind to users control
  }

  getDepots() {
    //TODO
    /* 1.get depots from mockApi
     * 2.distinct result
     * 3.bind to depots control
     * **/
  }
}

export class User {
  public UserName: string;
  public Timezone: number;
}

export class Location {
  public Id: number;
  public Name: string;
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
