/**
 * Created by leichen on 4/5/16.
 */
import React from 'react'
import {GoogleMapLoader, GoogleMap,Marker} from 'react-google-maps'
export default (props)=>{
    console.log(props)
    return(
        <GoogleMapLoader
            containerElement = {<div style = {{height : '100%'}}></div>}
            googleMapElement ={
                <GoogleMap defaultZoom ={12} defaultCenter ={{lat:props.lat,lng:props.lon}}/>
            }
        />


    );
}