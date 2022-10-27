import moment from 'moment';

const previousMonthDate = () => {
	const currentDate = moment().format('YYYY-MM-DD');

	const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
	const splitDate = currentDate.split('-');
	const indexPreviousMonth = month.indexOf(splitDate[1]) - 1;

	const previous = [splitDate[0], indexPreviousMonth === -1 ? '12' : month[indexPreviousMonth], splitDate[2]];

	return previous.join('-');
};

export default previousMonthDate;
