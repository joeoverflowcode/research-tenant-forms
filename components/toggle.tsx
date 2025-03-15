import React, { useState } from 'react';

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        className="toggle-input"
        checked={isToggled}
        onChange={handleToggle}
        id="toggle"
      />
      <label htmlFor="toggle" className="toggle-label"></label>
    </div>
  );
}

export default Toggle;