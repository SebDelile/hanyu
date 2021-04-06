//--------------------------------------------------------------------------------------------
//------------------------------ Import from modules -----------------------------------------
//--------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------
//------------------------------- Intermediate stages ----------------------------------------
//--------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------
//----------------------------------- Export(s) ----------------------------------------------
//--------------------------------------------------------------------------------------------

export class Modal {
  constructor(modal, status = false) {
    this.modal = modal;
    this.status = status;
  }
  openCloseModal() {
    //update status
    this.status = !this.status; //new = true : makes it to appear
    this.modal.setAttribute("aria-hidden", !this.status);
    document.querySelectorAll(["main", "header", "footer"]).forEach(element => element.setAttribute("aria-hidden", this.status));
    this.modal.classList.toggle("modal--ON", this.status);
    this.modal.classList.toggle("modal--OFF", !this.status);
    //the keyboard nav is started from opening
    //modaleKeyboardNavigation(modal);
  }
}
