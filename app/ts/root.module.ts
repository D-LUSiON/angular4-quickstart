import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {RootComponent} from './root.component';
import {ExampleComponent} from './_directives/example/example.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        RootComponent,
        ExampleComponent
    ],
    bootstrap: [RootComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RootModule {}
