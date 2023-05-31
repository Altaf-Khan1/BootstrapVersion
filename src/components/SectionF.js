import React from 'react';

import "./SectionF.css"

function SectionF() {
  return (
    <div>
        <div>
        <h1 className="Cprojects">Completed Projects</h1>
      </div>
      <div className="imgs">
        <img className="one" src="https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=400" alt="one" width="500px" height="500px"></img>
        <img className="two" src="https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" width="500px" height="500px"></img>
        <img className="three" src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" width="500px" height="500px"></img>
        <img className="four" src="https://images.pexels.com/photos/533157/pexels-photo-533157.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" width="500px" height="500px"></img>
          <button className="baton" variant="dark">See All Projects</button>
      </div>
    </div>
  )
}

export default SectionF