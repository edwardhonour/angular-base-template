import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NgxTablePaginationModule } from 'ngx-table-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxEditorModule } from 'ngx-editor'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DefaultHeaderComponent } from './components/default-header/default-header.component';
import { DefaultFooterComponent } from './components/default-footer/default-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomePageComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxTablePaginationModule,
    Ng2SearchPipeModule,
    NgxEditorModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
