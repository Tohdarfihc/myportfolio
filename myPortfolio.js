window.onscroll = function() {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
        header.style.backgroundColor = 'rgba(97, 138, 44, 0.904)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
};

document.addEventListener('DOMContentLoaded', function() {
const overForm = document.getElementById('overForm');
const back = document.getElementById('back');

document.getElementById('download').addEventListener('click', function() {
overForm.style.display = 'block';


});

document.getElementById('back').addEventListener('click', function() {
overForm.style.display = 'none';
});
});
