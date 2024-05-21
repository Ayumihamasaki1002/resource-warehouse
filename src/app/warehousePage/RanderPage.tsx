'use client';
import React, { useEffect, useState } from 'react';
const MainPage = React.lazy(() => import('./MainPage'));
const ModifyPage = React.lazy(() => import('./ModifyPage'));
const WareHouse = React.lazy(() => import('./WareHouse'));

import useWarehouseStore from '@/store/warehouse';

export default function RanderPage() {
  const { warehouseInfo } = useWarehouseStore();
  const [model, setModel] = useState<number>(3);
  useEffect(() => {
    if (warehouseInfo.flag !== undefined) setModel(warehouseInfo.flag);
    else setModel(3);
  }, [warehouseInfo.flag]);
  const centerStyles: React.CSSProperties = {
    width: '100%',
    height: '96%',
    display: 'flex',
    justifyContent: 'left',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)',
    borderRadius: '2px',
    padding: '2%',
    marginTop: '1%',
    flexDirection: 'column',
    lineHeight: '3em',
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
