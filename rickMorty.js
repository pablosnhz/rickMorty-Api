let characters = document.querySelector('#characters');

fetch('https://rickandmortyapi.com/api/character')
    .then( ( resp ) => resp.json() )
    .then( ( data ) => {
        console.log(data.results)
    
        data.results.map( (item) => {
            const content = document.createElement('div')
            content.innerHTML = 
            `
            <img src="${item.image}">
            <h2>${item.name}</h2>
            `;
            characters.append(content)
        } )
    });