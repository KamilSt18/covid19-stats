import { SummaryResponse } from '../models/SummaryResponse';

export function formatSummaryData(summaryData: SummaryResponse | undefined) {
  let lastUpdated, confirmedCases, totalDeaths, totalRecovered;
  if (summaryData) {
    const {
      Global: {
        Date: summaryDate,
        TotalConfirmed,
        TotalDeaths,
        TotalRecovered,
      },
    } = summaryData;
    lastUpdated = new Date(summaryDate)?.toLocaleString('en-US');
    confirmedCases = TotalConfirmed?.toLocaleString('en-US');
    totalDeaths = TotalDeaths?.toLocaleString('en-US');
    totalRecovered = TotalRecovered?.toLocaleString('en-US');
  }
  return { lastUpdated, confirmedCases, totalDeaths, totalRecovered };
}
