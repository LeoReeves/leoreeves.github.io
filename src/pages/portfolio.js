import React from 'react';

import Header from '../components/header/header';
import Layout from '../components/layout/layout';
import PortfolioContent from '../components/portfolio/portfolio-content/portfolio-content';
import SEO from '../components/seo';

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={['Leo Reeves', 'portfolio', 'featured work']} />
    <Header
      primaryHeading={'Portfolio'}
      secondaryHeading={'Featured Work'}
    />
    <PortfolioContent />
  </Layout>
)

export default PortfolioPage;
