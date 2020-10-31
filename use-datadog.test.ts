import React from 'react';
import { renderToString } from 'react-dom/server';
import { useDatadog } from './use-datadog';

describe(useDatadog.name, () => {
    it('works syntactically inside a react component', () => {
        const log = jest.fn(() => 'hi');
        const component = function () {
            const {logger} = useDatadog({
                clientToken: 'pubxxx',
                site: 'datadoghq.com',
            });
            logger.log(log());
            
            return React.createElement('div', {children: 'Hello :]'});
        }
        const result = React.createElement(component);
        const html = renderToString(result);
        expect(component).toBeDefined();
        expect(result).toBeDefined();
        expect(html).toContain('Hello');
        expect(log).toHaveBeenCalled();
    });
});
