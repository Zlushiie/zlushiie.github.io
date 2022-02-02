const input = document.getElementById('input');
const confirm = document.getElementById('confirm');

function newBg() {
    document.getElementById('bg').style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

//returns array of rgb
function parseRgb(rgbi) {
    return rgbi.split('(')[1].split(')')[0].split(',').map(e => parseInt(e.trim()));
}

function rgbToHex(rgbi) {
    let rgb = rgbi.split('(')[1].split(')')[0].split(',').map(e => parseInt(e.trim()));
    return `#${rgb[0].toString(16).length == 1 ? '0' + rgb[0].toString(16) : rgb[0].toString(16)}${rgb[1].toString(16).length == 1 ? '0' + rgb[1].toString(16) : rgb[1].toString(16)}${rgb[2].toString(16).length == 1 ? '0' + rgb[2].toString(16) : rgb[2].toString(16)}`;
}

function hexToRgb(hexi) {
    return [parseInt(hexi.charAt(0) + hexi.charAt(1), 16), parseInt(hexi.charAt(2) + hexi.charAt(3), 16), parseInt(hexi.charAt(4) + hexi.charAt(5), 16)];
}

document.addEventListener('onLoad', newBg());

confirm.addEventListener('click', () => {
    if (input.value.match(/[a-fA-F0-9]{6}/g)) {
        const current = parseRgb(document.getElementById('bg').style.backgroundColor);
        const guess = hexToRgb(input.value);
        alert(`You scored a distance of ${
            Math.round(Math.sqrt(
                Math.pow(guess[0] - current[0], 2) +
                Math.pow(guess[1] - current[1], 2) +
                Math.pow(guess[2] - current[2], 2)
            ))
        } (Lower is better)`)
        newBg();
    } else {
        alert('Input is not a 6 digit hex code.')
    }
    input.value = ''
});