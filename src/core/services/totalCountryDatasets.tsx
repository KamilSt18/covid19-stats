import { DatasetType } from '../../core/models/DatasetType';
import { TotalByCountryResponse } from '../../core/models/TotalByCountryResponse';

export function totalCountryDatasets(
  response: TotalByCountryResponse[] | undefined
) {
  if (response) {
    let totalCasesActiveDataset: DatasetType = [
      {
        label: 'Total Coronavirus Cases',
        data: response.map((el) => el.Confirmed),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Total Coronavirus Active',
        data: response.map((el) => el.Active),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ];

    let totalRecoveredDeathsDataset: DatasetType = [
      {
        label: 'Total Deaths',
        data: response.map((el) => el.Deaths),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Total Recovered',
        data: response.map((el) => el.Recovered),
        borderColor: 'rgb(191, 255, 0)',
        backgroundColor: 'rgba(191, 255, 0, 0.5)',
      },
    ];
    return { totalCasesActiveDataset, totalRecoveredDeathsDataset };
  }
  return { totalCasesActiveDataset: [], totalRecoveredDeathsDataset: [] };
}
