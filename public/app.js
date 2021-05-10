const inputWord = document.getElementById('inputWord');
const search = document.getElementById('search');
const meaning = document.querySelector('.meaning');

search.addEventListener('click',(e)=>{
    e.preventDefault();
    getData(inputWord.value);
})

async function getData(word){
    meaning.innerHTML="";
    const resp = await fetch(`/${word}`)
    const respData = await resp.json();
    respData.definitions.map((def, index) => {
        const definition = document.createElement('div');
        definition.classList.add('definition');
        console.log(index)
        const p = document.createElement('p');
        p.innerHTML = `${index+1}. ${def.definition}`;


        definition.appendChild(p);

        meaning.appendChild(definition);
    })
}
