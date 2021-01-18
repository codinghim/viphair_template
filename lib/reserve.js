export const reserve = () => {
    document.getElementById('reservation').style.display = "block";
    document.body.classList.add(`scroll_disabled`);
}

export const close = () => {
    document.body.classList.remove(`scroll_disabled`);
    document.getElementById('reservation').style.display = "none";
}

export const showAlert = () => {
    document.getElementById('alert').style.display = "block";
    document.body.classList.add(`scroll_disabled`);
}

export const closeAlert = () => {
    document.body.classList.remove(`scroll_disabled`);
    document.getElementById('alert').style.display = "none";
}