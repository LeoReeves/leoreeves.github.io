import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import ContactForm from '../components/contact-form/contact-form';
import Header from '../components/header/header';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={['Leo Reeves', 'portfolio', 'contact']} />
    <Header
      primaryHeading={'Let’s chat!'}
      secondaryHeading={'Reach out for help with a project or just to say hello!'}
    />
    <ContactForm />
  </Layout>
)

export default ContactPage;
