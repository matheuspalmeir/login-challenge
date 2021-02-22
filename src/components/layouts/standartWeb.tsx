import {LayoutContainer, LayoutContent} from './style';
import Sider from './Sider';

type StandartWebProp = {
    children: any;
}

const backgroundImage = '/images/girl_working.jpg';

const StandartWeb = (props: StandartWebProp) => {
    return(
         <LayoutContainer>
             <Sider url={backgroundImage} />
             <LayoutContent>
                {props.children}
             </LayoutContent>
         </LayoutContainer>
    )
}

export default StandartWeb;