/*global kakao*/ 
import React, { useEffect } from 'react'

const Location=()=>{
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.294349, 126.976421),
      level: 4
    };
    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.294349, 126.976421); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);
    }, [])

    return (
        <div style={{display: "flex", justifyContent: "center", position: "relative"}}>
        	<div id="map" style={{display: "flex", width:"100%", height:"400px", margin: "auto 0", position: "relative"}}></div> 
        </div>
    )
}

export default Location;