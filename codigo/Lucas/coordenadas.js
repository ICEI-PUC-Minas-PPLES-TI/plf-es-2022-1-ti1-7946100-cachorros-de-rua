function forwardGeocoder(query) {
    const matchingFeatures = [];
    for (const feature of customData.features) {
    // Handle queries with different capitalization
    // than the source data by calling toLowerCase().
    if (
    feature.properties.title
    .toLowerCase()
    .includes(query.toLowerCase())
    ) {
    // Add a tree emoji as a prefix for custom
    // data results using carmen geojson format:
    // https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
    feature['place_name'] = `🌲 ${feature.properties.title}`;
    feature['center'] = feature.geometry.coordinates;
    feature['place_type'] = ['park'];
    matchingFeatures.push(feature);
    }
    }
    var longitude = response.body.features[0].center[0]
    var latitude = response.body.features[0].center[1]
    var location = response.body.features[0].place_name
    console.log("Latitude :", latitude);
    console.log("Longitude :", longitude);
    console.log("Location :", location);
    return matchingFeatures;
    }
var address = 'rua espirito santo 341';
forwardGeocoder(adress);

