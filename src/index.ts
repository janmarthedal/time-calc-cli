import { DateTime } from 'luxon';

const FROM_EPOCH_SECONDS = 'from-s';
const FROM_EPOCH_MILLISECONDS = 'from-ms';
const CONV_TIME = 'conv-time';

function parseTimeWithTZ(time: string): DateTime | null {
    const dt = DateTime.fromISO(time, { zone: 'UTC' });
    if (dt.isValid && +dt !== +DateTime.fromISO(time, { zone: 'UTC+1' })) {
        return null;
    }
    return dt;
}

if ((process.argv.length === 4 || process.argv.length === 5) && process.argv[2] === FROM_EPOCH_SECONDS) {
    const epoch = +process.argv[3];
    const zone = process.argv[4] || 'UTC';
    const dt = DateTime.fromSeconds(epoch, { zone });
    console.log(dt.toISO());
} else if ((process.argv.length === 4 || process.argv.length === 5) && process.argv[2] === FROM_EPOCH_MILLISECONDS) {
    const epoch = +process.argv[3];
    const zone = process.argv[4] || 'UTC';
    const dt = DateTime.fromMillis(epoch, { zone });
    console.log(dt.toISO());
} else if (process.argv.length === 5 && process.argv[2] === CONV_TIME) {
    const time = process.argv[3];
    const dt = parseTimeWithTZ(time);
    if (!dt) {
        console.error('Time must contain timezone');
    } else if (!dt.isValid) {
        console.error(`Invalid time: ${time}`);
    } else {
        const zone = process.argv[4];
        console.log(dt.setZone(zone).toISO());
    }
} else {
    console.log('Usage:');
    console.log(`    time-calc ${FROM_EPOCH_SECONDS} <epoch-s> [timezone]`);
    console.log(`    time-calc ${FROM_EPOCH_MILLISECONDS} <epoch-ms> [timezone]`);
    console.log(`    time-calc ${CONV_TIME} <time-with-tz> <timezone>`);
}
