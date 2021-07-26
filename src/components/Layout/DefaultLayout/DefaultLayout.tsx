import React from 'react';
import Header from '../../../components/Base/Header/Header';
import Footer from '../../../components/Base/Footer/Footer';
import Content from '../../../components/Base/Content/Content';

const DefaultLayout = (props: any) => {

  return (
    <div className="clearfix">
      <Header />
      <div className="clearfix"/>
      <Content>{props.children}</Content>
      <div className="clearfix"/>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
