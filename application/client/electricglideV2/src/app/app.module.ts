import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TemplateComponent } from './template/template.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './login/login.module';
import { SharedService } from 'src/shared/shared.service';
import { SignupModule } from './signup/signup.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { ManagerolesModule } from './manageroles/manageroles.module';
import { ManageusersModule } from './manageusers/manageusers.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    LoginModule,
    SignupModule,
    AuthorizationModule,
    ManagerolesModule,
    ManageusersModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
