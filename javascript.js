const TEST = document.getElementById('test');
const MAIN = document.getElementById('main');
const CLICKBUTTON = document.getElementById('click');
const COUNTER = document.getElementById('counter');
var counterNumber = 0;
var clickPower = 1;
var clickPowerCost = 10;

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
    <div class="store" id="store">
        <button type="button" id="clickPower">Click Power ${clickPower}</button>
    </div>   
    `;

    countUp = () => {
        counterNumber += clickPower;
        document.getElementById('counter').innerHTML = counterNumber;
    }

    clickPower = () => {
        if (counterNumber >= Math.pow(clickPowerCost, clickPower)){
            counterNumber = counterNumber - Math.pow(clickPowerCost, clickPower);
            clickPower += 1;
            document.getElementById('clickPower').innerHTML = "Click Power " + clickPower;
            document.getElementById('counter').innerHTML = counterNumber;
        }
        return;
    }

    render = () => {
        console.log('Rendering MainComponent template...')
        MAIN.innerHTML = this.template;
        document.getElementById('clickButton').addEventListener('click', this.countUp);
        document.getElementById('clickPower').addEventListener('click', this.clickPower);
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