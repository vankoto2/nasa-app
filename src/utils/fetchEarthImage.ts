export const fetchEarthImage = async (
  lat: number,
  lon: number
): Promise<string> => {
  const apiKey = import.meta.env.VITE_NASA_API_KEY || "DEMO_KEY";
  const apiUrl = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=2022-09-01&dim=0.10&api_key=${apiKey}`;

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const data = await response.json();
  if (data.url) {
    return data.url;
  } else {
    throw new Error("No image available for this location and date.");
  }
};
