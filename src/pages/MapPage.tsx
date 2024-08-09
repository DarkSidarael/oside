import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './MapPage.css'


export interface MapPageProps {

}

const MapPage = () => {
   
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCSO3DJRIXOTadzJYoiQDGdBcvAQnctwCM"
      })
    
const position ={
    lat: -22.062794, 
    lng: -51.419646}

    return (
         <div className="map">
       { isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width:'100%', height:'100%'}}
        center={position}
        zoom={16}
      
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
     
     <Marker position={position}/>
      </GoogleMap>
  ) : <></>}
        </div>
    )
}

export default MapPage