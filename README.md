# use-datadog
:dog: use datadog from a hook

## Usage

```bash
npm i use-datadog
```

```javascript
import { useDatadog } from 'use-datadog';
import { StatusType } from '@datadog/browser-logs';

const component = function ({ context }) {
    const {logger} = useDatadog({
        // accepts any arguments that `datadogLogs` does
        clientToken: '<CLIENT_TOKEN>',
        site: '<DATADOG_SITE>',
    });
    logger.log('Log a result to datadog', context, StatusType.info);
    
    return <div>🐕</div>
}
```