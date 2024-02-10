let photos = [];
for (let i = 2; i < 6; i++) {
    photos.push(`images/image-${i}.png`);
}

let currentPhoto = 0;
let currentFragment = 0;
let cont = document.querySelector('.album-container');
const fragments = document.querySelectorAll('.fragment');
const maxPhotos = photos.length;
const maxFragments = fragments.length;


function init(){
    div = document.createElement('div');
    div.className = 'fragment';
    cont.appendChild(div);
}


function animateElement(element) {
    // Use setTimeout to apply initial rotation after a delay
    setTimeout(() => {
        element.style.transform = 'rotateY(0deg)';
        element.style.transition = 'transform 0.2s linear';
    }, 100);
}

function showFragments(currentFragment, currentPhoto) {
    if (currentFragment >= maxFragments) {
        currentFragment = 0;
        currentPhoto = currentPhoto + 1 === maxPhotos ? 0 : currentPhoto + 1;

        fragments.forEach((fragment, index) => {
            fragment.style.display = 'none';
            fragment.style.background = `url('${photos[currentPhoto]}')`;
            fragment.style.backgroundSize = '1000% 100%';
            fragment.style.backgroundPosition = `-${index * 100}% 0`;
            fragment.style.transform = 'rotateY(70deg)';
        });
    } 
    else {
        fragments[currentFragment].style.display = 'block';
        animateElement(fragments[currentFragment]);
        currentFragment += 1;
    }
    currentFragment == maxFragments ? setTimeout(() => showFragments(currentFragment, currentPhoto), 2000) : setTimeout(() => showFragments(currentFragment, currentPhoto), 100);
}



showFragments(0, 0);
