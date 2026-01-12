import { Component, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-user',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss'
})
export class UserComponent {
  auth = inject(AuthService);
}
