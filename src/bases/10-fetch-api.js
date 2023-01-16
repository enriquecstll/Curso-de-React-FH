

const apiKey = 'Al2bNvW4WU9inQjXnwTTdDhlkHkR5ikf';

const httpCode = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

httpCode
    .then(resp => resp.json() )
    .then (({ data }) => {
        console.log(data.images.original.url);
        
        const { url } = data.images.original.url;
        
        const img = document.createElement('img');
        
        img.src = url;

        document.body.append(img);

    })
    .catch( console.warn ); 














