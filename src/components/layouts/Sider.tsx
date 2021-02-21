import {SiderImage} from './style';

type SiderProp = {
    url: string;
}

const Sider = (props: SiderProp) => {
    
    return(
        <SiderImage path={props.url} />
    )
}

export default Sider;