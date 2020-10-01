import IParseMAilTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMAilTemplateDTO): Promise<string>;
}
