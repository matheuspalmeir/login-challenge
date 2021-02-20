import {SiderImage} from './style';

interface SiderProp {
    url: string;
}

const Sider = (props: SiderProp) => {
    
    return(
        <SiderImage path={props.url} />
    )
}

export default Sider;