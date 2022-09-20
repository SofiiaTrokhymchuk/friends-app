export function hamburgerMenuClickHandler(){
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const inputContainer =  document.getElementById('inputContainer');
    hamburgerMenu.addEventListener('click', () => {
        toggleHamburgerMenuClasses();
    })
    document.addEventListener('click', (event) => {
        if(!event.target.closest('.input-container') && !event.target.closest('.hamburger-menu')){
            toggleHamburgerMenuClasses();
        }
    })

    function toggleHamburgerMenuClasses(){
        inputContainer.classList.toggle('opened');
        hamburgerMenu.classList.toggle('active');
    }
}
