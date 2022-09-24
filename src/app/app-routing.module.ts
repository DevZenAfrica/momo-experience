import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'news-overview/:id',
    loadChildren: () => import('./news-overview/news-overview.module').then( m => m.NewsOverviewPageModule)
  },
  {
    path: 'preview-service/:id',
    loadChildren: () => import('./preview-service/preview-service.module').then( m => m.PreviewServicePageModule)
  },
  {
    path: 'preview-partner/:id',
    loadChildren: () => import('./preview-partner/preview-partner.module').then( m => m.PreviewPartnerPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'preview-how-to/:id',
    loadChildren: () => import('./preview-how-to/preview-how-to.module').then( m => m.PreviewHowToPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
