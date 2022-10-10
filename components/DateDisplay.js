import React from 'react';
import DatePicker from "react-native-datepicker";
import moment from 'moment';
import {connect} from 'react-redux';


function mapStateToProps(state){
    return {
        date: state.date,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dateSelected: (date) => dispatch({type: 'DATE_SELECTED', payload: {date}}),
    }
}

class DateDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.date === null){
            const value = moment(new Date()).format("Do MMMM YYYY");
            this.props.dateSelected(value);
        }
    }

    render() {
        return(
            <DatePicker
                style={{width: 300}}
                date={this.props.date}
                mode="date"
                placeholder={this.props.date}
                format="Do MMMM YYYY"
                showIcon={false}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateInput: {
                        alignSelf: 'center',
                        borderWidth: 0,
                        borderColor: 'transparent',
                    },
                    placeholderText: {
                        color: '#15CDCD',
                        fontSize: 18,
                        fontWeight: '500',
                    },
                    dateText: {
                        color: '#15CDCD',
                        fontSize: 18,
                        fontWeight: '500',
                    },
                }}
                onDateChange={(date) => {
                    //this.props.dateSelected(date);
                    return null;
                }}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateDisplay);