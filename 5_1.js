'use strict';

var objStudent = {
	name:'Иван',
	lastname: 'Петров',
	age: 21,
	interests:['программирование', 'музыка', 'аниме'],
	univer: 'ИТМО'
};

console.log('Биографическая справка:');
console.log('«' + objStudent.name + ' ' +
				objStudent.lastname + '. ' +
				objStudent.age + ' год. Интересы: ' +
				objStudent.interests[0] + ', ' + objStudent.interests[1] + ', ' + objStudent.interests[2] + '. ' + '\n' + 'Учится в ' + 
				objStudent.univer + '.'
			);
