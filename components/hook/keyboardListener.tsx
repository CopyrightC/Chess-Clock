import {useState,useEffect} from 'react'
import { Keyboard } from 'react-native';

const KeyboardState = ():boolean => {
    const [isKeyboardOpen, setKeyboardOpen] = useState<boolean>(false);
  
    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
            setKeyboardOpen(true); 
        },
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
            setKeyboardOpen(false);
        },
      );
  
      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }, []);
  
    return isKeyboardOpen;
}

export {KeyboardState};