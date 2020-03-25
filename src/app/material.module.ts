import { NgModule } from '@angular/core';
///////////*****ANGULAR MATERIAL*****////////////
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
    imports:[
        MatMenuModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        MatChipsModule
    ],

    exports:[
        MatMenuModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule, 
        MatCardModule,
        MatChipsModule
    ]
})
export class MaterialModule{

}