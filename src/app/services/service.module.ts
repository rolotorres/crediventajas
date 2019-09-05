import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [ CommonModule, HttpClientModule ],
    exports: [],
    providers: [UserService],
})
export class ServiceModule {}