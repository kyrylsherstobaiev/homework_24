let userData = {
	'USD': 1000,
	'EUR': 900,
	'UAH': 15000,
	'BIF': 20000,
	'AOA': 100
},
	bankData = {
		'USD': {
			max: 3000,
			min: 100,
			img: '💵'
		},
		'EUR': {
			max: 1000,
			min: 50,
			img: '💶'
		},
		'UAH': {
			max: 0,
			min: 0,
			img: '💴'
		},
		'GBP': {
			max: 10000,
			min: 100,
			img: '💷'
		}
	}

let getMoney = new Promise(function (resolve, reject) {
	confirm('Check your balance on card?') ? resolve(userData) : reject({ userData: userData, bankData: bankData });
});

getMoney
	.then(
		function (data) {

			let enterCurr = prompt("Enter USD, EUR, UAH, BIF, AOA:", "").toUpperCase();

			while (!data[enterCurr]) {
				enterCurr = prompt("Enter currency again USD, EUR, UAH, BIF, AOA:", "").toUpperCase();
			}

			for (let key in data) {
				if (enterCurr === key) {
					console.log(`Your balance ${key} is:`, data[key]);
				}
			}
		},

		function (data) {

			let currencyUserBankArray = [];

			for (let user in data.userData) {
				for (let bank in data.bankData) {
					if (user === bank && data.bankData[bank].max > 0) {
						currencyUserBankArray.push(user);
					}
				}
			}

			let entertext = prompt("Enter currency of cash", "").toUpperCase();

			while (currencyUserBankArray.indexOf(entertext) === -1) {
				entertext = prompt(`Enter currency correctly USD, EUR`, "").toUpperCase();
			}

			let entersummcash,
				entersummcashNan = true;

			do {
				entersummcash = +prompt("Enter NUMERIC cash summ", "");
				entersummcashNan = isNaN(entersummcash);
			} while (entersummcashNan);

			if (entersummcash >= data.bankData[entertext].min && entersummcash <= data.bankData[entertext].max) {
				console.log(`Please take your money ${entertext}: ${entersummcash} ${data.bankData[entertext].img}`);
			} else {
				console.log(`You should take from cash machine ${entertext} from ${data.bankData[entertext].min} till ${data.bankData[entertext].max} `);
			}
		}
	)

	.finally(
		() => console.log(`Have a nice day! 😊`)
	)

//********************************************* */

//let getMoney = (userData, bankData) => new Promise((resolve, reject) => {
//	let question = +confirm('Посмотреть баланс на карте?');
//	question ? resolve(userData) : reject({ userData: userData, bankData: bankData });
//})

//getMoney(userData, bankData)
//	.then(
//		userData => {
//			let userDataCurrency = [];
//			for (let key in userData) {
//				userDataCurrency.push(key);
//			}
//			console.log(userDataCurrency);

//			let currency,
//				currencyNotExist = true;
//			do {
//				currency = prompt(`Введите название валюты в формате ${userDataCurrency.join(', ')}`, userDataCurrency[0]);
//				currencyNotExist = userDataCurrency.indexOf(currency) === -1 ? true : false;
//			} while (currencyNotExist);
//			console.log(`Баланс составляет: ${userData[currency]} ${currency}`);
//		},
//		data => {
//			let avaliableCurrency = [];

//			for (let user in data.userData) {
//				for (let bank in data.bankData) {
//					if (user === bank && data.bankData[bank].max > 0) {
//						avaliableCurrency.push(user);
//					}
//				}
//			}

//			let currency,
//				currencyNotExist = true;
//			do {
//				currency = prompt(`Введите название валюты в формате ${avaliableCurrency.join(', ')}`, avaliableCurrency[0]);
//				currencyNotExist = avaliableCurrency.indexOf(currency) === -1 ? true : false;
//			} while (currencyNotExist);

//			let value,
//				valueNaN = true;
//			do {
//				value = +prompt(`Введите сумму для снятия наличных`);
//				valueNaN = isNaN(value);
//			} while (valueNaN);

//			if (value > data.bankData[currency].max) {
//				console.log(`Введенная сумма больше допустимой. Максимальная сумма снятия: ${data.bankData[currency].max}`);
//			} else if (value < data.bankData[currency].min) {
//				console.log(`Введенная сумма меньше допустимой. Минимальная сумма снятия: ${data.bankData[currency].min}`);
//			} else {
//				console.log(`Вот Ваши денежки ${value} ${currency} ${data.bankData[currency].img}`);
//			}
//		}
//	)
//	.finally(
//		data => console.log('Спасибо, хорошего дня 😊')
//	)






