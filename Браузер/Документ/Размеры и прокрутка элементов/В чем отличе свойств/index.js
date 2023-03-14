// отличие между getComputedStyle(elem).width и elem.clientWidth

// 1. clientWidth возвращает число , а getComputedStyle(elem).width строку с рх на конце
// 2. getComputedStyle(elem).width может вернуть auto
// 3. clientWidth соответствует внутренней области элемента, включая внутренние отступы padding
