import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Brasileirão - Série A',
      subject: 'New event: Trip to Vegas',
      date: '1º 14:00',
      id: 10,
      read: false
    },
    {
      fromName: 'Brasileirão - Série A',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 11,
      read: false
    },
    {
      fromName: 'Brasileirão - Série A',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 12,
      read: false
    },
    {
      fromName: 'Brasileirão - Série A',
      subject: 'The situation',
      date: 'Yesterday',
      id: 13,
      read: false
    },
    {
      fromName: 'Brasileirão - Série A',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 14,
      read: false
    },
    {
      fromName: 'Brasileirão - Série A',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 15,
      read: false
    },
    {
      fromName: 'Brasileirão - Série A',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 16,
      read: false
    },
    {
      fromName: 'Brasileirão - Série A',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 17,
      read: false
    },
    {
      fromName: 'Brasileirão - Série A',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Brasileirão - Série A',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Brasileirão - Série A',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Brasileirão - Série A',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false
    },
    {
      fromName: 'Brasileirão - Série A',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Brasileirão - Série A',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Brasileirão - Série A',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false
    },
    {
      fromName: 'Brasileirão - Série A',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
