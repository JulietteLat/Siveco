d3.json("ken.geojson", function(err, data) {
    mapDraw(data);
});
    
    
function mapDraw(geojson){    
    //mapboxgs トークン
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpbWl6dSIsImEiOiI0cl85c2pNIn0.RefZMaOzNn-IistVe-Zcnw'
        
    //Setup mapbox-gl map
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v8',
        center: [141.15448379999998, 39.702053　],
        zoom: 4,  
    })
    
    map.addControl(new mapboxgl.Navigation());
    
    var container = map.getCanvasContainer()
    var svg = d3.select(container).append("svg")


	var transform = d3.geoTransform({point: projectPoint});
	var path = d3.geoPath().projection(transform);
    
 	var featureElement = svg.selectAll("path")
		.data(geojson.features)
		.enter()
        .append("path")
        .attr("d", d3.geoPath().projection(transform))
        .attr("stroke", "red")
        .attr("fill", "green")
        .attr("fill-opacity", 0.4);
    
    
    // update the path using the current transform
    function update() {
        featureElement.attr("d", path);
    }
    
    //
    map.on("viewreset", update)
    map.on("movestart", function(){
		svg.classed("hidden", true);
	});	
    map.on("rotate", function(){
		svg.classed("hidden", true);
	});	
    map.on("moveend", function(){
		update()
		svg.classed("hidden", false);
	})
    
    //初期レンダリング
    update()
        
    
	function projectPoint(lon, lat) {
        var point = map.project(new mapboxgl.LngLat(lon, lat));
		this.stream.point(point.x, point.y);
	}
     
    
}