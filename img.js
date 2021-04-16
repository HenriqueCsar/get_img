var request = require('request');

///Pegando fotos

function get_img(url, tipo) {

    request(url, function resultados (error,response, body) {
    if (response.statusCode == 200) {
        const https = body

        //src
        const types = https.indexOf(tipo)


        //htttps pegar de trás para frente o primeiro https
        const httpsv = https.lastIndexOf('https:', types)
        
        //resultado url
        var resultado = https.slice(httpsv,types+4);
        console.log(resultado)
        
    }

    });

}
//Exportar img para importar em outro lugar
exports.get_img = get_img
