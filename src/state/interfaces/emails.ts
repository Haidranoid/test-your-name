export interface IAttachment {
    file: string;
    name: string;
}

export interface IEmail {
    from: string;
    to: string;
    subject: string;
    body: string;
    date: string;
    isRead: boolean;
    avatar: string;
    tag: string;
    attachments: IAttachment[];
}