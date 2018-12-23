import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { styledNormalize } from 'styled-normalize'
import { colors } from './styles'

 // ${styledNormalize}
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i|Work+Sans');
  
  html{
    font-size: 10pt;
  }
  
  body{
    background-color: ${colors.black};
    color: ${colors.black};
    
  }
`

ReactDOM.render(
  <Fragment>
    <App />
    <GlobalStyle />
  </Fragment>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
