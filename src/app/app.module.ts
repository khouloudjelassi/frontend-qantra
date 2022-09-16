import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './about/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './about/footer/footer.component';
import { HomeComponent } from './about/home/home.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { HttpClientModule } from '@angular/common/http';
import { CondidatComponent } from './condidat/condidat.component';
import { AddCondidatComponent } from './add-condidat/add-condidat.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PlayVideoComponent } from './play-video/play-video.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AddCourseComponent } from './add-course/add-course.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatDialogModule} from '@angular/material/dialog';

import { 
	IgxTreeModule,
	IgxIconModule
 } from "igniteui-angular";
 import { ReactiveFormsModule } from '@angular/forms';

import { AddCategoryComponent } from './add-category/add-category.component';
import { CourtsComponent } from './courts/courts.component';
import { GrapheComponent } from './graphe/graphe.component';
import { CategoryComponent } from './category/category.component';
import { CourseAdminComponent } from './course-admin/course-admin.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { AjouterCourtComponent } from './ajouter-court/ajouter-court.component';
import { LoadQuizComponent } from './load-quiz/load-quiz.component';
import { ListecourseofcategoryComponent } from './listecourseofcategory/listecourseofcategory.component';
import { FormationComponent } from './formation/formation.component';
import { DialogComponent } from './dialog/dialog.component';
import { CreatemailComponent } from './createmail/createmail.component';
import { GetmailComponent } from './getmail/getmail.component';
import { AddObjectifsComponent } from './add-objectifs/add-objectifs.component';
import { ObjectifComponent } from './objectif/objectif.component';
import { ContentComponent } from './content/content.component';
import { AddContentComponent } from './add-content/add-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CondidatComponent,
    AddCondidatComponent,
    LoginComponent,
    PlayVideoComponent,
    AddCourseComponent,
    SidebarComponent,
   
    AddCategoryComponent,
         CourtsComponent,
         GrapheComponent,
         CategoryComponent,
         CourseAdminComponent,
         UpdateCourseComponent,
         FileUploadComponent,
         UploadImageComponent,
         UpdateCategoryComponent,
         AjouterCourtComponent,
         LoadQuizComponent,
         ListecourseofcategoryComponent,
         FormationComponent,
         DialogComponent,
         CreatemailComponent,
         GetmailComponent,
         AddObjectifsComponent,
         ObjectifComponent,
         ContentComponent,
         AddContentComponent,
         
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgxYoutubePlayerModule.forRoot(),
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    FormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatTreeModule,
    IgxTreeModule,
    IgxIconModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  id = 'V462IsOV3js';
  playerVars = {
    cc_lang_pref: 'en',
  };
  player: any;
  savePlayer(player: any) {
    this.player = player;
  }
  playVideo() {
    this.player.playVideo();
  }
  pauseVideo() {
    this.player.pauseVideo();
  }
}
