const apiKey = 'd0f23a8704fbcc46d56c5267873b351b';
const hash = '78af67410226710191c93ec10a1d6655'

export default function getCharacters({limits}) {
    const apiURL = `https://gateway.marvel.com:443/v1/public/characters?limit=${limits}&ts=1&apikey=${apiKey}&hash=${hash}`;
    return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {results} = response.data;

        const data = results.map( res => {
            const {path, extension} = res.thumbnail;
            const {id, name} = res;
            return {path, extension, id, name};
        });

        return data;
      })    
};