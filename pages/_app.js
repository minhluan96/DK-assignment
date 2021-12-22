import 'antd/dist/antd.css';
import Head from 'next/head';
import configureStore from 'config/store';
import { Provider } from 'react-redux';

const store = configureStore();

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name='Description' content='DK Assignment' />
        <link
          href='https://unicons.iconscout.com/release/v3.0.0/css/line.css'
          rel='stylesheet'
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

const App = (props) => {
  return (
    <Provider store={store}>
      <MyApp {...props} />
    </Provider>
  );
};

export default App;
