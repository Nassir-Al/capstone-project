import moment from 'moment';
import {useState} from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

import {
	CalenderContainer,
	Calender_selected_date,
} from '../components/styled.components/Calender.styled';

export default function App() {
	const [dateState, setDateState] = useState(new Date());
	const changeDate = e => {
		setDateState(e);
	};
	return (
		<CalenderContainer>
			<Calendar value={dateState} onChange={changeDate} />
			Current selected date is:{' '}
			<Calender_selected_date>
				{moment(dateState).format('DD.MM.YYYY')}
			</Calender_selected_date>
		</CalenderContainer>
	);
}
