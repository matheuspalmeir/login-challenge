import {LayoutContainer} from './style';

interface FullscrenWebProp {
    children: any;
}

const FullscrenWeb = (props: FullscrenWebProp) => {
    return(
         <LayoutContainer>
                {props.children}
         </LayoutContainer>
    )
}


export default FullscrenWeb;