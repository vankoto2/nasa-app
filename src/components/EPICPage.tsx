import React, { useEffect, useState } from "react";
import { fetchEPICImages, EpicImage } from "../utils/fetchEPICImages";

const EPICPage: React.FC = () => {
  const [images, setImages] = useState<EpicImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<EpicImage | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadEPICImages = async () => {
      try {
        const epicImages = await fetchEPICImages();
        setImages(epicImages);
        setSelectedImage(epicImages[0]);
      } catch (err: any) {
        setError(err.message || "Failed to fetch images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadEPICImages();
  }, []);

  const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDate = event.target.value;
    const image = images.find((img) => img.date === selectedDate);
    setSelectedImage(image || null);
  };

  if (loading) {
    return <p className="text-center p-6 text-[#A0AEB6]">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 p-6">Error: {error}</p>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto text-center">
      <h1 className="text-3xl font-extrabold text-[#A0AEB6] mb-6">Explore NASA EPIC Images</h1>
      <div className="mb-6">
        <label htmlFor="date-select" className="block mb-2 text-lg font-medium text-[#A0AEB6]">
          Select a date:
        </label>
        <select
          id="date-select"
          onChange={handleDateChange}
          className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 bg-white/20"
        >
          {images.map((img) => (
            <option key={img.date} value={img.date}>
              {new Date(img.date).toLocaleDateString()}
            </option>
          ))}
        </select>
      </div>
      {selectedImage ? (
        <div className="flex flex-col items-center">
          <img
            src={selectedImage.url}
            alt={selectedImage.caption}
            className="rounded-lg shadow-lg mb-4 w-full max-w-2xl h-auto"
          />
          <p className="text-[#A0AEB6] text-lg mb-2">{selectedImage.caption}</p>
          <p className="text-[#A0AEB6] text-sm">
            Date: {new Date(selectedImage.date).toLocaleString()}
          </p>
        </div>
      ) : (
        <p className="text-[#A0AEB6]">No image available for the selected date.</p>
      )}
    </div>
  );
};

export default EPICPage;
