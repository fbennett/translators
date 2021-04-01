{
	"translatorID": "6968dace-7c12-4eb2-ae4b-d2731ddbba6e",
	"label": "CanLII (JM)",
	"creator": "Samuel Gagnon",
	"target": "^https?://(www\\.)?canlii\\.org/(en|fr)/",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "gcsibv",
	"lastUpdated": "2021-03-31 15:17:44"
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


// attr()/text() v2
// eslint-disable-next-line

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
					"Cour d'appel": {
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

var canLiiRegexp = /https?:\/\/(?:www\.)?canlii\.org[^/]*\/(?:en|fr)\/[^/]+\/[^/]+\/doc\/.+/;

function detectWeb(doc, url) {
	if (canLiiRegexp.test(url)) {
		return "case";
	}
	else {
		var aTags = doc.getElementsByTagName("a");
		for (var i = 0; i < aTags.length; i++) {
			if (canLiiRegexp.test(aTags[i].href)) {
				return "multiple";
			}
		}
	}
	return false;
}


function scrape(doc, url) {
	items = [];
	caseReference(doc,url,items);
	createRelationship(items);
	completeItems(items,doc);
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

function caseReference(doc,url,items){
	var mainCitationString = createMainCitationString(doc);
	var otherCitationString = createOtherCitationString(doc);
	var neutral = (checkNeutral(mainCitationString,otherCitationString));
	if (neutral) {
		items.push(createNeutral(doc,url,neutral,mainCitationString));
	}
	else {
		var referenceArray = [];
		buildReferenceArray(mainCitationString,referenceArray);
		buildReferenceArray(otherCitationString,referenceArray);
		var referenceObject = Object.assign({},referenceArray);
		Zotero.debug(referenceObject);
		//Eventually the translator will select official reporters and only ask for user input when two officialish reporters
		// cannot be found.
		Zotero.selectItems(referenceObject,function(selectedReferences) {
			// 1 : yearAsVol
			// 2 : archiveDate
			// 3 : volNumber
			// 4 : reporterNumber
			// 5 : seriesNum
			// 6 : firstPage
			regex =  /^(?:\[(\d{4})\]|(\d{4}))?\s?(?:(\d+)\s)?([\D]+?)(?:(?:(?:\s\(|\s(?:no\s))(\d+)(?:\w+\)\s|$|\s))|\s)(\d+)?(?:\(\w+\))?$/gi
		});
	}
}

function buildReferenceArray(string,array){
	referenceRegex = /(?:(\d+\s\w+\s\d+)|(\[\d{4}\]\s\d*\s*[\w\s]+\s\d+\s?\(?\w*\)?)|(\d+\s[\w\s]+\s+\(\d+\w+\)\s\d+))/g;
	references = string.match(referenceRegex);
	for (i = 0, ilen = references.length; i < ilen; i += 1) {
		references[i] = ZU.trim(references[i]);
		array.push(references[i]);
	}
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
	item.documentNumber = regex[2];
	othervalues(doc,url,item,citationString);
	return item;
}

function othervalues(doc,url,item,mainCitationString) {
	item.caseName = caseTitle(mainCitationString);
	item.jurisdiction = caseJurisdiction(url);
	item.language = doc.documentElement.lang;
	item.court = caseCourt(item);
	item.dateDecided = ZU.xpathText(doc, '//div[@id="documentMeta"]//div[contains(text(), "Date")]/following-sibling::div');
	item.docketNumber = caseDocket(doc);
	item.url = caseUrl(doc);	
	caseAttachements(doc,url,item);
}

function caseTitle(citationString){
	var titleRegex = /([\s\S]+?)\,\s(\d{4}\s+\w+\s\d+|\[\d{4}\]\s\d*\s*\w+\s\d+|\d+\s+[A-Z]+\s+\(\d+(?:\w+)\)\s\d+)(?:\s\([\s\w]+\))?(?:\,\s)?(\d{4}\s+\w+\s\d+|\[\d{4}\]\s\d*\s\w+\s\d+|\d+\s+[A-Z]+\s+\(\d+(?:\w+)\)\s\d+)?(?:\s\([\s\w]+\))?/;
	var citationParts = citationString.match(titleRegex);
	var NameParts = citationParts[1].split(';');
	return NameParts[0];
}

function caseJurisdiction(url){
	var provinceRegex = /https?:\/\/(?:www\.)?canlii\.org[^/]*\/(?:en|fr)\/([^/]+)\/[^/]+\/doc\/.+/;
	var provinceDetails = url.match(provinceRegex);
	var province = provinceDetails[1];
	if (province == 'ca') {
		return province;
	}
	else {
		return "ca:"+province;
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

function caseDocket(doc) {
	docketNumberList = ZU.trimInternal(
		ZU.xpathText(doc, '//div[@id="documentMeta"]//div[contains(text(), "File number") or contains(text(), "Numéro de dossier")]/following-sibling::div')
	);
	docketNumber = docketNumberList.split(';');
	return docketNumber[0];
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
	item.multi._keys.caseName = {};
	var altLangUrl = 'https://www.canlii.org/'+attr(bilingual, '.canlii', 'href', 0);
	Zotero.Utilities.processDocuments(altLangUrl, function(altDoc) {
		altCitationString = createMainCitationString(altDoc);
		altCaseName = caseTitle(altCitationString);
		item.multi._keys.caseName[altLang] = altCasename;
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

function createRelationship(items) {
	var items, i, ilen, j, jlen;
 
	// Assign a bogus itemID to each item in the set
	for (i = 0, ilen = items.length; i < ilen; i += 1) {
		items[i].itemID = "" + i;
	}

	// Set bogus itemIDs in each item's seeAlso
	// field (skipping the item's own ID)
	for (i = 0, ilen = items.length; i < ilen; i += 1) {
		for (j = 0, jlen = items.length; j < jlen; j += 1) {
			if (i === j) {
				continue;
			}
			items[i].seeAlso.push("" + j);
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
	if (canLiiRegexp.test(url)) {
		scrape(doc, url);
	}
	else {
		var items = ZU.getItemArray(doc, doc, canLiiRegexp);
		Zotero.selectItems(items, function (items) {
			if (!items) {
				return;
			}
			var articles = [];
			for (var i in items) {
				articles.push(i);
			}
			ZU.processDocuments(articles, scrape);
		});
	}
}
/** BEGIN TEST CASES **/
var testCases = [
	{
		"type": "web",
		"url": "https://www.canlii.org/en/ca/scc/doc/2021/2021scc8/2021scc8.html",
		"items": [
			{
				"itemType": "case",
				"caseName": "R. v. W.O.",
				"creators": [],
				"dateDecided": "2021-02-19",
				"court": "supreme.court",
				"docketNumber": "39245",
				"documentNumber": "8",
				"itemID": "0",
				"jurisdiction": "ca",
				"language": "en",
				"url": "https://canlii.ca/t/jd9kd",
				"yearAsVolume": "2021",
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
