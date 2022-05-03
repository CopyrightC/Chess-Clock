import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props{
  color : string;
  fontc : string;
  prun : boolean;
  psetRun : React.Dispatch<React.SetStateAction<boolean>>;
  paused : boolean;
}

const TimerButton:React.FC<Props> = ({
  color,
  fontc,
  prun,
  psetRun,
  paused
  }) => {
  // alert(props.mins);
  const [hrs, setHrs] = React.useState(0);
  const [mins, setMins] = React.useState<number | string>(10);
  const [secs, setSecs] = React.useState<number | string>(`02`);
  const decreaseTime = () => {

    if (hrs == 0 && mins == 0 && secs == 0){console.log("over");}

    else if (mins == 0 && secs == 0) {
      setHrs(hrs - 1);
    }

    else if (secs == 0) {
      if ((mins as number) === 10) {
        setMins(`09`);
      } 

      else {
          if ((mins as number)-1 < 10) {
            if (!((mins as number)-1).toString().startsWith('0') || ((mins as number)-1).toString() == '0') {
              setMins(`0${mins}`);
            }
          }
          setMins((mins as number) - 1);
        }
        setSecs(59);
    } 

    else {
      if ((secs as number) < 10) {
        if (!secs.toString().startsWith('0') || secs == '0') {
          setSecs(`0${(secs as number)}`);
        }
        if (secs.toString().startsWith('0')) {
          setSecs(`0${(secs as number) - 1}`);
        }
      } else {
        if ((secs as number) === 10) {
          setSecs(`09`);
        } else {
          setSecs((secs as number) - 1);
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
    if(!paused){
      if (color == 'white' && prun) {
        psetRun(false);
      } else {
        if (prun) psetRun(true);
      }
    }
  };
  React.useEffect(() => {
    if (prun && !paused) {
      const timerId = setInterval(() => decreaseTime(), 1000);
      return () => clearInterval(timerId);
    }
  });
  return (
    <TouchableOpacity style={{ ...styles.timerButton, backgroundColor: `${color}` }} onPress={()=>tapped()} activeOpacity={1.0}>
        <Text style={{ ...styles.timeText, color: `${fontc}` }}>
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

export {TimerButton};