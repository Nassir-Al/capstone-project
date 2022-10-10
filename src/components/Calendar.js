import moment from 'moment';
import {useState} from 'react';
import Calendar from 'react-calendar';

import {CalenderContainer} from './Calender.styled';

export default function App() {
	const [dateState, setDateState] = useState(new Date());
	const changeDate = e => {
		setDateState(e);
	};
	return (
		<CalenderContainer>
			<Calendar value={dateState} onChange={changeDate} />
			Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b>
		</CalenderContainer>
	);
}