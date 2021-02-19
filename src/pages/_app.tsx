
import 'antd/dist/antd.css';
import {GlobalStyle} from './mainStyle';

const App = ({ Component, pageProps }) => {
    return(
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    ) 
  }
  
  export default App;