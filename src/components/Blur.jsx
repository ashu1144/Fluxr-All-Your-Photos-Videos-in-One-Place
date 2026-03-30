import React from 'react'

const Blur = () => {
  return (
      <div className=" pointer-events-none fixed inset-0 z-0 overflow-hidden">
  <div
    className="blur-animate absolute top-0 right-0 w-80 h-80 rounded-full"
    style={{
      background: "radial-gradient(circle, #00e5ff, transparent 70%)",
      opacity: 0.12,
    }}
  />
</div>
  )
}

export default Blur