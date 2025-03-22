import React, { useState, useEffect } from "react";

interface ApodData {
  date: string;
  explanation: string;
  url: string;
  title: string;
}

const AstronomyPictureOfTheDay: React.FC = () => {
  const [data, setData] = useState<ApodData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().slice(0, 10)
  );

  const fetchApod = async (date: string) => {
    const apiKey = import.meta.env.VITE_NASA_API_KEY || "DEMO_KEY";
    const apiUrl = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`;

    try {
      setLoading(true);
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch APOD data");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err: any) {
      setError(err.message || "Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApod(selectedDate);
  }, [selectedDate]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Astronomy Picture of the Day</h1>
      <label className="block text-left mb-4">
        <span className="text-sm sm:text-base font-semibold">Select a Date:</span>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="block w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 sm:text-base"
        />
      </label>
      {loading && <p className="text-gray-600 sm:text-lg">Loading...</p>}
      {error && <p className="text-red-500 sm:text-lg">Error: {error}</p>}
      {data && (
        <>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6">{data.title}</h2>
          <p className="text-gray-500 sm:text-base mb-4">{data.date}</p>
          <img
            src={data.url}
            alt={data.title}
            className="mx-auto mb-6 w-full sm:max-w-lg rounded-lg shadow-md"
          />
          <p className="text-justify text-gray-700 sm:text-base">{data.explanation}</p>
        </>
      )}
    </div>
  );
};

export default AstronomyPictureOfTheDay;
