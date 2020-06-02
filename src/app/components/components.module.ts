import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [
    HomeModule,
    LoginModule
  ],
  exports: [
    HomeModule,
    LoginModule
  ],
  providers: [],
})
export class ComponentsModule {}
