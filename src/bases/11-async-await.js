


const getImagen = async () => {

    try {
    
        const apiKey = 'Al2bNvW4WU9inQjXnwTTdDhlkHkR5ikf';

        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        
        const {data} = await resp.json(); 

        const {mp4} = data.images.original.mp4
        
        const img = document.createElement('img');
            
        img.src = mp4;

        document.body.append(img);


        console.log(data);
    } catch(error){
        // Manejo del error
        console.error(error);
    }
}

getImagen();
