

const box = document.querySelector('.box'),
    items = document.querySelectorAll('.item');

if (box.hasAttribute('data-bg')) {
    let attrBox = box.getAttribute('data-bg')
    box.style.background = attrBox
}

for (let i = 0; i < items.length; i++) {
    
    items[i].addEventListener('click', function () {
        for (let k = 0; k < items.length; k++) {
            const element = items[k];
            items[k].classList.remove('active')
        }
        items[i].classList.add('active')
    })
}
