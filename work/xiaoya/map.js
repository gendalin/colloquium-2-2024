var smallMedia = window.matchMedia("(max-width: 600px)").matches;

/* Next, create two variables that will hold:
1. The different types of layers available to Mapbox and their
respective opacity attributes.
2. The possible alignments which could be applied to the vignettes.*/

var layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
  heatmap: ["heatmap-opacity"],
};

var alignments = {
  left: "lefty",
  center: "centered",
  right: "righty",
  full: "fully",
};


/* The next two functions help turn on and off individual
layers through their opacity attributes: The first one gets
the type of layer and the second one adjusts the layer's opacity */

function getLayerPaintType(layer) {
  var layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
}

function setLayerOpacity(layer) {
  var paintProps = getLayerPaintType(layer.layer);
  paintProps.forEach(function (prop) {
    var options = {};
    if (layer.duration) {
      var transitionProp = prop + "-transition";
      options = { duration: layer.duration };
      map.setPaintProperty(layer.layer, transitionProp, options);
    }
    map.setPaintProperty(layer.layer, prop, layer.opacity, options);
  });
}

/* Next, these variables and functions create the story and vignette html
elements, and populate them with the content from the config.js file.
They also assign a css class to certain elements, also based on the
config.js file */

// Main 'story', 'features' and 'header' elements
var story = document.getElementById("story");
var features = document.createElement("div");
var header = document.createElement("div");
features.setAttribute("id", "features");

// If the content exists, then assign it to the 'header' element
// Note how each one of these are assigning 'innerHTML'
if (config.topTitle) {
  var topTitle = document.createElement("div");
  topTitle.innerHTML = config.topTitle;
  header.appendChild(topTitle);
}
if (config.title) {
  var titleText = document.createElement("div");
  titleText.innerHTML = config.title;
  header.appendChild(titleText);
}
if (config.subtitle) {
  var subtitleText = document.createElement("div");
  subtitleText.innerHTML = config.subtitle;
  header.appendChild(subtitleText);
}
if (config.byline) {
  var bylineText = document.createElement("div");
  bylineText.innerHTML = config.byline;
  header.appendChild(bylineText);
}
if (config.description) {
  var descriptionText = document.createElement("div");
  descriptionText.innerHTML = config.description;
  header.appendChild(descriptionText);
}

// If after this, the header has anything in it, it gets appended to the story
if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute("id", "header");
  story.appendChild(header);
}

/* After building the elements and assigning content to the header these
functions will loop through the chapters in the config.js file,
create the vignette elements and assign them their respective content */

config.chapters.forEach((record, idx) => {
  /* These first two variables will hold each vignette, the chapter
    element will go in the container element */
  var container = document.createElement("div");
  var chapter = document.createElement("div");
  // Adds a class to the vignette
  chapter.classList.add("br3");
  // Adds all the content to the vignette's div
  chapter.innerHTML = record.chapterDiv;
  // Sets the id for the vignette and adds the step css attribute
  container.setAttribute("id", record.id);
  container.classList.add("step");
  // If the chapter is the first one, set it to active
  if (idx === 0) {
    container.classList.add("active");
  }
  // Adds the overall theme to the chapter element
  chapter.classList.add(config.theme);
  /* Appends the chapter to the container element and the container
    element to the features element */
  container.appendChild(chapter);
  container.classList.add(alignments[record.alignment] || "centered");
  if (record.hidden) {
    container.classList.add("hidden");
  }
  features.appendChild(container);
});

// Appends the features element (with the vignettes) to the story element
story.appendChild(features);

/* Next, this section creates the footer element and assigns it
its content based on the config.js file */

var footer = document.createElement("div");

// This assigns all the content to the footer element
if (config.footer) {
  var footerText = document.createElement("p");
  footerText.innerHTML = config.footer;
  footer.appendChild(footerText);
}
// If the footer element contains any content, add it to the story
if (footer.innerText.length > 0) {
  footer.classList.add(config.theme);
  footer.setAttribute("id", "footer");
  story.appendChild(footer);
}

// Adds the Mapbox access token
mapboxgl.accessToken = config.accessToken;

// Honestly, don't know what this does
const transformRequest = (url) => {
  const hasQuery = url.indexOf("?") !== -1;
  const suffix = hasQuery
    ? "&pluginName=scrollytellingV2"
    : "?pluginName=scrollytellingV2";
  return {
    url: url + suffix,
  };
};

// Creates a variable to hold the starting zoom value
var startingZoom;
// If the screen size is small, it uses the `zoomSmall` value
if (smallMedia) {
  startingZoom = config.chapters[0].location.zoomSmall;
} else {
  startingZoom = config.chapters[0].location.zoom;
}

/* This section creates the map element with the
attributes from the main section of the config.js file */
var map = new mapboxgl.Map({
  container: "map",
  style: config.style,
  center: config.chapters[0].location.center,
  zoom: startingZoom,
  bearing: config.chapters[0].location.bearing,
  pitch: config.chapters[0].location.pitch,
  interactive: false,
  transformRequest: transformRequest,
});

if (config.showMarkers) {
  var marker = new mapboxgl.Marker({ color: config.markerColor });
  marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// Instantiates the scrollama function
var scroller = scrollama();

function updateLegend(items) {
  const legend = document.getElementById("legend");
  

  if (!legend) {
    console.error("Legend container not found!");
    return;
  }
  
  legend.style.display = items.length ? "block" : "none";
  legend.innerHTML = ""; 

  items.forEach(([color, label]) => {
    const legendItem = document.createElement("div");
    legendItem.className = "legend-item";
    legendItem.innerHTML = `
      <div class="legend-color" style="background:${color};"></div>
      <span>${label}</span>
    `;
    legend.appendChild(legendItem);
  });
}


/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters and move the map from one location to another
while changing the zoom level, pitch and bearing */

map.on("load", function () {
  const legendContainer = document.createElement('div');
  legendContainer.className = 'legend-container';
  document.getElementById('map').appendChild(legendContainer);

  legendContainer.innerHTML = `
  <div id="lifeExpectancyStateLegend" class="legend">
    <h4>Life Expectancy by States</h4>
    <div class="legend-item">
      <span style="background: #f0f9e8"></span>74.9 - 76.075
    </div>
    <div class="legend-item">
      <span style="background: #d1edcf"></span>76.075 - 77.9
    </div>
    <div class="legend-item">
      <span style="background: #b1e1bd"></span>77.9 - 78.6
    </div>
    <div class="legend-item">
      <span style="background: #8dd3c2"></span>78.6 - 79
    </div>
    <div class="legend-item">
      <span style="background: #6bc0c6"></span>79 - 79.6
    </div>
    <div class="legend-item">
      <span style="background: #4ba8c9"></span>79.6 - 79.9
    </div>
    <div class="legend-item">
      <span style="background: #2a89bd"></span>79.9 - 80.5
    </div>
    <div class="legend-item">
      <span style="background: #0868ac"></span> > 80.5
    </div>
  </div>

  <div id="coldspotLegend" class="legend">
    <h4>Life Expectancy by Counties</h4>
    <h4>across Coldspot (low value) Cluster</h4>
    <div class="legend-item">
      <span style="background: #b30000"></span>73.2 - 74.1
    </div>
    <div class="legend-item">
      <span style="background: #d33122"></span>74.1 - 74.9
    </div>
    <div class="legend-item">
      <span style="background: #eb6040"></span>74.9 - 75.7
    </div>
    <div class="legend-item">
      <span style="background: #fc8d59"></span>75.7 - 76.6
    </div>
    <div class="legend-item">
      <span style="background: #fdb77a"></span>76.6 - 77.7
    </div>
    <div class="legend-item">
      <span style="background: #fdd8a4"></span>77.7 - 78.0
    </div>
    <div class="legend-item">
      <span style="background: #fef0d9"></span> > 78.0
    </div>
  </div>

  <div id="hotCountyLegend" class="legend">
    <h4>Life Expectancy by Counties</h4>
  <h4>across Hotspot (high value) Cluster</h4>
  <div class="legend-item">
    <span style="background: #f0f9e8; width: 15px; height: 15px; display: inline-block; border: 1px solid #ccc;"></span> 77.1 - 78.1
  </div>
  <div class="legend-item">
    <span style="background: #ccebcb; width: 15px; height: 15px; display: inline-block; border: 1px solid #ccc;"></span> 78.1 - 78.8
  </div>
  <div class="legend-item">
    <span style="background: #7bccc4; width: 15px; height: 15px; display: inline-block; border: 1px solid #ccc;"></span> 78.8 - 79.5
  </div>
  <div class="legend-item">
    <span style="background: #56b0c8; width: 15px; height: 15px; display: inline-block; border: 1px solid #ccc;"></span> 79.5 - 80.2667
  </div>
  <div class="legend-item">
    <span style="background: #2f8fc0; width: 15px; height: 15px; display: inline-block; border: 1px solid #ccc;"></span> 80.2667 - 81.1333
  </div>
  <div class="legend-item">
    <span style="background: #0868ac; width: 15px; height: 15px; display: inline-block; border: 1px solid #ccc;"></span> > 81.1333
  </div>
  </div>

  <div id="stateOutlineLegend" class="legend">
    <h4>State Outline</h4>
  <div class="legend-item">
    <span style="border: 2px dashed black; width: 15px; height: 15px; display: inline-block;"></span> Dashed State Border
  </div>
  </div>

  <div id="Tennessee" class="legend">
    <h4>Life Expectancy by Census Tracts</h4>
    <h4>in Tennessee State</h4>
  <div class="legend-item">
    <span style="background: rgba(229, 229, 229, 1); width: 15px; height: 15px; display: inline-block; border: 1px solid #ccc;"></span> Nan
  </div>
  <div class="legend-item">
    <span style="background: rgba(215, 25, 28, 1); width: 15px; height: 15px; display: inline-block; border: 1px solid #ccc;"></span> 60 - 66
  </div>
  <div class="legend-item">
    <span style="background: rgba(234, 100, 63, 1); width: 15px; height: 15px; display: inline-block; border: 1px solid #ccc;"></span> 66 - 71.2
  </div>
  <div class="legend-item">
    <span style="background: rgba(253, 174, 97, 1); width: 15px; height: 15px; display: inline-block; border: 1px solid #ccc;"></span> 71.2 - 72.9
  </div>
  <div class="legend-item">
    <span style="background: rgba(254, 215, 144, 1); width: 15px; height: 15px; display: inline-block; border: 1px solid #ccc;"></span> 72.9 - 74.39
  </div>
  <div class="legend-item">
    <span style="background: rgba(255, 255, 191, 1); width: 15px; height: 15px; display: inline-block; border: 1px solid #ccc;"></span> 74.39 - 75.4111
  </div>
  <div class="legend-item">
    <span style="background: rgba(213, 236, 212, 1); width: 15px; height: 15px; display: inline-block; border: 1px solid #ccc;"></span> 75.4111 - 76.4
  </div>
  <div class="legend-item">
    <span style="background: rgba(171, 217, 233, 1); width: 15px; height: 15px; display: inline-block; border: 1px solid #ccc;"></span> 76.4 - 77.5
  </div>
  <div class="legend-item">
    <span style="background: rgba(107, 170, 208, 1); width: 15px; height: 15px; display: inline-block; border: 1px solid #ccc;"></span> 77.5 - 79.5
  </div>
  <div class="legend-item">
    <span style="background: rgba(44, 123, 182, 1); width: 15px; height: 15px; display: inline-block; border: 1px solid #ccc;"></span> > 79.5
  </div>
  <h4>County Outline</h4>
  <div class="legend-item">
    <span style="border: 2px dashed black; width: 15px; height: 15px; display: inline-block;"></span> Dashed County Border
  </div>
  </div>

  <div id="Census tracts clusters" class="legend">
  <h4>Hotspot (high-high) Census Tracts</h4>
  <div class="legend-item">
    <span style="background: #2b70b1 ;opacity:0.8"></span>
  </div>
  <h4>Coldspot (low-low) Census Tracts</h4>
  <div class="legend-item">
    <span style="background: #d33122 ;opacity:0.8"></span>
  </div>
  <h4>Normal Census Tracts</h4>
  <div class="legend-item">
    <span style="background: rgba(229, 229, 229, 1)"></span>
  </div>
    <h4>County Outline</h4>
  <div class="legend-item">
    <span style="border: 2px dashed black; width: 15px; height: 15px; display: inline-block;"></span> Dashed County Border
  </div>
  </div>
`;

  // Add 3d terrain if necessary
  if (config.use3dTerrain) {
    map.addSource("mapbox-dem", {
      type: "raster-dem",
      url: "mapbox://mapbox.mapbox-terrain-dem-v1",
      tileSize: 512,
      maxzoom: 14,
    });
    // Add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

    // Add a sky layer that will show when the map is highly pitched
    map.addLayer({
      id: "sky",
      type: "sky",
      paint: {
        "sky-type": "atmosphere",
        "sky-atmosphere-sun": [0.0, 0.0],
        "sky-atmosphere-sun-intensity": 15,
      },
    });
  }
  map.addLayer(
    {
      id: "State_life",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/states_life.geojson",
      },
      paint: {
        'fill-opacity':0,
            'fill-color': ['step', ['get', 'Life expectancy'],
                '#ffffff',
                74.9, '#f0f9e8',
                76.075, '#d1edcf',
                77.9, '#b1e1bd',
                78.6, '#8dd3c2',
                79, '#6bc0c6',
                79.6,'#4ba8c9',
                79.9,'#2a89bd',
                80.5,'#0868ac'
            ],
            'fill-outline-color': 'white',
      },
    },
    "airport-label"
  );
  // map.addLayer(
  //   {
  //     id: "cluster of low value",
  //     type: "fill",
  //     source: {
  //       type: "geojson",
  //       data: "data/coldspotstate.geojson",
  //     },
  //     'paint': {
  //       'fill-opacity':0,
  //           'fill-color': '#d33122',
  //           'fill-outline-color': 'white',
  //       }
  //   },
  //   "natural-point-label"
  // );
  // map.addLayer(
  //   {
  //     id: "cluster of high value",
  //     type: "fill",
  //     source: {
  //       type: "geojson",
  //       data: "data/hotspot_east.geojson",
  //     },
  //     'paint': {
  //       'fill-opacity':0,
  //           'fill-color': '#2b70b1',
  //           'fill-outline-color': 'white',
  //       }
  //   },
  //   "water-point-label"
  // );
  // map.addLayer(
  //   {
  //     id: "normal state",
  //     type: "fill",
  //     source: {
  //       type: "geojson",
  //       data: "data/normal_state.geojson",
  //     },
  //     'paint': {
  //       'fill-opacity':0,
  //       'fill-color': '#e5e5e5',
  //       'fill-outline-color': 'white',
  //       }
  //   },
  //   "waterway-label"
  // );
  map.addLayer(
    {
      id: "State_life_outline",
      type: "line",
      source: {
        type: "geojson",
        data: "data/states_life.geojson",
      },
      paint: {
        'line-opacity':0,
        'line-color': 'white', 
        'line-width':1.2, 
      },
    },
    "poi-label"
  );
  map.addLayer(
    {
      id: "hot_county",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/hot_county.geojson",
      },
      'paint': {
        'fill-opacity':0,
            'fill-color': ['step', ['get', 'County Value'],
                '#e5e5e5',
                77.1, '#f0f9e8',
                78.1, '#ccebcb',
                78.8, '#7bccc4',
                79.5, '#56b0c8',
                80.2667, '#2f8fc0',
                81.1333,'#0868ac'
            ],
            'fill-outline-color': 'white',
        }
    },
    "admin-0-boundary-disputed"
  );
  map.addLayer(
    {
      id: "cold_county",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/cold_county.geojson",
      },
      'paint': {
        'fill-opacity':0,
            'fill-color': 
            ['case', 
            ['boolean', ['==', ['get', 'County Value'], null], true],
            '#e5e5e5',['step', ['get', 'County Value'],
                '#e5e5e5',
                0, '#b30000',
                73.2, '#d33122',
                74.1, '#eb6040',
                74.9, '#fc8d59',
                75.7, '#fdb77a',
                76.6,'#fdd8a4',
                77.7,'#fef0d9',
            ],],
            'fill-outline-color': 'white',
        }
    },
    "admin-0-boundary"
  );
  map.addLayer(
    {
      id: "State_life_outline2",
      type: "line",
      source: {
        type: "geojson",
        data: "data/states_life.geojson",
      },
      paint: {
        'line-opacity':0,
        'line-color': 'black', 
        'line-width':1.1, 
        'line-dasharray': [4, 4],
      },
    },
    "road-label-simple"
  );
  map.addLayer(
    {
      id: "county_outline",
      type: "line",
      source: {
        type: "geojson",
        data: "data/tennessee_county.geojson",
      },
      paint: {
        'line-opacity':0,
        'line-color': 'black', 
        'line-width':1.1, 
        'line-dasharray': [4, 4],
      },
    },
    "admin-1-boundary"
  );


  map.addLayer(
    {
      id: "tennessee1",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/Tennessee_shape1.geojson",
      },
      'paint': {
        'fill-opacity':0,
            'fill-color': [
            'step', 
            ["number", ["coalesce", ["get", "Life Expectancy"], 0]], 
            ["rgba", 229, 229, 229, 1], 
            60, ["rgba", 215, 25, 28, 1],
            66, ["rgba", 234, 100, 63, 1],
            71.2, ["rgba", 253, 174, 97, 1],
            72.9, ["rgba", 254, 215, 144, 1],
            74.39, ["rgba", 255, 255, 191, 1],
            75.4111, ["rgba", 213, 236, 212, 1],
            76.4, ["rgba", 171, 217,233, 1],
            77.5, ["rgba", 107, 170, 208, 1],
            79.5, ["rgba", 44, 123, 182, 1]
            ],
            'fill-outline-color': 'white',
        }
    },
    "admin-0-boundary-bg"
  );
  map.addLayer(
    {
      id: "tennessee2",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/Tennessee_shape2.geojson",
      },
      'paint': {
        'fill-opacity':0,
            'fill-color': [
            'step', 
            ["number", ["coalesce", ["get", "Life Expectancy"], 0]], 
            ["rgba", 229, 229, 229, 1], 
            60, ["rgba", 215, 25, 28, 1],
            66, ["rgba", 234, 100, 63, 1],
            71.2, ["rgba", 253, 174, 97, 1],
            72.9, ["rgba", 254, 215, 144, 1],
            74.39, ["rgba", 255, 255, 191, 1],
            75.4111, ["rgba", 213, 236, 212, 1],
            76.4, ["rgba", 171, 217,233, 1],
            77.5, ["rgba", 107, 170, 208, 1],
            79.5, ["rgba", 44, 123, 182, 1]
            ],
            'fill-outline-color': 'white',
        }
    },
    "admin-1-boundary-bg"
  );
  map.addLayer(
    {
      id: "hot_census",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/hotspot.geojson",
      },
      'paint': {
        'fill-opacity':0,
        'fill-color':'#2b70b1' ,
        'fill-outline-color': 'white',
        }
    },
    "bridge-rail-tracks"
  );
  map.addLayer(
    {
      id: "cold_census",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/coldspot.geojson",
      },
      'paint': {
        'fill-opacity':0,
        'fill-color':'#d33122' ,
        'fill-outline-color': 'white',
        }
    },
    "bridge-rail"
  );
  map.addLayer(
    {
      id: "hotspot selected1",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/hotspot_select1.geojson",
      },
      'paint': {
        'fill-opacity':0,
        'fill-color':'#2b70b1' ,
        'fill-outline-color': 'white',
        }
    },
    "bridge-case-simple"
  );
  map.addLayer(
    {
      id: "coldspot selected1",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/coldspot_select1.geojson",
      },
      'paint': {
        'fill-opacity':0,
        'fill-color':'#d33122' ,
        'fill-outline-color': 'white',
        }
    },
    "bridge-pedestrian"
  );


  map.addLayer(
    {
      id: "census tracts outline",
      type: "line",
      source: {
        type: "geojson",
        data: "data/Tennessee_life.geojson",
      },
      paint: {
        'line-opacity':0,
        'line-color': 'white', 
        'line-width':1.1, 
      },
    },
    "road-rail-tracks"
  );
  map.addLayer(
    {
      id: "census tracts line1",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/tennessee_shape1.geojson",
      },
      'paint': {
        'fill-opacity':0,
        'fill-color': '#e5e5e5',
        'fill-outline-color': 'white',
        },
    },
    "road-rail"
  );
  map.addLayer(
    {
      id: "census tracts line2",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/tennessee_shape2.geojson",
      },
      'paint': {
        'fill-opacity':0,
        'fill-color': '#e5e5e5',
        'fill-outline-color': 'white',
        },
    },
    "road-simple"
  );

  // Setup the instance, pass callback functions
  scroller
    .setup({
      step: ".step",
      offset: 0.75,
      progress: true,
    })
    .onStepEnter((response) => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.add("active");
      let thisZoom;
      if (smallMedia) {
        thisZoom = chapter.location.zoomSmall;
      } else {
        thisZoom = chapter.location.zoom;
      }
      thisLocation = {
        bearing: chapter.location.bearing,
        center: chapter.location.center,
        pitch: chapter.location.pitch,
        zoom: thisZoom,
      };
      map[chapter.mapAnimation || "flyTo"](thisLocation);
      if (config.showMarkers) {
        marker.setLngLat(chapter.location.center);
      }
      if (chapter.onChapterEnter.length > 0) {
        chapter.onChapterEnter.forEach((action) => {
          if (typeof action === "function") {
            action(); 
          } else {
            setLayerOpacity(action); 
          }
        });
      }
      if (chapter.callback) {
        window[chapter.callback]();
      }
      if (chapter.rotateAnimation) {
        map.once("moveend", function () {
          const rotateNumber = map.getBearing();
          map.rotateTo(rotateNumber + 90, {
            duration: 24000,
            easing: function (t) {
              return t;
            },
          });
        });
      }
    })
    .onStepExit((response) => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.remove("active");
      if (chapter.onChapterExit.length > 0) {
        chapter.onChapterExit.forEach((action) => {
          if (typeof action === "function") {
            action(); 
          } else {
            setLayerOpacity(action);
          }
        });
      }
    });
});

/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
window.addEventListener("resize", scroller.resize);