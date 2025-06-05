/*
SELECT w2.id
FROM Weather w1
INNER JOIN Weather w2
ON w1.temperature < w2.temperature
AND DATEDIFF(w2.recordDate, w1.recordDate) = 1
*/