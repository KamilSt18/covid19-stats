import React, { useState } from 'react';

import { Tabs, Tab } from 'react-bootstrap';

import LineChart from '../../country/components/LineChart';
import VerticalBarChart from '../../country/components/VerticalBarChart';

import { DatasetType } from '../../core/models/DatasetType';

type Props = {
  totalDatasets: DatasetType;
  newConfirmedDataset: DatasetType;
  newRecoveredDataset: DatasetType;
  newDeathsDataset: DatasetType;
  labels: string[];
};

const ChartTabs = ({
  totalDatasets,
  newConfirmedDataset,
  newRecoveredDataset,
  newDeathsDataset,
  labels,
}: Props) => {
  const [key, setKey] = useState('totalDatasets');
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k || '')}
      className="mb-3"
    >
      <Tab eventKey="totalDatasets" title="Total Datasets">
        <LineChart dataset={totalDatasets} labels={labels} />
      </Tab>
      <Tab eventKey="newConfirmedDataset" title="New Confirmed">
        <VerticalBarChart dataset={newConfirmedDataset} labels={labels} />
      </Tab>
      <Tab eventKey="newRecoveredDataset" title="New Recovered">
        <VerticalBarChart dataset={newRecoveredDataset} labels={labels} />
      </Tab>
      <Tab eventKey="newDeathsDataset" title="New Deaths">
        <VerticalBarChart dataset={newDeathsDataset} labels={labels} />
      </Tab>
    </Tabs>
  );
};

export default ChartTabs;
