/* eslint-disable no-console */

type BodyProps = {
  message: string;
  path?: readonly (string | number)[] | undefined;
  locations:
    | readonly {
        line: number;
        column: number;
      }[]
    | undefined;
};

const s = {
  h: 'background-color: #5d3434; color: white; font-weight: bold;',
  m: 'color: red; border: 1px solid grey;',
  t: 'background-color: #3A3A3A; padding: 0 3px; border: 1px solid grey;',
};

const consoleLogGroupError = {
  header: (): void =>
    console.group('%c================ start [GraphQL error] ================', s.h),
  body: ({ message, path, locations }: BodyProps): void => {
    console.group('%c%s', s.m, message);
    console.log('%cPath: %OLocations:%O', s.t, path, locations);
    console.log(
      '%cPath: %OLocations:%O',
      s.t,
      JSON.stringify(path),
      JSON.stringify(locations)
    );
    console.error('-- errors chain --');
    console.groupEnd();
  },
  footer: (): void => {
    console.groupEnd();
    console.log('%c========================= end =========================', s.h);
  },
};

export default consoleLogGroupError;
