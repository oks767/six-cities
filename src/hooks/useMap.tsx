import {useEffect, useState, useRef, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';
import {CityType} from '../types/offers';

const useMap = (
  mapRef: MutableRefObject<HTMLElement | null>,
  cityInfo: CityType
): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: cityInfo?.location?.latitude,
          lng: cityInfo?.location?.longitude,
        },
        zoom: cityInfo?.location?.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instance.addLayer(layer);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, map, cityInfo]);

  return map;
};

export default useMap;
