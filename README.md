
---

# Turkey Public Holidays

![npm version](https://img.shields.io/npm/v/turkish-holidays-lib)
![license](https://img.shields.io/npm/l/turkish-holidays-lib)

A utility library to calculate Turkey's public holidays based on the Gregorian calendar and Islamic Hijri calendar.

[Link to the npm page](https://www.npmjs.com/package/turkish-holidays-lib)

## Installation

You can install the package using npm:

```bash
npm install turkish-holidays-lib
```

## Usage

```javascript
import TurkeyPublicHoliday from 'turkish-holidays-lib';

const turkeyHolidays = new TurkeyPublicHoliday();

const year = 2023;

const holidayNames = turkeyHolidays.publicHolidayNames(year);
console.log(holidayNames);

const publicHolidays = turkeyHolidays.publicHolidays(year);
console.log(publicHolidays);

const isHoliday = turkeyHolidays.isPublicHoliday(new Date(2023, 0, 2));
console.log(isHoliday); // Should return true for New Year's Day
```

## API Reference

### `publicHolidayNames(year: number): Map<Date, string>`

Returns a Map of public holiday dates and their corresponding names for the given year.

### `publicHolidays(year: number): Date[]`

Returns an array of public holiday dates for the given year.

### `isPublicHoliday(dt: Date): boolean`

Checks if the given date is a public holiday.

### List of Supported Holidays

- New Year's Day
- National Sovereignty and Children's Day
- Labour and Solidarity Day
- Ramadan Bayram (Eid al-Fitr) Days
- Youth and Sports Day
- Feast of Sacrifice (Kurban Bayram) Days
- Victory Day
- Republic Day
- Democracy and National Unity Day (Since 2017)

## License

This project is licensed under the [MIT License](LICENSE).

---

