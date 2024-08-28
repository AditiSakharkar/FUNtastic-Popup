fetch('https://icanhazdadjoke.com/slack')
.then(data=>data.json())
.then(jokeData =>{
    const joketext=jokeData.attachments[0].text;
    const jokeelement=document.getElementById('jokeelement');
    jokeelement.innerHTML=joketext;

})