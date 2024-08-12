import { performance } from "perf_hooks";

export function measurePerformance(func: () => any, funcName: string) {
  // Measure memory before execution
  const memoryBefore = process.memoryUsage().heapUsed;

  // Measure CPU time before execution
  const cpuStart = process.hrtime();

  // Measure wall-clock time before execution
  const wallClockStart = performance.now();

  // Execute the function
  const result = func();

  // Measure memory after execution
  const memoryAfter = process.memoryUsage().heapUsed;

  // Measure CPU time after execution
  const cpuEnd = process.hrtime(cpuStart);

  // Measure wall-clock time after execution
  const wallClockEnd = performance.now();

  // Report the results
  console.log(`${funcName} results:`, result);
  console.log(
    `${funcName} memory usage: ${(memoryAfter - memoryBefore) / 1024} KB`
  );
  console.log(`${funcName} CPU time: ${cpuEnd[0]}s ${cpuEnd[1] / 1e6}ms`);
  console.log(
    `${funcName} wall-clock time: ${(wallClockEnd - wallClockStart).toFixed(
      2
    )} ms`
  );
}

const num = [1, 4, 5, 11, 2];
const target = 6;
