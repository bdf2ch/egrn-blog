/**
 * Интерфейс, описывающий пост блога
 */
export interface IPost {
  id: string;             // Идентификатор
  title: string;          // Наименование
  urlName: string;        // URL
  shortMessage: string;   // Превью
  message: string;        // Содержание
  date: string;           // Дата публикации
}
