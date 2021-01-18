export const resizeReserve = () => {
    if( document.documentElement.clientWidth < 1025 ){ //mobile
        let img = document.createElement('img');
        img.src = "/icons/check.png"
        const resButton = document.getElementById("reserveButton")
        while( resButton.firstChild){ //remove child if there is any
            resButton.removeChild(resButton.firstChild)
        }
        resButton.appendChild(img)
    }else{
        const resButton = document.getElementById("reserveButton")
        while( resButton.firstChild){ //remove child if there is any
            resButton.removeChild(resButton.firstChild)
        }
        resButton.innerHTML = "Reserve Now"
    }
}

export const hideNavDiv = () => {
    if( document.documentElement.clientWidth < 1025 ){ //mobile
        document.getElementById("hidden").style.display="none"
    }else{
        documen1t.getElementById("hidden").style.display="block"
    }
}