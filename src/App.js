import React from 'react';
import { BrowserRouter as Router, Route, Routes, UNSAFE_ViewTransitionContext } from 'react-router-dom';
import Colors from './components/Colors';
import Selectors from './components/Selectors';
import BoxModel from './components/Boxmodel';
import Typography from './components/Typography';
import Zindex from './components/Zindex';
import Units from './components/Units';
import Queries from './components/Queries';
import Positioning from './components/Positioning';
import Floats from './components/Floats';
import Animations from './components/Animations';
import Important from './components/Important';
import Display from './components/Display';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Selectors/>} />
        <Route path="/colors" element={<Colors/>} />
        <Route path="/boxmodel" element={<BoxModel/>} />
        <Route path="/typography" element={<Typography/>} />
        <Route path="/zindex" element={<Zindex/>} />
        <Route path="/units" element={<Units/>} />
        <Route path="/queries" element={<Queries/>} />
        <Route path="/positioning" element={<Positioning/>} />
        <Route path="/floats" element={<Floats/>} />
        <Route path="/animations" element={<Animations/>} />
        <Route path="/important" element={<Important/>} />
        <Route path="/display" element={<Display/>} />
      </Routes>
    </Router>
  );
};

export default App;
