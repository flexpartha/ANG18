import { Component, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  userRole!: string;

  #auth = inject(AuthService);
  #router = inject(Router);

  authAsAdmin(): void {
    this.#auth.authAdmin();
    this.#router.navigateByUrl('');
  }

  authAsUser(): void {
    this.#auth.authUser();
    this.#router.navigateByUrl('');
  }

  loginasRole() {
    if (this.userRole === 'admin') {
      localStorage.setItem('userRole', 'admin');
      this.#router.navigate(['/adminrole']);
    }
    if (this.userRole === 'user') {
      localStorage.setItem('userRole', 'user');
      this.#router.navigate(['/userrole']);
    }
  }
}
