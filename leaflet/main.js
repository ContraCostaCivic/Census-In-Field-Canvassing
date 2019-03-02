window.onload = function() {
  var states = [
    {
      type: 'Feature',
      properties: { adopted: false, block: 'Adopted', language: 'Spanish', popupContent: "Adopt this block!", },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-122.347359, 37.923828],
            [-122.346709, 37.924044],
            [-122.346089, 37.923562],
            [-122.346371, 37.92341],
            [-122.346789, 37.92373],
            [-122.347040, 37.923530],
          ]
        ]
      }
    },
    {
      type: 'Feature',
      properties: { adopted: true, block: 'Unadopted', language: 'English', popupContent: "This block has been adopted",  },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-122.347504, 37.925055],
            [-122.346756, 37.925055],
            [-122.346748, 37.924188],
            [-122.347515, 37.923964],
          ]
        ]
      }
    }
  ];

  var mymap = L.map('mapid').setView([37.923854, -122.34712], 17);


  function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent && !feature.properties.adopted) {
        layer.bindPopup(`Language: ${feature.properties.language} <br /> ${feature.properties.popupContent} <br /> <form><button>Adopt</button></form> `);
    }
    if (feature.properties && feature.properties.popupContent && feature.properties.adopted) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }




  L.geoJSON(states, {
    style: function(feature) {
      switch (feature.properties.block) {
        case 'Adopted':
          return { color: '#ff0000' };
        case 'Unadopted':
          return { color: '#0000ff' };
      }
    }, 
    onEachFeature: onEachFeature,
  }).addTo(mymap);

  L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
    {
      maxZoom: 18,
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox.streets'
    }
  ).addTo(mymap);
};
