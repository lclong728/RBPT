import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserPanelComponent } from './user-panel/user-panel.component';
import { LoginComponent } from './login/login.component';
import { ProjectHeaderComponent } from './project-header/project-header.component';
import { UserGuideComponent } from './user-guide/user-guide.component';
import { UserPortfolioComponent } from './user-portfolio/user-portfolio.component';
import { InputPageComponent } from './input-page/input-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { InputStartPageComponent } from './input-start-page/input-start-page.component';
import { InputCustomerInfoComponent } from './input-customer-info/input-customer-info.component';
import { InputFacilityInfoComponent } from './input-facility-info/input-facility-info.component';
import { InputCollateralInfoComponent } from './input-collateral-info/input-collateral-info.component';
import { InputLiabilityInfoComponent } from './input-liability-info/input-liability-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    LoginComponent,
    ProjectHeaderComponent,
    UserGuideComponent,
    UserPortfolioComponent,
    InputPageComponent,
    ResultPageComponent,
    InputStartPageComponent,
    InputCustomerInfoComponent,
    InputFacilityInfoComponent,
    InputCollateralInfoComponent,
    InputLiabilityInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatSidenavModule,
    MatMenuModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatListModule,
    MatStepperModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
