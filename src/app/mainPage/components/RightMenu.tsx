'use client';
import React from 'react';

import LineCard from './components/RightMenu/LineCard';
import NoticeCard from './components/RightMenu/NoticeCard';
import UserCard from './components/RightMenu/UserCard';
export default function RightMenu() {
  return (
    <>
      <UserCard />
      <NoticeCard />
      <LineCard />
    </>
  );
}
