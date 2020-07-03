import React from 'react';
import OutOfficeCalendar from './components/OutOfficeCalendar'
import './App.css';
import {CalendarEvent} from "./types/CalendarEvent";

function createTestEvent(id: number, personName: string) {
    return {
        id,
        personName: personName,
        authorId: personName,
        start: new Date(2020, 6, 3),
        end: new Date(2020, 6, 3)
    }
}

const testEvents: Array<CalendarEvent> = [
    createTestEvent(0, 'Test1'),
    createTestEvent(1, 'Test2'),
    createTestEvent(2, 'Test3'),
    createTestEvent(3, 'Test4'),
    createTestEvent(4, 'Test5'),
    createTestEvent(5, 'Test6'),
    createTestEvent(6, 'Test7'),
    createTestEvent(7, 'Test8'),
    createTestEvent(8, 'Test9'),
    createTestEvent(9, 'Test10')
]

function App() {
  return (
    <div className="App">
      <OutOfficeCalendar events={testEvents} />
    </div>
  );
}

export default App;
