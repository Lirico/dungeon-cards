import React, { useState } from 'react';
import onClickOutside from 'react-click-outside';

function Dropdown({ title, characters, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <div
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="rpgui-dropdown" style={{display: "flex", justifyContent: "space-between", alignItems:"center", marginRight: "5rem", paddingRight: "1.3rem", height: "2.7rem"}}>
        <p style={{cursor: "pointer", paddingLeft: "1rem"}}>{title}</p>
          <p style={{cursor: "pointer"}}>{open ? 'X' : '▼'}</p>
        </div>
      </div>
        {open && (
        <div className="rpgui-dropdown-imp">
          <ul style={{height: "14rem", paddingLeft: "2rem", paddingTop: "0.5rem"}}>
            {characters.map(item => (
              <li className="rpgui-boxli" key={item.id} style={{marginLeft: "-0.5rem"}}>
                <p type="button" onClick={() => handleOnClick(item)} style={{display: "flex", justifyContent: "space-between"}}>
                  <span>{item.value}</span>
                  <span>{isItemInSelection(item) && 'Selected'}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);