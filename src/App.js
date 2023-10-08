import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tabs from './Tabs';

import VLCIntroduction from './vlc/VLCIntroduction';
import VLCBuildInstructions from './vlc/VLCBuildInstructions';
import VLCRepositoryMining from './vlc/VLCRepositoryMining';
import VLCResponsiveDesign from './vlc/VLCResponsiveDesign';
import WallchIntroduction from './wallch/WallchIntroduction';
import WallchBuildInstructions from './wallch/WallchBuildInstructions';
import WallchRepositoryMining from './wallch/WallchRepositoryMining';
import WallchResponsiveDesign from './wallch/WallchResponsiveDesign';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tabs />} />
        <Route path="/VLCIntroduction" element={<VLCIntroduction />} />
        <Route path="/VLCBuildInstructions" element={<VLCBuildInstructions />} />
        <Route path="/VLCRepositoryMining" element={<VLCRepositoryMining />} />
        <Route path="/VLCResponsiveDesign" element={<VLCResponsiveDesign />} />
        <Route path="/WallchIntroduction" element={<WallchIntroduction />} />
        <Route path="/WallchBuildInstructions" element={<WallchBuildInstructions />} />
        <Route path="/WallchRepositoryMining" element={<WallchRepositoryMining />} />
        <Route path="/WallchResponsiveDesign" element={<WallchResponsiveDesign />} />
      </Routes>
    </Router>
  );
}

export default App;