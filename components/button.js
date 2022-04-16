import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
export const TimerButton = (props) => {
  // alert(props.mins);
  const [hrs, setHrs] = React.useState(0);
  const [mins, setMins] = React.useState(10);
  const [secs, setSecs] = React.useState(`02`);
  const decreaseTime = () => {
    if (hrs == 0 && mins == 0 && secs == 0);
    else if (mins == 0 && secs == 0) {
      setHrs(hrs - 1);
    }
    else if (secs == 0) {
      if (parseInt(mins) === 10) {
        setMins(`09`);
      } 
    else {
        if (mins-1 < 10) {
          if (!(mins-1).toString().startsWith('0') || mins-1 == '0') {
            setMins(`0${mins}`);
          }
        }
        setMins(mins - 1);
      }
      setSecs(59);
    } else {
      if (parseInt(secs) < 10) {
        if (!secs.toString().startsWith('0') || secs == '0') {
          setSecs(`0${parseInt(secs)}`);
        }
        if (secs.toString().startsWith('0')) {
          setSecs(`0${parseInt(secs) - 1}`);
        }
      } else {
        if (parseInt(secs) === 10) {
          setSecs(`09`);
        } else {
          setSecs(secs - 1);
        }
      }
    }
    if (mins < 10) {
      if (!mins.toString().startsWith('0') || mins == '0') {
        setMins(`0${mins}`);
      }
    }
  };
  const tapped = () => {
    console.log("tappedx")
    if (props.color == 'white' && props.prun) {
      props.psetRun(false);
    } else {
      if (props.prun) props.psetRun(true);
    }
  };
  React.useEffect(() => {
    if (props.prun) {
      const timerId = setInterval(() => decreaseTime(), 1000);
      return () => clearInterval(timerId);
    }
  });
  return (
    <TouchableOpacity style={{ ...styles.timerButton, backgroundColor: `${props.color}` }} onPress={()=>tapped()} activeOpacity={1.0}>
        <Text style={{ ...styles.timeText, color: `${props.fontc}` }}>
          {hrs == 0 ? `${mins}:${secs}` : `${hrs}:${mins}:${secs}`}
        </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  timerButton: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeText: {
    fontSize: 60,
  },
});
