// SVG газрын зургийг ачаалах
// Зам нь энэ файлын байршлоос тооцогдоно (import.meta.url),
// тиймээс index.html хаана байгаагаас үл хамаарна.
// js/services/ -> js/ -> root -> img/map.svg
const MAP_SVG_URL = new URL("../../img/map.svg", import.meta.url);

export async function loadMapSvg() {
  const response = await fetch(MAP_SVG_URL);

  if (!response.ok) {
    throw new Error(
      `Failed to load map.svg (${response.status} ${response.statusText}): ${MAP_SVG_URL}`
    );
  }

  return await response.text();
}

// Аймгийн нэрээр food data шүүх
export function getFoodsByProvince(nutritionData, provinceNameEn) {
  if (!Array.isArray(nutritionData)) return [];

  return nutritionData.filter((item) => {
    const province =
      typeof item.province === "object" ? item.province?.en : item.province;

    return province === provinceNameEn;
  });
}