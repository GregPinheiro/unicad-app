import React from 'react';


const MapIframeMaps = ( { enderecos } ) => {

    const concatpontoDeDestino = enderecos.pontoDestino.replaceAll(' ', "+")

    const concatpontoDePartida = enderecos.pontoPartida.replaceAll(' ', "+")

    // const linkApiGoogle = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyAWVDEgv3WLQHVXtE5uz_RDToF-uMjikls"
    const linkApiGoogle = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyCEDIXzpV_bSBNlha5d6dtmY7BGAww08Mo"

    const linkMontado = linkApiGoogle.concat("&origin=",concatpontoDePartida,"&destination=",concatpontoDeDestino,"&avoid=tolls|highways")

    return (

        <iframe
        width={900}
        height={500}
        frameborder={0}
        src={linkMontado} allowfullscreen>
        </iframe>
    )
}
export default MapIframeMaps