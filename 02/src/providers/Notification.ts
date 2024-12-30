import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';

@Injectable()
export class Notification {
  private transporter: any;
  constructor() {
    console.log('Notification initialized');
    this.transporter = createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'bradly12@ethereal.email',
        pass: 'F62h1k7SWKVwSNgAtw',
      },
    });
  }

  async sendEmail(to: string, subject: string, content: string) {
    console.log(
      `send email to: ${to}, with subject ${subject}, content: ${content}`,
    );
    await this.transporter
      .sendMail({
        from: 'Super Awesome Service',
        to,
        subject,
        text: content,
        html: content,
      })
      .catch(console.error)
      .then(console.log);
  }
}
