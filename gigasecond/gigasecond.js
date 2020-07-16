export const GIGASECOND = 10**9;

export const toMilliseconds = timeInSeconds => timeInSeconds * 1000;

export const gigasecond = start => {
    let date = start.getTime();
    let endDate = new Date(date + toMilliseconds(GIGASECOND));
    return endDate;
  };

  