//--------------------------------------------------------------------------------------------
//------------------------------ Import from modules -----------------------------------------
//--------------------------------------------------------------------------------------------

import { hanziDatabase } from "../public/hanzi_database.js";
import { createTile } from "./modules/create_tile.js";
import { Modal } from "./modules/modal.js";
import { importHanziCode, importHanziSinogram, importHanziPinyin, importHanziTone, importHanziExample, importHanziStatus, importHanziSubmit } from "./modules/import_hanzi.js";
import {exportDatabase} from "./modules/export_database.js";
import { triggerNav } from "./modules/nav.js";

//--------------------------------------------------------------------------------------------
//----------------------------------- DOM elements -------------------------------------------
//--------------------------------------------------------------------------------------------

const tileGrid = document.querySelector(".tile__grid");
export const importModal = new Modal(document.querySelector(".import__modal"));
export let importForm = document.querySelector(".import__form");

//--------------------------------------------------------------------------------------------
//--------------------------------- Global variables -----------------------------------------
//--------------------------------------------------------------------------------------------

export let writeTable = [];
export let readTable = [];

//--------------------------------------------------------------------------------------------
//------------------------------------ Data loading ------------------------------------------
//--------------------------------------------------------------------------------------------

//browses the JSON table to include each char to the page
for (let hanzi of hanziDatabase) {
  tileGrid.append(createTile(hanzi));
  if (hanzi.status === "w") {
    writeTable.push(hanzi.code);
  }
}

//--------------------------------------------------------------------------------------------
//--------------------------------- Event listeners ------------------------------------------
//--------------------------------------------------------------------------------------------

//header buttons
document.querySelector(".header__burger").addEventListener("click", triggerNav);
//nav button
document.querySelectorAll(".nav__dropdown__button").forEach(button => button.addEventListener("click", triggerNav));
document.getElementById("button__import").addEventListener("click", function() {importModal.openCloseModal()});
document.getElementById("button__exportDatabase").addEventListener("click", exportDatabase);
document.querySelector(".import__close").addEventListener("click", function() {importModal.openCloseModal()});

//import-modale
importForm.code.addEventListener("blur", importHanziCode);
importForm.sinogram.addEventListener("input", importHanziSinogram);
importForm.pinyin.addEventListener("input", importHanziPinyin);
importForm.tone.addEventListener("change", importHanziTone);
importForm.example.addEventListener("input", importHanziExample);
importForm.status.addEventListener("change", importHanziStatus);
importForm.addEventListener("submit", importHanziSubmit);