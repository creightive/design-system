'use client'

// TODO: add date-fns as a dependency
import { ptBR } from 'date-fns/locale'
import { Calendar } from '@creight/ui/calendar'
// TODO: add useDate hook
import useDate from '../useDate'

export function CalendarDemo() {
  const { date, setDate } = useDate()

  return (
    <Calendar
      mode="single"
      locale={ptBR}
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}
