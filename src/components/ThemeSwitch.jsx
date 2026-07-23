'use client';

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../context/DarkModeContext";

function ThemeSwitch() {
  const { mode, toggleMode } = useDarkMode();
  
    return (
        <div className="d-none d-lg-block">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            checked={mode === 'light'}
            onChange={toggleMode}
            aria-label="Switch between dark and light mode"/>
            <label htmlFor="checkbox" className="checkbox-label">
            <FontAwesomeIcon icon={faSun} />
            <FontAwesomeIcon icon={faMoon} />
            <span className="ball"></span>
            </label>
            <style>{`
                .checkbox {
                  opacity: 0;
                  position: absolute;
                  display: flex;
                }

                .checkbox-label {
                  background-color: #111;
                  width: 50px;
                  height: 26px;
                  border-radius: 50px;
                  position: relative;
                  padding: 5px;
                  cursor: pointer;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                }

                .fa-moon {
                  color: var(--tertiary-color);
                }

                .fa-sun {
                  color: var(--tertiary-color);
                }

                .checkbox-label .ball {
                  background-color: var(--secondary-color);
                  width: 22px;
                  height: 22px;
                  position: absolute;
                  left: 2px;
                  top: 2px;
                  border-radius: 50%;
                  transition: transform 0.2s linear;
                }

                .checkbox:checked + .checkbox-label .ball {
                  transform: translateX(24px);
                }
            `}</style>
        </div>
    );
}
export default ThemeSwitch;