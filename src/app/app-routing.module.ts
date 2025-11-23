import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DepressionQuizComponent } from './components/depression-quiz/depression-quiz.component';
import { AnxietyQuizComponent } from './components/anxiety-quiz/anxiety-quiz.component';
import { SelfEsteemQuizComponent } from './components/self-esteem-quiz/self-esteem-quiz.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'quiz/depression',
    component: DepressionQuizComponent
  },
  {
    path: 'quiz/anxiety',
    component: AnxietyQuizComponent
  },
  {
    path: 'quiz/self-esteem',
    component: SelfEsteemQuizComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
