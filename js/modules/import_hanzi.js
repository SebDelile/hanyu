//--------------------------------------------------------------------------------------------
//------------------------------ Import from modules -----------------------------------------
//--------------------------------------------------------------------------------------------

import { importModal, importForm } from "../main.js";
import { setTone } from "./utils.js";
import { hanziDatabase } from "../../public/hanzi_database.js";

//--------------------------------------------------------------------------------------------
//------------------------------- Intermediate stages ----------------------------------------
//--------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------
//----------------------------------- Export(s) ----------------------------------------------
//--------------------------------------------------------------------------------------------

export function importHanziCode(event) {
  //test for hexadecimal format
  if (!/^[0-9a-f]+$/g.test(event.target.value)) {
    event.target.value = "";
  }
  //code and sinogram fields are linked
  const sinogram = event.target.value === "" ? "" : String.fromCharCode(`0x${event.target.value}`);
  importForm.sinogram.value = sinogram;
  document.querySelector(".import__preview .tile__sinogram").textContent = sinogram;
}

export function importHanziSinogram(event) {
  //code and sinogram fields are linked
  importForm.code.value = event.target.value !== "" ? event.target.value.charCodeAt().toString(16) : "";
  document.querySelector(".import__preview .tile__sinogram").textContent = event.target.value;
  console.log(`>${importForm.sinogram.value}<`);
}

export function importHanziPinyin(event) {
  const tone = importForm.tone.value ? importForm.tone.value : 0;
  document.querySelector(".import__preview .tile__pinyin").textContent = setTone(event.target.value, tone);
}

export function importHanziTone(event) {
  const pinyin = importForm.pinyin.value ? importForm.pinyin.value : false;
  if (pinyin) {
    document.querySelector(".import__preview .tile__pinyin").textContent = setTone(pinyin, parseInt(event.target.value, 10));
  }
}

export function importHanziExample(event) {
  document.querySelector(".import__preview .tile__example").textContent = event.target.value;
}

export function importHanziStatus(event) {
  event.target.value = event.target.checked ? "w" : "r";
  document.querySelector(".import__preview").classList.toggle("tile--readonly", !event.target.checked);
}

export function importHanziSubmit(event) {
  event.preventDefault();
  let newHanzi = {};
  for (let field of importForm) {
    newHanzi[field.name] = field.value;
  }
  hanziDatabase.push(newHanzi);
  importForm.reset();
  document.querySelector(".import__preview").classList.toggle("tile--readonly", false);
  document.querySelector(".import__preview .tile__sinogram").textContent = " ";
  document.querySelector(".import__preview .tile__pinyin").textContent = " ";
  document.querySelector(".import__preview .tile__example").textContent = " ";
}
