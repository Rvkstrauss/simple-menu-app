//import { logger } from '@libs/express-zone';
import * as dotenv from 'dotenv';

function isTrustedError(error) {
  return error.isOperational;
}

process.on('uncaughtException', (error: any) => {
  try {
    console.error('[uncaughtException]', error);

    /*const { correlationId } = logger.log(
      'error',
      'Uncaught Exception %s',
      error,
    );*/

    //console.error('[uncaughtException correlationId]: ', correlationId);

    if (!isTrustedError(error)) {
      process.nextTick(() => process.exit());
    }
  } catch (e) {
    console.log(
      `*** \n[uncaughtException catch e] ${e}\n[uncaughtException error] ${error} \n ***`,
    );
    process.nextTick(() => process.exit(1));
  }
});

let path = '.env';

if (
  process.env.DEBUG_ENV &&
  process.env.DEBUG_ENV.length > 0 &&
  process.env.DEBUG_ENV.toLocaleLowerCase() !== 'development'
) {
  path = `.${process.env.DEBUG_ENV}.env`;
}

dotenv.config({ path });
