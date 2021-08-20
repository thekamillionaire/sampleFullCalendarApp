import {initializeBlock} from '@airtable/blocks/ui';
import React from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function SampleApp() {
    // YOUR CODE GOES HERE
    return (
    <FullCalendar
        plugins={[dayGridPlugin]}
        headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth'
        }}
        initialView='dayGridMonth'
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
  />
  )
}

initializeBlock(() => <SampleApp />);
