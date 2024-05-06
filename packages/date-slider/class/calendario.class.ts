import { Language } from '../enums/language.enum';
import { Dia } from '../interfaces/dias.interface';
import { CalendarMonth } from '../interfaces/meses.interface';

export class Calendario {
  private static readonly MONTHS_ENGLISH: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  private static readonly MONTHS_SPANISH: string[] = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  private static readonly MONTHS_RUSSIAN: string[] = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

  private static readonly DAYS_ENGLISH: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  private static readonly DAYS_SPANISH: string[] = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

  private static readonly DAYS_RUSSIAN: string[] = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

  private year: number;

  constructor(year: number) {
    this.year = year;
  }

  private getMonthDays(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  private getMonthData(year: number, month: number, language: string): CalendarMonth {
    const monthDays: CalendarMonth = { id: '', monthName: '', days: [], isSelected: false };
    const monthNames = language === 'en' ? Calendario.MONTHS_ENGLISH : language === 'es' ? Calendario.MONTHS_SPANISH : Calendario.MONTHS_RUSSIAN;

    monthDays.id = `${year}-${month + 1}`;
    monthDays.monthName = monthNames[month];

    const daysInMonth = this.getMonthDays(year, month);

    for (let i = 1; i <= daysInMonth; i++) {
      const fullDate = new Date(year, month, i);
      const dayName = language === 'en' ? Calendario.DAYS_ENGLISH[fullDate.getDay()] : language === 'es' ? Calendario.DAYS_SPANISH[fullDate.getDay()] : Calendario.DAYS_RUSSIAN[fullDate.getDay()];
      const day: Dia = {
        id: i,
        dayNum: i,
        dayName: dayName,
        fullDate: fullDate,
        isSelected: false,
        isCurrentDate: this.fechasSonIguales(new Date(), fullDate),
      };
      monthDays.days.push(day);
    }
    return monthDays;
  }

  public fechasSonIguales(fecha1: Date, fecha2: Date): boolean {
    return fecha1.getFullYear() === fecha2.getFullYear() && fecha1.getMonth() === fecha2.getMonth() && fecha1.getDate() === fecha2.getDate();
  }

  public getCalendar(language: string): CalendarMonth[] {
    const calendar: CalendarMonth[] = [];
    const mes: number = new Date().getMonth();
    for (let month = 0; month < 12; month++) {
      calendar.push(this.getMonthData(this.year, month, language));
      calendar[month].isSelected = month == mes;
    }
    return calendar;
  }

  public selectDay(year: number, month: number, day: number, language: string): void {
    const monthData = this.getMonthData(year, month, language);
    const dayToSelect = monthData.days.find((d) => d.dayNum === day);
    if (dayToSelect) {
      dayToSelect.isSelected = true;
    }
  }

  public error_view(language: Language): string {
    if (language == Language.ENGLISH) {
      return 'View not support, see Shape interface';
    } else if (language == Language.SPANISH) {
      return 'Vista no soportada, lee la interface de Shape';
    } else {
      return 'Неподдерживаемый вид, см. интерфейс Shape.';
    }
  }
}
