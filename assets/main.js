/*d3.json("factoriesWithTeam.geojson",        
    function(err, data) {
        mapDraw(data);
    });

function mapDraw(geojson) {*/
  //Mapbox access token
   mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWV0dGVsYXQiLCJhIjoiY2szNDFleWJzMHNjOTNtczJrc3pwMjR5bCJ9.IvgBC4cXDgWfBYunhdqh5w';

  //Sets up mapbox map
  var map = new mapboxgl.Map({
  // container id
  container: 'map', 
  // stylesheet location
  style: 'mapbox://styles/juliettelat/ck3pfimbh08vs1dqy4x2ygq9a',

  // starting position [lng, lat]
  center: [113.39842, 22.51444], 
  // starting zoom
  zoom: 9 
  });
  
 /*map.addControl(new mapboxgl.Navigation());
    
    var container = map.getCanvasContainer()
    var svg = d3.select(container).append("svg")
    var transform = d3.geoTransform({point: projectPoint});
    var point = d3.geoPath().projection(transform);
    
    var featureElement = svg.selectAll("point")
        .data(geojson.features)
        .enter()
        .append("point")
        .attr("d", d3.geoPath().projection(transform))
        .attr("stroke", "white")
        .attr("fill", "white")
        .attr("fill-opacity", 0.4);

    // update the path using the current transform
    function update() {
        featureElement.attr("d", point);
    }
  
    function projectPoint(lon, lat) {
            var point = map.project(new mapboxgl.LngLat(lon, lat));
            this.stream.point(point.x, point.y);
    }
}*/