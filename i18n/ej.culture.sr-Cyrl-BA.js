ej.addCulture( "sr-Cyrl-BA", {
	name: "sr-Cyrl-BA",
	englishName: "Serbian (Cyrillic, Bosnia and Herzegovina)",
	nativeName: "српски (Босна и Херцеговина)",
	language: "sr-Cyrl",
	numberFormat: {
		",": ".",
		".": ",",
		"NaN": "није број",
		negativeInfinity: "-бесконачност",
		positiveInfinity: "+бесконачност",
		percent: {
			pattern: ["-n%","n%"],
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": ".",
			".": ",",
			symbol: "КМ"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["недјеља","понедјељак","уторак","сриједа","четвртак","петак","субота"],
				namesAbbr: ["нед","пон","уто","сри","чет","пет","суб"],
				namesShort: ["н","п","у","с","ч","п","с"]
			},
			months: {
				names: ["јануар","фебруар","март","април","мај","јуни","јули","август","септембар","октобар","новембар","децембар",""],
				namesAbbr: ["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "d.M.yyyy.",
				D: "d. MMMM yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d. MMMM yyyy H:mm",
				F: "d. MMMM yyyy H:mm:ss",
				M: "d. MMMM",
				Y: "MMMM, yyyy"
			}
		}
	}
});
