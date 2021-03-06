ej.addCulture( "sk-SK", {
	name: "sk-SK",
	englishName: "Slovak (Slovakia)",
	nativeName: "slovenčina (Slovenská republika)",
	language: "sk",
	numberFormat: {
		",": " ",
		".": ",",
		"NaN": "Nie je číslo",
		negativeInfinity: "-nekonečno",
		positiveInfinity: "+nekonečno",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "EUR"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"],
				namesAbbr: ["ne","po","ut","st","št","pi","so"],
				namesShort: ["ne","po","ut","st","št","pi","so"]
			},
			months: {
				names: ["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december",""],
				namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
			},
			monthsGenitive: {
				names: ["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra",""],
				namesAbbr: ["1","2","3","4","5","6","7","8","9","10","11","12",""]
			},
			AM: ["dop.","dop.","DOP."],
			PM: ["odp.","odp.","ODP."],
			patterns: {
				d: "d.M.yyyy",
				D: "d. MMMM yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d. MMMM yyyy H:mm",
				F: "d. MMMM yyyy H:mm:ss",
				M: "d.MMMM"
			}
		}
	}
});
