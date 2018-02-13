var memes = document.querySelector('.memes');
var memeData = [];
var counter = 0;

function createMeme(){
    var url = document.querySelector('#url');
    var topTxt = document.querySelector('#topTxt');
    var botTxt = document.querySelector('#botTxt');
    memeData.push({
        url: url.value,
        topTxt: topTxt.value,
        botTxt: botTxt.value
    });
    constructMeme()
    url.value = ''
    topTxt.value = ''
    botTxt.value = ''
    counter++
}

function constructMeme(){
    var newMeme = document.createElement("div");
        newMeme.classList.toggle('meme');
        newMeme.addEventListener('click', deleteMeme);
    
    var topTxt = document.createElement("div");
        topTxt.classList.toggle('topTxt');
        topTxt.innerHTML = memeData[counter].topTxt;
        
    var botTxt = document.createElement("div");
        botTxt.classList.toggle('botTxt');
        botTxt.innerHTML = memeData[counter].botTxt;
        
    var memeImg = document.createElement("img")
        memeImg.setAttribute('src', memeData[counter].url);
    
    newMeme.appendChild(topTxt)
    newMeme.appendChild(memeImg)
    newMeme.appendChild(botTxt)
    memes.appendChild(newMeme)
    console.log(memeData)
}

function deleteMeme(e){
    e.target.parentNode.style = 'display: none';
}

document.querySelector('#submit').addEventListener('click', createMeme);