import styled from 'styled-components';

type SiderImageProp = {
    path: string;
}

export const LayoutContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100vw;
    height: 100vh;

    @media screen and (max-width: 414px){
        display: block;
    };
`;

export const LayoutContent = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 768px){
        width: 60%;
    };

    @media screen and (max-width: 414px){
        width: 312px;
        height: 352px;
        position: absolute;
        bottom: 11%;
        left: 12%;
        background-color: #FAF5FF;
        border-radius: 8px;
        margin: 0 auto;
    };

    @media screen and (max-width: 375px){
        left: 8%;
    };
`

export const SiderImage = styled.div<SiderImageProp>`
    width: 60%;
    height: 100vh;
    background: #130525;
    background-image: url(${props => props.path}); /* fallback */
    background-image:
        linear-gradient(to bottom, rgba(105, 57, 153, 0), rgba(19, 5, 37, 1)),
        url(${props => props.path});
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 768px){
        width: 40%;
    };

    @media screen and (max-width: 414px){
        width: 100%;
    }
`