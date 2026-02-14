import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, image, url, type, schemas, noIndex, robots }) => {
    const siteTitle = "Cérès";
    const defaultDescription = "Découvrez votre horoscope mensuel personnalisé et les accompagnements de Priscilla Owona. Astrologie intuitive, soins énergétiques et clarté pour avancer.";
    const defaultImage = "https://ceresfrance.com/og-image.jpg"; // Generated programmatically
    const siteUrl = "https://ceresfrance.com";

    const metaDescription = description || defaultDescription;
    const metaImage = image || defaultImage;
    const metaTitle = title ? `${title} | ${siteTitle}` : `Priscilla Owona — Astrologue & Coach Intuitive | ${siteTitle}`;
    const metaUrl = url || siteUrl;
    const metaType = type || 'website';

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={metaUrl} />

            {/* Robots: noIndex prop takes precedence over robots string prop */}
            {noIndex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                robots ? <meta name="robots" content={robots} /> : null
            )}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={metaType} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:site_name" content="Cérès" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="fr_FR" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />

            {/* Structured Data (JSON-LD) */}
            {schemas && schemas.map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    type: PropTypes.string,
    schemas: PropTypes.arrayOf(PropTypes.object),
    noIndex: PropTypes.bool,
    robots: PropTypes.string,
};

export default SEO;
