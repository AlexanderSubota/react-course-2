import moment from 'moment';
import {
    sortByAmount,
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByDate
} from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });

});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SET_SORT_BY_DATE'
    });
});

test('should generate sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SET_SORT_BY_AMOUNT'
    });
});

test('should set text filter action object', () => {
    const action = setTextFilter('test text');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        payload: {
            text: 'test text'
        }
    });
});

test('should set text filter with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        payload: {
            text: ''
        }
    });
});