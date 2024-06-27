import { useState, useEffect } from "react";

/**
 * Хук для создания эффекта debounce на значение.
 * Этот хук возвращает значение, которое обновляется с задержкой после каждого изменения исходного значения.
 *
 * @param {string} value - Исходное значение, которое нужно задебаунсить.
 * @param {number} delay - Задержка в миллисекундах между обновлениями значения.
 * @returns {string} - Задебаунсенное значение.
 */
export const useDebounce = (value: string, delay: number) => {
  // Состояние для хранения задебаунсенного значения
  const [debouncedValue, setDebouncedValue] = useState(value);

  // Эффект, который обновляет задебаунсенное значение с задержкой после каждого изменения исходного значения
  useEffect(() => {
    // Создаем таймер с задержкой
    const handler = setTimeout(() => {
      // Обновляем задебаунсенное значение
      setDebouncedValue(value);
    }, delay);

    // Очищаем таймер при каждом обновлении исходного значения или задержки
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  // Возвращаем задебаунсенное значение
  return debouncedValue;
};
