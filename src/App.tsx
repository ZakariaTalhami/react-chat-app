/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import Messenger from './components/chat/Messenger';

const AppStyle = css`
  height: 100vh;
`

function App() {
  return (
    <div className="App" css={AppStyle}>
      <Messenger channelId="channel-1"/>
    </div>
  );
}

export default App;
