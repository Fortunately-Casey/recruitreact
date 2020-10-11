import React, { PureComponent } from "react";
import {
  HeaderWrapper,
  HeaderTop,
  LeftTitle,
  TitleLogo,
  TitleText,
  HeaderBottom,
  RainBow
} from "./style";

class News extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <HeaderTop>
          <LeftTitle>
            <TitleLogo></TitleLogo>
            <TitleText></TitleText>
          </LeftTitle>
        </HeaderTop>
        <HeaderBottom>
          <RainBow></RainBow>
        </HeaderBottom>
      </HeaderWrapper>
    );
  }
}

export default News;
