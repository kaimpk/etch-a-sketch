//query selection
const container = document.querySelector('#container');
const button = document.querySelector('#button');
//event function
const hoverEvent = (id) =>{
    event.target.style.backgroundColor = 'orange';
}
//create divs
for (let index = 0; index < 16; index++) {
    
    const newDiv = document.createElement('div');
    newDiv.id = 'div' + index;
    container.appendChild(newDiv);
    newDiv.style.width = `${960/4}px`;
    newDiv.style.height = `${960/4}px`;
    newDiv.style.border  = '1px solid black';
    newDiv.addEventListener('mouseover', hoverEvent);
}
const buttonEvent = () => {
    count = container.childElementCount;
    const inp = prompt('grid number? [1,100]')
    //remove current squares
    for(let i = 0; i <count; i++)
    {
        container.removeChild(container.lastChild);
    }
    //add new divs
    let grids = 960/inp;
    if(inp <= 100){
    console.log(grids)
    for(let i = 0; i < inp*inp; i++){
        const customDiv = document.createElement('div');
        customDiv.id = 'div' + i;
        container.appendChild(customDiv);
        customDiv.style.width = `${grids}px`;
        customDiv.style.height = `${grids}px`;
        customDiv.style.border  = '1px solid black';
        customDiv.style.flex = `0, ${grids}%`
        customDiv.addEventListener('mouseover', hoverEvent);

    }
}
else{
    alert('not a valid grid size.')
}
}


button.addEventListener('click', buttonEvent)



