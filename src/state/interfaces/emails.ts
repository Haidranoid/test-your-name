export interface IAttachment {
    file: string;
    name: string;
}

export interface IEmail {
    id: string
    from: string;
    to: string;
    subject: string;
    body: string;
    date: string;
    isRead: boolean;
    folder: 'Inbox' | 'Spam' | 'Deleted'
    avatar: string;
    tag: string;
    attachments: IAttachment[];
}