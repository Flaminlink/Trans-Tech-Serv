import { useEffect, useState } from "react";
import { getIncidents, approveIncident, getVideoUrl } from "../api";

export default function Review() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    getIncidents().then(setData);
  },[]);

  return (
    <div>
      {data.map(item => (
        <div key={item.id} className="bg-white p-4 mb-4 rounded shadow">
          <p>ID: {item.id}</p>

          <video width="300" controls>
            <source src={getVideoUrl(item.filename)} />
          </video>

          <input id={item.id} placeholder="Plate" />

          <button onClick={()=>{
            const plate = document.getElementById(item.id).value;
            approveIncident(item.id, plate).then(()=>location.reload());
          }}>
            Approve
          </button>
        </div>
      ))}
    </div>
  );
}