import React, {useEffect, useRef } from 'react'

import Parallax from 'parallax-js' 


export const ParallaxExample = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: false,
      clipRelativeInput: true;
      hoverOnly: false
    })

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, [])

  return (
    <div ref={sceneEl}>
      <div data-depth="0.2">My first Layer!</div>
      <div data-depth="0.5">My second Layer!</div>
      <div data-depth="0.8">My third Layer!</div>
    </div>
  )
  
}

export default ParallaxExample
