import React, { useEffect, useState } from "react";

const EarthPage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEarthImage = async (lat: number, lon: number) => {
      try {
        const apiKey = import.meta.env.VITE_NASA_API_KEY || "DEMO_KEY";
        const apiUrl = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=2022-09-01&dim=0.10&api_key=${apiKey}`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
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

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchEarthImage(latitude, longitude);
        },
        (geoError) => {
          setError("Unable to retrieve your location.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p className="text-center p-6">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 p-6">Error: {error}</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Earth View</h1>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Earth view"
          className="rounded-lg shadow-lg mb-6 max-w-full h-auto"
        />
      ) : (
        <p>No image available.</p>
      )}
    </div>
  );
};

export default EarthPage;
