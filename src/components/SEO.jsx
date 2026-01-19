import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, canonical }) => {
    const siteTitle = "Nataki Tax Consultancy | Expert Tax Planning & Compliance";
    const fullTitle = title ? `${title} | Nataki` : siteTitle;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description || "Nataki Tax Consultancy offers expert tax consulting, planning, and compliance services for individuals and small businesses. Book a free consultation today."} />
            {keywords && <meta name="keywords" content={keywords} />}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Nataki Tax Consultancy" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />

            {/* Schema.org LocalBusiness */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TaxService",
                    "name": "Nataki Tax Consultancy",
                    "image": "https://nataki-tax.com/logo.png",
                    "@id": "",
                    "url": "https://nataki-tax.com",
                    "telephone": "901-xxxx",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Memphis",
                        "addressLocality": "Memphis",
                        "region": "TN",
                        "addressCountry": "US"
                    },
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday"
                        ],
                        "opens": "09:00",
                        "closes": "18:00"
                    },
                    "sameAs": [
                        "https://www.facebook.com/taxpro",
                        "https://www.twitter.com/taxpro",
                        "https://www.linkedin.com/company/taxpro"
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
