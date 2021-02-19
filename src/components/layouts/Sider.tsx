import {SiderImage} from './style';

interface SiderProp {
    url: string;
}

const Sider = (props: SiderProp) => {
    console.log("Url:", props.url);
    return(
        <SiderImage path={props.url} />
    )
}

export default Sider;