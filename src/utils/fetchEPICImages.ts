export interface EpicImage {
  date: string;
  image: string;
  caption: string;
  url?: string;
}

export const fetchEPICImages = async (): Promise<EpicImage[]> => {
  const apiKey = import.meta.env.VITE_NASA_API_KEY || "DEMO_KEY";
  const apiUrl = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`;

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch EPIC data: ${response.status}`);
  }

  const data = await response.json();
  if (data && data.length > 0) {
    return data.map((item: any) => {
      const formattedDate = item.date.split(" ")[0].replaceAll("-", "/");
      const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${formattedDate}/jpg/${item.image}.jpg`;
      return { ...item, url: imageUrl };
    });
  } else {
    throw new Error("No images found from the EPIC API.");
  }
};
