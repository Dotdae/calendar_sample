import { Component, OnInit } from '@angular/core';
import dayjs from 'dayjs';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})

export class CalendarComponent implements OnInit {
  mesActual: any;
  diasMes: (number | null)[] = [];
  diasSemana: string[] = ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sáb'];
  hoy: any;

  constructor() {
    this.mesActual = dayjs(); // Inicializa el mes actual
    this.hoy = dayjs();
    this.diasMes = [];
  }

  ngOnInit(): void {
    this.generarCalendario();
  }

  // Genera los días del mes actual
  generarCalendario(): void {
    const inicioMes = this.mesActual.startOf('month').day(); // Día de la semana en que comienza el mes
    const diasMes = this.mesActual.daysInMonth(); // Cantidad de días en el mes
    this.diasMes = [];

    // Agrega días en blanco al inicio
    for (let i = 0; i < inicioMes; i++) {
      this.diasMes.push(null);
    }

    // Agrega los días reales
    for (let i = 1; i <= diasMes; i++) {
      this.diasMes.push(i);
    }
  }

  // Cambiar al mes anterior
  prevMonth(): void {
    this.mesActual = this.mesActual.subtract(1, 'month');
    this.generarCalendario();
  }

  // Cambiar al mes siguiente
  nextMonth(): void {
    this.mesActual = this.mesActual.add(1, 'month');
    this.generarCalendario();
  }

  // Verifica si es el día actual
  isToday(day: number): boolean {
    return this.hoy.isSame(this.mesActual.date(day), 'day');
  }
}
