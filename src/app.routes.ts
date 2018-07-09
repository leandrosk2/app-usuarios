import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ConsultaComponent } from './app/usuario/consulta/consulta.component';

import { CadastroComponent } from './app/usuario/cadastro/cadastro.component';

import { IndexComponent } from './app/index/index.component';

const appRoutes: Routes = [
    { path: 'index', component: IndexComponent },
    { path: '', component: IndexComponent },
    { path: 'consulta-usuario', component: ConsultaComponent },
    { path: 'cadastro-usuario', component: CadastroComponent },
    { path: 'cadastro-usuario/:codigo', component: CadastroComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);