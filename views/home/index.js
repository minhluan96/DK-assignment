import React from 'react';
import Header from './components/Header';
import { Layout } from 'antd';
import Body from './components/Body';
import Footer from './components/Footer';

export default function HomeView() {
  return (
    <Layout className='layout'>
      <Header />
      <Body />
      <Footer />
    </Layout>
  );
}
