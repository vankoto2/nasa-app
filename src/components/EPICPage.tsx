import React, { useEffect, useState } from "react";

interface EpicImage {
  date: string;
  image: string;
  caption: string;
  url?: string;
}

const EPICPage: React.FC = () => {
  const [imageData, setImageData] = useState<EpicImage | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEPICImage = async () => {
      const apiKey = import.meta.env.VITE_NASA_API_KEY || "DEMO_KEY";
      const apiUrl = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch EPIC data: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.length > 0) {
          const latestImage = data[0];
          const formattedDate = latestImage.date.split(" ")[0].replaceAll("-", "/");
          const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${formattedDate}/jpg/${latestImage.image}.jpg`;

          setImageData({ ...latestImage, url: imageUrl });
        } else {
          setError("No images found from the EPIC API.");
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEPICImage();
  }, []);

  if (loading) {
    return <p className="text-center p-6">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 p-6">Error: {error}</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Latest EPIC Image</h1>
      {imageData ? (
        <>
          <img
            src={imageData.url}
            alt={imageData.caption}
            className="rounded-lg shadow-lg mb-6 max-w-full h-auto"
          />
          <p className="text-gray-700 mb-2">{imageData.caption}</p>
          <p className="text-gray-500">Date: {new Date(imageData.date).toLocaleString()}</p>
        </>
      ) : (
        <p>No image available.</p>
      )}
    </div>
  );
};

export default EPICPage;
