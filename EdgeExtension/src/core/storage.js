/* Context VK.RU · m3 · src/core/storage.js — ЗАТЫЧКА (TASK-0100).
 * Хранилище картотеки. ФАЙЛ-ПЕРВИЧНО: источник данных — data/zapiski.json,
 * а не chrome.storage.local. Chrome-storage — лишь кэш/зеркало файла.
 *
 * API (контракт, логика не заполнена):
 *   loadDb()      -> Promise<Db>            прочитать базу (из файла/кэша)
 *   saveDb(db)    -> Promise<void>          записать базу (файл первичен)
 *   exportFile(db)-> Promise<Blob|string>   экспорт базы в файл (JSON)
 */
(function () {
  "use strict";

  function loadDb() {
    // TODO(m3): чтение data/zapiski.json (файл-первично) + зеркалирование в кэш.
    return Promise.resolve({ version: 1, cards: [] });
  }

  function saveDb(db) {
    // TODO(m3): запись в data/zapiski.json (файл первичен).
    return Promise.resolve();
  }

  function exportFile(db) {
    // TODO(m3): сериализация базы в файл для экспорта.
    return Promise.resolve(JSON.stringify(db, null, 2));
  }

  globalThis.CTX_STORAGE = Object.freeze({ loadDb: loadDb, saveDb: saveDb, exportFile: exportFile });
})();