import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';
import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MainComponent,
    AsideComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
