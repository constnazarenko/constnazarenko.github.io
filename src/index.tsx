import * as React from "react";
import { Profiler, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

import App from "./app/App";
import { Index } from "./app/Loading";

import './index.scss';

const domNode = document.getElementById("root");
const root = createRoot(domNode);

function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
) {
  // Aggregate or log render timings...
  console.debug(id, phase, actualDuration, baseDuration, startTime, commitTime);
};

root.render(
  <Suspense fallback={<Index />}>
    <Profiler id="StrictMode" onRender={onRender}>
      <StrictMode>
        <App />
      </StrictMode>
    </Profiler>
  </Suspense>,
);
