'use client';
import React, { useState } from 'react';

import MainPage from './MainPage';
import ModifyPage from './ModifyPage';
import WareHouse from './WareHouse';

export default function RanderPage() {
  const [model] = useState<number>(1);
  const centerStyles: React.CSSProperties = {
    width: '100%',
    height: '96%',
    display: 'flex',
    justifyContent: 'left',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)',
    borderRadius: '2px',
    padding: '1%',
    marginTop: '2%',
    flexDirection: 'column',
  };

  return model === 1 ? (
    <div style={centerStyles}>
      <MainPage />
    </div>
  ) : model === 2 ? (
    <div style={centerStyles}>
      <ModifyPage />
    </div>
  ) : (
    <div style={centerStyles}>
      <WareHouse />
    </div>
  );
}
