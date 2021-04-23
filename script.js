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
	confirm('Check your balance on card?') ? resolve(userData) : reject(bankData);
});

getMoney
	.then(
		function (data) {

			let text = prompt("Enter USD, EUR, UAH, BIF, AOA:", "").toUpperCase();

			while (text !== "USD" && text !== "EUR" && text !== "UAH" && text !== "BIF" && text !== "AOA") {
				text = prompt("Enter repeatedly USD, EUR, UAH, BIF, AOA:", "").toUpperCase();
			}

			for (let key in data) {
				if (text === key) {
					console.log(`Your balance ${key} is:`, data[key]);
				}
			}
		},
		function (data) {
			let entertext = prompt("Enter currency of cash", "").toUpperCase();

			while (entertext !== "USD" && entertext !== "EUR" && entertext !== "UAH" && entertext !== "GBP") {
				entertext = prompt(`Enter currency correctly USD, EUR, UAH, GBP`, "").toUpperCase();
			}

			while (data[entertext].max === 0) {
				entertext = prompt(`Enter currency again. Balance of ${entertext} in cash machine: ${data[entertext].max}`, "").toUpperCase();
			}

			let entersummcash = prompt("Enter cash summ", "");

			if (entersummcash >= data[entertext].min && entersummcash <= data[entertext].max) {
				console.log(`Please take your money ${entertext}: ${entersummcash} ${data[entertext].img}`);
			} else {
				return new Promise(function (resolve, reject) { reject(entertext) });
			}
		}
	)
	.then(
		function () {
			console.log(`Have a nice day! 😊`);
		},
		function (data) {
			console.log(`You should take from cash machine from ${bankData[data].min} till ${bankData[data].max} ${data}`);
			console.log(`Have a nice day! 😊`);
		}
	)





