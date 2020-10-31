# use-datadog
:dog: use datadog from a hook
[![Build Status](https://travis-ci.org/EmmaRamirez/use-datadog.svg?branch=main)](https://travis-ci.org/EmmaRamirez/use-datadog) [![Coverage Status](https://coveralls.io/repos/github/EmmaRamirez/use-datadog/badge.svg?branch=main)](https://coveralls.io/github/EmmaRamirez/use-datadog?branch=main) ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/emmaramirez/use-datadog)

## Usage

```bash
npm i use-datadog
```

```javascript
import { useDatadog } from 'use-datadog';
import { StatusType } from '@datadog/browser-logs';

export function DogText ({ context }) {
    // destructure any method from `datadogLogs`
    const {logger} = useDatadog({
        // accepts any arguments that `datadogLogs` does
        clientToken: '<CLIENT_TOKEN>',
        site: '<DATADOG_SITE>',
    });
    logger.log('Log a result to datadog', context, StatusType.info);
    
    return <div>🐕</div>
}
```

```javascript
const DogText = () => {
    // destructure any method from `datadogRum`
    const {addRumGlobalContext} = useDatadogRum({
        // accepts any arguments that `datadogRum` does
        clientToken: '<CLIENT_TOKEN>',
        applicationId: '<APP_ID>',
    });
    
    addRumGlobalContext('Poodle', { poodle: '🐩' });
    
    return <div>🐕</div>
}
```

## Gotchas

Note that the `silentMultipleInit` argument is automatically passed during initialization, but can be overwritten.


## Motivation

In some contexts, a server-side rendered React application will not have access to the `window` object, which causes a silent failure in Datadog. This library seeks to remedy that by placing it in a useEffect wrapper. The resulting destructuring from the hook is nice too.