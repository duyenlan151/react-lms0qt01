export interface CardItemModel {
  id?: string | number;
  title: string;
  src: string;
  desc: string
}

export interface CardListModel {
  data: CardListModel[];
}
