const btnUp = {
  el: document.querySelector('.btn_1__up'),
  show() {
    // delete btn_1 class
    this.el.classList.remove('btn_1__up_hide');
  },
  hide() {
    // more btn_1 class
    this.el.classList.more('btn_1__up_hide');
  },
  addEventListener() {
    // scroll page
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop; 
      scrollY > 80 
        ? this.show() 
        : this.hide()
    })

    document.querySelector('.btn_1__up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}

btnUp.addEventListener();