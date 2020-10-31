import { useState, useEffect } from 'react';
import { datadogLogs as DD } from '@datadog/browser-logs'

type DDArguments = Parameters<typeof DD.init>;

export const useDatadog = (...args: DDArguments) => {
    const [datadogLogs, setDatadogLogs] = useState<typeof DD>(DD);
    useEffect(() => {
        DD.init(...args);
        setDatadogLogs(DD);
    }, []);
    return datadogLogs;
}