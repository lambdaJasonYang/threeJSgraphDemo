# React-fiber-3js network graph attempt

* GOAL: Check to see if react-fiber-3js can be used as a viable 2d network graph library

Each object is 2 circles connected by a line.


| Test | Observation|
| ----- | --- |
| 1000 objects: 2000 circles + 1000 lines | works |
| 3000 objects: 6000 circles + 3000 lines | works |
| 5000 objects: 10000 circles + 5000 lines  | lags |
| 10000 objects: 20000 circles + 10000 lines  | 1 minute load time, super lag |

Conclusion: Not viable  