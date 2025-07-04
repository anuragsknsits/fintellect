// Meta.jsx
import { Helmet } from 'react-helmet';

const Meta = ({ title = 'FINTELLECT | Smart Tax Filing & CA Services', description = 'FINTELLECT is your intelligent financial partner for tax filing, GST, and ITR services. Trusted by professionals and businesses.' }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />

    {/* Open Graph Meta Tags */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://fintellect.in" />
    <meta property="og:image" content="%PUBLIC_URL%/fintellect-og.png" />

    {/* Twitter Card Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="%PUBLIC_URL%/fintellect-og.png" />
  </Helmet>
);

export default Meta;
