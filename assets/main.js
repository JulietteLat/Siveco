//SIVECO

mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWV0dGVsYXQiLCJhIjoiY2szNDFleWJzMHNjOTNtczJrc3pwMjR5bCJ9.IvgBC4cXDgWfBYunhdqh5w';

//the following block gives the geojson file's features
var factories = {
      "type": "FeatureCollection",
      "features": [{
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.39842, 22.51444 ]
          },
          "properties": {
          "nid":"origin",
          "address":"NA",
          "teams":"NA"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.389911,22.516515 ]
          },
          "properties": {
          "nid":"197361",
          "address":"石歧区万丽豪庭泵房",
          "teams":"1"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.37008,22.509586 ]
          },
          "properties": {
          "nid":"197362",
          "address":"石歧区利和豪庭一区泵房",
          "teams":"1"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.385329,22.557079 ]
          },
          "properties": {
          "nid":"197363",
          "address":"石歧区中海锦城泵房",
          "teams":"1"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.397331,22.541959 ]
          },
          "properties": {
          "nid":"197364",
          "address":"石歧区雅尚花园泵房",
          "teams":"2"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.42157,22.520277 ]
          },
          "properties": {
          "nid":"197365",
          "address":"东区紫岭国际一期泵房",
          "teams":"2"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.413154,22.522315 ]
          },
          "properties": {
          "nid":"197366",
          "address":"东区奕翠园4C-1泵房",
          "teams":"3"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.412912,22.532338 ]
          },
          "properties": {
          "nid":"197367",
          "address":"东区比华利泵房",
          "teams":"3"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.426321,22.52564 ]
          },
          "properties": {
          "nid":"197368",
          "address":"东区天奕国际泵房",
          "teams":"3"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.43696,22.513043 ]
          },
          "properties": {
          "nid":"197369",
          "address":"东区品峰花园一期泵房",
          "teams":"3"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.439423,22.513377 ]
          },
          "properties": {
          "nid":"197370",
          "address":"东区品峰花园二三期泵房",
          "teams":"4"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.354422,22.515466 ]
          },
          "properties": {
          "nid":"197371",
          "address":"西区剑桥郡A03区泵房",
          "teams":"4"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.353492,22.517992 ]
          },
          "properties": {
          "nid":"197372",
          "address":"西区剑桥郡A05区泵房",
          "teams":"4"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.356932,22.546358 ]
          },
          "properties": {
          "nid":"197373",
          "address":"西区棕榈彩虹泵房",
          "teams":"4"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.361458,22.541661 ]
          },
          "properties": {
          "nid":"197374",
          "address":"西区御水湾泵房",
          "teams":"5"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.375505,22.501189 ]
          },
          "properties": {
          "nid":"197375",
          "address":"南区恒大绿洲二三期泵房",
          "teams":"5"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.370533,22.493307 ]
          },
          "properties": {
          "nid":"197376",
          "address":"南区悦盈新城三期泵房",
          "teams":"5"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.366524,22.487747 ]
          },
          "properties": {
          "nid":"197377",
          "address":"南区星汇云锦三期泵房",
          "teams":"5"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.367099,22.478767 ]
          },
          "properties": {
          "nid":"197378",
          "address":"南区锦锈蓝山泵房",
          "teams":"5"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.458969,22.5176 ]
          },
          "properties": {
          "nid":"197379",
          "address":"火炬开发区万科柏悦湾二期泵房",
          "teams":"5"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.440958,22.525391 ]
          },
          "properties": {
          "nid":"197380",
          "address":"火炬开发区德宝怡高泵房",
          "teams":"6"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.32456,22.420834 ]
          },
          "properties": {
          "nid":"197381",
          "address":"板芙祥畔华庭泵房",
          "teams":"6"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.304946,22.616003 ]
          },
          "properties": {
          "nid":"197382",
          "address":"东升君汇尚品一期泵房",
          "teams":"6"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.303676,22.617108 ]
          },
          "properties": {
          "nid":"197383",
          "address":"东升君汇尚品二期泵房",
          "teams":"7"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.261396,22.711603 ]
          },
          "properties": {
          "nid":"197384",
          "address":"东凤万科金色家园二期二标段泵房",
          "teams":"7"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.258406,22.688569 ]
          },
          "properties": {
          "nid":"197385",
          "address":"东凤上水湾二期泵房",
          "teams":"7"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.210212,22.642108 ]
          },
          "properties": {
          "nid":"197386",
          "address":"古镇富都花园泵房",
          "teams":"7"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.214201,22.649341 ]
          },
          "properties": {
          "nid":"197387",
          "address":"古镇盛世嘉元泵房",
          "teams":"7"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.303867,22.714782 ]
          },
          "properties": {
          "nid":"197388",
          "address":"南头翡丽花园泵房",
          "teams":"7"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.46742,22.339452 ]
          },
          "properties": {
          "nid":"197389",
          "address":"三乡万象郡花园泵房",
          "teams":"7"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.331531,22.393117 ]
          },
          "properties": {
          "nid":"249934",
          "address":"板芙纯水岸泵房",
          "teams":"7"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.390119,22.559391 ]
          },
          "properties": {
          "nid":"330925",
          "address":"石歧区璐易豪庭泵房",
          "teams":"8"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.403992,22.553931 ]
          },
          "properties": {
          "nid":"330926",
          "address":"石歧区时代云图泵房",
          "teams":"8"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.369689,22.551344 ]
          },
          "properties": {
          "nid":"330927",
          "address":"石歧区幸福汇泵房",
          "teams":"8"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.399608,22.536482 ]
          },
          "properties": {
          "nid":"330928",
          "address":"石歧区溢彩家园泵房",
          "teams":"8"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.402147,22.544501 ]
          },
          "properties": {
          "nid":"330929",
          "address":"石歧区悦享星醍泵房",
          "teams":"8"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.377185,22.508477 ]
          },
          "properties": {
          "nid":"330930",
          "address":"石歧区正和中州泵房",
          "teams":"9"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.376396,22.55201 ]
          },
          "properties": {
          "nid":"330931",
          "address":"石歧区时尚荟三期泵房",
          "teams":"9"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.375991,22.544239 ]
          },
          "properties": {
          "nid":"330932",
          "address":"石歧区金域蓝湾一期一标泵房",
          "teams":"9"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.402994,22.562639 ]
          },
          "properties": {
          "nid":"330933",
          "address":"石歧区天水湖四期泵房",
          "teams":"9"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.403658,22.561128 ]
          },
          "properties": {
          "nid":"330934",
          "address":"石岐区爱琴湾花园泵房",
          "teams":"9"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.370426,22.513229 ]
          },
          "properties": {
          "nid":"330935",
          "address":"石岐区欧雅豪庭泵房",
          "teams":"9"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.375164,22.509915 ]
          },
          "properties": {
          "nid":"330936",
          "address":"石岐区蓝钻双子座泵房",
          "teams":"9"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.370296,22.549457 ]
          },
          "properties": {
          "nid":"330937",
          "address":"石岐区宜君汇名苑泵房",
          "teams":"9"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.416794,22.527527 ]
          },
          "properties": {
          "nid":"330938",
          "address":"东区和美顺府泵房",
          "teams":"9"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.376439,22.503142 ]
          },
          "properties": {
          "nid":"330939",
          "address":"东区映翠豪庭泵房",
          "teams":"9"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.4336,22.50519 ]
          },
          "properties": {
          "nid":"330940",
          "address":"东区远洋天曜4幢泵房",
          "teams":"9"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.435854,22.504831 ]
          },
          "properties": {
          "nid":"330941",
          "address":"东区远洋天曜19幢泵房",
          "teams":"9"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.416199,22.506047 ]
          },
          "properties": {
          "nid":"330942",
          "address":"东区帝璟东方泵房",
          "teams":"10"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.432297,22.517758 ]
          },
          "properties": {
          "nid":"330943",
          "address":"东区紫园泵房",
          "teams":"10"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.43323,22.508342 ]
          },
          "properties": {
          "nid":"330944",
          "address":"东区御峰臻品泵房",
          "teams":"10"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.40724,22.542584 ]
          },
          "properties": {
          "nid":"330945",
          "address":"东区加和领御名苑泵房",
          "teams":"10"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.40762,22.547184 ]
          },
          "properties": {
          "nid":"330946",
          "address":"东区上品花园泵房",
          "teams":"10"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.411437,22.540141 ]
          },
          "properties": {
          "nid":"330947",
          "address":"东区花样四季泵房",
          "teams":"11"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.377756,22.505842 ]
          },
          "properties": {
          "nid":"330948",
          "address":"东区幸福天地泵房",
          "teams":"11"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.368723,22.540675 ]
          },
          "properties": {
          "nid":"330949",
          "address":"西区滨江公馆泵房",
          "teams":"11"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.375843,22.554129 ]
          },
          "properties": {
          "nid":"330950",
          "address":"西区美林春天一期泵房",
          "teams":"11"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.374591,22.553853 ]
          },
          "properties": {
          "nid":"330951",
          "address":"西区美林春天四期泵房",
          "teams":"11"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.355869,22.541343 ]
          },
          "properties": {
          "nid":"330952",
          "address":"西区水悦馨园泵房",
          "teams":"11"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.364614,22.549125 ]
          },
          "properties": {
          "nid":"330953",
          "address":"西区沁美家园泵房",
          "teams":"11"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.35587,22.517909 ]
          },
          "properties": {
          "nid":"330954",
          "address":"西区剑桥郡一区地下泵房",
          "teams":"11"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.354293,22.520421 ]
          },
          "properties": {
          "nid":"330956",
          "address":"西区剑桥郡六区泵房",
          "teams":"12"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.362431,22.519384 ]
          },
          "properties": {
          "nid":"330957",
          "address":"西区万好美居泵房",
          "teams":"12"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.358295,22.539625 ]
          },
          "properties": {
          "nid":"330958",
          "address":"西区水悦熙园泵房",
          "teams":"12"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.355119,22.543449 ]
          },
          "properties": {
          "nid":"330959",
          "address":"西区优格国际一二期泵房",
          "teams":"12"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.370254,22.54625 ]
          },
          "properties": {
          "nid":"330960",
          "address":"西区花海湾一二期泵房",
          "teams":"12"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.357301,22.485119 ]
          },
          "properties": {
          "nid":"330962",
          "address":"南区华俊翠苑泵房",
          "teams":"12"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.365758,22.490336 ]
          },
          "properties": {
          "nid":"330963",
          "address":"南区永安新城泵房",
          "teams":"12"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.36708,22.489683 ]
          },
          "properties": {
          "nid":"330964",
          "address":"南区星汇云锦二期泵房",
          "teams":"12"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.373629,22.496089 ]
          },
          "properties": {
          "nid":"330965",
          "address":"南区悦盈新城一期泵房",
          "teams":"12"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.374666,22.499024 ]
          },
          "properties": {
          "nid":"330966",
          "address":"南区祈安苑三期泵房",
          "teams":"12"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.371193,22.506306 ]
          },
          "properties": {
          "nid":"330967",
          "address":"南区滨河湾一二三四期泵房",
          "teams":"12"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.362174,22.500012 ]
          },
          "properties": {
          "nid":"330969",
          "address":"南区金水湾泵房",
          "teams":"12"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.352,22.4584 ]
          },
          "properties": {
          "nid":"330970",
          "address":"南区新光天地一二期泵房",
          "teams":"12"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.360234,22.492065 ]
          },
          "properties": {
          "nid":"330971",
          "address":"南区博贸大厦泵房",
          "teams":"12"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.368328,22.505713 ]
          },
          "properties": {
          "nid":"330973",
          "address":"南区滨河湾五六七期泵房",
          "teams":"12"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.43494,22.535997 ]
          },
          "properties": {
          "nid":"330974",
          "address":"火炬区尚城泵房",
          "teams":"12"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.371258,22.478039 ]
          },
          "properties": {
          "nid":"330975",
          "address":"火炬区合生帝景苑泵房",
          "teams":"13"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.450846,22.51568 ]
          },
          "properties": {
          "nid":"330978",
          "address":"火炬区聚豪园西苑泵房",
          "teams":"13"
          }
        },
        {
          "type": "Feature",
          "geometry": {
             "type": "Point",
             "coordinates":  [ 113.375794,22.55114 ]
          },
          "properties": {
          "nid":"367083",
          "address":"石歧区时尚荟二期泵房",
          "teams":"13"
          }
        }]
      };
  

//the following block displays mapbox map

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
 


map.on ('load', function () {

  map.addSource('factories', {
      "type": "geojson",
      "data": factories
  });


  map.addLayer({
    'id':'factories',
    'type': 'circle',
    'source': 'factories',
    //'source-layer': 'original', CETTE LIGNE FAIT BUGUER
    'paint': {
      // make circles larger as the user zooms from z12 to z22
      'circle-radius': {
      'base': 0,
      'stops': [[12, 3], [22, 6]]
      },
      //color all circles in white
      'circle-color': "#ccc",
      // color circles by ethnicity, using a match expression
      // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
      /*'circle-color': [
      'match',
      ['get', 'teams'],
      '1', '#fbb03b',
      '2', '#223b53',
      '3', '#e55e5e',
      '4', '#3bb2d0',*/
       /*  other */ /* '#ccc'
      ]*/
    }
  },
  );

/////////////////////////////
//The following blocks are from the "highlight features within a bounding box" tuto
/////////////////////////////

//adds a layer that displays highlighted factories when mouseover
 
//mettre ici le bloc entre ////////////// en dessous si les tests ne fonctionnent pas

 map.on('mousemove', 'factories', function(e) {
    // change mouse cursor style
    map.getCanvas().style.cursor = 'pointer';
    // single out the clicked-on feature
    var feature = e.features[0];
    // query the factories layer. Use the filter to only collect factories that are visited by the same team
    var relatedFeatures = map.queryRenderedFeatures('factories',{
      sourceLayer: 'original',
      filter: ['nid','teams', feature.properties.teams]
    });
    // render found features in an overlay
    //overlay.innerHTML = '';
    //add features that are visited by the same team to the highlighted layer
    map.setFilter ('factories-highlighted', [
      'nid',
      'teams',
      feature.properties.teams
    ]);
/////////////////////////////////////
    map.addLayer({
    'id': 'factories-highlighted',
    'type': 'circle',
    'source': 'factories',
    'source-layer': 'factories',
    'circle-color': "#fff",
    /*'paint':{
      'circle-radius': {
      'base': 0,
      'stops': [[12, 3], [22, 6]]
      },
      'circle-color':"#fff",
    }*/
    'filter': ['nid', 'teams', '']
    });
////////////////////////////////////
  });

  map.on('mouseleave', 'factories', function() {
    map.getCanvas().style.cursor = '';
    map.setFilter('factories-highlighted', ['nid', 'teams', '']);
  });

 /* map.on('click', function(selectfactory){

  // set bbox as 5px reactangle area around clicked point
  var bbox = [
  [e.point.x - 5, e.point.y - 5],
  [e.point.x + 5, e.point.y + 5]
  ];

  var features = map.queryRenderedFeatures(bbox, {layers: ['factories']})
  });*/

});


