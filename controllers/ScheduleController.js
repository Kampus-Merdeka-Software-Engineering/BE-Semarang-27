/* == GET ALL SESSION == */
// SELECT d.doctor_name, p.day, p.begin_hour, p.finish_hour FROM practic_schedules p JOIN doctors d ON p.doctor_id = d.doctor_id;
/*
    Result:
    dr. Endang Sukasari Monday  9   10
    dr. Endang Sukasari Monday  10   11
    dr. Endang Sukasari Monday  13   14
    ...
*/

/* == GET ONLY PRACTIC DAY == */
// SELECT DISTINCT d.doctor_name, p.day FROM practic_schedules p JOIN doctors D ON d.doctor_id = p.doctor_id;
/*
    Result:
    dr. Endang Sukasari Monday
    dr. Endang Sukasari Tuesday
    dr. Endang Sukasari Wednesday
    ...
*/

/* == GET ONLY SESSION TIME == */
// SELECT DISTINCT d.doctor_name, p.begin_hour, P.finish_hour FROM practic_schedules p JOIN doctors D ON d.doctor_id = p.doctor_id;
/*
    Result:
    dr. Endang Sukasari 9   10
    dr. Endang Sukasari 10  11
    dr. Endang Sukasari 13  14
    ...
*/

