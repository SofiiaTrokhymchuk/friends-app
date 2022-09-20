export function hamburgerMenuClickHandler(){
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const inputContainer =  document.getElementById('inputContainer');
    hamburgerMenu.addEventListener('click', () => {
        inputContainer.classList.toggle('opened');
        hamburgerMenu.classList.toggle('active');
    })
}
