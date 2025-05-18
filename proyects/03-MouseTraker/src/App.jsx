import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [enabled, setEnable] = useState(false)
  const [posicion, setPosicion] = useState({ x: 0, y: 0 })
  useEffect(() => {

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosicion({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${posicion.x}px, ${posicion.y}px)`
      }}
      />
      <button onClick={() => setEnable(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} Seguir mouse</button>
    </>
  )

}

export default App
