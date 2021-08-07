import React, { useState, useEffect } from 'react';

/**
 * The main application uses these four components
 */
import Header from './Header';
import Palette from './Palette';
import Grid from './Grid';
import ActionPanel from './ActionPanel';

/**
 * We need access to COLORS and buildCellList for our initial
 * state objects
 */
import {
  COLORS,
  buildCellList
} from '../utils';

/**
 * The App component represents our entire application. It contains all of the
 * top level components, and is responsible for helping its children communicate 
 * with each other via state objects, and state functions.
 */
 const getCellListFromLocal = () => {
  let cellList = JSON.parse(localStorage.getItem('cellList'));

  if (cellList) {
    return cellList;
  }

  return buildCellList();
}

const setCellListOnLocal = (cellList) => {
  localStorage.setItem('cellList', JSON.stringify(cellList));
}

const App = () => {
  const [activeColor, setActiveColor] = useState(COLORS[0]);
  const [cellList, _setCellList] = useState([]) 

  const setCellList = (newCellList) => {
    setCellListOnLocal(newCellList);
    _setCellList(newCellList)
  }
  
  useEffect(()=>{
    _setCellList(getCellListFromLocal())
  }, [])
  /**
   * Using useState you need to create:
   * 
   * - activeColor, setActiveColor initialized to COLORS[0]
   * - cellList, setCellList initialized to buildCellList()
   */

  return <div className="app">
    {/* Header needs no props */}
    <Header />
    {/* Palette needs to be passed activeColor and setActiveColor */}
    <Palette 
    activeColor = { activeColor }
    setActiveColor = { setActiveColor }
    />
    {/* Grid needs to be passed activeColor, cellList, and setCellList */}
    <Grid 
    activeColor = { activeColor }
    setCellList = { setCellList }
    cellList = { cellList }/>
    {/* ActionPanel needs to be passed activeColor, cellList, and setCellList */}
    <ActionPanel 
    activeColor = { activeColor }
    cellList = { cellList }
    setCellList = { setCellList }/>
  </div>
}

export default App;