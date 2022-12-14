import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

//-- DATA RESOLVER: Main data presented on the page.
//--
//--
@Injectable({
  providedIn: 'root'              
})
export class DataResolver implements Resolve<boolean> {

  r: any;
  path: any;
  id: any;
  id2: any;
  id3: any;

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      //--
      //-- In order to use a single resolver and data service for all queries we manually 
      //-- parse the url and pass the path and parameters to the data service.
      //--
      this.path = '';
      this.id='';
      this.id2='';
      this.id3='';
    
      //-- Get the path of the page being displayed.
      if (state.url!==undefined) {
        this.path = state.url;
      }

      console.log("Path Is")
      console.log(this.path)

    //--
    //-- This code doesn't look like it should work since the only variable set above is the
    //-- path variable.  But, it inexplicably populates the id varaiables so don't fix it.
    //--
    this.r=this.dataService.getData(this.path, this.id, this.id2, this.id3).pipe(catchError(err=> 
      { 
        console.log(err);
        return of(null);
      }));
      console.log(this.r);
    return (this.r)
  }
}

//-- MENU RESOLVER: Gets the left vertical menu.
//--
//--
@Injectable({
  providedIn: 'root'
})
export class MenuResolver implements Resolve<boolean> {

  r: any;

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
     
    this.r=this.dataService.getVerticalMenu().pipe(catchError(err=> 
      { 
        return of(null);
      }));
    return (this.r)
  }
}

//-- USER Resolver:  Get the User login data.
//--
//--
@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<boolean> {

  r: any;

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
     
    this.r=this.dataService.getUser().pipe(catchError(err=> 
      { 
        return of(null);
      }));
    return (this.r)
  }
}
