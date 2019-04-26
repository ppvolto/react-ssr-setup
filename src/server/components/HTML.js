/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

export default class HTML extends React.Component {
    static propTypes = {
        children: PropTypes.string.isRequired,
        scripts: PropTypes.arrayOf(PropTypes.string).isRequired,
        css: PropTypes.arrayOf(PropTypes.string).isRequired,
        state: PropTypes.string.isRequired,
    };

    static defaultProps = {
        css: [],
        scripts: [],
        state: '{}',
    };

    render() {
        const head = Helmet.renderStatic();
        const { children, scripts, css, state } = this.props;
        return (
            <html lang="">
                <head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {head.base.toComponent()}
                    {head.title.toComponent()}
                    {head.meta.toComponent()}
                    {head.link.toComponent()}
                    {head.script.toComponent()}
                    {css.map((href) => {
                        return <link key={href} rel="stylesheet" href={href} />;
                    })}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.__PRELOADED_STATE__ = ${state}`,
                        }}
                    />
                </head>
                <body>
                    <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
                    {scripts.map((src) => {
                        return <script key={src} src={src} />;
                    })}
                </body>
            </html>
        );
    }
}
