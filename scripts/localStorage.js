function setRole(value) {
    localStorage.setItem('role', value);
    if (value == 'noname') {
        showPage('noname');
    }
    console.log(value);
    return;
}

function setWhere(value) {
    localStorage.setItem('where', value);
    showPage(localStorage.getItem('role'), value);
    console.log(value);
    return;
}