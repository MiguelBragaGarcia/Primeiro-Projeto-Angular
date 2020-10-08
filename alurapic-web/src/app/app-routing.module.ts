import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';


import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';

//Aqui é onde fica as rotas de nossa aplicação
const routes:Routes = [
{path:'user/:userName',  component: PhotoListComponent},
{path:'photo/add', component: PhotoFormComponent},
{path:'**', component: NotFoundComponent}
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}

