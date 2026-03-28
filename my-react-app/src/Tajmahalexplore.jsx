import React from 'react'

const Tajmahalexplore = () => {
  return (
    
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      margin: 0, 
      padding: 0, 
      overflow: 'hidden' 
    }}>
      
      <a-scene style={{ height: '100vh', width: '100vw' }}>
        <a-assets>
          <a-audio id="tajAudio" src="./tajaudio.mp3"></a-audio>
        </a-assets>
        
        
        <a-camera position="0 8 25" look-controls>
          <a-cursor color="yellow"></a-cursor>
        </a-camera>

        

        <a-light type="ambient" intensity="0.8"></a-light>
      <a-light type="directional" position="-0.22614 12.62656 -38.05302" intensity="2" light="intensity: 4.73"></a-light>
      <a-light type="directional" position="1.19297 16.55217 38.15947" intensity="2" light="intensity: 4.73"></a-light>
      <a-light type="directional" position="-34.78975 16.55217 -0.91331" intensity="2" light="intensity: 4.61"></a-light>
      <a-light type="directional" position="46.51516 14.10943 -7.28265" intensity="2" light="intensity: 4.61"></a-light>
      
        

        <a-entity 
          gltf-model="url(./taj_mahal_model.glb)" 
          position="0 14  0" 
          scale="15 15 15  "
        ></a-entity>
        <a-box
        sound="src: #tajAudio; on: click; volume: 1; refDistance: 10; rolloffFactor: 4"
        position="-20 2 0"
        ></a-box>

        


<a-plane 
  src="background.jpg" 
  position="0 -1 0" 
  rotation="-90 0 0" 
  width="100" 
  height="100"
  
  
  material="shader: flat; side: double"
></a-plane>


           

        
        <a-sky color="#87CEEB"></a-sky>
      </a-scene>
    </div>
  )
}

export default Tajmahalexplore
