import { Injectable } from '@angular/core';

@Injectable()
export class NotificationsService {

  constructor() { }
  notifications: string[] = [];
  public add(notification: string) {
    this.notifications.push(notification);
  }

  public clear() {
    this.notifications = [];
  }
}
