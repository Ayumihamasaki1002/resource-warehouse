'use client';

import React from 'react';

import WarehouseDatail from './components/CenterMenu/WarehouseDatail';
export default function CenterMenu() {
  const centerStyles: React.CSSProperties = {
    width: '100%',
    height: '96%',
    marginLeft: '2%',
    display: 'flex',
    justifyContent: 'left',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)',
    borderRadius: '2px',
    padding: '3%',
    marginTop: '2%',
  };
  return (
    <>
      <div style={centerStyles}>
        <WarehouseDatail />
      </div>
    </>
  );
}
