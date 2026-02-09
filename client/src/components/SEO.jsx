
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type }) => {
    return (
        <Helmet>
            { /* Standard metadata tags */}
            <title>{title} | Adzenity</title>
            <meta name='description' content={description} />
            
            { /* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            
            { /* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
}

SEO.defaultProps = {
    title: 'Digital Marketing Agency',
    description: 'Adzenity helps businesses grow with data-driven SEO, PPC, and Web Development strategies.',
    name: 'Adzenity',
    type: 'website'
};

export default SEO;
