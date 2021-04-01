const Date = new Date(date)
  .toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'short',
  })
  .replace('.', '');
