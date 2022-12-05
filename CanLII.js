{
	"translatorID": "64542506-f69d-4348-8e4b-702ee9ccd398",
	"label": "CanLII",
	"creator": "Samuel Gagnon",
	"target": "^https?://(www\\.)?canlii\\.org/(en|fr)/",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "gcsibv",
	"lastUpdated": "2022-12-05 15:21:01"
}

/*
	***** BEGIN LICENSE BLOCK *****
	Copyright © 2012 Sebastian Karcher
	
	This file is part of Zotero.
	Zotero is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.
	Zotero is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	GNU Affero General Public License for more details.
	You should have received a copy of the GNU Affero General Public License
	along with Zotero. If not, see <http://www.gnu.org/licenses/>.
	***** END LICENSE BLOCK *****
*/

var courtsDict = {
	"ca": {
		language: {
			"en": {
				court: {
					"Supreme Court of Canada": {
						LRRName: "supreme.court",
						start: "2000-01-01",
					},
					"Supreme Court of Canada - Applications for Leave": {
						LRRName: "supreme.court",
						start: ""
					},
					"Judicial Committee of the Privy Council - Canadian cases": {
						foreign: true
					},
					"Federal Court of Appeal": {
						LRRName: "federal.court.appeal",
						start: "2001-02-01",
					},
					"Federal Court": {
						LRRName: "federal.court",
						start: "2001-02-01",
					},
					"Tax Court of Canada": {
						LRRName: "tax.court",
						start: "2003-01-01",
					},
					"Court Martial Appeal Court of Canada": {
						LRRName: "court.martial.appeal.court",
						start: "2001-10-01",
					},
					"Courts Martial": {
						LRRName: "courts.martial",
						start: "",
					},
					"Foreign reported decisions":{
						foreign: true
					}
				}
			},
			"fr": {
				court: {
					"Cour suprême du Canada": {
						LRRName: "supreme.court",
						start: "2000-01-01",
					},
					"Cour suprême du Canada - demandes d'autorisation": {
						LRRName: "supreme.court",
						start: ""
					},
					"Comité judiciaire du Conseil privé - affaires canadiennes": {
						foreign: true
					},
					"Cour d'appel fédérale": {
						LRRName: "federal.court.appeal",
						start: "2001-02-01",
					},
					"Cour fédérale": {
						LRRName: "federal.court",
						start: "2001-02-01",
					},
					"Cour canadienne de l'impôt": {
						LRRName: "tax.court",
						start: "2003-01-01",
					},
					"Cour d'appel de la cour martiale du Canada": {
						LRRName: "court.martial.appeal.court",
						start: "2001-10-01",
					},
					"Cours martiales": {
						LRRName: "courts.martial",
						start: "",
					},
					"Décisions rapportées à l'étranger":{
						foreign: true
					}
				}
			}
		}
	},
	"ca:ab": {
		language: {
			"en": {
				court: {
					"Court of Appeal of Alberta": {
						LRRName: "court.appeal",
						start: "1998-01-01"
					},
					"Court of King's Bench of Alberta": {
						LRRName: "court.kings.bench",
						start: "2022-09-08"
					},
					"Provincial Court": {
						LRRName: "provincial.court",
						start: "1998.01-01"
					}
				}
			},
			"fr": {
				court: {
					"Cour d'appel de l'Alberta": {
						LRRName: "court.appeal",
						start: "1998-01-01"
					},
					"Cour du banc du Roi de l'Alberta": {
						LRRName: "court.kings.bench",
						start: "2022-09-08"
					},
					"Cour provinciale": {
						LRRName: "provincial.court",
						start: "1998.01-01"
					}
				}
			}
		}
	},
	"ca:bc": {
		language: {
			"en": {
				court: {
					"Court of Appeal for British Columbia": {
						LRRName: "court.appeal",
						start: "1999-01-01"
					},
					"Supreme Court of British Columbia": {
						LRRName: "supreme.court.prov",
						start: "2000-01-01"
					},
					"Provincial Court of British Columbia": {
						LRRName: "provincial.court",
						start: "1999-02-01"
					}
				}
			},
			"fr": {
					"Cour d'appel de la Colombie-Britannique": {
						LRRName: "court.appeal",
						start: "1999-01-01"
					},
					"Supreme Court of British Columbia": {
						LRRName: "supreme.court.prov",
						start: "2000-01-01"
					},
					"Provincial Court of British Columbia": {
						LRRName: "provincial.court",
						start: "1999-02-01"
					}
			}
		}
	},
	"ca:mb": {
		language: {
			"en": {
				court: {
					"Court of Appeal of Manitoba": {
						LRRName: "court.appeal",
						start: "2000-03-01"
					},
					"Court of King's Bench of Manitoba": {
						LRRName: "court.kings.bench",
						start: "2022-09-08"
					},
					"Provincial Court of Manitoba": {
						LRRName: "provincial.court",
						start: "2007-01-01"
					}
				}
			},
			"fr": {
				court: {
					"Cour d'appel du Manitoba": {
						LRRName: "court.appeal",
						start: "2000-03-01"
					},
					"Cour du Banc du Roi du Manitoba": {
						LRRName: "court.kings.bench",
						start: "2022-09-08"
					},
					"Cour provinciale du Manitoba": {
						LRRName: "provincial.court",
						start: "2007-01-01"
					}
				}
			}
		}
	},
	"ca:nb": {
		language: {
			"en": {
				court: {
					"Court of Appeal of New Brunswick": {
						LRRName: "court.appeal",
						start: "2001-05-01"
					},
					"Court of King's Bench of New Brunswick": {
						LRRName: "court.kings.bench",
						start: "2022-09-08"
					},
					"Provincial Court": {
						LRRName: "provincial.court",
						start: "2002-12-01"
					}
				}
			},
			"fr": {
				court: {
					"Cour d'appel du Nouveau-Brunswick": {
						LRRName: "court.appeal",
						start: "2001-05-01"
					},
					"Cour du Banc du Roi du Nouveau-Brunswick": {
						LRRName: "court.kings.bench",
						start: "2022-09-08"
					},
					"Cour provinciale": {
						LRRName: "provincial.court",
						start: "2002-12-01"
					}
				}
			}
		}
	},
	"ca:nl": {
		language: {
			"en": {
				court: {
					"Court of Appeal of Newfoundland and Labrador": {
						LRRName: "court.appeal",
						start: "2002-10-01"
					},
					"Supreme Court of Newfoundland and Labrador":{
						LRRName: "supreme.court.prov",
						start: "2018-01-01"
					},
					"Provincial Court of Newfoundland and Labrador": {
						LRRName: "provincial.court",
						start: ""
					}
				}
			}
		}
	},
	"ca:ns": {
		language: {
			"en": {
				court: {
					"Nova Scotia Court of Appeal": {
						LRRName: "court.appeal",
						start: "1999-09-01"
					},
					"Supreme Court of Nova Scotia": {
						LRRName: "supreme.court.prov",
						start: "2000-12-01"
					},
					"Supreme Court of Nova Scotia (Family Division)": {
						LRRName: "supreme.court.family",
						start: "2000-12-01"
					},
					"Provincial Court of Nova Scotia": {
						LRRName: "provincial.court",
						start: "2001-03-01"
					},
					"Small Claims Court": {
						LRRName: "small.claims.court",
						start: "2000-01-01"
					},
					"Nova Scotia Probate Court": {
						LRRName: "probate.court",
						start: "2001-03-01"
					},
					"Nova Scotia Family Court": {
						LRRName: "family.court",
						start: "2001-01-01"
					}
				}
			}
		}
	},
	"ca:nt": {
		language: {
			"en": {
				court: {
					"Court of Appeal for the Northwest Territories": {
						LRRName: "court.appeal",
						start: "1999-12-01"
					},
					"Supreme Court of the Northwest Territories": {
						LRRName: "supreme.court.prov",
						start: "1999-10-01"
					},
					"Territorial Court of the Northwest Territories": {
						LRRName: "territorial.court",
						start: "1999-10-01"
					},
					"Youth Justice Court": {
						LRRName: "territorial.court",
						start: "1999-10-01"
					}
				}
			},
			"fr": {
				court: {
					"Cour d'appel des Territoires du Nord-Ouest": {
						LRRName: "court.appeal",
						start: "1999-12-01"
					},
					"Cour suprême des Territoires du Nord-Ouest": {
						LRRName: "supreme.court.prov",
						start: "1999-10-01"
					},
					"Cour territoriale des Territoires du Nord-Ouest": {
						LRRName: "territorial.court",
						start: "1999-10-01"
					},
					"Youth Justice Court": {
						LRRName: "territorial.court",
						start: "1999-10-01"
					}
				}
			}
		}
	},
	"ca:nu": {
		language: {
			"en": {
				court: {
					"Court of Appeal of Nunavut": {
						LRRName: "court.appeal",
						start: "2001-01-01"
					},
					"Nunavut Court of Justice": {
						LRRName: "court.justice",
						start: "2006-05-01"
					},
					"Youth Justice Court of Nunavut": {
						LRRName: "youth.court",
						start: "2011-01-01"
					}
				}
			},
			"fr": {
				court: {
					"Cour d'appel du Nunavut": {
						LRRName: "court.appeal",
						start: "2001-01-01"
					},
					"Cour de justice du Nunavut": {
						LRRName: "court.justice",
						start: "2006-05-01"
					},
					"Tribunal de la jeunesse du Nunavut": {
						LRRName: "youth.court",
						start: "2011-01-01"
					}
				}
			}
		}
	},
	"ca:on": {
		language: {
			"en": {
				court: {
					"Court of Appeal for Ontario": {
						LRRName: "court.appeal",
						start: "2007-01-01"
					},
					"Superior Court of Justice": {
						LRRName: "superior.court",
						start: "2010-01-01"
					},
					"Divisional Court": {
						LRRName: "superior.court",
						start: "2010-01-01"
					},
					"Ontario Court of Justice": {
						LRRName: "court.justice",
						start: "2004-01-01"
					},
					"Small Claims Court": {
						LRRName: "superior.court",
						start: ""
					}
				}
			},
			"fr": {
				court: {
					"Cour d'appel de l'Ontario": {
						LRRName: "court.appeal",
						start: "2007-01-01"
					},
					"Cour supérieure de justice": {
						LRRName: "superior.court",
						start: "2010-01-01"
					},
					"Cour divisionnaire": {
						LRRName: "superior.court",
						start: "2010-01-01"
					},
					"Cour de justice de l'Ontario": {
						LRRName: "court.justice",
						start: "2004-01-01"
					},
					"Cour des petites créances": {
						LRRName: "superior.court",
						start: ""
					}
				}
			}
		}
	},
	"ca:pe": {
		language: {
			"en": {
				court: {
					"Prince Edward Island Court of Appeal": {
						LRRName: "court.appeal",
						start: "2000-01-01"
					},
					"Supreme Court of Prince Edward Island": {
						LRRName: "supreme.court.prov",
						start: "2000-01-01"
					},
					"Provincial Court of Prince Edward Island": {
						LRRName: "provincial.court",
						start: ""
					}
				}
			}
		}
	},
	"ca:qc": {
		language: {
			"en": {
				court: {
					"Court of Appeal of Quebec": {
						LRRName: "court.appeal",
						start: "2005-01-01"
					},
					"Superior Court": {
						LRRName: "superior.court",
						start: "2006-01-01"
					},
					"Court of Quebec": {
						LRRName: "court.quebec",
						start: "2006-01-01"
					},
					"Human Rights Tribunal": {
						LRRName: "human.right.tribunal",
						start: "2006-01-01"
					},
					"Professions Tribunal": {
						LRRName: "tribunal.professions",
						start: "1999-01-01"
					},
					"Municipal Courts": {
						LRRName: "municipal.courts",
						start: "2006-01-01"
					}
				}
			},
			"fr": {
				court: {
					"Cour d'appel du Québec": {
						LRRName: "court.appeal",
						start: "2005-01-01"
					},
					"Cour supérieure": {
						LRRName: "superior.court",
						start: "2006-01-01"
					},
					"Cour du Québec": {
						LRRName: "court.quebec",
						start: "2006-01-01"
					},
					"Tribunal des droits de la personne": {
						LRRName: "human.right.tribunal",
						start: "2006-01-01"
					},
					"Tribunal des professions": {
						LRRName: "tribunal.professions",
						start: "1999-01-01"
					},
					"Cours municipales": {
						LRRName: "municipal.courts",
						start: "2006-01-01"
					},
					"Tribunal administratif du Québec": {
						LRRName: "quebec.admin.tribunal",
						start: ""
					}
				}
			}
		}
	},
	"ca:sk": {
		language: {
			"en": {
				court: {
					"Court of Appeal for Saskatchewan": {
						LRRName: "court.appeal",
						start: "2000-01-01"
					},
					"Court of King's Bench for Saskatchewan": {
						LRRName: "court.kings.bench",
						start: "2022-09-08"
					},
					"Provincial Court of Saskatchewan": {
						LRRName: "provincial.court",
						start: "2002-01-01"
					},
					"Saskatchewan District Court": {
						LRRName: "court.kings.bench",
						start: ""
					},
					"Saskatchewan Unified Family Court": {
						LRRName: "court.kings.bench",
						start: ""
					}
				}
			},
			"fr": {
				court: {
					"Cour d'appel de la Saskatchewan": {
						LRRName: "court.appeal",
						start: "2000-01-01"
					},
					"Cour du banc du Roi de la Saskatchewan": {
						LRRName: "court.kings.bench",
						start: "2022-09-08"
					},
					"Cour provinciale de la Saskatchewan": {
						LRRName: "provincial.court",
						start: "2002-01-01"
					},
					"Saskatchewan District Court": {
						LRRName: "court.kings.bench",
						start: ""
					},
					"Saskatchewan Unified Family Court": {
						LRRName: "court.kings.bench",
						start: ""
					}
				}
			}
		}
	},
	"ca:yk": {
		language: {
			"en": {
				court: {
					"Court of Appeal of Yukon": {
						LRRName: "court.appeal",
						start: "2000-03-01"
					},
					"Supreme Court of Yukon": {
						LRRName: "supreme.court.prov",
						start: "2000-03-01"
					},
					"Territorial Court of Yukon": {
						LRRName: "territorial.court",
						start: "1999-12-01"
					},
					"Small Claims Court of the Yukon": {
						LRRName: "small.claims.court",
						start: "2004-05-01"
					}
				}
			},
			"fr": {
				court: {
					"Cour d'appel du Yukon": {
						LRRName: "court.appeal",
						start: "2000-03-01"
					},
					"Cour suprême du Yukon": {
						LRRName: "supreme.court.prov",
						start: "2000-03-01"
					},
					"Cour territoriale du Yukon": {
						LRRName: "territorial.court",
						start: "1999-12-01"
					},
					"Cour des petites créances du Yukon": {
						LRRName: "small.claims.court",
						start: "2004-05-01"
					}
				}
			}
		}
	}
};

function attr(docOrElem,selector,attr,index){var elem=index?docOrElem.querySelectorAll(selector).item(index):docOrElem.querySelector(selector);return elem?elem.getAttribute(attr):null;}function text(docOrElem,selector,index){var elem=index?docOrElem.querySelectorAll(selector).item(index):docOrElem.querySelector(selector);return elem?elem.textContent:null;}

var caseRegexp = /https?:\/\/(?:www\.)?canlii\.org[^/]*\/(?:en|fr)\/[^/]+\/[^/]+\/doc\/.+/;

var statuteRegexp = /https?:\/\/(?:www\.)?canlii\.org[^/]*\/(?:en|fr)\/[^/]+\/(?:laws|legis)\/(?:stat|astat|lois|loisa)\/.+/;

var regRegexp = /https?:\/\/(?:www\.)?canlii\.org[^/]*\/(?:en|fr)\/[^/]+\/(?:laws|legis)\/(?:regu|regl)\/.+/;

function detectWeb(doc, url) {
	if (caseRegexp.test(url)) return "case";
	else if (statuteRegexp.test(url)) return "statute";
	else if (regRegexp.test(url)) return "regulation";
	else {
		var aTags = doc.getElementsByTagName("a");
		for (var i = 0; i < aTags.length; i++) {
			if (caseRegexp.test(aTags[i].href)) {
				return "multiple";
			}
		}
	}
	return false;
}

function buildReferenceArray(string,array){
	referenceRegex = /(?:(\d+\s\w+\s\d+)|(\[\d{4}\]\s\d*\s*[\w\s]+\s\d+\s?\(?\w*\)?)|(\d+\s[\w\s]+\s+\(\d+\w+\)\s\d+))/g;
	if (string && string.match(referenceRegex)) {
		references = string.match(referenceRegex);
		for (i = 0, ilen = references.length; i < ilen; i += 1) {
			references[i] = ZU.trim(references[i]);
			array.push(references[i]);
		}
	}
}

function caseCourt(item) {
	court_description = Zotero.Utilities.trimInternal(text('#breadcrumbs span', 5));
	if (courtsDict[item.jurisdiction].language[item.language].court[court_description].LRRName) {
		let courtName = courtsDict[item.jurisdiction].language[item.language].court[court_description].LRRName;
		let courtStartDate = new Date(courtsDict[item.jurisdiction].language[item.language].court[court_description].start);
		let decisionDate = new Date(item.dateDecided);
		if (courtName=="court.kings.bench" && decisionDate<courtStartDate) {
			return "court.queens.bench";
		}
		else return courtName;
	}
	else {
		return court_description;
	}
}

function findJurisdiction(url){
	var provinceRegex = /https?:\/\/(?:www\.)?canlii\.org[^/]*\/(?:en|fr)\/([^/]+)\/[^/]+\/.+/;
	var provinceDetails = url.match(provinceRegex);
	var province = provinceDetails[1];
	if (province == 'ca') {
		return province;
	}
	else {
		return "ca:"+province;
	}
}

function caseTitle(citationString){
	var titleRegex = /([\s\S]+?)\,\s(\d{4}\s+\w+\s\d+|\[\d{4}\]\s\d*\s*\w+\s\d+|\d+\s+[A-Z]+\s+\(\d+(?:\w+)\)\s\d+)(?:\s\([\s\w]+\))?(?:\,\s)?(\d{4}\s+\w+\s\d+|\[\d{4}\]\s\d*\s\w+\s\d+|\d+\s+[A-Z]+\s+\(\d+(?:\w+)\)\s\d+)?(?:\s\([\s\w]+\))?/;
	var citationParts = citationString.match(titleRegex);
	var NameParts = citationParts[1].split(';');
	return NameParts[0];
}

function caseDocket(doc) {
	var docket = ZU.xpathText(doc, '//div[@id="documentMeta"]//div[contains(text(), "File number") or contains(text(), "Numéro de dossier")]/following-sibling::div');
	if (docket) {
		docketNumberList = ZU.trimInternal(docket);
		docketNumber = docketNumberList.split(';');
		return docketNumber[0];
	}
}

function caseReference(doc,url){
	var items = [];
	var mainCitationString = createMainCitationString(doc);
	var otherCitationString = createOtherCitationString(doc);
	var neutral = (checkNeutral(mainCitationString,otherCitationString));
	if (neutral) {
		items.push(createNeutral(doc,url,neutral,mainCitationString));
		createRelationship(items);
		completeItems(items,doc);
	}
	else {
		var referenceArray = [];
		buildReferenceArray(mainCitationString,referenceArray);
		buildReferenceArray(otherCitationString,referenceArray);
		var referenceObject = Object.assign({},referenceArray);
		for (i = 0, ilen = Object.keys(referenceObject).length; i < ilen; i += 1) {
			if (checkCanLII(referenceObject[i])) var canLII = checkCanLII(referenceObject[i]);
		}
		Zotero.selectItems(referenceObject,function(selectedReferences) {
			for (var reference in selectedReferences) {
				if (selectedReferences[reference] == canLII[0]) {
					items.push(createCaseReference(doc,url,selectedReferences[reference],false,mainCitationString,reference));
				}
				else {
					items.push(createCaseReference(doc,url,selectedReferences[reference],canLII,mainCitationString,reference));
				}
			}
			createRelationship(items);
			completeItems(items,doc);
		});
	}
}

function caseUrl(doc){
	var shortUrl = doc.getElementsByClassName('documentStaticUrl')[0];
	if (shortUrl) {
		return shortUrl.textContent.trim();
	}
	else {
		return false;
	}
}

function caseAltLang(item){
	if(item.language == "fr"){
		return "en";
	}
	else if (item.language == "en") {
		return "fr";
	}
}

function caseBilingual(item,bilingual) {
	var altLang = caseAltLang(item);
	var altLangUrl = 'https://www.canlii.org/'+attr(bilingual, '.canlii', 'href', 0);
	Zotero.Utilities.processDocuments(altLangUrl, function(altDoc) {
		altCitationString = createMainCitationString(altDoc);
		altOtherCitationString = createOtherCitationString(altDoc);
		altCaseName = caseTitle(altCitationString);
		ZU.setMultiField(item,"caseName", altCaseName,altLang,item.language);
		if (item.itemID && item.reporter) {
			var referenceArray = [];
			buildReferenceArray(altCitationString,referenceArray);
			buildReferenceArray(altOtherCitationString,referenceArray);
			var referenceObject = Object.assign({},referenceArray);
			var altReference = referenceObject[item.itemID];
			var referenceRegex =  /^(?:\[(\d{4})\]|(\d{4}))?\s?(?:(\d+)\s)?([\D]+?)(?:(?:(?:\s\(|\s(?:no\s))(\d+)(?:\w+\)\s|$|\s))|\s)(\d+)?(?:\(\w+\))?$/i;
			altReporter = altReference.match(referenceRegex)[4];
			ZU.setMultiField(item,"reporter", altReporter,altLang,item.language);
		}
		item.language = "";
		item.complete();
	});
}

function caseAttachements(doc,url,item) {
	// attach link to pdf version
	var pdfurl = url.replace(/\.html(?:[?#].*)?/, ".pdf");
	item.attachments.push({
		url: pdfurl,
		title: "CanLII Full Text PDF",
		mimeType: "application/pdf"
	});
	item.attachments.push({
		document: doc,
		title: "CanLII Snapshot"
	});
}

function checkCanLII(citationString){
	var canLIIRegex = /(\d\d\d\d+)\s+(CanLII)\s+(\d+)/;
	if (citationString.match(canLIIRegex)) return citationString.match(canLIIRegex);
	else return false;
}

function checkNeutral(citationString,otherCitationString){
	var mainNeutralRegex = /(\d\d\d\d+)\s+(?:[A-Z]+)\s+(\d+)\s+\(CanLII\)/;
	var otherNeutralRegex = /(\d\d\d\d+)\s+(?:[A-Z]+)\s+(\d+)\s+/;
	if (citationString.match(mainNeutralRegex)) {
		return citationString.match(mainNeutralRegex);	
	}
	else if (otherCitationString && otherCitationString.match(otherNeutralRegex)) {
		return otherCitationString.match(otherNeutralRegex);
	}
}

function createNeutral(doc,url,regex,citationString){
	var item = new Zotero.Item("case");
	item.yearAsVolume = regex[1];
	item.firstPage = regex[2];
	othervalues(doc,url,item,citationString);
	return item;
}

function createCaseReference(doc,url,reference,canLII,citationString,id) {
	var referenceRegex =  /^(?:\[(\d{4})\]|(\d{4}))?\s?(?:(\d+)\s)?([\D]+?)(?:(?:(?:\s\(|\s(?:no\s))(\d+)(?:\w+\)\s|$|\s))|\s)(\d+)?(?:\(\w+\))?$/i;
	// 1 : yearAsVol
	// 2 : archiveDate
	// 3 : reporterVolume
	// 4 : reporter
	// 5 : issue
	// 6 : firstPage
	var item = new Zotero.Item("case");
	if (reference) {
		var referenceParts = reference.match(referenceRegex);
		if (referenceParts[1]) item.yearAsVolume = referenceParts[1];
		if (referenceParts[2]) item.filingDate = referenceParts[2];
		if (referenceParts[3]) item.reporterVolume = referenceParts[3];
		if (referenceParts[4]) item.reporter = referenceParts[4];
		if (referenceParts[5]) item.issue = referenceParts[5];
		if (referenceParts[6]) item.firstPage = referenceParts[6];
	}
	if (canLII) {
		item.filingDate = canLII[1];
		item.archive = "CanLII";
		item.archiveLocation = canLII[3];
	}
	item.itemID = id;
	othervalues(doc,url,item,citationString);
	return item;
}

function createMainCitationString(doc){
	var citationString = doc.getElementsByClassName('documentMeta-citation')[0].nextElementSibling;
	citationString = ZU.trimInternal(
		ZU.xpathText(citationString, './node()[not(self::script)]', null, '') // We technically only use ./text() parts, but this is less confusing
	);
	return citationString;
}

function createOtherCitationString(doc){
	return ZU.xpathText(doc, '//div[@id="documentMeta"]//div[contains(text(), "Other citations") or contains(text(), "Autres citations") or contains(text(), "Other citation") or contains(text(), "Autre citation")]/following-sibling::div');
}

function othervalues(doc,url,item,mainCitationString) {
	item.language = doc.documentElement.lang;
	ZU.setMultiField(item,"caseName",caseTitle(mainCitationString),item.language,item.language);
	item.jurisdiction = findJurisdiction(url);
	item.dateDecided = ZU.xpathText(doc, '//div[@id="documentMeta"]//div[contains(text(), "Date")]/following-sibling::div');
	item.court = caseCourt(item);
	item.docketNumber = caseDocket(doc);
	item.url = caseUrl(doc);	
	caseAttachements(doc,url,item);
}

function createRelationship(items) {

	idList = [];
	for (item in items){
		idList.push(items[item].itemID);
	}
	//Set bogus itemIDs in each item's seeAlso
	// field (skipping the item's own ID)
	for (id in idList) {
		for (item in items) {
			if (idList[id] === items[item].itemID) {
				continue;
			}
			items[item].seeAlso.push("" + idList[id]);
		}
	}
}

function completeItems(items,doc) {
	var bilingual = doc.getElementById('languageSwitch');
	if (bilingual) {
		for (i = 0, ilen = items.length; i < ilen; i += 1) {		
			caseBilingual(items[i],bilingual);
		}
	}
	else {
		for (i = 0, ilen = items.length; i < ilen; i += 1) {
			items[i].complete();
		}
	}	
}

function doWeb(doc, url) {
	if (caseRegexp.test(url)) caseReference(doc, url);
	else if (statuteRegexp.test(url)) statuteReference(doc,url);
	else if (regRegexp.test(url)) regulationReference(doc,url);
	else {
		var items = ZU.getItemArray(doc, doc, caseRegexp);
		Zotero.selectItems(items, function (items) {
			if (!items) {
				return;
			}
			var articles = [];
			for (var i in items) {
				articles.push(i);
			}
			ZU.processDocuments(articles, caseReference);
		});
	}
}

function statuteReference(doc, url) {
	var item = new Zotero.Item("statute");
	item.language = doc.documentElement.lang;
	var metaInfo = ZU.trimInternal(ZU.xpathText(doc, '//*[@id="documentContainer"]/div[2]/h2'));
	var statuteRegex = /^([\s\S]+?)\,\s(?:([\w\-]+)\s?(\d+)?)\,?\sc\s([\s\S]+?)?(?:\s\((\d)\w+\s\w+\))?(?:\,\s\w+?\s(\d+))?$/;
	// 1 : nameOfAct
	// 2 : code
	// 3 : codeNumber (chapter)
	// 4 : publicLawNumber (supplement)
	// 5 : section (law-within-law)

	var infoParts = metaInfo.match(statuteRegex);
	ZU.setMultiField(item,"nameOfAct", infoParts[1],item.language,item.language);
	ZU.setMultiField(item,"code", infoParts[2],item.language,item.language);
	if (infoParts[3]) item.dateEnacted = infoParts[3]
	item.codeNumber = infoParts[4];
	if (infoParts[5]) item.publicLawNumber = infoParts[5];
	if (infoParts[6]) item.section = infoParts[6];
	item.url = ZU.xpathText(doc, "(//span[@class='documentStaticUrl'])[2]");
	var versionString = ZU.xpathText(doc, '//h3[contains(text(), "Current version:") or contains(text(), "Version courante")]');
	var versionRegex = /([ûé\w\d]+\s[ûé\w\d]+[\,\.]?\s\d+)$/
	if (versionString)
		if (versionString.match(versionRegex)) item.dateAmended = versionString.match(versionRegex)[versionRegex.length -1];
	item.jurisdiction = findJurisdiction(url);
	var bilingual = doc.getElementById('languageSwitch');
	statuteAttachements(doc,url,item);
	if (bilingual) {		
		statuteBilingual(item,bilingual);
	}
	else {
		item.complete();
	}
}

function statuteBilingual(item,bilingual) {
	var altLang = caseAltLang(item);
	var altLangUrl = 'https://www.canlii.org/'+attr(bilingual, '.canlii', 'href', 0);
	Zotero.Utilities.processDocuments(altLangUrl, function(altDoc) {
		var statuteRegex = /^([\s\S]+?)\,\s(?:([\w\-]+)\s?(\d+)?)\,?\sc\s([\s\S]+?)?(?:\s\((\d)\w+\s\w+\))?(?:\,\s\w+?\s(\d+))?$/
		// 1 : nameOfAct
		// 2 : code
		// 3 : codeNumber (chapter)
		// 4 : publicLawNumber (supplement)
		// 5 : section (law-within-law)

		var altMetaInfo = ZU.trimInternal(ZU.xpathText(altDoc, '//*[@id="documentContainer"]/div[2]/h2'))
		var altInfoParts = altMetaInfo.match(statuteRegex);
		ZU.setMultiField(item,"nameOfAct", altInfoParts[1],altLang,item.language);
		ZU.setMultiField(item,"code", altInfoParts[2],altLang,item.language);
		item.complete();
	});
}

function statuteAttachements(doc,url,item) {
	// attach link to pdf version
	var pdfurl = url.replace(/\.html(?:[?#].*)?/, ".pdf");
	item.attachments.push({
		url: pdfurl,
		title: "CanLII Full Text PDF",
		mimeType: "application/pdf"
	});
	item.attachments.push({
		document: doc,
		title: "CanLII Snapshot"
	});
}

function regulationReference(doc, url) {
	var item = new Zotero.Item("regulation");
	item.language = doc.documentElement.lang;
	var metaInfo = ZU.trimInternal(ZU.xpathText(doc, '//*[@id="documentContainer"]/div[2]/h2'));
	var regulationRegex = /^([\s\S]+?)\,\s((?:Règl(?:\sdu\s|\sdes\s|\sde\sl\'|\s)[A-Za-z\-]+)|(?:[A-Za-z\-]+\sReg)|(?:[A-Za-z\-]+))(?:(?:\s|\/)?(?:(\d{2}|\d{4})\,?)?(?:\,?\sc\s(?:([\w\-\.]+)\,?))?)(?:(?:\s|\s[\wè]+\s|\-|\/)((?:EC)?\d+))?(?:(?:\/|\-)(\d+)(?:\s(R))?)?$/;
	// 1 : nameOfAct
	// 2 : code
	// 3 : dateEnacted
	// 4 : codeNumber
	// 5 : publicLawNumber
	// 6 : dateEnacted
	// 7 : regulationType (revised manitoba)

	var infoParts = metaInfo.match(regulationRegex);
	ZU.setMultiField(item,"nameOfAct", infoParts[1],item.language,item.language);
	ZU.setMultiField(item,"code", infoParts[2],item.language,item.language);


	if (infoParts[3]) {
		item.codeNumber = infoParts[3];
		if (infoParts[4]) item.publicLawNumber = infoParts[4];
	}
	else if (infoParts[6]) item.codeNumber = infoParts[6];
	else if (infoParts[4]) item.codeNumber = infoParts[4];
	if (infoParts[5]) item.publicLawNumber = infoParts[5];
	if (infoParts[7]) item.regulationType = infoParts[7];

	item.url = ZU.xpathText(doc, "//div[normalize-space()='Citation to this version:' or normalize-space()='Référence à cette version :']/following-sibling::div/a")
	item.jurisdiction = findJurisdiction(url);
	
	item.regulationType = checkIfRevised(Zotero.Utilities.trimInternal(item.code),item.regulationType);

	var bilingual = doc.getElementById('languageSwitch');
	if (bilingual) {		
		regulationBilingual(item,bilingual);
	}
	else {
		item.complete();
	}
}

function checkIfRevised(code,type) {
	const revisedCodes = ['CRC', 'RRO', 'RLRQ', 'RRS', 'CNLR', 'RRTN-O', 'CRC', 'CNR', 'RRNWT', 'CQLR'];

	if (type || revisedCodes.includes(code)) {
		return "Revised";
	}
}

function regulationBilingual(item,bilingual) {
	var altLang = caseAltLang(item);
	var altLangUrl = 'https://www.canlii.org/'+attr(bilingual, '.canlii', 'href', 0);
	Zotero.Utilities.processDocuments(altLangUrl, function(altDoc) {
		var regulationRegex = /^([\s\S]+?)\,\s((?:Règl(?:\sdu\s|\sdes\s|\sde\sl\'|\s)[A-Za-z\-]+)|(?:[A-Za-z\-]+\sReg)|(?:[A-Za-z\-]+))(?:(?:\s|\/)?(?:(\d{2}|\d{4})\,?)?(?:\,?\sc\s(?:([\w\-\.]+)\,?))?)(?:(?:\s|\s[\wè]+\s|\-|\/)((?:EC)?\d+))?(?:(?:\/|\-)(\d+)(?:\s(R))?)?$/;
		// 1 : nameOfAct
		// 2 : code
		// 3 : dateEnacted
		// 4 : publicLawNumber
		// 5 : codeNumber
		// 6 : dateEnacted

		var altMetaInfo = ZU.trimInternal(ZU.xpathText(altDoc, '//*[@id="documentContainer"]/div[2]/h2'))
		var altInfoParts = altMetaInfo.match(regulationRegex);
		ZU.setMultiField(item,"nameOfAct", altInfoParts[1],altLang,item.language);
		ZU.setMultiField(item,"code", altInfoParts[2],altLang,item.language);
		item.complete();
	});
}



























/** BEGIN TEST CASES **/
var testCases = [
	{
		"type": "web",
		"url": "https://www.canlii.org/en/on/onca/doc/2008/2008onca11/2008onca11.html",
		"items": [
			{
				"itemType": "case",
				"caseName": "Fisher v. Fisher",
				"creators": [],
				"dateDecided": "2008-01-10",
				"court": "court.appeal",
				"docketNumber": "C45077",
				"firstPage": "11",
				"jurisdiction": "ca:on",
				"language": "en",
				"url": "https://canlii.ca/t/1vd4b",
				"yearAsVolume": "2008",
				"attachments": [
					{
						"title": "CanLII Full Text PDF",
						"mimeType": "application/pdf"
					},
					{
						"title": "CanLII Snapshot",
						"mimeType": "text/html"
					}
				],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/fr/ca/legis/lois/lrc-1985-c-c-46/derniere/lrc-1985-c-c-46.html",
		"items": [
			{
				"itemType": "statute",
				"nameOfAct": "Code criminel",
				"creators": [],
				"dateEnacted": "1985",
				"code": "LRC",
				"codeNumber": "C-46",
				"jurisdiction": "ca",
				"language": "fr",
				"url": "https://canlii.ca/t/6d6rm",
				"attachments": [
					{
						"title": "CanLII Full Text PDF",
						"mimeType": "application/pdf"
					},
					{
						"title": "CanLII Snapshot",
						"mimeType": "text/html"
					}
				],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/fr/ca/legis/lois/lc-2019-c-10/derniere/lc-2019-c-10.html",
		"items": [
			{
				"itemType": "statute",
				"nameOfAct": "Loi canadienne sur l'Accessibilité",
				"creators": [],
				"dateEnacted": "2019",
				"code": "LC",
				"codeNumber": "10",
				"jurisdiction": "ca",
				"language": "fr",
				"url": "https://canlii.ca/t/6c45w",
				"attachments": [
					{
						"title": "CanLII Full Text PDF",
						"mimeType": "application/pdf"
					},
					{
						"title": "CanLII Snapshot",
						"mimeType": "text/html"
					}
				],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/ca/laws/stat/rsc-1985-c-31-4th-supp/latest/rsc-1985-c-31-4th-supp.html",
		"items": [
			{
				"itemType": "statute",
				"nameOfAct": "Official Languages Act",
				"creators": [],
				"dateEnacted": "1985",
				"code": "RSC",
				"codeNumber": "31",
				"jurisdiction": "ca",
				"language": "en",
				"publicLawNumber": "4",
				"url": "https://canlii.ca/t/530sl",
				"attachments": [
					{
						"title": "CanLII Full Text PDF",
						"mimeType": "application/pdf"
					},
					{
						"title": "CanLII Snapshot",
						"mimeType": "text/html"
					}
				],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/nt/laws/regu/nwt-reg-089-2019/160878/nwt-reg-089-2019.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "9-1-1 Regulations",
				"creators": [],
				"code": "NWT Reg",
				"codeNumber": "2019",
				"jurisdiction": "ca:nt",
				"language": "en",
				"publicLawNumber": "089",
				"url": "https://canlii.ca/t/5435x",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/on/laws/regu/rro-1990-reg-629/105555/rro-1990-reg-629.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Accessible Vehicles",
				"creators": [],
				"code": "RRO",
				"codeNumber": "1990",
				"jurisdiction": "ca:on",
				"language": "en",
				"publicLawNumber": "629",
				"regulationType": "Revised",
				"url": "https://canlii.ca/t/521pt",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/ca/laws/regu/sor-2000-111/91604/sor-2000-111.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Canadian Aviation Security Regulations",
				"creators": [],
				"code": "SOR",
				"codeNumber": "2000",
				"jurisdiction": "ca",
				"language": "en",
				"publicLawNumber": "111",
				"url": "https://canlii.ca/t/l66s",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/fr/on/legis/regl/regl-de-lont-426-06/128567/regl-de-lont-426-06.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Compteurs intelligents : Recouvrement des frais",
				"creators": [],
				"code": "Règl de l'Ont",
				"codeNumber": "06",
				"jurisdiction": "ca:on",
				"language": "fr",
				"publicLawNumber": "426",
				"shortTitle": "Compteurs intelligents",
				"url": "https://canlii.ca/t/69xd7",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/mb/laws/regu/man-reg-468-88-r/187073/man-reg-468-88-r.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Education Administration Miscellaneous Provisions Regulation",
				"creators": [],
				"code": "Man Reg",
				"codeNumber": "88",
				"jurisdiction": "ca:mb",
				"language": "en",
				"publicLawNumber": "468",
				"regulationType": "Revised",
				"url": "https://canlii.ca/t/55293",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/nt/laws/regu/rrnwt-1990-c-e-27/70008/rrnwt-1990-c-e-27.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Explosives Regulations",
				"creators": [],
				"code": "RRNWT",
				"codeNumber": "1990",
				"jurisdiction": "ca:nt",
				"language": "en",
				"publicLawNumber": "E-27",
				"regulationType": "Revised",
				"url": "https://canlii.ca/t/kd6x",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/pe/laws/regu/pei-reg-ec564-02/178495/pei-reg-ec564-02.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Freedom of Information and Protection of Privacy Act General Regulations",
				"creators": [],
				"code": "PEI Reg",
				"codeNumber": "02",
				"jurisdiction": "ca:pe",
				"language": "en",
				"publicLawNumber": "EC564",
				"url": "https://canlii.ca/t/54qr5",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/nb/laws/regu/nb-reg-2000-8/137581/nb-reg-2000-8.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "General Regulation",
				"creators": [],
				"code": "NB Reg",
				"codeNumber": "2000",
				"jurisdiction": "ca:nb",
				"language": "en",
				"publicLawNumber": "8",
				"url": "https://canlii.ca/t/5379c",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/bc/laws/regu/bc-reg-241-2016/189727/bc-reg-241-2016.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Liquor Control and Licensing Regulation",
				"creators": [],
				"code": "BC Reg",
				"codeNumber": "2016",
				"jurisdiction": "ca:bc",
				"language": "en",
				"publicLawNumber": "241",
				"url": "https://canlii.ca/t/5557k",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/mb/laws/regu/man-reg-155-2003/66372/man-reg-155-2003.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Manitoba Drug Interchangeability Formulary Regulation",
				"creators": [],
				"code": "Man Reg",
				"codeNumber": "2003",
				"jurisdiction": "ca:mb",
				"language": "en",
				"publicLawNumber": "155",
				"url": "https://canlii.ca/t/k85q",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/ca/laws/regu/crc-c-1035/168245/crc-c-1035.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Migratory Birds Regulations",
				"creators": [],
				"code": "CRC",
				"codeNumber": "1035",
				"jurisdiction": "ca",
				"language": "en",
				"regulationType": "Revised",
				"url": "https://canlii.ca/t/54cch",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/sk/laws/regu/rrs-c-c-50.2-reg-21/10002/rrs-c-c-50.2-reg-21.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Oil and Gas Disposition Credit Regulations, 2000 (No. 3)",
				"creators": [],
				"code": "RRS",
				"codeNumber": "C-50.2",
				"jurisdiction": "ca:sk",
				"language": "en",
				"publicLawNumber": "21",
				"regulationType": "Revised",
				"url": "https://canlii.ca/t/h5jq",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/ns/laws/regu/ns-reg-24-2000/116394/ns-reg-24-2000.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Onshore Petroleum Geophysical Exploration Regulations",
				"creators": [],
				"code": "NS Reg",
				"codeNumber": "24",
				"jurisdiction": "ca:ns",
				"language": "en",
				"publicLawNumber": "2000",
				"url": "https://canlii.ca/t/52fr4",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/ab/laws/regu/alta-reg-184-2001/167807/alta-reg-184-2001.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Pest and Nuisance Control Regulation",
				"creators": [],
				"code": "Alta Reg",
				"codeNumber": "2001",
				"jurisdiction": "ca:ab",
				"language": "en",
				"publicLawNumber": "184",
				"url": "https://canlii.ca/t/54bvw",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/nl/laws/regu/nlr-78-99/189512/nlr-78-99.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Provincial Offences Ticket Regulations, 1999",
				"creators": [],
				"code": "NLR",
				"codeNumber": "78",
				"jurisdiction": "ca:nl",
				"language": "en",
				"publicLawNumber": "99",
				"url": "https://canlii.ca/t/5550d",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/fr/ca/legis/regl/dors-2000-111/91604/dors-2000-111.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Règlement canadien sur la sûreté aérienne",
				"creators": [],
				"code": "DORS",
				"codeNumber": "2000",
				"jurisdiction": "ca",
				"language": "fr",
				"publicLawNumber": "111",
				"url": "https://canlii.ca/t/pwb4",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/fr/nb/legis/regl/regl-du-n-b-2000-8/137581/regl-du-n-b-2000-8.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Règlement général",
				"creators": [],
				"code": "Règl du N-B",
				"codeNumber": "2000",
				"jurisdiction": "ca:nb",
				"language": "fr",
				"publicLawNumber": "8",
				"url": "https://canlii.ca/t/6b8dp",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/fr/mb/legis/regl/regl-du-man-468-88-r/187073/regl-du-man-468-88-r.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Règlement sur l'administration scolaire et les écoles publiques",
				"creators": [],
				"code": "Règl du Man",
				"codeNumber": "88",
				"jurisdiction": "ca:mb",
				"language": "fr",
				"publicLawNumber": "468",
				"regulationType": "Revised",
				"url": "https://canlii.ca/t/6d3df",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/fr/nu/legis/regl/regl-nu-045-1999/72702/regl-nu-045-1999.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Règlement sur l'heure avancée et les fuseaux horaires",
				"creators": [],
				"code": "Règl Nu",
				"codeNumber": "1999",
				"jurisdiction": "ca:nu",
				"language": "fr",
				"publicLawNumber": "045",
				"url": "https://canlii.ca/t/p6b2",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/fr/qc/legis/regl/rlrq-c-c-11-r-9/127994/rlrq-c-c-11-r-9.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Règlement sur la langue du commerce et des affaires",
				"creators": [],
				"code": "RLRQ",
				"codeNumber": "C-11",
				"jurisdiction": "ca:qc",
				"language": "fr",
				"publicLawNumber": "9",
				"regulationType": "Revised",
				"url": "https://canlii.ca/t/69wr4",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/fr/mb/legis/regl/regl-du-man-155-2003/66372/regl-du-man-155-2003.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Règlement sur la liste des médicaments interchangeables pour le Manitoba",
				"creators": [],
				"code": "Règl du Man",
				"codeNumber": "2003",
				"jurisdiction": "ca:mb",
				"language": "fr",
				"publicLawNumber": "155",
				"url": "https://canlii.ca/t/nz92",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/fr/qc/legis/regl/d-784-82/25180/d-784-82.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Règlement sur la publicité de l'Ordre des dentistes du Québec",
				"creators": [],
				"code": "D",
				"codeNumber": "82",
				"jurisdiction": "ca:qc",
				"language": "fr",
				"publicLawNumber": "784",
				"url": "https://canlii.ca/t/mfj0",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/fr/nt/legis/regl/regl-des-tn-o-089-2019/160878/regl-des-tn-o-089-2019.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Règlement sur le service d'urgence 911",
				"creators": [],
				"code": "Règl des TN-O",
				"codeNumber": "2019",
				"jurisdiction": "ca:nt",
				"language": "fr",
				"publicLawNumber": "089",
				"url": "https://canlii.ca/t/6c498",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/fr/nt/legis/regl/rrtn-o-1990-c-e-27/70008/rrtn-o-1990-c-e-27.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Règlement sur les explosifs",
				"creators": [],
				"code": "RRTN-O",
				"codeNumber": "1990",
				"jurisdiction": "ca:nt",
				"language": "fr",
				"publicLawNumber": "E-27",
				"regulationType": "Revised",
				"url": "https://canlii.ca/t/p3b8",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/fr/ca/legis/regl/crc-c-1035/168245/crc-c-1035.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Règlement sur les oiseaux migrateurs",
				"creators": [],
				"code": "CRC",
				"codeNumber": "1035",
				"jurisdiction": "ca",
				"language": "fr",
				"regulationType": "Revised",
				"url": "https://canlii.ca/t/6cdgt",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/qc/laws/regu/oc-784-82/25180/oc-784-82.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Regulation respecting advertising of the Ordre des dentistes du Québec",
				"creators": [],
				"code": "OC",
				"codeNumber": "82",
				"jurisdiction": "ca:qc",
				"language": "en",
				"publicLawNumber": "784",
				"url": "https://canlii.ca/t/hqdn",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/qc/laws/regu/cqlr-c-c-11-r-9/127994/cqlr-c-c-11-r-9.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Regulation respecting the language of commerce and business",
				"creators": [],
				"code": "CQLR",
				"codeNumber": "C-11",
				"jurisdiction": "ca:qc",
				"language": "en",
				"publicLawNumber": "9",
				"regulationType": "Revised",
				"url": "https://canlii.ca/t/52vms",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/yk/laws/regu/yoic-2000-130/186360/yoic-2000-130.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Remuneration - Election Officers Regulation",
				"creators": [],
				"code": "YOIC",
				"codeNumber": "2000",
				"jurisdiction": "ca:yk",
				"language": "en",
				"publicLawNumber": "130",
				"url": "https://canlii.ca/t/551hb",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/fr/yk/legis/regl/yd-2000-130/186360/yd-2000-130.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Rémunération - Règlement sur les officiers d'élection",
				"creators": [],
				"code": "YD",
				"codeNumber": "2000",
				"jurisdiction": "ca:yk",
				"language": "fr",
				"publicLawNumber": "130",
				"url": "https://canlii.ca/t/6d2ln",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/on/laws/regu/o-reg-426-06/128567/o-reg-426-06.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Smart Meters: Cost Recovery",
				"creators": [],
				"code": "O Reg",
				"codeNumber": "06",
				"jurisdiction": "ca:on",
				"language": "en",
				"publicLawNumber": "426",
				"shortTitle": "Smart Meters",
				"url": "https://canlii.ca/t/52w8w",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/sk/laws/regu/sask-reg-541-67/130880/sask-reg-541-67.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "The Subsurface Mineral Regulations, 1960",
				"creators": [],
				"code": "Sask Reg",
				"codeNumber": "67",
				"jurisdiction": "ca:sk",
				"language": "en",
				"publicLawNumber": "541",
				"url": "https://canlii.ca/t/52zv0",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/nu/laws/regu/nu-reg-045-99/72702/nu-reg-045-99.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Time Zone and Daylight Saving Time Regulations",
				"creators": [],
				"code": "Nu Reg",
				"codeNumber": "99",
				"jurisdiction": "ca:nu",
				"language": "en",
				"publicLawNumber": "045",
				"url": "https://canlii.ca/t/kh6q",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/nl/laws/regu/cnlr-331-96/60902/cnlr-331-96.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Town of Old Perlican Order",
				"creators": [],
				"code": "CNLR",
				"codeNumber": "96",
				"jurisdiction": "ca:nl",
				"language": "en",
				"publicLawNumber": "331",
				"regulationType": "Revised",
				"url": "https://canlii.ca/t/k23d",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/fr/on/legis/regl/rro-1990-regl-629/105555/rro-1990-regl-629.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Véhicules accessibles",
				"creators": [],
				"code": "RRO",
				"codeNumber": "1990",
				"jurisdiction": "ca:on",
				"language": "fr",
				"publicLawNumber": "629",
				"regulationType": "Revised",
				"url": "https://canlii.ca/t/692t5",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/pe/laws/stat/rspei-1988-c-f-15.1/latest/rspei-1988-c-f-15.1.html?autocompleteStr=RSPEI%20F-15.1&autocompletePos=1",
		"items": [
			{
				"itemType": "statute",
				"nameOfAct": "French Language Services Act",
				"creators": [],
				"dateEnacted": "1988",
				"code": "RSPEI",
				"codeNumber": "F-15.1",
				"jurisdiction": "ca:pe",
				"language": "en",
				"url": "https://canlii.ca/t/kt4z",
				"attachments": [
					{
						"title": "CanLII Full Text PDF",
						"mimeType": "application/pdf"
					},
					{
						"title": "CanLII Snapshot",
						"mimeType": "text/html"
					}
				],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	}
]
/** END TEST CASES **/
