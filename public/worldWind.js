var wwd = new WorldWind.WorldWindow("canvasOne");

wwd.addLayer(new WorldWind.BMNGLayer());
wwd.addLayer(new WorldWind.BingAerialWithLabelsLayer(null));

wwd.addLayer(new WorldWind.AtmosphereLayer(wwd));

wwd.addLayer(new WorldWind.CompassLayer());
wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

var parseArgs = function () {
    var result = {};

    var queryString = window.location.href.split("?");
    if (queryString && queryString.length > 1) {
        var args = queryString[1].split("&");

        // arg format is ?pos=lat,lon,alt&loc=lat,lon
        for (var a = 0; a < args.length; a++) {
            var arg = args[a].split("=");

            if (arg[0] === "pos") {
                var position = arg[1].split(","),
                    lat = parseFloat(position[0]),
                    lon = parseFloat(position[1]),
                    alt = parseFloat(position[2]);
                result.position = new WorldWind.Position(lat, lon, alt);
            }

            if (arg[0] === "loc") {
                var location = arg[1].split(","),
                    viewerLat = parseFloat(location[0]),
                    viewerLon = parseFloat(location[1]);
                result.location = new WorldWind.Position(viewerLat, viewerLon, 100.0);
            }
        }
    }

    return result;
};

var args = parseArgs();

if (args.position) {
    wwd.goTo(args.position);
}

//pinning location
if (args.location) {
    var placemarkLayer = new WorldWind.RenderableLayer();
    wwd.addLayer(placemarkLayer);

    var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);

    placemarkAttributes.imageOffset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION, 0.3,
        WorldWind.OFFSET_FRACTION, 0.0);

    placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION, 0.5,
        WorldWind.OFFSET_FRACTION, 1.0);

    placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/pushpins/plain-red.png";

    var position = args.location;
    var placemark = new WorldWind.Placemark(position, false, placemarkAttributes);

    placemark.label = "Current Viewing Location\n" +
        "Lat " + placemark.position.latitude.toPrecision(4).toString() + "\n" +
        "Lon " + placemark.position.longitude.toPrecision(5).toString();
    placemark.alwaysOnTop = true;

    placemarkLayer.addRenderable(placemark);
}

//handiling clicks
var viewLocationClick = function (recognizer) {
    var x = recognizer.clientX,
        y = recognizer.clientY;

    var pickList = wwd.pick(wwd.canvasCoordinates(x, y));

    if (pickList.objects.length === 1 && pickList.objects[0].isTerrain) {
        var position = pickList.objects[0].position;
        console.log(position.latitude, position.longitude);
        var url = 'http://localhost:3000/?lat=' + position.latitude + '&long=' + position.longitude;
        window.location = url;
    }
};

var clickRecognizer = new WorldWind.ClickRecognizer(wwd, viewLocationClick);
var tapRecognizer = new WorldWind.TapRecognizer(wwd, viewLocationClick);