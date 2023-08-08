

  let map;

  async function initMap(){
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
      "marker",
    );
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat:45.68245216902932, lng:-123.30999040448343},
      zoom: 10,
      mapId: 'f8ca2dc215ac0fd6'
    });

    const tourStops = [
      {
        position: {lat:45.837861269480165, lng:-123.51367255779098},
        title: "Bloom Lake",
      },
      {
        position: {lat:45.79643531268158, lng:-123.45891489430423},
        title: "Steam Donkey",
      },
      {
        position: { lat: 45.78039782842223, lng: -123.35203670949885 },
        title: "Four County Point",
      },
      {
        position: { lat: 45.95431651962616, lng: -123.93185886039059 },
        title: "Circle Creek",
      },
      {
        position: { lat: 45.84744828149188, lng: -123.76226530498577},
        title: "Soapstone Lake",
      },
      {
        position: { lat: 45.81354171758464, lng: -123.76701552657497},
        title: "North Fork Nehalem",
      },
      {
        position: { lat: 45.71407641064388, lng: -123.76045437720266},
        title: "Cougar Valley",
      },
      {
        position: { lat: 46.152873899569734, lng: -123.7973978986974},
        title: "Astoria Demonstration Forest",
      },
      {
        position: { lat: 46.17775156098006, lng: -123.5049908296871},
        title: "Gnat Creek",
      },
    ];
    // Create an info window to share between markers.
    const infoWindow = new InfoWindow();
  
    // Create the markers.
    tourStops.forEach(({ position, title }, i) => {
      const pin = new PinElement({
      });
      const marker = new AdvancedMarkerElement({
        position,
        map,
        title: `${title}`,
        content: pin.element,
      });
  
      // Add a click listener for each marker, and set up the info window.
      marker.addListener("click", ({ domEvent, latLng }) => {
        const { target } = domEvent;
  
        infoWindow.close();
        infoWindow.setContent(marker.title);
        infoWindow.open(marker.map, marker);
      });
    });
    const gc_ib = {
      south: 46.13133000003669, 
      west: -123.53859658942336   ,
      north: 46.197017047878525,
      east: -123.44524999190718,
    };  
    gc_ol = new google.maps.GroundOverlay(
      'trails//gnat_creek.png',
      gc_ib,
    );
    gc_ol.setMap(map);

    const ct_ib = {
      south: 46.17813012474911, 
      west: -123.82202884651328  ,
      north: 46.18825671778275,
      east: -123.80272266401576,
    };  
    ct_ol = new google.maps.GroundOverlay(
      'trails//cathedral_tree.png',
      ct_ib,
    );
    ct_ol.setMap(map);

    const adf_ib = {
      south: 46.15172488344504, 
      west: -123.80105967645588 ,
      north: 46.16055401447863,
      east: -123.78572358960105,
    };  
    adf_ol = new google.maps.GroundOverlay(
      'trails//astoria_demonstration_forest.png',
      adf_ib,
    );
    adf_ol.setMap(map);

    const cv_ib = {
      south: 45.70163947526346, 
      west: -123.77633305331965,
      north: 45.73076452632877,
      east: -123.7249633903141,
    };  
    cv_ol = new google.maps.GroundOverlay(
      'trails//cougar_valley.png',
      cv_ib,
    );
    cv_ol.setMap(map);

    const nfn_ib = {
      south: 45.79817900021491, 
      west: -123.78195903790782   ,
      north: 45.82687051633172,
      east: -123.68735312710305,
    };  
    nfn_ol = new google.maps.GroundOverlay(
      'trails//north_fork_nehalem.png',
      nfn_ib,
    );
    nfn_ol.setMap(map);

    const sl_ib = {
      south: 45.833911474374915, 
      west: -123.76639916189264  ,
      north: 45.85006706720195,
      east: -123.74888462520191,
    };  
    sl_ol = new google.maps.GroundOverlay(
      'trails//soapstone_lake.png',
      sl_ib,
    );
    sl_ol.setMap(map);

    const cc_ib = {
      south: 45.95456393357134, 
      west: -123.94731011241316 ,
      north: 45.97333202896885,
      east: -123.91857620630828,
    };  
    cc_ol = new google.maps.GroundOverlay(
      'trails//circle_creek.png',
      cc_ib,
    );
    cc_ol.setMap(map);

    const sd_ib = {
      north: 45.8030,
      south: 45.7951,
      west: -123.4618,
      east: -123.4514,
    };  
    sd_ol = new google.maps.GroundOverlay(
      'trails//steam_donkey.png',
      sd_ib,
    );
    sd_ol.setMap(map);

    const fcp_ib = {
      north: 45.782404549532764,
      south: 45.776563557099976,
      west: -123.36417340205232 ,
      east: -123.347760735666,
    };  
    fcp_ol = new google.maps.GroundOverlay(
      'trails//four_county_point.png',
      fcp_ib,
    );
    fcp_ol.setMap(map);

    const bl_ib = {
      south: 45.829073341398875, 
      west: -123.53695017750928,
      north: 45.83780643485821,
      east: -123.51363320490034,
    };  
    bl_ol = new google.maps.GroundOverlay(
      'trails//bloom_lake.png',
      bl_ib,
    );
    bl_ol.setMap(map);

  }
  
  window.initMap = initMap;