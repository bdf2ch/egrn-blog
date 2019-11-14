import { IPost } from '../interfaces/post.interface';

/**
 * Класс, реализующий интерфейс поста блона
 */
export class Post implements IPost {
  id: string;             // Идентификатор
  title: string;          // Наименование
  urlName: string;        // URL
  shortMessage: string;   // Превью
  message: string;        // Содержание
  date: string;           // Дата публикации

  /**
   * Конструктор
   * @param config - Параметры инициализации
   */
  constructor(config?: IPost) {
    this.id = config ? config.id : null;
    this.title = config ? config.title : null;
    this.urlName = config ? config.urlName : null;
    this.shortMessage = config ? config.shortMessage : null;
    this.message = config ? config.message : null;
    this.date = config ? config.date : null;
  }
}
