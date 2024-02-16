import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { User } from '../../shared/models/user';
import { UserService } from '../../core/service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule],
  providers: [UserService],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  user!: User;
  usuario: string='';
  messages: string[] = [];
  mensagem: string = '';

  constructor(private userService: UserService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getInfoUser();
  }

  getInfoUser(){
    this.usuario = this.route.snapshot.paramMap.get('username') as unknown as string;
    this.userService.getGithubUser(this.usuario).subscribe((data)=> {
    this.user = data;
    })
  }

  handleNovaMensagem() {
    if (this.mensagem.trim() === '') return;
    this.messages.push(this.mensagem);
    // Lógica para lidar com a nova mensagem, por exemplo, enviar para um serviço de chat
    console.log('Nova mensagem:', this.mensagem);
    this.mensagem = '';
  }
}
