import moment from 'moment';

const dateFormat = date => moment(date, 'YYYYMMDD').fromNow();

export default dateFormat;
