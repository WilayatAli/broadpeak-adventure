function toggleMenu(){
    const navList = document.querySelector('.navList');
    navList.classList.toggle('show');
}
let isDropdownOpen = false;
function toggleDropdown(event) {
    const dropdown = event.currentTarget.nextElementSibling;
    if (isDropdownOpen) {
        dropdown.style.display = 'none';
        isDropdownOpen = false;
    } else {
        dropdown.style.display = 'block';
        isDropdownOpen = true;
    }
}














