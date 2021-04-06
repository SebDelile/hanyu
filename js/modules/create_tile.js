//--------------------------------------------------------------------------------------------
//------------------------------ Import from modules -----------------------------------------
//--------------------------------------------------------------------------------------------

import {setTone} from "./utils.js"

//--------------------------------------------------------------------------------------------
//------------------------------- Intermediate stages ----------------------------------------
//--------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------
//----------------------------------- Export(s) ----------------------------------------------
//--------------------------------------------------------------------------------------------

export function createTile(hanzi) {
  let element = document.createElement("button");
  element.classList.add("tile");
  if (hanzi.status === "r") {
    element.classList.add("tile--readonly")
  }
  element.setAttribute("id", hanzi.code);
  element.setAttribute("type", "button");
  element.setAttribute("data-tone", hanzi.tone);

  element.innerHTML = `
    <h3 class="tile__sinogram">${hanzi.sinogram}</h3>
    <p class="tile__pinyin">${setTone(hanzi.pinyin, hanzi.tone)}</p>
    <p class="tile__example">${hanzi.example}</p>
  `;
  return element;
}