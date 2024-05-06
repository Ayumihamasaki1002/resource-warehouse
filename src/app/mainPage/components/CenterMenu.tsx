'use client';

import React from 'react';

import ArticlePage from './components/CenterMenu/ArticlePage';
export default function CenterMenu() {
  const centerStyles: React.CSSProperties = {
    width: '100%',
    height: '98%',
    marginTop: '2%',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)',
    borderRadius: '2px',
  };
  return (
    <>
      <div style={centerStyles}>
        <ArticlePage />
      </div>
    </>
  );
}
