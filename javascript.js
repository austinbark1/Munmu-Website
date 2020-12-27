const TEST = document.getElementById('test');
const MAIN = document.getElementById('main');
const CLICKBUTTON = document.getElementById('click');
const COUNTER = document.getElementById('counter');
var counterNumber = 0;

window.onload = function() {
    console.log('Beginning to render the page...');
    const TEST_COMPONENT = new testButton(); 
    const INCREMENT_AND_DISPLAY_COMPONENT = new IncrementAndDisplay();

    // TEST_COMPONENT.render();
    INCREMENT_AND_DISPLAY_COMPONENT.render();
}

// ============== INCREMENT AND DISPLAY ==========================================================
class IncrementAndDisplay {
    template = `
    <div class="counter" id="counter">${counterNumber}</div>
    <div class="clickButton" id="click">
        <button type="button" id="clickButton">Click</button>
    </div>    
    `;

    countUp = () => {
        counterNumber += 1;
        document.getElementById('counter').innerHTML = counterNumber;
    }

    render = () => {
        console.log('Rendering MainComponent template...')
        MAIN.innerHTML = this.template;
        document.getElementById('clickButton').addEventListener('click', this.countUp);
    }
}

class testButton {
    template = `
    <button type="button" id="testbutton">Click Me!</button>
    `;

    potatoCount = 0;

    testFunction = () => {
        console.log("Potato " + this.potatoCount)
        this.potatoCount += 1;
    }

    render = () => {
        TEST.innerHTML = this.template;
        document.getElementById('testbutton').addEventListener('click', this.testFunction);
    }
}