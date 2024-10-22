import HeaderFooter from '@/components/HeaderFooter';
import Body from '@/components/Questions/Body';
import React from 'react';

export default function Questions() {
  return (
    <HeaderFooter>
      <div className="flex flex-1">
        <Body />
      </div>
    </HeaderFooter>
  );
}
