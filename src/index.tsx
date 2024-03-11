import * as React from 'react';
import { Profiler, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app/App';
import { Loading } from './app/Loading';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  // Aggregate or log render timings...
  // console.log(id, phase, actualDuration, baseDuration, startTime, commitTime);
  if (sessionStorage.getItem('showProfiler')) {
    const style =
      'background: rgba(0, 0, 128, 0.1); color: lightgray; font-size: 0.75rem; font-weight: bold; -webkit-text-stroke: 1px gray;';
    console.log(
      `%c${id}, ${phase}, actual: ${Math.round(actualDuration * 100) / 100}s, base: ${
        Math.round(baseDuration * 100) / 100
      }s, start: ${Math.round(startTime * 100) / 100}s, commit: ${Math.round(commitTime * 100) / 100}s `,
      style,
    );
  }
}

root.render(
  <Suspense fallback={<Loading />}>
    <Profiler id="StrictMode" onRender={onRender}>
      <StrictMode>
        <App />
      </StrictMode>
    </Profiler>
  </Suspense>,
);
export { useCallAPI } from './app/APICalls';
