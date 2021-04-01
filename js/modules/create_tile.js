//--------------------------------------------------------------------------------------------
//------------------------------ Import from modules -----------------------------------------
//--------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------
//------------------------------- Intermediate stages ----------------------------------------
//--------------------------------------------------------------------------------------------


function setTone (pinyin, tone) {
  if (pinyin.includes("a")) {
    pinyin = pinyin.replace("a", ["a", "ā", "á", "ǎ", "à"][tone]);
  } else if (pinyin.includes("o")) {
    pinyin = pinyin.replace("o", ["o", "ō", "ó", "ǒ", "ò"][tone]);
  } else if (pinyin.includes("e")) {
    pinyin = pinyin.replace("e", ["e", "ē", "é", "ě", "è"][tone]);
  } else if (pinyin.includes("iu")) {
    pinyin = pinyin.replace("u", ["u", "ū", "ú", "ǔ", "ù"][tone]);
  } else if (pinyin.includes("i")) {
    pinyin = pinyin.replace("i", ["i", "ī", "í", "ǐ", "ì"][tone]);
  } else if (pinyin.includes("u")) {
    pinyin = pinyin.replace("u", ["u", "ū", "ú", "ǔ", "ù"][tone]);
  } else if (pinyin.includes("v")) {
    pinyin = pinyin.replace("v", ["ü", "ǖ", "ǘ", "ǚ", "ǜ"][tone]);
  }
  return pinyin;
}


//--------------------------------------------------------------------------------------------
//----------------------------------- Export(s) ----------------------------------------------
//--------------------------------------------------------------------------------------------

export function createTile(hanzi) {
  let element = document.createElement("button");
  element.classList.add("tile");
  element.setAttribute("id", hanzi.code);
  element.setAttribute("type", "button");
  element.setAttribute("data-tone", hanzi.tone);

  element.innerHTML = `
    <h3 class="tile__sinogram">${hanzi.word}</h3>
    <p class="tile__pinyin">${setTone(hanzi.pinyin, hanzi.tone)}</p>
    <p class="tile__example">${hanzi.example}</p>
  `;
  return element;
}