export const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Стоимость", href: "#calculator" },
  { label: "Как работаем", href: "#process" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

export const prices = {
  phone: {
    label: "Смартфон",
    icon: "📱",
    screen: [140, 360],
    battery: [70, 150],
    water: [90, 260],
    charging: [60, 140],
    cleaning: [35, 70],
    other: null,
  },
  laptop: {
    label: "Ноутбук",
    icon: "💻",
    screen: [180, 520],
    battery: [120, 280],
    water: [130, 360],
    charging: [80, 190],
    cleaning: [45, 95],
    other: null,
  },
  tablet: {
    label: "Планшет",
    icon: "📲",
    screen: [120, 320],
    battery: [80, 190],
    water: [90, 260],
    charging: [60, 150],
    cleaning: [35, 80],
    other: null,
  },
} as const;

export type DeviceKey = keyof typeof prices;
export type IssueKey = Exclude<keyof (typeof prices)["phone"], "label" | "icon">;

export const issueLabels: Record<IssueKey, string> = {
  screen: "Разбит экран",
  battery: "Быстро садится батарея",
  water: "Попала вода",
  charging: "Не заряжается",
  cleaning: "Чистка от пыли",
  other: "Другое / не знаю",
};

export const heroTimeline = [
  { title: "Заявка принята", subtitle: "Сегодня, 10:24", done: true },
  { title: "Диагностика завершена", subtitle: "Сегодня, 11:10", done: true },
  { title: "Согласована стоимость", subtitle: "Сегодня, 11:15", done: true },
  { title: "Ремонт в процессе", subtitle: "Ожидаемо: сегодня, 15:00", done: false },
];

export const trustBadges = [
  { icon: "🛡️", title: "Гарантия 6 месяцев", subtitle: "На все виды ремонта" },
  { icon: "🔍", title: "Бесплатная диагностика", subtitle: "Без скрытых платежей" },
  { icon: "⚙️", title: "Оригинальные запчасти", subtitle: "Или аналоги premium-класса" },
  { icon: "🚗", title: "Выезд и доставка", subtitle: "По Минску — бесплатно от 120 BYN" },
];

export const serviceCategories = [
  {
    icon: "📱",
    title: "Смартфоны",
    description: "iPhone, Samsung, Xiaomi и другие",
    items: [
      { name: "Замена экрана", price: "от 140 BYN" },
      { name: "Замена батареи", price: "от 70 BYN" },
      { name: "Ремонт после воды", price: "от 90 BYN" },
      { name: "Замена разъёма зарядки", price: "от 60 BYN" },
    ],
  },
  {
    icon: "💻",
    title: "Ноутбуки",
    description: "Apple, ASUS, Lenovo, HP и другие",
    items: [
      { name: "Чистка от пыли и замена термопасты", price: "от 45 BYN" },
      { name: "Замена матрицы", price: "от 180 BYN" },
      { name: "Восстановление данных", price: "от 80 BYN" },
      { name: "Замена клавиатуры", price: "от 90 BYN" },
    ],
  },
  {
    icon: "📲",
    title: "Планшеты",
    description: "iPad и Android-планшеты",
    items: [
      { name: "Замена экрана", price: "от 120 BYN" },
      { name: "Замена батареи", price: "от 80 BYN" },
      { name: "Ремонт разъёма", price: "от 60 BYN" },
      { name: "Чистка от пыли", price: "от 35 BYN" },
    ],
  },
];

export const processSteps = [
  { number: "1", title: "Оставляете заявку", description: "Через сайт, звонок или WhatsApp — как удобно" },
  { number: "2", title: "Бесплатная диагностика", description: "Находим причину поломки за 15–30 минут" },
  { number: "3", title: "Согласуем цену", description: "Называем точную стоимость до начала работ" },
  { number: "4", title: "Ремонт и выдача", description: "Отдаём устройство с гарантией до 6 месяцев" },
];

export const advantages = [
  { icon: "🛡️", title: "Гарантия на ремонт", description: "До 6 месяцев на детали и работу" },
  { icon: "⏱️", title: "Срочный ремонт за 1 час", description: "Для типовых неисправностей — при вас" },
  { icon: "🔍", title: "Диагностика бесплатно", description: "Точно скажем, что и почему сломалось" },
  { icon: "👨‍🔧", title: "Опытные мастера", description: "Средний стаж специалиста — от 5 лет" },
  { icon: "⚙️", title: "Оригинальные запчасти", description: "Работаем только с проверенными поставщиками" },
  { icon: "🚗", title: "Выезд и доставка", description: "Заберём и привезём устройство сами" },
];

export const brands = ["Apple", "Samsung", "Xiaomi", "Huawei", "Lenovo", "ASUS", "HP", "Honor"];

export const reviews = [
  {
    text: "Разбил экран iPhone — починили за час, пока я ждал в кафе рядом. Цена совпала с той, что назвали по телефону.",
    name: "Дмитрий К.",
    device: "iPhone 13 Pro",
    initial: "Д",
  },
  {
    text: "Ноутбук перестал включаться, думал — всё, данные пропали. Восстановили и почистили от пыли заодно.",
    name: "Анна С.",
    device: "ASUS ROG",
    initial: "А",
  },
  {
    text: "Обратился с разряженной за 2 часа батареей на Samsung. Заменили быстро, дали гарантию на полгода.",
    name: "Игорь П.",
    device: "Samsung S22",
    initial: "И",
  },
];

export const faqData = [
  {
    question: "Сколько времени занимает ремонт?",
    answer:
      "Большинство типовых неисправностей — замена экрана, батареи, разъёма — устраняются за 1–3 часа. Сложные случаи могут занять 1–3 дня, мы всегда называем срок после диагностики.",
  },
  {
    question: "Диагностика правда бесплатная?",
    answer:
      "Да, диагностика бесплатна независимо от того, будете вы делать ремонт у нас или нет. Исключение — сложные технические экспертизы по отдельному запросу.",
  },
  {
    question: "Какие запчасти вы используете?",
    answer:
      "По умолчанию — оригинальные запчасти или аналоги премиум-класса от проверенных поставщиков. Тип запчасти и её стоимость всегда согласовываем с клиентом заранее.",
  },
  {
    question: "Даёте ли вы гарантию?",
    answer:
      "Да, на все виды ремонта — гарантия от 3 до 6 месяцев в зависимости от типа работ. Условия гарантии прописываем в акте выполненных работ.",
  },
  {
    question: "Можно ли вызвать мастера на дом или в офис?",
    answer:
      "Да, работает выезд по Минску. Для заказов от 120 BYN выезд бесплатный, для более мелкого ремонта — по фиксированной стоимости, которую назовём при записи.",
  },
];
