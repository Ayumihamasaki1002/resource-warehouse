'use client';
import React from 'react';

export default function UserInput() {
  const inputStyles: React.CSSProperties = {
    width: '100%',
    height: '96%',
    marginTop: '4%',
    marginLeft: '2%',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)',
    borderRadius: '2px',
  };
  return <div style={inputStyles}></div>;
}
