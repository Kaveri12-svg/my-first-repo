import { useEffect } from "react";

const MapMethod =() => {

    useEffect(() => {
        console.log('Component has rendered');
      });
    
    const name = ["Kaveri", "Amma", "Anna", "Vadhina", "Vadhina"]
  const filterName=  name.filter((val) => val.includes('A'))
    return (
        <div>
            {
                filterName.map((val, index) => (
                    <li key={index}>{val}</li>
                ))
            }
        </div>
    )
}

export default MapMethod