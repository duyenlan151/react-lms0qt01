import { Logo } from 'components/Common/Logo';
import { Footer } from 'components/Common/Footer';
import { CardList } from 'components/Card/CardList';
import { useMemo, useState } from 'react';
import { cardData } from 'mocks/card';
import { CardItemModel } from 'models';
import { Sidebar } from 'components/Common/Sidebar';
import { sidebarData } from 'mocks/sidebar';

export const AdminLayout = () => {
  const [data] = useState<CardItemModel[]>(cardData || []);
  const [isHideSideBar, sethideSidebar] = useState(false);

  const classContent = useMemo(() =>
    `container content-wrapper ${isHideSideBar && 'content-wrapper--open'}`
  , [isHideSideBar]);

  const onClickButtonHide = () => {
    sethideSidebar(prev => !prev);
  }

  return (
    <>
      <Sidebar
        isHide={isHideSideBar}
        listItems={sidebarData}
        onClickButtonHide={onClickButtonHide}
      />
      <div className={classContent}>
        <div className="content-main">
          <Logo  />
          <div className="content-block bg-grey mt-5">
            <h4 className="content-block__title">Lorem ipsum dolor sit asmet?</h4>
            <p className="content-block__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
          </div>
          <div className="mt-6">
            <CardList cards={data} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
