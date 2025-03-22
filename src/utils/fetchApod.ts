export interface ApodData {
  date: string;
  explanation: string;
  url: string;
  title: string;
}

export const fetchApod = async (date: string): Promise<ApodData> => {
  const apiKey = import.meta.env.VITE_NASA_API_KEY || "DEMO_KEY";
  const apiUrl = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`;

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch APOD data");
  }
  return response.json();
};
