import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { User } from '../../shared/models/user';
import { UserService } from '../../core/service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,NgForm } from '@angular/forms';
import { ListMessageComponent } from '../../components/list-message/list-message.component';
import { Message } from '../../shared/models/message';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule, ListMessageComponent],
  providers: [UserService],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  usuario: string='';
  messages: Message[] = [
    { content: 'Olá!', sender: 'Alice', timestamp: new Date() },
    { content: 'Oi!', sender: 'Bob', timestamp: new Date() }
  ];
  newMessageContent: string = '';

  constructor(private userService: UserService,private route: ActivatedRoute) { }

  ngOnInit() {

  }

  sendMessage() {
    if (this.newMessageContent.trim() !== '') {
      const newMessage: Message = { content: this.newMessageContent, sender: 'Eu', timestamp: new Date() };
      this.messages.push(newMessage);
      this.newMessageContent = ''; // Limpa o campo de texto após enviar a mensagem
    }
  }

}
