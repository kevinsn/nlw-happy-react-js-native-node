import React from 'react';

import './styles/global.css';
import 'leaflet/dist/leaflet.css';

import Routes from './routes';

// JSX (JavaScript XML) = forma de incluir html dentro do código XML

// interface TitleProps {
//   text: string;
// }

// function Title(props: TitleProps) {
//   return (
//     <h1>{props.text}</h1>
//   )
// }

// The App() function returns a JSX content (HTML) to be used in index.html

function App() {
  return (
    <Routes />
  );
}

export default App;
