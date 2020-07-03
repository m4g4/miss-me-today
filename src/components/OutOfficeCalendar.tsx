import React from 'react'
import {Calendar, momentLocalizer, stringOrDate} from 'react-big-calendar'
import moment from 'moment'
import ColorHash from 'color-hash'
// @ts-ignore
import contrast from 'contrast'

import {CalendarEvent} from "../types/CalendarEvent"

import 'react-big-calendar/lib/css/react-big-calendar.css'
import {FontWeightProperty} from "csstype";

const localizer = momentLocalizer(moment)

function OutOfOfficeCalendar(props: CalendarProps) {

    function prepareEvents(events: Array<CalendarEvent>) :Array<BigCalendarEvent> {
        return events.map(e => {
            return {
                id: e.id,
                title: e.personName,
                allDay: true,
                start: e.start,
                end: e.end,
                authorId: e.authorId
            }
        })
    }

    function eventStyleGetter (event: BigCalendarEvent, start: stringOrDate, end: stringOrDate, isSelected: boolean) {

        const bgColor = new ColorHash().hex(event.authorId);
        const color = contrast(bgColor) === 'light' ? '#222222' : '#ffffff';

        return {
            style: {
                backgroundColor: new ColorHash().hex(event.authorId),
                borderRadius: '0px',
                opacity: 0.8,
                color: color,
                border: '0px',
                display: 'block'
            }
        };
    }

    const events: BigCalendarEvent[] = prepareEvents(props.events)

    return (
        <div style={{height: '100%'}}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                eventPropGetter={eventStyleGetter}
            />
        </div>
    );
}

type CalendarProps = {
    events: Array<CalendarEvent>,
}

export type BigCalendarEvent = {
    id: number,
    title: string,
    allDay?: boolean,
    start: Date,
    end: Date,
    authorId: string
}

export default OutOfOfficeCalendar