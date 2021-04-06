//--------------------------------------------------------------------------------------------
//------------------------------ Import from modules -----------------------------------------
//--------------------------------------------------------------------------------------------

import { hanziDatabase } from "../../public/hanzi_database.js";

//--------------------------------------------------------------------------------------------
//------------------------------- Intermediate stages ----------------------------------------
//--------------------------------------------------------------------------------------------

function findErrorDatabase(){
  let previousHanzi = {code:"0000", sinogram:"a"};
  let error = 0;
  let dupplicate = 0;
  console.group("Vérification de la base de données")
  for (let hanzi of hanziDatabase) {
    //remove dupplicate
    if (previousHanzi.code === hanzi.code && previousHanzi.sinogram === hanzi.sinogram) {
      console.error(`doublon éliminé: ${hanzi.code} : ${hanzi.sinogram}`);
      const position = hanziDatabase.map(element => element.code).indexOf(hanzi.code) + 1; // +1 to select the 2nd
      hanziDatabase.slice(position, 1);
      dupplicate++;
    //alert on errors
    } else if (hanzi.sinogram !== String.fromCharCode(`0x${hanzi.code}`)) {
      console.log(hanzi.sinogram);
      console.error(`erreur code/caractère : ${hanzi.code} => ${String.fromCharCode("0x" + hanzi.code)} != ${hanzi.sinogram} => ${hanzi.sinogram.charCodeAt().toString(16)}`);
      error++;
    }
    previousHanzi.code = hanzi.code;
    previousHanzi.sinogram = hanzi.sinogram;
  }
  //print summary
  console.log(`Vérification terminée: ${hanziDatabase.length} entrée(s)` );
  console.log(`${dupplicate} doublon(s) éliminé(s)`);
  console.log(`${error} erreur(s) trouvée(s)`);
  console.groupEnd();
}

//--------------------------------------------------------------------------------------------
//----------------------------------- Export(s) ----------------------------------------------
//--------------------------------------------------------------------------------------------

export function exportDatabase() {
  hanziDatabase.sort((a, b) => parseInt(a.code, 16) - parseInt(b.code, 16));
  findErrorDatabase();
  console.group("copie colle l'objet dans le fichier js");
  console.log(hanziDatabase);
  console.groupEnd(); 
}

