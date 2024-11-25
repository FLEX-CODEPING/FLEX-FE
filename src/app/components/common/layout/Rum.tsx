'use client';

import { datadogRum } from '@datadog/browser-rum';
import { PropsWithChildren } from 'react';

datadogRum.init({
  applicationId: process.env.NEXT_PUBLIC_APPLICATION_ID as string,
  clientToken: process.env.NEXT_PUBLIC_CLIENT_TOKEN as string,
  site: 'ap1.datadoghq.com',
  service: 'nextjs-with-datalog',
  env: 'dev',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
});

const Rum = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};
export default Rum;
