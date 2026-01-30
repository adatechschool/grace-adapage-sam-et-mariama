import { useState, useEffect } from "react";
import repliqueData from "../data/repliques";
interface RepliqueProps {
  repliques: string[];
}

export default function RepliquesAutoScroll() {
  const [index, setIndex] = useState(0);
 const repliques = repliqueData.map(r => r.replique);
  useEffect(() => {
    // Change la réplique toutes les 8 secondes
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % repliques.length);
    }, 8000); // 8000ms = 8s

    return () => clearTimeout(timeout); // recharge
  }, [index, repliques.length]);

  return (
    <div className="h-16 overflow-hidden flex items-center justify-center">
      <p className="text-yellow-500 text-lg text-center transition-opacity duration-500">
        {repliques[index]}
      </p>
    </div>
  );
}
