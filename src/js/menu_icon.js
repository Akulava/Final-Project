var navbar = document.getElementById('navbar')
    navbar.style.maxHeight = '0px'

    function toggleOpenMenu() {
      (navbar.style.maxHeight == '0px') 
        ? navbar.style.maxHeight = '130px'
        : navbar.style.maxHeight = '0px'
    }