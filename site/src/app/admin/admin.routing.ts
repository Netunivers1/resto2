import { Routes, RouterModule, Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { PlatComponent } from './plat/plat.component';
import { AjoutPlatComponent } from './plat/ajout/ajout.component';
import { AjoutMenuComponent } from './menu/ajout/ajout.component';
import { DeletePlatComponent } from './plat/delete/delete.component';
import { DeleteMenuComponent } from './menu/delete/delete.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AjoutUtilisateurComponent } from './utilisateur/ajout/ajout.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'menu/:insertOrList', component: MenuComponent },
    { path: 'plat/:insertOrList', component: PlatComponent },
    { path: 'ajoutplat', component: AjoutPlatComponent },
    { path: 'deleteplat/:id', component: DeletePlatComponent },
    { path: 'ajoutmenu', component: AjoutMenuComponent },
    { path: 'deletemenu/:id', component: DeleteMenuComponent },
    { path: 'utilisateur', component: UtilisateurComponent },
    { path: 'ajoututilisateur', component: AjoutUtilisateurComponent },
];

export const adminRouting = RouterModule.forChild(routes);
