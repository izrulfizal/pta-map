

// const marker = new mapboxgl.Marker()
//     .setLngLat([103.0700347, 1.8508956])
//     .addTo(map);




for (const element of data) {
 
    const marker = new mapboxgl.Marker()
    .setLngLat([element.Longitude, element.Latitude])
    .setPopup(new mapboxgl.Popup().setHTML(
        "<div id='markerCont'><center><h3>" + element.Nama + "</h3><hr><p>" + element.Alamat + "<hr>" + element.Telefon + "</p></center></div>"
        ))
    .addTo(map);

}