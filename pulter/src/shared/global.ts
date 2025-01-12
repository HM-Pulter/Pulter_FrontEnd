import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import WorkSansRegular from "../assets/fonts/WorkSans-Regular.woff";
import WorkSansMedium from "@/assets/fonts/WorkSans-Medium.woff";
import WorkSansBold from "@/assets/fonts/WorkSans-Bold.woff";
import WorkSansSemiBold from "@/assets/fonts/WorkSans-SemiBold.woff";
import Jalnan from "@/assets/fonts/Jalnan2TTF.ttf";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Work Sans';
    src: url(${WorkSansRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Work Sans';
    src: url(${WorkSansMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Work Sans';
    src: url(${WorkSansSemiBold}) format('woff');
    font-weight: 600;
    font-style: normal;
  }


  @font-face {
    font-family: 'Work Sans';
    src: url(${WorkSansBold}) format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family:'Jalnan';
    src: url(${Jalnan}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
  }
// border-box 초기화
*,
*:before,
*:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

// 공백 초기화
body,
button,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
input,
legend,
li,
ol,
p,
select,
table,
td,
textarea,
th,
ul,
figure,
figcaption {
    margin: 0;
    padding: 0;

}



// 링크 초기화
a,
a:hover,
a:focus {
    color: inherit;
    text-decoration: none;
}

// 스타일 초기화
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: normal;
}

ul {
    list-style: none;
}

em,
address {
    font-style: normal;
}

strong {
    font-weight: normal;
}

img {
    vertical-align: top;
    width: 100%;
}

// 디자인 초기화
input,
textarea,
button,
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    font-size: 16px;
    border: 0;
}
button:focus,
button:active,
input:focus,
input:active,
textarea:focus,
textarea:active {
    outline: none;
    box-shadow: none;
}

// 스킵메뉴
#skip a {
    position: absolute;
    left: 10px;
    top: -92px;
    z-index: 100000;
    font-size: 1rem;
    padding: 10px 30px;
    color: var(--white);
    background: var(--black);
}

#skip a:focus,
#skip a:active {
    top: 10px;
}

// 글씨 숨기기
.blind {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

// IR(Image Replacement)
// 의미가 포함되어 있는 image를 배경으로 표현하고, 텍스트는 보이지 않게 설정하는 방법
.ir {
    display: block;
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    text-indent: -9999px;
    white-space: nowrap;
}

@media (min-width: 375px) {
    #root {
        width: 375px;
    }
}
@media (max-width: 500px) {
    #root {
        width: 100vw;
    }
}

#root {
    box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
    margin: 0 auto;
    min-height: 100vh;
    position: relative;
}

body {
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
}

button {
    cursor: pointer;
}



`;
