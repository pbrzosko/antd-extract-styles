import { extractStyle } from '@ant-design/static-style-extract';
import { ConfigProvider } from 'antd';
import type { ReactNode } from 'react';
import React from 'react';

const css = extractStyle((node: ReactNode) => (
  <ConfigProvider>{node}</ConfigProvider>
));

console.log("Extracted", !!css.length);
