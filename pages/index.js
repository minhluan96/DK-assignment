import React from 'react';
import HomeView from '../views/home';

export default function Home() {
  return <HomeView />;
}

Home.getLayout = (page) => <div>{page}</div>;