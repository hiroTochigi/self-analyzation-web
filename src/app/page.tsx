import HeaderFooter from '@/components/HeaderFooter';
import Body from '../components/Questions/Body';
import React from 'react';

export default function Home() {
  return (
    <HeaderFooter>
      <div className="flex flex-1">
        <Body />
      </div>
    </HeaderFooter>
  );
}
