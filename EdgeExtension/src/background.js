/* Context VK.RU · m3 · src/background.js — ЗАТЫЧКА (TASK-0100).
 * Service Worker. Контекстное меню: ПЕР (персона) / СОО (сообщество).
 * Логика не заполнена.
 */
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({ id: "per", title: "ПЕР — персона", contexts: ["link"] });
    chrome.contextMenus.create({ id: "soo", title: "СОО — сообщество", contexts: ["link"] });
  });
});
// TODO(m3): обработка меню ПЕР/СОО, запись в картотеку.