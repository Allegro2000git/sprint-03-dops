import {memo} from 'react';
import {Container} from "./Container";

const CONTAINER_STYLES = {display: 'flex', flexDirection: 'column', gap: 10};

export const Task_1 = memo(() => {

  console.log('task1')

  return (
    <div style={{...CONTAINER_STYLES} as any}>
      <Container/>
    </div>
  );
})
