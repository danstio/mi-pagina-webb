// Inicializar el mapa
var map = L.map('map').setView([20.0, 0.0], 2);  // Coordenadas iniciales y zoom

// Agregar la capa del mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Ejemplo de datos de aeropuertos y destinos
var aeropuertos = [
    {
        nombre: "Aeropuerto de Tenerife Norte",
        lat: 28.484832205780926,
        lng: -16.342594718232267,
        destinos: ["Aeropuerto de Sevilla", "Aeropuerto de Asturias", "Aeropuerto de Murcia", "Aeropuerto de Santander", "Aeropuerto de Sevilla", "Aeropuerto de Málaga-Costa del Sol", "Aeropuerto de Barcelona-El Prat", "Aeropuerto Adolfo Suárez Madrid-Barajas", "Aeropuerto de Funchal (Madeira)", "Aeropuerto de El Hierro", "Aeropuerto de La Gomera", "Aeropuerto de La Palma", "Aeropuerto de Fuerteventura", "Aeropuerto de Lanzarote", "Aeropuerto de Gran Canaria"]
    },
    {
        nombre: "Aeropuerto de La Palma", 
        lat: 28.6264718915973,
        lng: -17.75436448939342,
        destinos: ["Aeropuerto Adolfo Suárez Madrid-Barajas", "Aeropuerto de Gran Canaria", "Aeropuerto de Tenerife Norte", "Aeropuerto de Tenerife Sur", "Aeropuerto de Fuerteventura", "Aeropuerto de Lanzarote"]
    },
    {
        nombre: "Aeropuerto de La Gomera", 
        lat: 28.03199981828642,
        lng: -17.211976670819396,
        destinos: ["Aeropuerto de Tenerife Norte", "Aeropuerto de Gran Canaria"]
    },
    {
        nombre: "Aeropuerto de Tenerife Sur", 
        lat: 28.047003666754375,
        lng: -16.572626862871573,
        destinos: ["Aeropuerto Adolfo Suárez Madrid-Barajas", "Aeropuerto de La Palma", "Aeropuerto de Gran Canaria", "Aeropuerto de Fuerteventura", "Aeropuerto de Lanzarote"]
    },
    {
        nombre: "Aeropuerto de El Hierro", 
        lat: 27.814294718975663,
        lng: -17.88475042664708,
        destinos: ["Aeropuerto de Tenerife Norte", "Aeropuerto de Gran Canaria"]
    },
    {
        nombre: "Aeropuerto de Lanzarote", 
        lat: 28.95149180090967,
        lng: -13.60870577264444,
        destinos: ["Aeropuerto de Ponta Delgada", "Aeropuerto de Menorca", "Aeropuerto de Asturias", "Aeropuerto Adolfo Suárez Madrid-Barajas", "Aeropuerto de Barcelona-El Prat", "Aeropuerto de Funchal (Madeira)", "Aeropuerto de Tenerife Norte", "Aeropuerto de La Palma", "Aeropuerto de Gran Canaria", "Aeropuerto de Lanzarote", "Aeropuerto de Tenerife Sur"]
    },
    {
        nombre: "Aeropuerto de Fuerteventura", 
        lat: 28.448300513035083,
        lng: -13.86602715636794,
        destinos: ["Aeropuerto de Ibiza", "Aeropuerto de Santiago de Compostela","Aeropuerto de Barcelona-El Prat", "Aeropuerto Adolfo Suárez Madrid-Barajas", "Aeropuerto de Funchal (Madeira)", "Aeropuerto de Tenerife Norte", "Aeropuerto de Tenerife Sur", "Aeropuerto de Gran Canaria", "Aeropuerto de La Palma"]
    },
    {
        nombre: "Aeropuerto de Gran Canaria", 
        lat: 27.9293140473848,
        lng: -15.387032984315303,
        destinos: ["Aeropuerto de Valencia", "Aeropuerto de Jerez", "Aeropuerto de Málaga-Costa del Sol", "Aeropuerto de Sevilla", "Aeropuerto de Bilbao", "Aeropuerto de Barcelona-El Prat", "Aeropuerto Adolfo Suárez Madrid-Barajas", "Aeropuerto de Palma de Mallorca", "Aeropuerto de Funchal (Madeira)", "Aeropuerto de La Gomera", "Aeropuerto de El Hierro", "Aeropuerto de Fuerteventura", "Aeropuerto de Tenerife Sur", "Aeropuerto de Tenerife Norte", "Aeropuerto de Lanzarote", "Aeropuerto de La Palma"]
    },
    {
        nombre: "Aeropuerto Adolfo Suárez Madrid-Barajas",
        lat: 40.4720242,
        lng: -3.5604693,
        destinos: ["Aeropuerto de La Seu d'Urgell", "Aeropuerto de Santiago de Compostela", "Aeropuerto de Coruña","Aeropuerto de Málaga-Costa del Sol", "Aeropuerto de Melilla", "Aeropuerto de Palma de Mallorca", "Aeropuerto de Bilbao", "Aeropuerto de Barcelona-El Prat", "Aeropuerto de Ibiza", "Aeropuerto de Granada", "Aeropuerto de Pamplona", "Aeropuerto de Almería", "Aeropuerto de Alicante-Elche", "Aeropuerto de La Palma", "Aeropuerto de Gran Canaria", "Aeropuerto de Tenerife Sur", "Aeropuerto de Funchal (Madeira)", "Aeropuerto de Lisboa", "Aeropuerto de Oporto (Francisco Sá Carneiro)", "Aeropuerto de Tenerife Norte", "Aeropuerto de Lanzarote", "Aeropuerto de Fuerteventura"]
    },
    {
        nombre: "Aeropuerto de Barcelona-El Prat",
        lat: 41.297445,
        lng: 2.0832941,
        destinos: ["Aeropuerto de Melilla", "Aeropuerto de Vigo", "Aeropuerto de Málaga-Costa del Sol", "Aeropuerto Adolfo Suárez Madrid-Barajas", "Aeropuerto de Sevilla", "Aeropuerto de Palma de Mallorca", "Aeropuerto de Ibiza", "Aeropuerto de Valencia", "Aeropuerto de Fuerteventura", "Aeropuerto de Lanzarote", "Aeropuerto de Barcelona", "Aeropuerto de Tenerife Norte", "Aeropuerto de Lisboa", "Aeropuerto de Oporto (Francisco Sá Carneiro)", "Aeropuerto de Gran Canaria"]
    },
    {
        nombre: "Aeropuerto de Málaga-Costa del Sol",
        lat: 36.6749,
        lng: -4.4994,
        destinos: ["Aeropuerto Adolfo Suárez Madrid-Barajas", "Aeropuerto de Melilla", "Aeropuerto de Palma de Mallorca", "Aeropuerto de Barcelona-El Prat", "Aeropuerto de Valencia", "Aeropuerto de Gran Canaria", "Aeropuerto de Tenerife Norte"]
    },
    {
        nombre: "Aeropuerto de Valencia",
        lat: 39.489314,
        lng: -0.481624,
        destinos: ["Aeropuerto Adolfo Suárez Madrid-Barajas", "Aeropuerto de Palma de Mallorca", "Aeropuerto de Bilbao", "Aeropuerto de Ibiza", "Aeropuerto de Barcelona-El Prat", "Aeropuerto de Málaga-Costa del Sol", "Aeropuerto de Gran Canaria"]
    },
    {
        nombre: "Aeropuerto de Alicante-Elche",
        lat: 38.282198,
        lng: -0.558156,
        destinos: ["Aeropuerto Adolfo Suárez Madrid-Barajas",]
    },
    {
        nombre: "Aeropuerto de Sevilla",
        lat: 37.417942,
        lng: -5.898578,
        destinos: ["Aeropuerto de Tenerife Norte", "Aeropuerto de Palma de Mallorca", "Aeropuerto de Barcelona-El Prat", "Aeropuerto de Gran Canaria"]
    },
    {
        nombre: "Aeropuerto de Almería",
        lat: 36.84496147696315,
        lng:  -2.370430187750588,
        destinos: ["Aeropuerto Adolfo Suárez Madrid-Barajas", "Aeropuerto de Gran Canaria"]
    },
    {
        nombre: "Aeropuerto de Bilbao",
        lat: 43.301097,
        lng: -2.910608,
        destinos: ["Aeropuerto Adolfo Suárez Madrid-Barajas", "Aeropuerto de Palma de Mallorca", "Aeropuerto de Valencia", "Aeropuerto de Gran Canaria"]
    },
    {
        nombre: "Aeropuerto de Ibiza",
        lat: 38.873383,
        lng: 1.383634,
        destinos: ["Aeropuerto de Palma de Mallorca", "Aeropuerto Adolfo Suárez Madrid-Barajas", "Aeropuerto de Barcelona-El Prat", "Aeropuerto de Valencia", "Aeropuerto de Fuerteventura"]
    },
    {
        nombre: "Aeropuerto de Palma de Mallorca",
        lat: 39.548058,
        lng: 2.733491,
        destinos: ["Aeropuerto de Gran Canaria", "Aeropuerto de Zaragoza", "Aeropuerto de Sevilla", "Aeropuerto de Santiago de Compostela", "Aeropuerto de Málaga-Costa del Sol", "Aeropuerto Adolfo Suárez Madrid-Barajas", "Aeropuerto de Menorca", "Aeropuerto de Santiago de Compostela", "Aeropuerto de Sevilla", "Aeropuerto de Bilbao", "Aeropuerto de Barcelona-El Prat", "Aeropuerto de Ibiza", "Aeropuerto de Valencia", "Aeropuerto de Granada",]
    },
    {
        nombre: "Aeropuerto de Menorca",
        lat: 39.862598,
        lng: 4.218647,
        destinos: ["Aeropuerto de Lanzarote", "Aeropuerto de Palma de Mallorca"]
    },
    {
        nombre: "Aeropuerto de Santiago de Compostela",
        lat: 42.897057,
        lng: -8.415684,
        destinos: ["Aeropuerto de Palma de Mallorca", "Aeropuerto de Fuerteventura", "Aeropuerto Adolfo Suárez Madrid-Barajas",]
    },
    {
        nombre: "Aeropuerto de Zaragoza",
        lat: 41.666242,
        lng: -1.041549,
        destinos: ["Aeropuerto de Palma de Mallorca",]
    },
    {
        nombre: "Aeropuerto de Pamplona",
        lat: 42.76781002314136,
        lng: -1.6392573047271521,
        destinos: ["Aeropuerto Adolfo Suárez Madrid-Barajas"]
    },
    {
        nombre: "Aeropuerto de Lisboa",
        lat: 38.7742,
        lng: -9.1342,
        destinos: ["Aeropuerto Adolfo Suárez Madrid-Barajas", "Aeropuerto de Barcelona-El Prat"]
    },
    {
        nombre: "Aeropuerto de Oporto (Francisco Sá Carneiro)",
        lat: 41.2421,
        lng: -8.6789,
        destinos: ["Aeropuerto de Barcelona-El Prat", "Aeropuerto Adolfo Suárez Madrid-Barajas",]
    },
    {
        nombre: "Aeropuerto de Faro",
        lat: 37.0144,
        lng: -7.9659,
        destinos: []
    },
    {
        nombre: "Aeropuerto de Jerez",
        lat: 36.7441383492802,
        lng: -6.06519075878044,
        destinos: ["Aeropuerto de Gran Canaria"]
    },
    {
        nombre: "Aeropuerto de Funchal (Madeira)",
        lat: 32.6979,
        lng: -16.7745,
        destinos: ["Aeropuerto de Tenerife Norte", "Aeropuerto de Gran Canaria", "Aeropuerto de Fuerteventura", "Aeropuerto de Lanzarote", "Aeropuerto Adolfo Suárez Madrid-Barajas"]
    },
    {
        nombre: "Aeropuerto de Asturias",
        lat: 43.562530184093525,
        lng: -6.0332939549725015,
        destinos: ["Aeropuerto de Lanzarote", "Aeropuerto de Tenerife Norte"]
    },
    {
        nombre: "Aeropuerto de Granada",
        lat: 37.187916716468244,
        lng: -3.7779569030810887,
        destinos: ["Aeropuerto Adolfo Suárez Madrid-Barajas", "Aeropuerto de Palma de Mallorca"]
    },
    {
        nombre: "Aeropuerto de Vigo",
        lat: 42.22562004842433,
        lng: -8.632793318241442,
        destinos: ["Aeropuerto de Barcelona-El Prat"]
    },
    {
        nombre: "Aeropuerto de Ponta Delgada",
        lat: 37.77673925982745,
        lng: -25.70512085684133,
        destinos: ["Aeropuerto de Lanzarote"]
    },
    {
        nombre: "Aeropuerto de Melilla",
        lat: 35.27991304930891,
        lng: -2.956859803144096,
        destinos: ["Aeropuerto de Barcelona-El Prat", "Aeropuerto de Málaga-Costa del Sol", "Aeropuerto Adolfo Suárez Madrid-Barajas"]


    },
    {
        nombre: "Aeropuerto de Santander",
        lat: 43.426488984887285,
        lng: -3.8210682740172524,
        destinos: ["Aeropuerto de Tenerife Norte"]

        
    },
    {
        nombre: "Aeropuerto de Murcia",
        lat: 37.80462935655791,
        lng: -1.1313311030600506,
        destinos: ["Aeropuerto de Tenerife Norte"]

        
    },
    {
        nombre: "Aeropuerto de Coruña",
        lat: 43.301393714845986,
        lng: -8.37874848751561,
        destinos: ["Aeropuerto Adolfo Suárez Madrid-Barajas"]

        
    },
    {
        nombre: "Aeropuerto de La Seu d'Urgell",
        lat: 42.337983181282354,
        lng: 1.4058155087497097,
        destinos: ["Aeropuerto Adolfo Suárez Madrid-Barajas"]

        
    },
];

// Crear una capa para las líneas
var linesLayer = L.layerGroup().addTo(map);

// Crear un mapa de aeropuertos para acceder fácilmente por nombre
var aeropuertosMap = {};
aeropuertos.forEach(function(aeropuerto) {
    aeropuertosMap[aeropuerto.nombre] = aeropuerto;
});

// Define un ícono personalizado
var customIcon = L.icon({
    iconUrl: 'https://imgur.com/a/oicQ7An', // Cambia esta ruta por la ruta a tu imagen
    iconSize: [32, 32], // Tamaño del ícono
    iconAnchor: [16, 32], // Punto del ícono que se colocará en las coordenadas
    popupAnchor: [0, -32] // Punto desde el que se abrirá el popup
});

// Agregar marcadores para cada aeropuerto
aeropuertos.forEach(function(aeropuerto) {
    var marker = L.marker([aeropuerto.lat, aeropuerto.lng]).addTo(map);
    marker.bindPopup("<b>" + aeropuerto.nombre + "</b><br>Haz clic para ver destinos.");

    // Mostrar los destinos al hacer clic en el marcador
    marker.on('click', function() {
        // Limpiar las líneas existentes
        linesLayer.clearLayers();

        var destinosHTML = "<ul>";
        aeropuerto.destinos.forEach(function(destino) {
            destinosHTML += "<li>" + destino + "</li>";
        });
        destinosHTML += "</ul>";
        marker.bindPopup("<b>" + aeropuerto.nombre + "</b><br>Destinos:<br>" + destinosHTML).openPopup();

        // Dibujar las flechas a los destinos
        aeropuerto.destinos.forEach(function(destinoNombre) {
            var destinoAeropuerto = aeropuertosMap[destinoNombre];
            if (destinoAeropuerto) {
                // Dibujar línea
                L.polyline([
                    [aeropuerto.lat, aeropuerto.lng],
                    [destinoAeropuerto.lat, destinoAeropuerto.lng]
                ], {
                    color: 'blue',
                    weight: 2,
                    opacity: 0.7
                }).addTo(linesLayer);
            }
        });
    });
});