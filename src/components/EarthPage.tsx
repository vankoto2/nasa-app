import React, { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { fetchEarthImage } from "../utils/fetchEarthImage";

const EarthPage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImageWithLocation = async (lat: number, lon: number) => {
      try {
        const url = await fetchEarthImage(lat, lon);
        setImageUrl(url);
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
          fetchImageWithLocation(latitude, longitude);
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
    <div className="p-6 max-w-5xl mx-auto text-center space-y-8">
      <h1 className="text-3xl font-extrabold text-[#A0AEB6]">Earth View</h1>
      {loading && <p className="text-lg text-[#A0AEB6]">Loading...</p>}
      {error && <p className="text-lg text-red-500">{error}</p>}
      {imageUrl && (
        <div className="relative border rounded-lg shadow-lg overflow-hidden w-full ">
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
