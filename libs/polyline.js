import { useCallback, useRef } from "react";

export const usePolyline = ({ routes, map }) => {
  const polylineRef = useRef();

  const setPolyline = useCallback(({ map, strokeColor = "#FF0000" }) => {
    const polyline = new window.google.maps.Polyline({
      path: routes,
      geodesic: true,
      strokeColor,
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
    polyline.setMap(map);
    polylineRef.current = polyline;
    return polyline;
  });

  return { setPolyline };
};
