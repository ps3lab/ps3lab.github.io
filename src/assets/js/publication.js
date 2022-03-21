

window.onload = function init() {
    const refButtons = document.querySelectorAll("a.psu-ref-button")
    const absButtons = document.querySelectorAll("a.psu-abs-button")

    refButtons.forEach(btn => {
        btn.addEventListener("click", showBibtex, false);
        btn.href = "javascript:void(0);"

    })

    absButtons.forEach(btn => {
        btn.addEventListener("click", showAbstract, false);
        btn.href = "javascript:void(0);"

    })

}

function findParentSiblingWithClass(elm, cls) {
    const parentElm = elm.parentElement;

    let targetElm = parentElm.nextElementSibling;
    while(targetElm){
        if(targetElm.classList.contains(cls)){
            return targetElm;
        }
        targetElm = targetElm.nextElementSibling
    }
    return targetElm;
}

function showAbstract(e) {
    e.preventDefault();
    const elm = findParentSiblingWithClass(e.currentTarget, "abstract")
    if(elm){
        if(elm.style.display != 'flow-root'){
            elm.style.display = 'flow-root'
        } else {
            elm.style.display = 'none'
        }
    }
}

function showBibtex(e) {
    e.preventDefault();
    const elm = findParentSiblingWithClass(e.currentTarget, "bibtex")

    if(elm){
        if(elm.style.display != 'flow-root'){
            elm.style.display = 'flow-root'
        } else {
            elm.style.display = 'none'
        }
    }
}