import { CustomInputComponent } from '@/components';
import { AuthService } from '@/services';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { firstValueFrom } from 'rxjs';

interface loginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CustomInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  authService = inject(AuthService);

  loginForm = new FormGroup<loginForm>({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.email, Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  async onSubmit() {
    if (this.loginForm.valid) {
      try {
        await firstValueFrom(
          this.authService.login(this.loginForm.getRawValue()),
        );
      } catch (error) {
        console.error(error);
      }
      this.loginForm.reset();
    }
  }
}
