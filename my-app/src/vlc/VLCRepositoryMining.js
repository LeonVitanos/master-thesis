import React, { useState } from 'react';
import Tabs from '../Tabs';
import './VLCRepositoryMining.css';

function VLCRepositoryMining() {
  // State to track the loading state of each iframe
  const [iframeLoaded, setIframeLoaded] = useState({
    plot1: false,
    plot2: false,
    plot3: false,
    plot4: false,
    plot5: false,
  });

  const handleIframeLoad = (iframeId) => {
    setIframeLoaded((prevState) => ({ ...prevState, [iframeId]: true }));
  };

  return (
    <div>
      <Tabs />
      <div className="repository-mining">
        <h2>Repository Mining for VLC</h2>
        {/* Render each iframe and display "Loading..." until it's loaded */}
        <h3>All files</h3>
        <div id="plot1">
          {!iframeLoaded.plot1 && <p>Loading...</p>}
          <iframe
            src="vlc/repository mining/plots/vlc_all_files.html"
            title="VLC All Files Plot"
            
            onLoad={() => handleIframeLoad('plot1')}
          ></iframe>
        </div>
        <h3>Programming languages</h3>
        <div id="plot2">
          {!iframeLoaded.plot2 && <p>Loading...</p>}
          <iframe
            src="vlc/repository mining/plots/vlc_programming_languages.html"
            title="VLC Programming Languages"
            
            onLoad={() => handleIframeLoad('plot2')}
          ></iframe>
        </div>
        <h3>Markup languages</h3>
        <div id="plot3">
          {!iframeLoaded.plot3 && <p>Loading...</p>}
          <iframe
            src="vlc/repository mining/plots/vlc_markup_languages.html"
            title="VLC Mark Up Languages"
            onLoad={() => handleIframeLoad('plot3')}
          ></iframe>
        </div>
        <h3>Build Tools</h3>
        <div id="plot4">
          {!iframeLoaded.plot4 && <p>Loading...</p>}
          <iframe
            src="vlc/repository mining/plots/vlc_build_tools.html"
            title="VLC Build Tools"
            onLoad={() => handleIframeLoad('plot4')}
          ></iframe>
        </div>
        <h3>Languages related to UI components (from 2018)</h3>
        <div id="plot5">
          {!iframeLoaded.plot5 && <p>Loading...</p>}
          <iframe
            src="vlc/repository mining/plots/vlc_ui_languages.html"
            title="VLC UI languages"
            onLoad={() => handleIframeLoad('plot5')}
          ></iframe>
        </div>
        <div className="notes">
          <ul>
            <li>Excluded files are PO files, SVG and diff</li>
            <li>Languages that never had comments are not shown in the comments plots, neither taken into account for the comments to code ratio</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VLCRepositoryMining;
