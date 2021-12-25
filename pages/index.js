import React from 'react';
import HomeView from '../views/home';
import Container from 'components/Container';

export default function Home() {
  return <HomeView />;
}

Home.getLayout = (page) => <Container>{page}</Container>;
