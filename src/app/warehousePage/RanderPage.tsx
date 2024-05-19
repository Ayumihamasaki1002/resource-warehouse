'use client';
import React from 'react';

import ModifyPage from './ModifyPage';

export default function RanderPage() {
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
  return (
    <div style={centerStyles}>
      <ModifyPage />
    </div>
  );
}
