import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { AddUsernamePipe } from './pipes/add-username.pipe';

@NgModule({
  declarations: [ProjectsPageComponent, AddUsernamePipe],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
