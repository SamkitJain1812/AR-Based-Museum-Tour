import React from 'react'
import './index.css';

const Aframe = () => {
  return (
   
    <div style={{ width: '100vw', height: '100vh', margin: 0, overflow: 'hidden' }}>
      <a-scene style={{ height: '100vh', width: '100vw' }} 
      vr-mode-ui="enabled: false"
       embedded
      arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: true;"
      renderer="logarithmicDepthBuffer: true; alpha: true;"
      background="transparent: true">


        <a-camera gps-camera
                  rotation-reader
                  simulateLongitude="77.308875"
                  simulateLatitude="28.470043">
                    <a-cursor></a-cursor>
        </a-camera>

        <a-light type="ambient" intensity="0.8"></a-light>
      <a-light type="directional" position="-0.22614 12.62656 -38.05302" intensity="2" light="intensity: 4.73"></a-light>
      <a-light type="directional" position="1.19297 16.55217 38.15947" intensity="2" light="intensity: 4.73"></a-light>
      <a-light type="directional" position="-34.78975 16.55217 -0.91331" intensity="2" light="intensity: 4.61"></a-light>
      <a-light type="directional" position="46.51516 14.10943 -7.28265" intensity="2" light="intensity: 4.61"></a-light>
      
        

        <a-entity 
  gltf-model="url(./taj_mahal_model.glb)" 
  position="0 0 -10" 
  scale="10 10 10"
  gps-entity-place="latitude: 28.470043; longitude: 77.308875"
></a-entity>


<audio id="tajAudio" src="./tajaudio.mp3" preload="auto"></audio>
        <a-box
        sound="src: #tajAudio; on: click; volume: 1; refDistance: 10; rolloffFactor: 4"
        position="-20 2 0"
        color="AA0000"
        ></a-box>    
      </a-scene>
      
    </div>
  )
}

export default Aframe;
