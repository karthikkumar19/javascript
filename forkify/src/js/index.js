import axios from 'axios';

async function getResults(query){
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '462b1cc8d4f2730081462fbc65136320';
    const result = await  axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
    console.log(result.data);
}

getResults('pizza');