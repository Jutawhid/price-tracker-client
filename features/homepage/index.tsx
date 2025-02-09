import React from 'react';
import HeroImage from './hero-image';
import RecentTrackProduct from './recent-product';
import PageContainer from '@/components/layout/page-container';
import PopularProducts from './popular-products';

function HomepageComponent() {
  return (
    <PageContainer scrollable>
      <HeroImage />
      <RecentTrackProduct />
      <PopularProducts/>
    </PageContainer>
  );
}

export default HomepageComponent;
