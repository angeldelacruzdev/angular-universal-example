import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, TopHeaderComponent],
  exports: [NavbarComponent, FooterComponent, TopHeaderComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class SharedModule {}
