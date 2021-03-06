## Datasketch - Data drawings based on build results

What we want to see:

+----------------------------------------+----------+------------------------------------+
|                              HOST NAME | OS TRAIN | BENCHMARK                          |
|    +-----------------------------------+----------+-----------------------------+      |
|    |                                                                            |      |
|    |                                                                            |      |
|    |    XXXXXXXXXX                     XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX           |      |
|    |   XX        X                  XXX                             XXXXX       |      |
|    |  XX          X                XX                                   XXXXXX  |      |
|    |  X           XXX           XXXX                                            |      |
|    | XX             XXXX   XXXXXX                                               |      |
|    |                   XXXX                                                     |      |
|    |                                                                            |      |
|    +----------------------------------------------------------------------------+      |
|                                                                                        |
|    +-------+-----------------------------------------+--------------------------+      |
|    |       |                                         |                          |      |
|    |    +  |  +                     +  +  +  +  +  + |  +                       |      |
|    |    |  |  |  +              +   |  |  |  |  |  | |  |         +             |      |
|    |    |  +  |  |           +  |   +  |  |  |  |  | +  |         |  +          |      |
|    |    |     |  |     +     |  |      +  |  |  |  +    |         |  |  +  +    |      |
|    |    +     +  |  +  |     |  |         +  +  +       +         |  |  |  | +  |      |
|    |             |  |  |     +  +                                 +  |  |  | +  |      |
|    |             +  +  +                                             +  +  +    |      |
|    |                                                                            |      |
|    +----------------------------------------------------------------------------+      |
|                                                                                        |
|    +------------------------+     +    +----------------------------------------+      |
|    |# BUILD 1 #             |     |    |                                        |      |
|    |1 | 100.7               |     |    |  HOST: sys001-kz-01  [Intel Kaby Lake] |      |
|    |2 | 102.3               |     |    |  OS TRAIN: S11.4                       |      |
|    |3 |  99.8               |     |    |  BENCHMARK: vdbench50406               |      |
|    +--+---------------------+     |    |  METRIC: vdb-rand-read-1000MB          |      |
|                                   |    |                                        |      |
|    +------------------------+     |    |  This metric measures the time taken   |      |
|    |# BUILD 2 #             |     |    |  to read 1000mb of data from raw disk. |      |
|    |1 | 101.7               |     |    |  Smaller is better                     |      |
|    |2 | 101.4               |     |    |                                        |      |
|    |3 |  97.8               |     |    |                                        |      |
|    +--+---------------------+     +    +----------------------------------------+      |
|                                                                                        |
|                                                                                        |
|                                                                                        |
+----------------------------------------------------------------------------------------+



