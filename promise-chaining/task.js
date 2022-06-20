promise.then(f1).catch(f2); // при ошибке в f1 может быть перехват.



promise.then(f1, f2); // отсутствует catch - ошибка не перехвачена