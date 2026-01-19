import React from 'react';

const CalendlyEmbed = ({ url }) => {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="calendly-inline-widget w-full h-[600px] rounded-2xl overflow-hidden border border-slate-100"
            data-url={url}
        ></div>
    );
};

export default CalendlyEmbed;
