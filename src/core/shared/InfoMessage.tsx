import React from 'react';

import { clsx } from 'clsx';

import { InfoMessageType } from '../models/InfoMessageType';

export const InfoMessage = ({ children: message, messageType }: InfoMessageType) => {
  return <p className={clsx('alert', messageType &&  `alert-${messageType}`, 'my-2')}>{message}</p>;
};
