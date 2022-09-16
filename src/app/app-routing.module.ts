import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './about/home/home.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddCondidatComponent } from './add-condidat/add-condidat.component';
import { AddContentComponent } from './add-content/add-content.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddObjectifsComponent } from './add-objectifs/add-objectifs.component';
import { AjouterCourtComponent } from './ajouter-court/ajouter-court.component';
import { CategoryComponent } from './category/category.component';
import { CondidatComponent } from './condidat/condidat.component';
import { ContentComponent } from './content/content.component';
import { CourseAdminComponent } from './course-admin/course-admin.component';
import { CourtsComponent } from './courts/courts.component';
import { CreatemailComponent } from './createmail/createmail.component';
import { DialogComponent } from './dialog/dialog.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FormationComponent } from './formation/formation.component';
import { GetmailComponent } from './getmail/getmail.component';
import { GrapheComponent } from './graphe/graphe.component';
import { ListecourseofcategoryComponent } from './listecourseofcategory/listecourseofcategory.component';
import { LoadQuizComponent } from './load-quiz/load-quiz.component';
import { LoginComponent } from './login/login.component';
import { ObjectifComponent } from './objectif/objectif.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

const routes: Routes = [

  { path:'',
  component:HomeComponent,
 
  pathMatch:'full'},




  { path:'admin',
  component:LoginComponent,

},



  { path:'condidats',
  component:CondidatComponent,
  pathMatch:'full'},


  { path:'course',
component:AddCourseComponent,
pathMatch:'full'},

{ path:'addc',
component:AddCondidatComponent,
pathMatch:'full'},


{ path:'category',
component:AddCategoryComponent,
pathMatch:'full'},

{ path:'category/:cid',
component:UpdateCategoryComponent,
pathMatch:'full'},

{ path:'liste/:catId',
component:ListecourseofcategoryComponent,
pathMatch:'full'
},
{ path:'cours/:qid',
component:UpdateCourseComponent,
pathMatch:'full'},

{ path:'file',
component:UploadImageComponent,
pathMatch:'full'},

{ path:'formation',
component:FormationComponent,
pathMatch:'full'},

{ path:'getcategory',
component:CategoryComponent,
pathMatch:'full'},

{ path:'courses',
component:CourtsComponent,
pathMatch:'full'},
{ path:'courseadmin',
component:CourseAdminComponent,
pathMatch:'full'},

{ path:'cours/:qid',
component:UpdateCourseComponent,
pathMatch:'full'},

{ path:'graphe',
component:GrapheComponent,
pathMatch:'full'},

{ path:'ajout',
component:AjouterCourtComponent,
pathMatch:'full'},



{  path:'instructions/:qid',
component:DialogComponent,
 
pathMatch:'full'
},



{ path:'getmail',
component:GetmailComponent,
pathMatch:'full'},

{ path:'addgols',
component:AddObjectifsComponent,
pathMatch:'full'},


{ path:'gols',
component:ObjectifComponent,
pathMatch:'full'},

{ path:'content',
component:AddContentComponent,
pathMatch:'full'},


{ path:'contacter/:id',
component:CreatemailComponent,
pathMatch:'full'},

{ path:':up/:qid',
component:LoadQuizComponent,
 
pathMatch:'full'
},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
