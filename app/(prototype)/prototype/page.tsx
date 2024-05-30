"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

// Define the types for the artwork data
interface Artwork {
  id: number;
  // Add other properties if needed
}

const App: React.FC = () => {
  const [items, setItems] = useState<Artwork[]>([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((response) => response.json())
      .then((data) => setItems(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const searchParams = useSearchParams();
  const params = {};
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  console.log("searchParams", params);

  const handleClick = (id: number) => {
    console.log("Button clicked:", id);
  };

  return (
    <div>
      <h1>Artworks IDs as Buttons</h1>
      {items.length === 0 ? (
        <p>Loading...</p>
      ) : (
        items.map((item) => (
          <div key={item.id}>
            <button onClick={() => handleClick(item.id)}>{item.id}</button>
          </div>
        ))
      )}
    </div>
  );
};

export default App;
