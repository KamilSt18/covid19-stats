import React, { useContext, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

import { fetchTotalByCountry } from '../../core/services/Covid19API';
import { totalCountryDatasets } from '../../core/services/totalCountryDatasets';

import { Loading } from '../../core/shared/Loading';
import { InfoMessage } from '../../core/shared/InfoMessage';

import LineChart from '../components/LineChart';
import SummaryCountry from '../components/SummaryCountry';

import { TitleContext } from '../../core/contexts/TitleContextProvider';

type Props = {};

const CountryView = (props: Props) => {
  const { defaultTitle, updateTitle } = useContext(TitleContext);
  const { code } = useParams();

  const { data, error, isLoading } = useQuery(`total:${code}`, () =>
    fetchTotalByCountry(code || '')
  );

  useEffect(() => {
    data && updateTitle(`${defaultTitle} - ${code}`);
  }, [code, defaultTitle, updateTitle, data]);

  const countryData = React.useMemo(() => data, [data]);

  const summaryByCountry = countryData?.at(-1);

  const labels = countryData?.map((el) =>
    new Date(el.Date).toLocaleDateString('en-US')
  );

  let { totalCasesActiveDataset, totalRecoveredDeathsDataset } =
    totalCountryDatasets(countryData);

  return (
    <>
      {isLoading && <Loading />}

      {error instanceof AxiosError && (
        <InfoMessage messageType='danger'>{`${error.message} (${error.request.responseURL})`}</InfoMessage>
      )}

      {summaryByCountry && labels && code && (
        <>
          <SummaryCountry
            summaryByCountry={summaryByCountry}
            code={code.toUpperCase()}
          />

          <h2>Total Coronavirus Cases/Active in {summaryByCountry.Country}</h2>
          <LineChart dataset={totalCasesActiveDataset} labels={labels} />
          <h2>Total Recovered/Deaths in {summaryByCountry.Country}</h2>
          <LineChart dataset={totalRecoveredDeathsDataset} labels={labels} />
        </>
      )}
    </>
  );
};
export default CountryView;
