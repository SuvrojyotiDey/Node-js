import os from 'os';
import config from '../config/config';
export default {
    getSystemHealth: () => {
        return {
            cpuUsage: os.loadavg(),
            totalMemory: `${os.totalmem() / 1024 / 1024} MB`,
            freeMemory: `${os.freemem() / 1024 / 1024} MB`
        };
    },
    getApplicationHealth: () => {
        return {
            environment: config.ENV,
            upTime: `${process.uptime().toFixed(2)} second`,
            memoryUsage: {
                heapTotal: `${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`,
                heapUsed: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`
            }
        };
    }
};