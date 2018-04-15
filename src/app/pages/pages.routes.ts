import { Routes, RouterModule } from '@angular/router';

// Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Chart1Component } from './chart1/chart1.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginGuard } from '@services/service.index';
import { UsuarioComponent } from '@pages/usuario/usuario.component';
import { HospitalesComponent } from '@pages/hospitales/hospitales.component';
import { MedicoComponent } from '@pages/medicos/medico.component';
import { MedicosComponent } from '@pages/medicos/medicos.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'} },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Barra de progreso'} },
            { path: 'charts', component: Chart1Component, data: { titulo: 'Gráficas'} },
            // Mantenimiento
            { path: 'usuarios', component: UsuarioComponent, data: {titulo: 'Mantenimiento de suarios'}},
            { path: 'hospitales', component: HospitalesComponent, data: {titulo: 'Mantenimiento de Hospitales'}},
            { path: 'medicos', component: MedicosComponent, data: {titulo: 'Mantenimiento de Médicos'}},
            { path: 'medico/:id', component: MedicoComponent, data: {titulo: 'Actualizar de Médico'}},
            { path: 'profile', component: ProfileComponent, data: { titulo: 'Perfil de usuario'} },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes);
