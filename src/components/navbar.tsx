import React, { useState } from "react";


function Navbar() {

  return (
    <>
      <div className="flex justify-around mt-10">
        <img className="w-30 h-10" src="/images/logo.png" alt="" />

        <div className="flex gap-4">

          <div className="flex gap-2 rounded-lg">
            <img className="w-8 h-8" src="/images/loupe.png" alt="" />
            <input className="h-8" type="search" name="Recherche" id="" />
          </div>
          
          <img className="w-5 h-5" src="/images/shop.png" alt="" />
        </div>
        
      </div>
    </>
  )
}

export default Navbar