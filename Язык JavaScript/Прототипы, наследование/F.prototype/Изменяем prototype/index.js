// (1) - true присвоение нового значения свойству влияет на [[Prototype]] вновь создаваемых объектов , но не на прототип уже существующих
// (2) - false  объекты присваиваются по ссылке
// (3) - true операция delete применяется к свойствам конкретного объекта на котором она вызвана
// (4) - undefined свойство eats удалено из прототипа , оно больше не существует