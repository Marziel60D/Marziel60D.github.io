let currentScore = 0;
let playing = false;
let shape1;
let shape2;
const matchBtn = document.getElementById('match');

const shapes = [
    {color: 'red', width: 250, height: 160},
    {color: 'blue', width: 270, height: 190},
    {color: 'yellow', width: 350, height: 270},
    {color: 'green', width: 284, height: 130},
    {color: 'orange', width: 180, height: 320},
    {color: 'violet', width: 290, height: 270},
    {color: 'white', width: 210, height: 310},
    {color: 'brown', width: 250, height: 130},
    {color: 'gray', width: 170, height: 400},
    {color: 'black', width: 340, height: 210},

];


const selectRandomShape = () => {
    const randomNum = Math.floor(Math.random()*shapes.length);
    // console.log(randomNum);
    const randonSelection = shapes[randomNum];
    // console.log(randonSelection);
    return randonSelection;
};

const repeatRandomShape = () => {
    setInterval(() => {
        matchBtn.disabled = false;
        shape1 = selectRandomShape();
        shape2 = selectRandomShape();
        // console.log(shape1);
        // console.log(shape2);
        
        const shape1Styles =`width:${shape1.width+'px'};
                             background:${shape1.color};
                             height:${shape1.height+'px'};`
                             
        document.getElementById('shape1').style.cssText = shape1Styles;

        const shape2Styles =`width:${shape2.width+'px'};
                             background:${shape2.color};
                             height:${shape2.height+'px'};`
                             
        document.getElementById('shape2').style.cssText = shape2Styles;
         
    }, 1000);
};

//start game

document.getElementById('play').onclick = () => {
    playing = true;

    //play btn only press one
    document.getElementById('play').disabled = true;
    repeatRandomShape();
}

//compare
document.getElementById('match').onclick = () => {
    if(playing) {
        matchBtn.disabled = true;
        if(Object.is(shape1, shape2)) {
            currentScore++;
            document.getElementById('score').innerHTML = currentScore;
        } else {
            currentScore--;
            document.getElementById('score').innerHTML = currentScore;
        };
    };
};





