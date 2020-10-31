import { useState, useEffect } from 'react';
import { datadogLogs as DD } from '@datadog/browser-logs';
import { datadogRum as DDR } from '@datadog/browser-rum'

type DDArguments = Parameters<typeof DD.init>;
type DDRArguments = Parameters<typeof DDR.init>;

export const useDatadog = (...args: DDArguments) => {
    const [datadogLogs, setDatadogLogs] = useState<typeof DD>(DD);
    const silentMultipleInit = true;
    const newArgs = { silentMultipleInit, ...args };
    /* istanbul ignore next */ 
    useEffect(() => {
        DD.init.apply(null, newArgs);
        setDatadogLogs(DD);
    }, [...args]);
    return datadogLogs;
}

export const useDatadogRum = (...args: DDRArguments) => {
    const [datadogRum, setDatadogRum] = useState<typeof DDR>(DDR);
    const silentMultipleInit = true;
    const newArgs = { silentMultipleInit, ...args };
    /* istanbul ignore next */ 
    useEffect(() => {
        DDR.init.apply(null, newArgs);
        setDatadogRum(DDR);
    }, [...args]);
    return datadogRum;
}