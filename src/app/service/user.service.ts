import {User} from '../models/User.model';
import {Subject} from 'rxjs';

export class UserService {
  private users: User[] = [
    {
      firstName: 'ken',
      lastName: 'DAV',
      email: 'ken@dav.com',
      hobbies: ['cook', 'Trip']
    }
  ];
  userSubject = new Subject<User[]>();
  emitUserSubject() {
    this.userSubject.next(this.users);
  }
  addUser(user: User) {
    this.users.push(user);
    this.emitUserSubject();
  }
}
