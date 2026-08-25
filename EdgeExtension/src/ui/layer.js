/* Context VK.RU · m3 · src/ui/layer.js — ЗАТЫЧКА (TASK-0100).
 * Слой отрисовки поверх портала. Реализует интерфейс IDrawLayer:
 *
 *   interface IDrawLayer {
 *     init(scope?: Element): void   инициализация слоя (создание носителя)
 *     draw(scope?: Element): void   перерисовать метки (опционально в пределах scope)
 *     clear(): void                 очистить слой
 *   }
 *
 * Носитель — собственное стекло вне DOM портала (выводы v07x: инъекции стираются).
 * Логика не заполнена.
 */
(function () {
  "use strict";

  function init(scope) {
    // TODO(m3): создать носитель слоя (стекло), подключить триггеры.
  }

  function draw(scope) {
    // TODO(m3): перерисовать метки по координатам (опционально в пределах scope).
  }

  function clear() {
    // TODO(m3): очистить носитель слоя.
  }

  globalThis.CTX_LAYER = Object.freeze({ init: init, draw: draw, clear: clear });
})();