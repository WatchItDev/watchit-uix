// REACT IMPORTS
import React, {
  useRef, useEffect, RefCallback, cloneElement, ReactElement,
  HTMLAttributes, MutableRefObject, FC
} from 'react';

// ===========================|| CLICK OUTSIDE LISTENER ||=========================== //

type FocusEvents = 'focusin' | 'focusout';
type MouseEvents = 'click' | 'mousedown' | 'mouseup';
type TouchEvents = 'touchstart' | 'touchend';
type Events = FocusEvent | MouseEvent | TouchEvent;

interface ClickOutsideListenerProps extends HTMLAttributes<HTMLElement> {
  onClickAway: (event: Events) => void
  focusEvent?: FocusEvents
  mouseEvent?: MouseEvents
  touchEvent?: TouchEvents
  children: ReactElement<any>
}

const ClickOutsideListener: FC<ClickOutsideListenerProps> = (props) => {
  const { children, onClickAway, focusEvent = 'focusin', mouseEvent = 'click', touchEvent = 'touchend' } = props
  const node = useRef<HTMLElement | null>(null);
  const bubbledEventTarget = useRef<EventTarget | null>(null);

  const handleChildRef = (childRef: HTMLElement) => {
    node.current = childRef;

    let { ref } = children as typeof children & {
      ref: RefCallback<HTMLElement> | MutableRefObject<HTMLElement>;
    };

    if (typeof ref === 'function') {
      ref(childRef);
    } else if (ref) {
      ref.current = childRef;
    }
  };

  useEffect(() => {
    const handleEvents = (event: Events): void => {
      if (
        (node.current && node.current.contains(event.target as Node)) ||
        bubbledEventTarget.current === event.target ||
        !document.contains(event.target as Node)
      ) {
        return;
      }

      onClickAway(event);
    };

    document.addEventListener(mouseEvent, handleEvents);
    document.addEventListener(touchEvent, handleEvents);
    document.addEventListener(focusEvent, handleEvents);

    return () => {
      document.removeEventListener(mouseEvent, handleEvents);
      document.removeEventListener(touchEvent, handleEvents);
      document.removeEventListener(focusEvent, handleEvents);
    };
  }, []);

  return React.Children.only(
    cloneElement(children as ReactElement<any>, { ref: handleChildRef })
  )
}

export default ClickOutsideListener;
