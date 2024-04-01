function clickMenu() {
    document.querySelector('.mobile-menu').classList.toggle('show-menu')
}

const element = document.getElementById("yourElementId");
const element2 = document.getElementById("yourElementId2");

function simulateClick(x, y) {
    const event = new MouseEvent('click', {
        clientX: x,
        clientY: y
    });
}

setTimeout(simulateClick(675, 310), 1000)

setTimeout(simulateClick(500, 522), 1000)