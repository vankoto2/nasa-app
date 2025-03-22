import React, { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const EarthPage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchEarthImage = async (lat: number, lon: number) => {
    try {
      const apiKey = import.meta.env.VITE_NASA_API_KEY || "DEMO_KEY";
      const apiUrl = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=2022-09-01&dim=0.10&api_key=${apiKey}`;

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      if (data.url) {
        setImageUrl(data.url);
      } else {
        setError("No image available for this location and date.");
      }
    } catch (err: any) {
      setError(err.message || "Failed to fetch image.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchEarthImage(latitude, longitude);
        },
        () => {
          setError("Unable to retrieve your location.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto flex flex-col items-center space-y-8">
      <h1 className="text-3xl font-extrabold text-gray-800">Earth View</h1>
      {loading && <p className="text-lg text-gray-600">Loading...</p>}
      {error && <p className="text-lg text-red-500">{error}</p>}
      {imageUrl && (
        <div className="relative border rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
          <TransformWrapper>
            <TransformComponent>
              <img
                src={imageUrl}
                alt="Earth view"
                className="w-full h-auto object-cover"
              />
            </TransformComponent>
          </TransformWrapper>
          <p className="absolute top-2 left-2 bg-gray-900 text-white text-sm rounded-lg px-3 py-1 shadow-md">
            Interactive View
          </p>
        </div>
      )}
    </div>
  );
};

export default EarthPage;
