let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
let result = document.getElementById('result');
let sound = document.getElementById('sound');
let search = document.getElementById('search');

search.addEventListener('click', ()=>{
    let inputWord = document.getElementById('inputWord').value;
    console.log(inputWord);

    fetch(`${url}${inputWord}`).then((value)=>{
        return value.json()
    }).then((data)=>{
        console.log(data);

        result.innerHTML = `
            <div class="lowerSample">
                            <div>
                                <h1>${inputWord}</h1>
                                <i class="fa-solid fa-volume-high" id="playSound"></i>
                            </div>
                            <p id="sampleFade">${data[0].meanings[0].partOfSpeech} / ${data[0].phonetics[0].text}</p>
                        </div>
                        <div class="description">
                            <p>
                                ${data[0].meanings[0].definitions[0].definition}
                            </p>
                        </div>
                        <div class="descriptionLower">
                            <p>
                                ${data[0].meanings[0].definitions[0].example || "Example not found"}
                            </p>
                        </div>
    `

    let playSound = document.getElementById('playSound');
                    playSound.addEventListener('click', () => {
                        let audio = new Audio(data[0].phonetics[0].audio);
                        audio.play();
                    });
    })
})
