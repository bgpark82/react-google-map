import React, { useEffect } from "react";

const Map = ({ id, options, onLoadMap }) => {
  const onLoadScript = () => {
    const map = new window.google.maps.Map(
      document.getElementById(id),
      options
    );
    onLoadMap(map);
  };

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyAsiOkMDZoRa1gQVOmHJUp18rdid1uBE0M";
      const target = document.getElementsByTagName("script")[0];
      target.parentNode.insertBefore(script, target);
      script.addEventListener("load", onLoadScript);
    }
  }, []);

  return <div style={{ width: 1000, height: 1000 }} id={id}></div>;
};

export default Map;
