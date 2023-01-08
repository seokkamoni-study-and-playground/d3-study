import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import PretendardBold from '../../fonts/Pretendard-Bold.woff';
import PretendardSemiBold from '../../fonts/Pretendard-SemiBold.woff';
import PretendardMedium from '../../fonts/Pretendard-Medium.woff';

const GlobalStyled = createGlobalStyle`
    ${reset}

    * {
  margin: 0;
  font-family: 'PretendardMedium';
  box-sizing: border-box;
}

body {
  font-family: 'PretendardMedium';
}

h1 {
  margin: 0;
}

a {
  text-decoration: none;
}

button,
input,
select,
textarea {
  background-color: #fff;
  border: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
}

a,
button {
  cursor: pointer;
}

ul,
ol {
  padding-left: 0;
  list-style: none;
}

// 폰트 
@font-face {
        font-family: 'PretendardBold';
        src: local('PretendardBold'), local('PretendardBold');
        font-style: normal;
        src: url(${PretendardBold}) format('woff');
  }
  @font-face {
        font-family: 'PretendardSemiBold';
        src: local('PretendardSemiBold'), local('PretendardSemiBold');
        font-style: normal;
        src: url(${PretendardSemiBold}) format('woff');
  }
  @font-face {
        font-family: 'PretendardMedium';
        src: local('PretendardMedium'), local('PretendardMedium');
        font-style: normal;
        src: url(${PretendardMedium}) format('woff');
  }
`;

export default GlobalStyled;
