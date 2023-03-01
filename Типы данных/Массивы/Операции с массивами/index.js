'use strict';

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
alert(styles.shift(0));
styles.unshift('Рэп', 'Регги');
