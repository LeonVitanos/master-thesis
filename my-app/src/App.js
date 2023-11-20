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
        <Route path="/master-thesis" element={<Tabs />} />
        <Route path="/master-thesis/vlc-introduction" element={<VLCIntroduction />} />
        <Route path="/master-thesis/vlc-build-instructions" element={<VLCBuildInstructions />} />
        <Route path="/master-thesis/vlc-repository-mining" element={<VLCRepositoryMining />} />
        <Route path="/master-thesis/vlc-responsive-design" element={<VLCResponsiveDesign />} />
        <Route path="/master-thesis/wallch-introduction" element={<WallchIntroduction />} />
        <Route path="/master-thesis/wallch-build-instructions" element={<WallchBuildInstructions />} />
        <Route path="/master-thesis/wallch-repository-mining" element={<WallchRepositoryMining />} />
        <Route path="/master-thesis/wallch-responsive-design" element={<WallchResponsiveDesign />} />
      </Routes>
    </Router>
  );
}

export default App;