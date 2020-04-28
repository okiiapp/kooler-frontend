import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Platform,
  Text,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

class DatePickerReact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(this.props.date),
    };
  }

  render() {
    const { onClose, onChange } = this.props;
    const { date } = this.state;
    return (
      <TouchableOpacity
        style={[
          stylesDatePicker.containerTouch,
          Platform.OS === 'ios'
            ? stylesDatePicker.colorIos
            : stylesDatePicker.colorNotIos,
        ]}
        onPress={onClose}>
        {Platform.OS === 'ios' && (
          <View style={stylesDatePicker.containerHeader}>
            <TouchableOpacity onPress={onClose}>
              <Text>Done</Text>
            </TouchableOpacity>
          </View>
        )}
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(e, d) => {
            if (Platform.OS === 'ios') {
              this.setState({ date: d });
              onChange(d);
            } else {
              onClose(d);
            }
          }}
          style={{ backgroundColor: 'white' }}
        />
      </TouchableOpacity>
    );
  }
}

const stylesDatePicker = StyleSheet.create({
  containerHeader: {
    width: '100%',
    padding: 16,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  containerTouch: {
    position: 'absolute',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
  colorIos: {
    backgroundColor: '#00000066',
  },
  colorNotIos: {
    backgroundColor: 'transparent',
  },
});

export default DatePickerReact;
