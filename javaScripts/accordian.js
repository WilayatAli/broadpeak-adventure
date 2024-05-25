document.querySelectorAll('.accordion-item button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            button.setAttribute('aria-expanded', 'true');
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            button.setAttribute('aria-expanded', 'false');
            accordionContent.style.maxHeight = 0;
        }
    });
});
