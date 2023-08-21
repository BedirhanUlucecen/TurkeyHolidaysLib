import aq from "@umalqura/core";

export default class TurkeyPublicHoliday {
  private getHijriYear(year: number): number {
    const diff = year - 622;
    const hijriYear = Math.round(diff / 0.97);
    return hijriYear;
  }

  addDaysToDate(date: Date, days: number): Date {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  }

  newYear(year: number): Date {
    return new Date(year, 0, 2);
  }

  nationalSovereigntyAndChildrensDay(year: number): Date {
    return new Date(year, 3, 24);
  }

  labourDay(year: number): Date {
    return new Date(year, 4, 2);
  }

  ramadanFirstDay(year: number): Date {
    const hijriFirstDate = aq(this.getHijriYear(year), 9, 2);
    let gregorianFirstDate = new Date(hijriFirstDate.date);

    if (gregorianFirstDate.getFullYear() !== year) {
      gregorianFirstDate = new Date(aq(this.getHijriYear(year - 1), 9, 2).date);
    }

    return gregorianFirstDate;
  }

  ramadanSecondDay(year: number): Date {
    return this.addDaysToDate(this.ramadanFirstDay(year), 1);
  }

  ramadanThirdDay(year: number): Date {
    return this.addDaysToDate(this.ramadanFirstDay(year), 2);
  }

  youthAndSportsDay(year: number): Date {
    return new Date(year, 4, 20);
  }

  feastOfSacrificeFirstDay(year: number): Date {
    const hijriFirstDate = aq(this.getHijriYear(year), 12, 11);
    let gregorianFirstDate = new Date(hijriFirstDate.date);

    if (gregorianFirstDate.getFullYear() !== year) {
      gregorianFirstDate = new Date(
        aq(this.getHijriYear(year - 1), 12, 11).date
      );
    }

    return gregorianFirstDate;
  }

  feastOfSacrificeSecondDay(year: number): Date {
    return this.addDaysToDate(this.feastOfSacrificeFirstDay(year), 1);
  }

  feastOfSacrificeThirdDay(year: number): Date {
    return this.addDaysToDate(this.feastOfSacrificeFirstDay(year), 2);
  }

  feastOfSacrificeFourthDay(year: number): Date {
    return this.addDaysToDate(this.feastOfSacrificeFirstDay(year), 3);
  }

  democracyAndNationalUnityDay(year: number): Date {
    return new Date(year, 6, 16);
  }

  victoryDay(year: number): Date {
    return new Date(year, 7, 31);
  }

  republicDay(year: number): Date {
    return new Date(year, 9, 30);
  }

  isPublicHoliday(dt: Date): boolean {
    return this.publicHolidays(dt.getFullYear()).some(
      (date) => date.getTime() === dt.getTime()
    );
  }

  publicHolidayNames(year: number): Map<Date, string> {
    const holidayNames = new Map<Date, string>();
    const values: [Date, string][] = [
      [this.newYear(year), "Yılbaşı Tatili"],
      [
        this.nationalSovereigntyAndChildrensDay(year),
        "Ulusal Egemenlik ve Çocuk Bayramı",
      ],
      [this.labourDay(year), "Emek ve Dayanışma Günü"],
      [this.ramadanFirstDay(year), "Ramazan Bayramı 1. Gün"],
      [this.ramadanSecondDay(year), "Ramazan Bayramı 2. Gün"],
      [this.ramadanThirdDay(year), "Ramazan Bayramı 3. Gün"],
      [this.youthAndSportsDay(year), "Atatürk’ü Anma, Gençlik ve Spor Bayramı"],
      [this.feastOfSacrificeFirstDay(year), "Kurban Bayramı 1. Gün"],
      [this.feastOfSacrificeSecondDay(year), "Kurban Bayramı 2. Gün"],
      [this.feastOfSacrificeThirdDay(year), "Kurban Bayramı 3. Gün"],
      [this.feastOfSacrificeFourthDay(year), "Kurban Bayramı 4. Gün"],
      [this.victoryDay(year), "Zafer Bayramı"],
      [this.republicDay(year), "Cumhuriyet Bayramı"],
    ];

    if (year >= 2017) {
      values.push([
        this.democracyAndNationalUnityDay(year),
        "Demokrasi ve Milli Birlik Günü",
      ]);
    }

    for (const [holidayDate, name] of values) {
      // If the date already exists in the map, append to the existing name
      if (holidayNames.has(holidayDate)) {
        const existingName = holidayNames.get(holidayDate);
        if (existingName) {
          holidayNames.set(holidayDate, `${existingName}, ${name}`);
        }
      } else {
        holidayNames.set(holidayDate, name);
      }
    }

    return holidayNames;
  }

  publicHolidays(year: number): Date[] {
    return Array.from(this.publicHolidayNames(year).keys()).sort(
      (a, b) => a.getTime() - b.getTime()
    );
  }
}
