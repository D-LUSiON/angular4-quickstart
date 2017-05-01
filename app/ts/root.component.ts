import {Component} from '@angular/core';
import {ExampleComponent} from './_directives/example'

@Component({
    selector: 'app-root',
    templateUrl: '/app/html/root.html.html'
})

export class RootComponent {
    name:string = 'Angular';
}
