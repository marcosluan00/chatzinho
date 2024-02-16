import { Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { ChatComponent } from './pages/chat/chat.component';

export const routes: Routes = [
    { path: '', redirectTo: '/nickname', pathMatch: 'full' },
    { path: 'nickname', component: UserComponent },
    { path: 'chat/:username', component: ChatComponent }
];
