
import 'antd/dist/antd.css';
import {GlobalStyle} from './mainStyle';
import StandartWeb from '../components/layouts/standartWeb';
import FullscreenWeb from '../components/layouts/FullScreenWeb';;
import {useRouter} from 'next/router';

const withLayout = (pathName: string, child: any) => {
  if (pathName.startsWith('/login')) {
    console.log("Entrei aqui");
    return <StandartWeb>{child} </StandartWeb>
  }

  return <FullscreenWeb> {child} </FullscreenWeb>
}

const App = ({ Component, pageProps }) => {

    const router = useRouter();
    console.log("Router", router.pathname);
    return(
      <>
        <GlobalStyle />
        {withLayout(router.pathname, <Component {...pageProps} />)}
            
        
      </>
    ) 
  }
  
  export default App;