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
    <div className="p-6 max-w-5xl mx-auto text-center space-y-8">
      <h1 className="text-3xl font-extrabold text-[#A0AEB6]">Astronomy Picture of the Day</h1>
      <div className="space-y-4">
        <label htmlFor="date-select" className="block text-lg font-medium text-[#A0AEB6]">
          Select a Date:
        </label>
        <input
          type="date"
          id="date-select"
          value={selectedDate}
          onChange={handleDateChange}
          className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200 bg-white/20"
        />
      </div>
      {loading && <p className="text-lg text-[#A0AEB6]">Loading...</p>}
      {error && <p className="text-lg text-red-500">Error: {error}</p>}
      {data && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#A0AEB6]">{data.title}</h2>
          <p className="text-lg text-[#A0AEB6]">{data.date}</p>
          <div className="relative">
            <img
              src={data.url}
              alt={data.title}
              className="rounded-lg shadow-lg max-w-full mx-auto"
            />
          </div>
          <p className="text-lg text-[#A0AEB6] leading-relaxed">{data.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default AstronomyPictureOfTheDay;
