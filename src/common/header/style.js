import styled from 'styled-components';
import topTitleBg from '../../static/image/top-title-bg.png';
import titleLogo from '../../static/image/title-logo.png';
import titleText from '../../static/image/title-text.png';
import rainBow from '../../static/image/rainbow.png';
export const HeaderWrapper = styled.div `
   height: 68px;
`;

export const HeaderTop = styled.div `
   height: 60px;
   background-image: linear-gradient(90deg, #4299e1 0%, #36b5b2 100%);
`;

export const LeftTitle = styled.div `
    width: 481px;
    height: 60px;
    background: url(${topTitleBg}) no-repeat;
    background-size: 100% 100%;
    position: relative;
`;

export const TitleLogo = styled.div `
    width: 36px;
    height: 36px;
    background: url(${titleLogo}) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
`;

export const TitleText = styled.div `
    width: 341px;
    height: 20px;
    background: url(${titleText}) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
`;

export const HeaderBottom = styled.div `
    height: 8px;
    background-color: #f6ad55;
`;

export const RainBow = styled.div `
    width: 166px;
    height: 8px;
    background: url(${rainBow}) no-repeat;
    background-color: #fff;
    background-size: 100% 100%;
`;
