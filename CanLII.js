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
	"lastUpdated": "2021-05-17 19:27:38"
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
					"Court of Appeal": {
						LRRName: "court.appeal",
						start: "1998-01-01"
					},
					"Court of Queen's Bench": {
						LRRName: "court.queens.bench",
						start: "1998-01-01"
					},
					"Provincial Court": {
						LRRName: "provincial.court",
						start: "1998.01-01"
					}
				}
			},
			"fr": {
				court: {
					"Cour d'appel": {
						LRRName: "court.appeal",
						start: "1998-01-01"
					},
					"Cour du banc de la Reine": {
						LRRName: "court.queens.bench",
						start: "1998-01-01"
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
					"Court of Appeal": {
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
		}
	},
	"ca:mb": {
		language: {
			"en": {
				court: {
					"Court of Appeal": {
						LRRName: "court.appeal",
						start: "2000-03-01"
					},
					"Court of Queen's Bench of Manitoba": {
						LRRName: "court.queens.bench",
						start: "2000-04-01"
					},
					"Provincial Court of Manitoba": {
						LRRName: "provincial.court",
						start: "2007-01-01"
					}
				}
			},
			"fr": {
				court: {
					"Cour d'appel": {
						LRRName: "court.appeal",
						start: "2000-03-01"
					},
					"Cour du Banc de la Reine du Manitoba": {
						LRRName: "court.queens.bench",
						start: "2000-04-01"
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
					"Court of Queen's Bench of New Brunswick": {
						LRRName: "court.queens.bench",
						start: "2002-01-01"
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
					"Cour du Banc de la Reine du Nouveau-Brunswick": {
						LRRName: "court.queens.bench",
						start: "2002-01-01"
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
					"Court of Appeal": {
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
					"Court of Queen's Bench for Saskatchewan": {
						LRRName: "court.queens.bench",
						start: "1999-01-01"
					},
					"Provincial Court of Saskatchewan": {
						LRRName: "provincial.court",
						start: "2002-01-01"
					},
					"Saskatchewan District Court": {
						LRRName: "court.queens.bench",
						start: ""
					},
					"Saskatchewan Surrogate Court": {
						LRRName: "court.queens.bench",
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
					"Cour du Banc de la Reine de la Saskatchewan": {
						LRRName: "court.queens.bench",
						start: "1999-01-01"
					},
					"Cour provinciale de la Saskatchewan": {
						LRRName: "provincial.court",
						start: "2002-01-01"
					},
					"Saskatchewan District Court": {
						LRRName: "court.queens.bench",
						start: ""
					},
					"Saskatchewan Surrogate Court": {
						LRRName: "court.queens.bench",
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
					"Court of Appeal": {
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
					"Cour d'appel": {
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
	court_description = text('#breadcrumbs span', 2);
	if (courtsDict[item.jurisdiction].language[item.language].court[court_description].LRRName) {
		return courtsDict[item.jurisdiction].language[item.language].court[court_description].LRRName;
	} else {
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
		ZU.setMultiField(item,"caseName", altCaseName,altLang,item.language)
		if (item.itemID && item.reporter) {
			var referenceArray = [];
			buildReferenceArray(altCitationString,referenceArray);
			buildReferenceArray(altOtherCitationString,referenceArray);
			var referenceObject = Object.assign({},referenceArray);
			var altReference = referenceObject[item.itemID];
			var referenceRegex =  /^(?:\[(\d{4})\]|(\d{4}))?\s?(?:(\d+)\s)?([\D]+?)(?:(?:(?:\s\(|\s(?:no\s))(\d+)(?:\w+\)\s|$|\s))|\s)(\d+)?(?:\(\w+\))?$/i;
			altReporter = altReference.match(referenceRegex)[4];
			ZU.setMultiField(item,"reporter", altReporter,altLang,item.language)
		}
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
	item.court = caseCourt(item);
	item.dateDecided = ZU.xpathText(doc, '//div[@id="documentMeta"]//div[contains(text(), "Date")]/following-sibling::div');
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
	var statuteRegex = /^([\s\S]+?)\,\s(\w+)(?:\s(\d+)\,)?\sc\s([\s\S]+?)?(?:\s\((\d)\w+\s\w+\))?$/;
	// 1 : nameOfAct
	// 2 : code
	// 3 : dateEnacted
	// 4 : publicLawNumber
	// 5 : codeNumber

	var infoParts = metaInfo.match(statuteRegex);
	ZU.setMultiField(item,"nameOfAct", infoParts[1],item.language,item.language);
	ZU.setMultiField(item,"code", infoParts[2],item.language,item.language);
	if (infoParts[3]) item.dateEnacted = infoParts[3];
	item.publicLawNumber = infoParts[4];
	if (infoParts[5]) item.codeNumber = infoParts[5];
	item.url = doc.querySelector('.documentStaticUrl a');
	item.jurisdiction = findJurisdiction(url);
	var bilingual = doc.getElementById('languageSwitch');
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
		var statuteRegex = /^([\s\S]+?)\,\s(\w+)(?:\s(\d+)\,)?\sc\s([\s\S]+?)?(?:\s\((\d)\w+\s\w+\))?$/;
		// 1 : nameOfAct
		// 2 : code
		// 3 : dateEnacted
		// 4 : publicLawNumber
		// 5 : codeNumber

		var altMetaInfo = ZU.trimInternal(ZU.xpathText(altDoc, '//*[@id="documentContainer"]/div[2]/h2'))
		var altInfoParts = altMetaInfo.match(statuteRegex);
		ZU.setMultiField(item,"nameOfAct", altInfoParts[1],altLang,item.language);
		ZU.setMultiField(item,"code", altInfoParts[2],altLang,item.language);
		item.complete();
	});
}

function regulationReference(doc, url) {
	var item = new Zotero.Item("regulation");
	item.language = doc.documentElement.lang;
	var metaInfo = ZU.trimInternal(ZU.xpathText(doc, '//*[@id="documentContainer"]/div[2]/h2'));
	var regulationRegex = /^([\s\S]+?)\,\s([è\w\-]+?[\sA-Za-z\-\']+)(?:(?:\s|\/)?(?:(\d{2}|\d{4})\,?)?(?:\,?\sc\s([\w\-\.]+\,?))?)(?:(?:\s|\s[\wè]+\s|\-|\/)((?:EC)?\d+))?(?:(?:\/|\-)(\d+)(?:\s(R))?)?$/;
	// 1 : nameOfAct
	// 2 : code
	// 3 : dateEnacted
	// 4 : publicLawNumber
	// 5 : codeNumber
	// 6 : dateEnacted
	// 7 : regulationType (revised manitoba)

	var infoParts = metaInfo.match(regulationRegex);
	ZU.setMultiField(item,"nameOfAct", infoParts[1],item.language,item.language);
	ZU.setMultiField(item,"code", infoParts[2],item.language,item.language);


	if (infoParts[3]) item.dateEnacted = infoParts[3];
	else if (infoParts[6]) item.dateEnacted = infoParts[6];
	if (infoParts[4]) item.publicLawNumber = infoParts[4];
	if (infoParts[5]) item.codeNumber = infoParts[5];
	if (infoParts[7]) item.regulationType = infoParts[7];

	item.url = doc.querySelector('.documentStaticUrl a');
	item.jurisdiction = findJurisdiction(url);
	var bilingual = doc.getElementById('languageSwitch');
	if (bilingual) {		
		regulationBilingual(item,bilingual);
	}
	else {
		item.complete();
	}
}

function regulationBilingual(item,bilingual) {
	var altLang = caseAltLang(item);
	var altLangUrl = 'https://www.canlii.org/'+attr(bilingual, '.canlii', 'href', 0);
	Zotero.Utilities.processDocuments(altLangUrl, function(altDoc) {
		var regulationRegex = /^([\s\S]+?)\,\s([è\w\-]+?[\sA-Za-z\-\']+)(?:(?:\s|\/)?(?:(\d{2}|\d{4})\,?)?(?:\,?\sc\s([\w\-\.]+\,?))?)(?:(?:\s|\s[\wè]+\s|\-|\/)((?:EC)?\d+))?(?:(?:\/|\-)(\d+)(?:\s(R))?)?$/;
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
				"jurisdiction": "ca",
				"language": "fr",
				"publicLawNumber": "C-46",
				"url": "https://canlii.ca/t/ckjd",
				"attachments": [],
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
				"jurisdiction": "ca",
				"language": "fr",
				"publicLawNumber": "10",
				"url": "https://canlii.ca/t/f6jp",
				"attachments": [],
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
				"codeNumber": "4",
				"jurisdiction": "ca",
				"language": "en",
				"publicLawNumber": "31",
				"url": "https://canlii.ca/t/7vbz",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/fr/ca/legis/regl/dors-96-383/94706/dors-96-383.html",
		"items": [
			{
				"itemType": "regulation",
				"nameOfAct": "Décret sur l'abandon et la poursuite des procédures, 1996",
				"creators": [],
				"dateEnacted": "96",
				"code": "DORS",
				"codeNumber": "383",
				"jurisdiction": "ca",
				"language": "fr",
				"url": "https://canlii.ca/t/q0rj",
				"attachments": [],
				"tags": [],
				"notes": [],
				"seeAlso": []
			}
		]
	}
]
/** END TEST CASES **/
