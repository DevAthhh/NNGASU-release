function setRole(value) {
    localStorage.setItem('role', value);
    if (value == 'noname') {
        showPage('noname');
    }
    return;
}

function where(value) {
    localStorage.setItem('where', value);
    showPage(localStorage.getItem('role'));
    return;
}

document.querySelector('#result').addEventListener('click', function() {
    console.log(localStorage);
    localStorage.clear();
})