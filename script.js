class Tag{
    constructor(tagName,id,content) {
        this.tagName=tagName,
        this.id = id,
        this.content= content
    }
    insertTag(parentId,tagObj) {
        let tag = document.createElement(tagObj.tagName);
        tag.id = tagObj.id;
        tag.textContent = tagObj.content;
        document.getElementById(parentId).appendChild(tag)
    }

}
let buttonsFromTo = '<ul><li><button type="button" class="buttonix newButton" id="button-meter">Meter</button></li><li><button type="button" class="buttonix newButton" id="button-kilometer">Kilometer</button></li><li><button type="button" class="buttonix newButton" id="button-centimeter">Centimeter</button></li><li><button type="button" class="buttonix newButton" id="button-mile">Mile</button></li></ul>'
document.getElementById('button-length').addEventListener('click', function(){
    document.getElementById('convert-from').innerHTML = "From:"+buttonsFromTo
    
})
document.getElementById("convert-from").addEventListener('click', function(){
    if(event.target.classList.contains('newButton')){
         document.getElementById('convert-to').innerHTML = "To:"+buttonsFromTo
         let whatPickedFrom = event.target.id
         console.log(whatPickedFrom)
    }
        })
    
document.getElementById("convert-to").addEventListener('click', function(){
    if(event.target.classList.contains('newButton')){
        let whatPickedTo = event.target.id;
        console.log(whatPickedTo)
    }
})
document.getElementById("button-convert").addEventListener('click',function(){
    let number = document.getElementById('unit-input').value;
    console.log(number)
})

function convertUnits(from, to, number) {
    let meter= 1;
    let mile = 0.0006213712
    let kilometer = 0.001;
    let centimeter =100
}

