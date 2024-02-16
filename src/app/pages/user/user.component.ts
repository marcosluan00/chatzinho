import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from '../../core/service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule],
  providers: [UserService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username: string = '';

  constructor(private userService: UserService, private router: Router) { }

  submitForm(f: NgForm) {
    let aux = f.value.username;
    this.router.navigate(['/chat', aux]);

  }

}
