import React, { useEffect } from 'react';
import HomeView from '../views/home';

export default function Home() {
  return <HomeView />;
}

Home.getLayout = (page) => <>{page}</>;
