import axios from 'axios';
import cheerio from 'cheerio';

// url: "https://www.idealista.com/alquiler-viviendas/santa-cruz-de-tenerife/tenerife/"
// url: "https://www.tucasa.com/alquiler/viviendas/s.c.-tenerife/s.-c.-tenerife/?r=&idz=0038.0001.9999.0001"
// url: "https://www.fotocasa.es/es/alquiler/viviendas/santa-cruz-de-tenerife-provincia/tenerife/l"
// url: "https://www.properstar.es/espana/santa-cruz-de-tenerife/alquiler/casa"

try {
    const idealistaResponse = await axios.request({
        method: "GET",
        headers: {
            "Referrer-Policy": "strict-origin-when-cross-origin",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36"
        },
        url: "https://www.kyero.com/es/santa-cruz-de-tenerife-propiedad-larga-duración-1l49704"

    })
    console.log(idealistaResponse)
    console.log("SUCCESS: Request fullfilled")
} catch (err) {
    console.log('ERROR: Failed to load website')
    console.log(err)
}


