let number;
let whatPickedFrom;
let whatPickedTo;

let buttonsFromTo = '<ul><li><button type="button" class="buttonix newButton" id="button-meter">Meter</button></li><li><button type="button" class="buttonix newButton" id="button-kilometer">Kilometer</button></li><li><button type="button" class="buttonix newButton" id="button-centimeter">Centimeter</button></li><li><button type="button" class="buttonix newButton" id="button-mile">Mile</button></li></ul>'

document.getElementById('button-length').addEventListener('click', function() {
    document.getElementById('convert-from').innerHTML = "From:" + buttonsFromTo
    document.getElementById('convert-to').innerHTML = "To:" + buttonsFromTo
});

document.addEventListener('click', function(event){
    if(event.target.classList.contains('newButton')) {
        if(event.target.parentElement.parentElement.parentElement.id === 'convert-from') {
            whatPickedFrom = event.target.id;
            ///document.getElementById(whatPickedFrom).classList.add('selected');
            console.log(whatPickedFrom);
        }
        if(event.target.parentElement.parentElement.parentElement.id === 'convert-to') {
            whatPickedTo = event.target.id;
            //document.getElementById(whatPickedTo).classList.add('selected');
            console.log(whatPickedTo);
        }
    }
});

document.getElementById("button-convert").addEventListener('click', function(){
    number = document.getElementById('unit-input').value;
    console.log(number);

    let result = convertUnits(whatPickedFrom, whatPickedTo, number);
    document.querySelector('.result-div').innerHTML = result;
});

function convertUnits(from, to, number) {
    let result;
    if(from === 'button-meter' && to === 'button-kilometer') {
        result = number * 0.001;
    }
    else if(from === 'button-meter' && to === 'button-mile') {
        result = number * 0.000621371192;
    }
    else if(from === 'button-meter' && to === 'button-centimeter') {
        result = number * 100;
    }
    else if(from === 'button-kilometer' && to === 'button-mile') {
        result = number * 0.621371192;
    }
    else if(from === 'button-kilometer' && to === 'button-centimeter') {
        result = number * 100000;
    }
    else if(from === 'button-kilometer' && to === 'button-meter') {
        result = number * 1000;
    }
    else if(from === 'button-mile' && to === 'button-meter') {
        result = number * 1609.344;
    }
    else if(from === 'button-mile' && to === 'button-kilometer') {
        result = number * 1.609344;
    }
    else if(from === 'button-mile' && to === 'button-centimeter') {
        result = number * 160934.4;
    }
    else if(from === 'button-centimeter' && to === 'button-meter') {
        result = number * 0.000621371192;
    }
    else if(from === 'button-centimeter' && to === 'button-mile') {
        result = number * 0.00000621371192;
    }
    else if(from === 'button-centimeter' && to === 'button-mile') {
        result = number * 0.000621371192;
    }

    return result;
}

    
