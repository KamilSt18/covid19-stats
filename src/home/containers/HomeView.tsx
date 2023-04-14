import React, { useContext, useEffect } from 'react';

import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

import { fetchSummary, fetchWorld } from '../../core/services/Covid19API';
import { totalHomeDatasets } from '../../core/services/totalHomeDatasets';
import { newHomeDatasets } from '../../core/services/newHomeDatasets';
import { filterWorldData } from '../../core/services/filterWorldData';
import { formatSummaryData } from '../../core/services/formatSummaryData';

import { Row } from 'react-bootstrap';

import { Loading } from '../../core/shared/Loading';
import { InfoMessage } from '../../core/shared/InfoMessage';
import AlertStats from '../components/AlertStats';
import TableStats from '../components/TableStats';
import ChartTabs from '../components/ChartTabs';

import { TitleContext } from '../../core/contexts/TitleContextProvider';

import { DatasetType } from '../../core/models/DatasetType';


type Props = {};

const HomeView = (props: Props) => {
  const { defaultTitle, updateTitle } = useContext(TitleContext);
  useEffect(() => {
    updateTitle(defaultTitle);
  }, [defaultTitle, updateTitle]);

  const {
    data: summaryResponse,
    error: summaryError,
    isLoading: summaryIsLoading,
  } = useQuery('summary', () => fetchSummary());
  const summaryData = React.useMemo(() => summaryResponse, [summaryResponse]);

  let { lastUpdated, confirmedCases, totalDeaths, totalRecovered } =
    formatSummaryData(summaryData);

  const {
    data: worldResponse,
    error: worldError,
    isLoading: worldIsLoading,
  } = useQuery('world', () => fetchWorld());

  let worldData = React.useMemo(() => worldResponse, [worldResponse]);

  const labels = worldData?.map((el) =>
    new Date(el.Date).toLocaleDateString('en-US')
  );

  let totalDatasets: DatasetType = totalHomeDatasets(worldData);

  // Fixed incorrect data for New Deaths/Recovered
  const fixedWorldData = filterWorldData(worldData);

  let { newConfirmedDataset, newRecoveredDataset, newDeathsDataset } =
    newHomeDatasets(fixedWorldData);

  return (
    <>
      <Row className="d-flex justify-content-center">
        <h1>Coronavirus Pandemic (COVID-19) - Statistics</h1>
        <p>
          Coronavirus disease 2019 (COVID-19) is a contagious disease caused by
          a virus, the severe acute respiratory syndrome coronavirus 2
          (SARS-CoV-2). The first known case was identified in Wuhan, China, in
          December 2019. The disease quickly spread worldwide, resulting in the
          COVID-19 pandemic.
        </p>
        <p>
          The symptoms of COVID-19 are variable but often include fever, cough,
          headache, fatigue, breathing difficulties, loss of smell, and loss of
          taste. Symptoms may begin one to fourteen days after exposure to the
          virus. At least a third of people who are infected do not develop
          noticeable symptoms. Of those who develop symptoms noticeable enough
          to be classified as patients, most (81%) develop mild to moderate
          symptoms (up to mild pneumonia), while 14% develop severe symptoms
          (dyspnea, hypoxia, or more than 50% lung involvement on imaging), and
          5% develop critical symptoms (respiratory failure, shock, or
          multiorgan dysfunction).
        </p>
      </Row>

      {(summaryIsLoading || worldIsLoading) && <Loading />}

      {summaryError instanceof AxiosError && (
        <InfoMessage messageType='danger'>{`${summaryError.message} (${summaryError.request.responseURL})`}</InfoMessage>
      )}
      {worldError instanceof AxiosError && (
        <InfoMessage messageType='danger'>{`${worldError.message} (${worldError.request.responseURL})`}</InfoMessage>
      )}

      {summaryData && worldData && labels && (
        <>
          <AlertStats
            lastUpdated={lastUpdated}
            confirmedCases={confirmedCases}
            totalDeaths={totalDeaths}
            totalRecovered={totalRecovered}
          />

          <h2>COVID-19 statistics charts</h2>
          <ChartTabs
            totalDatasets={totalDatasets}
            newConfirmedDataset={newConfirmedDataset}
            newRecoveredDataset={newRecoveredDataset}
            newDeathsDataset={newDeathsDataset}
            labels={labels}
          />

          <h2>COVID-19 statistics table for countries</h2>
          <TableStats data={summaryData} />
        </>
      )}
    </>
  );
};
export default HomeView;
