import { Component, Input } from '@angular/core';
import { Message } from '../../shared/models/message';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-message',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './list-message.component.html',
  styleUrl: './list-message.component.css'
})
export class ListMessageComponent {
  @Input() message!: Message;

}
