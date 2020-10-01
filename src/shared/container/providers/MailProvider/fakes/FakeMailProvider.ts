import IMailProvider from '../models/IMailProvider';
import ISendMAilDTO from '../dtos/ISendMailDTO';

export default class FakeMailProvider implements IMailProvider {
  private messages: ISendMAilDTO[] = [];

  public async sendMail(message: ISendMAilDTO): Promise<void> {
    this.messages.push(message);
  }
}
