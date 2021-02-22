
import 'antd/dist/antd.css';
import {GlobalStyle} from '../styles/mainStyle';
import StandartWeb from '../components/layouts/standartWeb';
import FullscreenWeb from '../components/layouts/FullscreenWeb';;
import {useRouter} from 'next/router';

const withLayout = (pathName: string, child: any) => {
	if (pathName.startsWith('/login')) {
		return <StandartWeb>{child} </StandartWeb>
	}

	return <FullscreenWeb> {child} </FullscreenWeb>
}

const App = ({ Component, pageProps }) => {
    const router = useRouter();

    return(
		<>
			<GlobalStyle />
			{withLayout(router.pathname, <Component {...pageProps} />)}
				
			
		</>
    ); 
}
  
export default App;