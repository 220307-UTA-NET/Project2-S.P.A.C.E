import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { IntroductionComponent } from './main/components/introduction/introduction.component';
import { FundamentalsComponent } from './main/components/fundamentals/fundamentals.component';
import { CsoverviewComponent } from './main/components/csoverview/csoverview.component';
import { IDEComponent } from './main/components/ide/ide.component';
import { ClassComponent } from './main/components/class/class.component';
import { ModifiersComponent } from './main/components/modifiers/modifiers.component';
import { OperatorsComponent } from './main/components/operators/operators.component';
import { LibrariesComponent } from './main/components/libraries/libraries.component';
import { VariablesComponent } from './main/components/variables/variables.component';
import { FilesComponent } from './main/components/files/files.component';
import { ConditionalsComponent } from './main/components/conditionals/conditionals.component';
import { ParsingComponent } from './main/components/parsing/parsing.component';
import { ChallengescsComponent } from './main/components/challengescs/challengescs.component';
import { SummaryCSComponent } from './main/components/summary-cs/summary-cs.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './user/register/register.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';


const routes: Routes = [
  {path: '', component: IntroductionComponent},
  {path: 'Introduction', component:IntroductionComponent},
  {path: 'Fundamentals', component: FundamentalsComponent},
  {path: 'C#Overview', component: CsoverviewComponent},
  {path: 'IDE', component: IDEComponent},
  {path: 'Class', component: ClassComponent},
  {path: 'Modifiers', component: ModifiersComponent},
  {path: 'Operators', component: OperatorsComponent},
  {path: 'Libraries', component: LibrariesComponent},
  {path: 'Variables', component: VariablesComponent},
  {path: 'Files', component: FilesComponent},
  {path: 'Conditionals', component: ConditionalsComponent},
  {path: 'Parsing', component: ParsingComponent},
  {path: 'ChallengesCS', component: ChallengescsComponent},
  {path: 'SummaryCS', component: SummaryCSComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MainComponent,
    IntroductionComponent,
    FundamentalsComponent,
    CsoverviewComponent,
    IDEComponent,
    ClassComponent,
    ModifiersComponent,
    OperatorsComponent,
    LibrariesComponent,
    VariablesComponent,
    FilesComponent,
    ConditionalsComponent,
    ParsingComponent,
    ChallengescsComponent,
    SummaryCSComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
