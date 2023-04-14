import { WorldResponse } from '../models/WorldResponse';

export function filterWorldData(worldData: WorldResponse[] | undefined) {
  if (worldData) {
    const incorrectDates = [
      '2021-08-06T21:01:05.536Z',
      '2023-03-07T21:58:09.751Z',
    ];

    const fixedWorldData = worldData?.filter(
      (el) => !incorrectDates.includes(el.Date)
    );
    return fixedWorldData;
  }
  return [];
}
