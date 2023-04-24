import { ItemSideBar } from 'models';
import { useMemo } from 'react';

interface SidebarProps {
  isHide: boolean;
  listItems: ItemSideBar[],
  onClickButtonHide: () => void
}

export const Sidebar = ({ isHide, listItems, onClickButtonHide }: SidebarProps) => {
  const classSidebar = useMemo(() =>
    `sidebar-wrapper ${isHide && 'sidebar-wrapper--hide'}`
  , [isHide]);

  return (
    <div className={classSidebar}>
      <div className="button-sidebar" onClick={onClickButtonHide}><p> &gt; </p></div>
      <div className="sidebar-menu">
        { listItems  && listItems.map(({ id, name, path, isActive }: ItemSideBar, idx) =>
          <div key={`${id}-${idx}`} className="sidebar-item">
            <a href={path} className={`sidebar-item__link ${isActive ? 'sidebar-item__link--active' : ''}`}>{name}</a>
          </div>
        )}
      </div>
    </div>
  );
}
