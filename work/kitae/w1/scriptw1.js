const styleURL = `positron.json`;
const map1 = new maplibregl.Map({
    container: 'map1',
    style: `positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 4,
    scrollZoom: false,
    dragPan: false
});


const map2 = new maplibregl.Map({
    container: 'map2',
    style: `positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 4,
    scrollZoom: false,
    dragPan: false
});

const map3 = new maplibregl.Map({
    container: 'map3',
    style: `positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 4,
    scrollZoom: false,
    dragPan: false
});

const map4 = new maplibregl.Map({
    container: 'map4',
    style: `positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 4,
    scrollZoom: false,
    dragPan: false
});

const map5 = new maplibregl.Map({
    container: 'map5',
    style: `positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 4,
    scrollZoom: false,
    dragPan: false
});

const map6 = new maplibregl.Map({
    container: 'map6',
    style: `positron.json`,
    center: [-90.3070003, 40.2892984],
    zoom: 4,
    scrollZoom: false,
    dragPan: false
});

const map7 = new maplibregl.Map({
    container: 'map7',
    style: `positron.json`,
    center: [-95.49896976107271, 29.600411958015386],
    zoom: 9,
    scrollZoom: false,
    dragPan: false
});

const map8Left = new maplibregl.Map({
    container: 'map8Left',
    style: `positron_Small.json`,
    center: [-95.80155173605988, 29.403778064902202],
    zoom: 14.5,
    scrollZoom: false,
    dragPan: false,
    interactive: false, 
});

const map8Right = new maplibregl.Map({
    container: 'map8Right',
    style: 'https://api.maptiler.com/maps/hybrid/style.json?key=BGvxuSGUKxhnbxMOYbXV',
    center: [-95.80155173605988, 29.403778064902202],
    zoom: 14.5,
    scrollZoom: false,
    dragPan: false,
    interactive: false, 
});

const maps = [map1, map2,map3, map4, map5, map6];
const zoomLevel = 5;

const bounds = [
    [-120.6069919549103, 25.7269043062651 ], 
    [-65.88793919356102, 51.33690746226263]    
];

maps.forEach((map) => {
    map.fitBounds(bounds, {
        padding: 20,
        animate: false
    });
});

window.addEventListener('resize', () => {
    maps.forEach((map) => {
        map.fitBounds(bounds, {
            padding: 20,
            animate: false
        });
    });
});

const overlaySourceId = 'overlayImage';
const overlayImageUrl = `geo7.png`;
const imageBounds = [
    [-125.09472580225837,49.37458957975434], 
    [-65.72622388033614, 49.37458957975434],   
    [-65.72622388033614, 24.930728914474506], 
    [-125.09472580225837, 24.930728914474506], 
];
function addOverlaySource(map) {
    if (!map.getSource(overlaySourceId)) {
        map.addSource(overlaySourceId, {
            type: 'image',
            url: overlayImageUrl,
            coordinates: imageBounds
        });
    }

    if (!map.getLayer('overlayImageLayer')) {
        map.addLayer({
            id: 'overlayImageLayer',
            type: 'raster',
            source: overlaySourceId,
            paint: {
                'raster-opacity': 0.1, 
                'raster-brightness-min': 0,
                'raster-brightness-max': 1,
                'raster-contrast': 0.7,
                'raster-saturation': 0.5
            }
        });
    }
}

map1.on('load', () => {
    addOverlaySource(map1);
});
map2.on('load', () => {
    addOverlaySource(map2);
});
map3.on('load', () => {
    addOverlaySource(map3);
});
map4.on('load', () => {
    addOverlaySource(map4);
});
map5.on('load', () => {
    addOverlaySource(map5);
});
map6.on('load', () => {
    addOverlaySource(map6);
});


map1.on('load', () => {
    map1.addSource('Target', {
        type: 'geojson',
        data: `Grocery/Target_Location.geojson`
    });
    
    map1.addLayer({
        id: 'Target-Circle-Fill',
        type: 'circle',
        source: 'Target',
        paint: {
            'circle-radius': 1,              
            'circle-color': '#fffff0',       
            'circle-opacity': 1            
        }
    });
    
    map1.addLayer({
        id: 'Target-Circle-Stroke',
        type: 'circle',
        source: 'Target',
        paint: {
            'circle-radius': 2.5,           
            'circle-color': 'rgba(0, 0, 0, 0)',  
            'circle-stroke-width': 0.5,      
            'circle-stroke-color': '#fffff0',  
            'circle-opacity': 0.0,
            'circle-stroke-opacity': 0.5           
        }
    });
    map1.addSource('Trader', {
        type: 'geojson',
        data: `Grocery/Trader_Joe_Location.geojson`
    });

    map1.addLayer({
        id: 'Trader-Circle',
        type: 'circle',
        source: 'Trader',
        paint: {
            'circle-radius': 1,
            'circle-color': '#fffff0',
            'circle-opacity': 1
        }
    });
    map1.addLayer({
        id: 'Trader-Circle-Stroke',
        type: 'circle',
        source: 'Trader',
        paint: {
            'circle-radius': 2.5,            
            'circle-color': 'rgba(0, 0, 0, 0)', 
            'circle-stroke-width': 0.5,     
            'circle-stroke-color': '#fffff0',  
            'circle-opacity': 0.0,
            'circle-stroke-opacity': 0.5           
        }
    });
    map1.addSource('Walmart', {
        type: 'geojson',
        data: `Grocery/Walmart_Location.geojson`
    });

    map1.addLayer({
        id: 'Walmart-Circle',
        type: 'circle',
        source: 'Walmart',
        paint: {
            'circle-radius': 1,
            'circle-color': '#fffff0',
            'circle-opacity': 1
        }
    });
    map1.addLayer({
        id: 'Walmart-Circle-Stroke',
        type: 'circle',
        source: 'Walmart',
        paint: {
            'circle-radius': 2.5,            
            'circle-color': 'rgba(0, 0, 0, 0)', 
            'circle-stroke-width': 0.5,     
            'circle-stroke-color': '#fffff0',  
            'circle-opacity': 0.0,
            'circle-stroke-opacity': 0.5        
        }
    });

    map1.addSource('Whole', {
        type: 'geojson',
        data: `Grocery/Whole_Food_Location.geojson`
    });

    map1.addLayer({
        id: 'Whole-Circle',
        type: 'circle',
        source: 'Whole',
        paint: {
            'circle-radius': 1,
            'circle-color': '#fffff0',
            'circle-opacity': 1
        }
    });
    map1.addLayer({
        id: 'Whole-Circle-Stroke',
        type: 'circle',
        source: 'Whole',
        paint: {
            'circle-radius': 2.5,               
            'circle-color': 'rgba(0, 0, 0, 0)',   
            'circle-stroke-width': 0.5,            
            'circle-stroke-color': '#fffff0',   
            'circle-opacity': 0.0,               
            'circle-stroke-opacity': 0.5    
        }
    });
    map1.addSource('UberEats', {
        type: 'geojson',
        data: `Meal/Uber_Eats_C.json`,

    });
    map1.addLayer({
        id: 'UberEats-Fill',
        type: 'fill',  
        source: 'UberEats',
        paint: {
            'fill-color': '#06c167',    
            'fill-opacity': 0.7         
        }
    });


    map1.addSource('GrubHub', {
        type: 'geojson',
        data: `Meal/Grub_Hub_C.geojson`,

    });
    map1.addLayer({
        id: 'GrubHub-Fill',
        type: 'fill', 
        source: 'GrubHub',
        paint: {
            'fill-color': '#ff8000',    
            'fill-opacity': 0.7        
        }
    });

    map1.addSource('DoorDash', {
        type: 'geojson',
        data: `Meal/Door_Dash_C.geojson`,
    });
    map1.addLayer({
        id: 'DoorDash-Fill',
        type: 'fill', 
        source: 'DoorDash',
        paint: {
            'fill-color': '#EB1700',    
            'fill-opacity': 0.7     
        }
    });
});

map2.on('load', () => {
    
    map2.addSource('UPS', {
        type: 'geojson',
        data: `Package/UPS_Facilities.geojson`
    });

    map2.addLayer({
        id: 'UPS-Circle',
        type: 'circle',
        source: 'UPS',
        paint: {
            'circle-radius': 2,
            'circle-color': '#FFD800',
            'circle-opacity': 0.4
        }
    });

    map2.addSource('Amazon', {
        type: 'geojson',
        data: `Package/Amazon.geojson`
    });

    map2.addLayer({
        id: 'Amazon-Circle',
        type: 'circle',
        source: 'Amazon',
        paint: {
            'circle-radius': 2,
            'circle-color': '#cc0000',
            'circle-opacity': 0.4
        }
    });
});

    map3.on('load', () => {
        map3.addSource('Target', {
            type: 'geojson',
            data: `Grocery/Target_Location.geojson`
        });
        
        map3.addLayer({
            id: 'Target-Circle-Fill',
            type: 'circle',
            source: 'Target',
            paint: {
                'circle-radius': 1,           
                'circle-color': '#cc0000',     
                'circle-opacity': 1           
            }
        });
        
        map3.addLayer({
            id: 'Target-Circle-Stroke',
            type: 'circle',
            source: 'Target',
            paint: {
                'circle-radius': 2.5,          
                'circle-color': 'rgba(0, 0, 0, 0)', 
                'circle-stroke-width': 0.5,      
                'circle-stroke-color': '#cc0000', 
                'circle-opacity': 0.0,
                'circle-stroke-opacity': 0.5          
            }
        });

        map3.addSource('Trader', {
            type: 'geojson',
            data: `Grocery/Trader_Joe_Location.geojson`
        });
    
        map3.addLayer({
            id: 'Trader-Circle',
            type: 'circle',
            source: 'Trader',
            paint: {
                'circle-radius': 1,
                'circle-color': '#ff69b4',
                'circle-opacity': 1
            }
        });

        map3.addLayer({
            id: 'Trader-Circle-Stroke',
            type: 'circle',
            source: 'Trader',
            paint: {
                'circle-radius': 2.5,           
                'circle-color': 'rgba(0, 0, 0, 0)',  
                'circle-stroke-width': 0.5,       
                'circle-stroke-color': '#ff69b4',  
                'circle-opacity': 0.0,
                'circle-stroke-opacity': 0.5          
            }
        });

        map3.addSource('Walmart', {
            type: 'geojson',
            data: `Grocery/Walmart_Location.geojson`
        });
    
        map3.addLayer({
            id: 'Walmart-Circle',
            type: 'circle',
            source: 'Walmart',
            paint: {
                'circle-radius': 1,
                'circle-color': '#ffc220',
                'circle-opacity': 1
            }
        });

        map3.addLayer({
            id: 'Walmart-Circle-Stroke',
            type: 'circle',
            source: 'Walmart',
            paint: {
                'circle-radius': 2.5,           
                'circle-color': 'rgba(0, 0, 0, 0)',  
                'circle-stroke-width': 0.5,     
                'circle-stroke-color': '#ffc220',  
                'circle-opacity': 0.0,
                'circle-stroke-opacity': 0.5         
            }
        });
    
        map3.addSource('Whole', {
            type: 'geojson',
            data: `Grocery/Whole_Food_Location.geojson`
        });
    
        map3.addLayer({
            id: 'Whole-Circle',
            type: 'circle',
            source: 'Whole',
            paint: {
                'circle-radius': 1,
                'circle-color': '#00674b',
                'circle-opacity': 1
            }
        });

        map3.addLayer({
            id: 'Whole-Circle-Stroke',
            type: 'circle',
            source: 'Whole',
            paint: {
                'circle-radius': 2.5,                
                'circle-color': 'rgba(0, 0, 0, 0)',   
                'circle-stroke-width': 0.5,            
                'circle-stroke-color': '#00674b',     
                'circle-opacity': 0.0,               
                'circle-stroke-opacity': 0.5     
            }
        });
    });
   
    map4.on('load', () => {
        map4.addSource('UberEats', {
            type: 'geojson',
            data: `Meal/Uber_Eats_C.json`,

        });
        map4.addLayer({
            id: 'UberEats-Fill',
            type: 'fill',  
            source: 'UberEats',
            paint: {
                'fill-color': '#4CFFB4',   
                'fill-opacity': 0.7       
            }
        });

        map4.addSource('GrubHub', {
            type: 'geojson',
            data: `Meal/Grub_Hub_C.geojson`,

        });
        map4.addLayer({
            id: 'GrubHub-Fill',
            type: 'fill', 
            source: 'GrubHub',
            paint: {
                'fill-color': '#FFA943',   
                'fill-opacity': 0.7       
            }
        });

        map4.addSource('DoorDash', {
            type: 'geojson',
            data: `Meal/Door_Dash_C.geojson`,
        });
        map4.addLayer({
            id: 'DoorDash-Fill',
            type: 'fill',  
            source: 'DoorDash',
            paint: {
                'fill-color': '#EB1700',    
                'fill-opacity': 0.7       
            }
        });
    });
    
    map5.on('load', () => {
        map5.addSource('GM', {
            type: 'geojson',
            data: `Delivery_Desert/GM_P_1.json`,

        });
        map5.addLayer({
            id: 'GM-Fill',
            type: 'fill',  
            source: 'GM',
            layout: {
                'visibility': 'none' 
            },
            paint: {
                'fill-color': '#fffff0',    
                'fill-opacity': 0.6        
            }
        });
    
        map5.addSource('GM2', {
            type: 'geojson',
            data: `Delivery_Desert/GM_P_2.json`,

        });
        map5.addLayer({
            id: 'GM2-Fill',
            type: 'fill',  
            source: 'GM2',
            layout: {
                'visibility': 'none' 
            },
            paint: {
                'fill-color': '#f7cd9b',    
                'fill-opacity': 0.6        
            }
        });
    
       
        map5.addSource('GM3', {
            type: 'geojson',
            data: `Delivery_Desert/GM_P_3.json`,

        });
        map5.addLayer({
            id: 'GM3-Fill',
            type: 'fill', 
            source: 'GM3',
            paint: {
                'fill-color': '#f7941d',    
                'fill-opacity': 0.6         
            }
        });
    });
   
   
    map6.on('load', () => {
        map6.addSource('D_GM', {
            type: 'geojson',
            data: `Delivery_Desert/GM_P_3.json`,

        });

        
        map6.addLayer({
            id: 'D_GM-Fill',
            type: 'fill', 
            source: 'D_GM',
            paint: {
                'fill-color': '#EB1700',   
                'fill-opacity': 0.4        
            }, 
            layout: {
                'visibility': 'visible'   
            }
        });
    
        map6.addLayer({
            id: 'D_GM-Fill-Outline',
            type: 'line',   
            source: 'D_GM',
            paint: {
                'line-color': '#EB1700',   
                'line-width': 2,
                'line-opacity':0             
            },
            layout: {
                'visibility': 'visible'  
            }
        });
        map6.addSource('F_D_GM', {
            type: 'geojson',
            data: `Delivery_Desert/Food_Desert_Grocery,Meal_Sub_Pop_5000Up.geojson`,

        });
        
        map6.addLayer({
            id: 'F_D_GM-Fill-Outline',
            type: 'line',   
            source: 'F_D_GM',
            paint: {
                'line-color': '#f7941d',   
                'line-width': 1,
                'line-opacity':1           
            }
        });

        map6.addLayer({
            id: 'F_D_GM-Fill',
            type: 'fill',  
            source: 'F_D_GM',
            paint: {
                'fill-color': '#f7941d',   
                'fill-opacity': 0.33       
            }
        });

        map6.addSource('F_D_GM_P', {
            type: 'geojson',
            data: `Delivery_Desert/Pick_Food_Desert_Grocery,Meal_Sub_Pop_5000Up.geojson`,

        });
        
        map6.addLayer({
            id: 'F_D_GM_P-Fill-Outline',
            type: 'line',
            source: 'F_D_GM_P',
            paint: {
                'line-color': '#fffff0', 
                'line-width': 8,        
                'line-opacity': 0.3,   
            },
            layout: {
                'line-join': 'round', 
                'line-cap': 'round',
                'visibility': 'none'   
            }
        });

        map6.addLayer({
            id: 'F_D_GM_P-Fill-Outline2',
            type: 'line',
            source: 'F_D_GM_P',
            paint: {
                'line-color': '#fffff0', 
                'line-width': 30,        
                'line-opacity': 0.1,   
                'line-blur': 10 
            },
            layout: {
                'line-join': 'round',  
                'line-cap': 'round',
                'visibility': 'none'  
            }
        });

        map6.addLayer({
            id: 'F_D_GM_P-Fill',
            type: 'fill',
            source: 'F_D_GM_P',
            paint: {
                'fill-color': '#EB1700',
                'fill-opacity': 0.8,   
            },
            layout: {
                'visibility': 'none'   
            }
        });

        map6.addSource('F_D_GM_P_C', {
            type: 'geojson',
            data: `Delivery_Desert/Pick_Center.geojson`,

        });
       
    });

    
    map7.on('load', () => {

        map7.addSource('Rosemeadow', {
            type: 'geojson',
            data: `Delivery_Desert/Rosemeadow.geojson`,
        });
        map7.addSource('UPS_D', {
            type: 'geojson',
            data: `Zoom_in/UPS_Dost.geojson`,
        });
        map7.addSource('UPS_R', {
            type: 'geojson',
            data: `Zoom_in/UPS_Round.geojson`,
        });
        map7.addSource('UPS_L', {
            type: 'geojson',
            data: `Zoom_in/UPS_Line.geojson`,
        });
        map7.addSource('UPS_PD', {
            type: 'geojson',
            data: `Zoom_in/UPS_Pick_Dot.geojson`,
        });
       
    
        map7.addLayer({
            id: 'Rose',
            type: 'fill', 
            source: 'Rosemeadow',
            paint: {
                'fill-color': '#f7941d',    
                'fill-opacity': 0.33         
            }
        });
        
        map7.addLayer({
            id: 'Rose_Border',
            type: 'line', 
            source: 'Rosemeadow',
            paint: {
                'line-color': '#f7941d',      
                'line-width': 5,            
                'line-opacity': 0.9,          
            }
        });
        map7.addLayer({
            id: 'Rose_Round',
            type: 'line',  
            source: 'UPS_R',
            paint: {
                'line-color': '#f7941d',      
                'line-width': 2.5,            
                'line-opacity': 0.9,
                'line-dasharray': [4, 2]         
            }
        });
        map7.addLayer({
            id: 'UPS_L_Line',
            type: 'line',  
            source: 'UPS_L',
            paint: {
                'line-color': '#fffff0',      
                'line-width': 2,             
                'line-opacity': 0.9,        
            }
        });

        map7.on('load', function () {

            const midpoint = [-95.7075526584383, 29.458221026692497];
        
   
            map7.addSource('textLabel', {
                type: 'geojson',
                data: {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": midpoint 
                            },
                            "properties": {
                                "label": "40mi"
                            }
                        }
                    ]
                }
            });
        
            map7.addLayer({
                id: 'lineText',
                type: 'symbol',
                source: 'textLabel',
                layout: {
                    'text-field': ['get', 'label'], 
                    'text-font': ['Arial Unicode MS Bold'], 
                    'text-size': 18, 
                    'text-anchor': 'center', 
                    'text-offset': [0, 1.5], 
                },
                paint: {
                    'text-color': '#fffff0', 
                    'text-halo-color': '#000000', 
                    'text-halo-width': 2 
                }
            }); });

        map7.addLayer({
            id: 'UPS',
            type: 'circle',
            source: 'UPS_D',
            paint: {
                'circle-radius': 3,
                'circle-color': '#fffff0',
                'circle-opacity': 1
            }
        });
        map7.addLayer({
            id: 'UPS_pd',
            type: 'circle',
            source: 'UPS_D',
            paint: {
                'circle-radius': 6,              
                'circle-color': 'rgba(0, 0, 0, 0)', 
                'circle-stroke-color': '#fffff0', 
                'circle-stroke-width': 1,          
                'circle-stroke-opacity': 1  
            }
        });
        

        map7.addSource('HIgh_way', {
            type: 'geojson',
            data: `Zoom_in/map_00.geojson`,
        });
        map7.addSource('HIgh_way2', {
            type: 'geojson',
            data: `Zoom_in/map_11.geojson`,
        });
        map7.addSource('HIgh_way3', {
            type: 'geojson',
            data: `Zoom_in/map_22.geojson`,
        });
    
        map7.addLayer({
            id: 'H_W',
            type: 'line',
            source: 'HIgh_way',
            paint: {
                'line-color': '#f7941d',     
                'line-width': 3,           
                'line-opacity': 0.7,         
            },
            layout: {
                'visibility': 'visible',   
            },
        });
        map7.addLayer({
            id: 'H_W2',
            type: 'line',
            source: 'HIgh_way2',
            paint: {
                'line-color': '#f7941d',     
                'line-width': 3,            
                'line-opacity': 0.7,         
            },
            layout: {
                'visibility': 'visible',    
            },
        });
        map7.addLayer({
            id: 'H_W3',
            type: 'line',
            source: 'HIgh_way3',
            paint: {
                'line-color': '#f7941d',     
                'line-width': 3,            
                'line-opacity': 0.7,           
            },
            layout: {
                'visibility': 'visible',    
            },
        });
    
    
});

map8Left.on('load', () => {

    map8Left.addSource('houses', {
        type: 'geojson',
        data: `houses.geojson`,
    });

    map8Left.addLayer({
        id: 'House',
        type: 'fill',
        source: 'houses',
        paint: {
            'fill-color': '#ffffff', 
            'fill-opacity': 0.7,   
        }
    });
});
    

    const toggleAmazonButton = document.getElementById('toggleAmazon');
    toggleAmazonButton.addEventListener('click', () => {
        const currentVisibility = map2.getLayer('Amazon-Circle') ? map2.getLayer('Amazon-Circle').visibility : 'visible';
        map2.setLayoutProperty('Amazon-Circle', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
    });
    
    const toggleUPSButton = document.getElementById('toggleUPS');
    toggleUPSButton.addEventListener('click', () => {
        const currentVisibility = map2.getLayer('UPS-Circle') ? map2.getLayer('UPS-Circle').visibility : 'visible';
        map2.setLayoutProperty('UPS-Circle', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
    });

    const toggleTargetButton = document.getElementById('toggleTarget');
    toggleTargetButton.addEventListener('click', () => {
        const currentVisibility = map3.getLayer('Target-Circle-Fill') ? map3.getLayer('Target-Circle-Fill').visibility : 'visible';
        map3.setLayoutProperty('Target-Circle-Fill', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
        map3.setLayoutProperty('Target-Circle-Stroke', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
    });

    const toggleTraderButton = document.getElementById('toggleTrader');
    toggleTraderButton.addEventListener('click', () => {
        const currentVisibility = map3.getLayer('Trader-Circle') ? map3.getLayer('Trader-Circle').visibility : 'visible';
        map3.setLayoutProperty('Trader-Circle', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
        map3.setLayoutProperty('Trader-Circle-Stroke', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
    });

    const toggleWalmartButton = document.getElementById('toggleWalmart');
    toggleWalmartButton.addEventListener('click', () => {
        const currentVisibility = map3.getLayer('Walmart-Circle') ? map3.getLayer('Walmart-Circle').visibility : 'visible';
        map3.setLayoutProperty('Walmart-Circle', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
        map3.setLayoutProperty('Walmart-Circle-Stroke', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
    });

    const toggleWholeButton = document.getElementById('toggleWhole');
    toggleWholeButton.addEventListener('click', () => {
        const currentVisibility = map3.getLayer('Whole-Circle') ? map3.getLayer('Whole-Circle').visibility : 'visible';
        map3.setLayoutProperty('Whole-Circle', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
        map3.setLayoutProperty('Whole-Circle-Stroke', 'visibility', currentVisibility === 'visible' ? 'none' : 'visible');
    });

    const toggleDoorDashButton = document.getElementById('toggleDoorDash');
    toggleDoorDashButton.addEventListener('click', () => {
        const currentVisibility = map4.getLayoutProperty('DoorDash-Fill', 'visibility') === 'visible' ? 'visible' : 'none';
        const newVisibility = currentVisibility === 'visible' ? 'none' : 'visible';
        map4.setLayoutProperty('DoorDash-Fill', 'visibility', newVisibility);
        map4.setLayoutProperty('DoorDash-Fill-Outline', 'visibility', newVisibility);
    });

    const toggleGrubHubButton = document.getElementById('toggleGrubHub');
    toggleGrubHubButton.addEventListener('click', () => {
        const currentVisibility = map4.getLayoutProperty('GrubHub-Fill', 'visibility') === 'visible' ? 'visible' : 'none';
        const newVisibility = currentVisibility === 'visible' ? 'none' : 'visible';
        map4.setLayoutProperty('GrubHub-Fill', 'visibility', newVisibility);
        map4.setLayoutProperty('GrubHub-Fill-Outline', 'visibility', newVisibility);
    });

    const toggleUberEatsButton = document.getElementById('toggleUberEats');
    toggleUberEatsButton.addEventListener('click', () => {
        const currentVisibility = map4.getLayoutProperty('UberEats-Fill', 'visibility') === 'visible' ? 'visible' : 'none';
        const newVisibility = currentVisibility === 'visible' ? 'none' : 'visible';
        map4.setLayoutProperty('UberEats-Fill', 'visibility', newVisibility);
        map4.setLayoutProperty('UberEats-Fill-Outline', 'visibility', newVisibility);
    });

    const toggleD_GMButton = document.getElementById('toggleD_GM');
    toggleD_GMButton.addEventListener('click', () => {
        const currentVisibility = map6.getLayoutProperty('D_GM-Fill', 'visibility') === 'visible' ? 'visible' : 'none';
        const newVisibility = currentVisibility === 'visible' ? 'none' : 'visible';
        map6.setLayoutProperty('D_GM-Fill', 'visibility', newVisibility);
        map6.setLayoutProperty('D_GM-Fill-Outline', 'visibility', newVisibility);
    });

    const toggleF_D_GMButton = document.getElementById('toggleF_D_GM');
    toggleF_D_GMButton.addEventListener('click', () => {
        const currentVisibility = map6.getLayoutProperty('F_D_GM-Fill', 'visibility') === 'visible' ? 'visible' : 'none';
        const newVisibility = currentVisibility === 'visible' ? 'none' : 'visible';
        map6.setLayoutProperty('F_D_GM-Fill', 'visibility', newVisibility);
        map6.setLayoutProperty('F_D_GM-Fill-Outline', 'visibility', newVisibility);
    });

    const toggleF_D_GM_PButton = document.getElementById('toggleF_D_GM_P');

toggleF_D_GM_PButton.addEventListener('click', () => {
    const currentVisibility = map6.getLayoutProperty('F_D_GM_P-Fill', 'visibility') === 'visible' ? 'visible' : 'none';

    if (currentVisibility === 'none') {
        let toggleCount = 0;
        const interval = setInterval(() => {
            const visibility = toggleCount % 2 === 0 ? 'visible' : 'none';
            map6.setLayoutProperty('F_D_GM_P-Fill', 'visibility', visibility);
            map6.setLayoutProperty('F_D_GM_P-Fill-Outline', 'visibility', visibility);
            map6.setLayoutProperty('F_D_GM_P-Fill-Outline2', 'visibility', visibility);
            toggleCount++;

            if (toggleCount === 5) { 
                clearInterval(interval);
                map6.setLayoutProperty('F_D_GM_P-Fill', 'visibility', 'visible');
                map6.setLayoutProperty('F_D_GM_P-Fill-Outline', 'visibility', 'visible');
                map6.setLayoutProperty('F_D_GM_P-Fill-Outline2', 'visibility', 'visible');
            }
        }, 150); 
    } else {

        map6.setLayoutProperty('F_D_GM_P-Fill', 'visibility', 'none');
        map6.setLayoutProperty('F_D_GM_P-Fill-Outline', 'visibility', 'none');
        map6.setLayoutProperty('F_D_GM_P-Fill-Outline2', 'visibility', 'none');
    }
});


    const gmSlider = document.getElementById('gm-slider');

gmSlider.value = 3;

gmSlider.addEventListener('input', () => {
    const sliderValue = parseInt(gmSlider.value, 10);


    if (sliderValue === 1) {
        map5.setLayoutProperty('GM-Fill', 'visibility', 'visible');
        map5.setLayoutProperty('GM2-Fill', 'visibility', 'visible');
        map5.setLayoutProperty('GM3-Fill', 'visible');
    } else if (sliderValue === 2) {
        map5.setLayoutProperty('GM-Fill', 'visibility', 'none');
        map5.setLayoutProperty('GM2-Fill', 'visibility', 'visible');
        map5.setLayoutProperty('GM3-Fill', 'visible');
    } else if (sliderValue === 3) {
        map5.setLayoutProperty('GM-Fill', 'visibility', 'none');
        map5.setLayoutProperty('GM2-Fill', 'visibility', 'none');
        map5.setLayoutProperty('GM3-Fill', 'visible');
    }
});



const slider = document.getElementById('map8-slider');
slider.addEventListener('input', () => {
    const sliderValue = slider.value; 
    document.getElementById('map8Left').style.clipPath = `polygon(0% 0%, ${sliderValue}% 0%, ${sliderValue}% 100%, 0% 100%)`;
    document.getElementById('map8Right').style.clipPath = `polygon(${sliderValue}% 0%, 100% 0%, 100% 100%, ${sliderValue}% 100%)`;
});

let scrollPosition = 0;
let currentMap = 1;
const SCROLL_THRESHOLD = 100;

const isScrollEnabled = () => document.body.classList.contains('scroll-enabled');


function goToMap(mapNumber) {
    if (mapNumber >= 1 && mapNumber <= 8) {
        currentMap = mapNumber;
        scrollPosition = 0; 
        updateMaps();
    }
}


function updateMaps() {
    for (let i = 1; i <= 8; i++) {
        const mapDiv = document.getElementById(`map${i}`);
        if (mapDiv) {
            mapDiv.style.opacity = (currentMap === i) ? '1' : '0';
        }

        const textDiv = document.getElementById(`text${i}`);
        if (textDiv) {
            textDiv.style.display = (currentMap === i) ? 'block' : 'none';
        }

        const mapControls = document.getElementById(`map${i}-controls`);
        if (mapControls) {
            mapControls.style.display = (currentMap === i) ? 'block' : 'none';
        }

        const button = document.querySelector(`#map-buttons button:nth-child(${i})`);
if (button) {
    button.style.backgroundColor = (currentMap === i) ? 'rgba(255, 255, 255, 0.5)' : 'transparent';
}
    }

    const map1Controls = document.getElementById('map1-controls');
    if (map1Controls) {
        map1Controls.style.display = 'none';
    }
}

window.addEventListener('wheel', function (event) {
    const iframeBody = document.body;
    const scrollTop = iframeBody.scrollTop;
    const scrollHeight = iframeBody.scrollHeight;
    const clientHeight = iframeBody.clientHeight;

    event.preventDefault();

    event.stopPropagation();

    scrollPosition += event.deltaY;

    if (scrollTop === 0 && event.deltaY < 0 && currentMap === 1) {
        window.parent.postMessage({ type: 'unlockParentScroll' }, '*');
    }

    if (scrollTop + clientHeight >= scrollHeight && event.deltaY > 0 && currentMap === 8) {
        window.parent.postMessage({ type: 'unlockParentScroll' }, '*');
    }
    if (scrollPosition >= SCROLL_THRESHOLD && currentMap < 8) {
        currentMap++;
        scrollPosition = 0;
    } else if (scrollPosition <= -SCROLL_THRESHOLD && currentMap > 1) {
        currentMap--;
        scrollPosition = 0;
    }

    updateMaps();
});

