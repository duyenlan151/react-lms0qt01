import { CardItemModel } from 'models';

interface CardItemProps extends CardItemModel {}

export const CardItem = ({ title, src, desc  }: CardItemProps) =>
  <div className="card-item">
    <h4 className="card-item__heading">{ title }</h4>
    <div>
      <img className="card-item__img" src={src} alt="" />
      <p className="card-item__desc">{desc}</p>
    </div>
  </div>
