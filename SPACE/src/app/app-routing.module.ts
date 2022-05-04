import { SummaryCSComponent } from './main/components/summary-cs/summary-cs.component';
import { ChallengescsComponent } from './main/components/challengescs/challengescs.component';
import { ParsingComponent } from './main/components/parsing/parsing.component';
import { ConditionalsComponent } from './main/components/conditionals/conditionals.component';
import { FilesComponent } from './main/components/files/files.component';
import { VariablesComponent } from './main/components/variables/variables.component';
import { LibrariesComponent } from './main/components/libraries/libraries.component';
import { OperatorsComponent } from './main/components/operators/operators.component';
import { ModifiersComponent } from './main/components/modifiers/modifiers.component';
import { ClassComponent } from './main/components/class/class.component';
import { IDEComponent } from './main/components/ide/ide.component';
import { CsoverviewComponent } from './main/components/csoverview/csoverview.component';
import { FundamentalsComponent } from './main/components/fundamentals/fundamentals.component';
import { IntroductionComponent } from './main/components/introduction/introduction.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

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
  {path: 'SummaryCS', component: SummaryCSComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [ RouterModule.forRoot(routes) ]
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }