import { CardItemModel } from 'models';
import { CardItem } from './CardItem';

interface CardListProps {
  cards?: CardItemModel[],
}

export const CardList = ({ cards }: CardListProps) => {

  return (
    <div className="card-list mt-6">
      {cards && cards.map(({ id, title, src, desc}: CardItemModel, idx) =>
        <CardItem key={`${id}-${idx}`} title={title} src={src} desc={desc} />
      )}
    </div>
  );
}
