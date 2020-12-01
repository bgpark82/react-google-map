import React, { useCallback, useEffect, useRef, useState } from "react";
import Map from "../components/Map";
import { routes } from "../libs/routes";
import { usePolyline } from "../libs/polyline";

const index = () => {
  const mapRef = useRef();
  const polylineRef = useRef();

  const onClickMarker = () => {
    const map = mapRef.current;

    setPolyline({ map, strokeColor: "pink" });

    // const polyline = polylineRef.current;
    // polyline.setOptions({
    //   strokeColor: "pink",
    // });
  };

  const { setPolyline } = usePolyline({ routes });

  const onLoadMap = useCallback((map) => {
    mapRef.current = map;

    routes.map((route) => {
      const marker = new window.google.maps.Marker({
        position: route,
        map: map,
      });
      marker.addListener("click", onClickMarker);
    });
    setPolyline({ map });
    // const polyline = new window.google.maps.Polyline({
    //   path: routes,
    //   geodesic: true,
    //   strokeColor: "#FF0000",
    //   strokeOpacity: 1.0,
    //   strokeWeight: 2,
    // });
    // polyline.setMap(map);
    // polylineRef.current = polyline;
  }, []);

  return (
    <div>
      <Map
        id="map"
        options={{ center: { lat: 37.5789464, lng: 126.97177 }, zoom: 14 }}
        onLoadMap={onLoadMap}
      />
    </div>
  );
};

export default index;
