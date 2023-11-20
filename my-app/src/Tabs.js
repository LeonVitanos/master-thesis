import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Tabs.css';

function Tabs() {
  const [activeTab, setActiveTab] = useState('Home');
  const [dropdownActive, setDropdownActive] = useState(null);
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setDropdownActive(null);

    if (tab === 'Home') {
      navigate('/master-thesis');
    } else {
      navigate(`/${tab}`);
    }
  };

  const handleDropdownMouseEnter = (dropdown) => {
    setDropdownActive(dropdown);
  };

  const handleDropdownMouseLeave = () => {
    setDropdownActive(null);
  };

  return (
    <div className="tabs">
      <div className="dropdown">
        <button
          className={activeTab === 'Home' ? 'active' : ''}
          onClick={() => handleTabChange('Home')}
        >
          Home
        </button>
      </div>
      <div
        className="dropdown"
        onMouseEnter={() => handleDropdownMouseEnter('VLC')}
        onMouseLeave={handleDropdownMouseLeave}
      >
        <button className={activeTab === 'VLC' ? 'active' : ''}>VLC</button>
        {dropdownActive === 'VLC' && (
          <div className="dropdown-content">
            <button onClick={() => handleTabChange('master-thesis/vlc-introduction')}>
              Introduction
            </button>
            <button onClick={() => handleTabChange('master-thesis/vlc-build-instructions')}>
              Build Instructions
            </button>
            <button onClick={() => handleTabChange('master-thesis/vlc-repository-mining')}>
              Repository Mining
            </button>
            <button onClick={() => handleTabChange('master-thesis/vlc-responsive-design')}>
              Responsive Design
            </button>
          </div>
        )}
      </div>
      <div
        className="dropdown"
        onMouseEnter={() => handleDropdownMouseEnter('Wallch')}
        onMouseLeave={handleDropdownMouseLeave}
      >
        <button className={activeTab === 'Wallch' ? 'active' : ''}>Wallch</button>
        {dropdownActive === 'Wallch' && (
          <div className="dropdown-content">
            <button onClick={() => handleTabChange('master-thesis/wallch-introduction')}>
              Introduction
            </button>
            <button onClick={() => handleTabChange('master-thesis/wallch-build-instructions')}>
              Build Instructions
            </button>
            <button onClick={() => handleTabChange('master-thesis/wallch-repository-mining')}>
              Repository Mining
            </button>
            <button onClick={() => handleTabChange('master-thesis/wallch-responsive-design')}>
              Responsive Design
            </button>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Tabs;