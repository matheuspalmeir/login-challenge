import {LayoutContainer} from './style';

type FullscrenWebProp = {
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