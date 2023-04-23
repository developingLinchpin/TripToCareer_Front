import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

// ==============================|| APP ||============================== //
// 이 코드는 React로 작성된 NavigationScroll 컴포넌트를 정의하는 것으로, 이 컴포넌트는 자식 요소들을 받아서 해당 자식 요소들이 렌더링될 때마다 페이지의 스크롤을 맨 위로 올려주는 역할을 합니다.

// 먼저, 코드의 첫 번째 줄에서는 NavigationScroll이라는 이름의 함수형 컴포넌트가 선언됩니다. 이 컴포넌트는 props로 children을 받아서 반환합니다.

// 다음으로, 코드의 두 번째 줄에서는 React Router의 useLocation 훅을 사용하여 현재 페이지의 경로(location)를 가져옵니다.

// 그리고 useEffect 훅을 사용하여 pathname이 변경될 때마다 페이지의 스크롤을 맨 위로 올려주는 함수가 실행됩니다. 이 함수에서는 window.scrollTo 메서드를 사용하여 스크롤을 맨 위로 이동시킵니다. 이때 behavior 속성은 'smooth'로 설정되어 있어 부드러운 스크롤 효과를 제공합니다.

// 마지막으로, NavigationScroll 컴포넌트의 propTypes를 정의합니다. 이 컴포넌트는 children props를 받아서 렌더링하므로, 해당 props가 올바른 자식 요소인지 확인하기 위해 PropTypes 라이브러리를 사용하여 검증합니다.

// 마지막으로, NavigationScroll 컴포넌트를 export합니다. 이제 이 컴포넌트는 다른 파일에서 import하여 사용할 수 있습니다.
const App = () => {
    const customization = useSelector((state) => state.customization);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <Routes />
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
