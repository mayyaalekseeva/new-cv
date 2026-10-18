// Job durations in months, counted inclusively like LinkedIn: Sep 2023 – Aug 2024 is 12 months.
// Dates are "YYYY-MM"; a missing end means the job is ongoing.

export interface Period {
  start: string;
  end?: string;
}

const toIndex = (yearMonth: string) => {
  const [year, month] = yearMonth.split('-').map(Number);
  return year * 12 + (month - 1);
};

const currentIndex = (now: Date) => now.getFullYear() * 12 + now.getMonth();

const range = ({ start, end }: Period, now: Date) => {
  const from = toIndex(start);
  const to = end ? toIndex(end) : currentIndex(now);
  return { from, to };
};

export const monthsIn = (period: Period, now = new Date()) => {
  const { from, to } = range(period, now);
  return to - from + 1;
};

// Overlapping months between jobs are counted once.
export const totalMonths = (periods: Period[], now = new Date()) => {
  const months = new Set<number>();
  periods.forEach((period) => {
    const { from, to } = range(period, now);
    for (let m = from; m <= to; m++) months.add(m);
  });
  return months.size;
};

export const formatMonths = (total: number) => {
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts = [];
  if (years) parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`);
  if (months) parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`);
  return parts.join(' ') || '1 mo';
};
