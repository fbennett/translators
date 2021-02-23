{
	"translatorID": "14a19c45-e192-4e76-94a6-f2a27d463b53",
	"label": "CanLII (JM)",
	"creator": "Samuel Gagnon",
	"target": "^https?://(www\\.)?canlii\\.org/(en|fr)/",
	"minVersion": "3.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "gcsibv",
	"lastUpdated": "2021-02-23 16:12:42"
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
}	



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
	
	var voliss = doc.getElementsByClassName('documentMeta-citation')[0].nextElementSibling;
	voliss = ZU.trimInternal(
		ZU.xpathText(voliss, './node()[not(self::script)]', null, '') // We technically only use ./text() parts, but this is less confusing
	);
	var otherCitation = ZU.xpathText(doc, '//div[@id="documentMeta"]//div[contains(text(), "Other citations") or contains(text(), "Autres citations") or contains(text(), "Other citation") or contains(text(), "Autre citation")]/following-sibling::div');
	if (checkneutral(voliss)) {
		items.push(createneutral(voliss,voliss,doc,url));
	}
	else if (otherCitation && checkneutral2(otherCitation)) {
		items.push(createneutral2(voliss,otherCitation,doc,url));
	}
	else if (checkreporter1(voliss)) {
		items.push(createreporter1(voliss,voliss,doc,url));
		items.push(createcanlii(voliss,voliss,doc,url));
	}

	else if (checkreporter2(voliss)) {
		items.push(createreporter2(voliss,voliss,doc,url));
		items.push(createcanlii(voliss,voliss,doc,url));
	}

	else if (checkreporter3(voliss)) {
		items.push(createreporter3(voliss,doc,url));
		items.push(createcanlii(voliss,voliss,doc,url));
	}

	else if (checkcanlii(voliss)) {
		items.push(createcanlii(voliss,voliss,doc,url));
		
		if (checkreporter1(otherCitation)) {
			items.push(createreporter1(otherCitation,voliss,doc,url));
		}
		else if (checkreporter2(otherCitation)) {
			items.push(createreporter2(otherCitation,voliss,doc,url));

		}
		else if (checkreporter3(otherCitation)) {
			items.push(createreporter3(otherCitation,voliss,doc,url));
		}
	}
	createrelationship(items);
	completeitems(items);
}


function checkneutral(voliss) {
	// Test for neutral citation
	// Suttie c. Canada (Procureur Général), 2011 CF 119
	var Test = voliss;
	var Regex = /(\d\d\d\d+)\s+([A-Z]+)\s+(\d+)\s+\(CanLII\)/;
	var Details = Test.match(Regex);
	return Details;
}

function checkneutral2(voliss) {
	// Test for neutral citation
	// Suttie c. Canada (Procureur Général), 2011 CF 119
	var Test = voliss;
	var Regex = /(\d\d\d\d+)\s+([A-Z]+)\s+(\d+)/;
	var Details = Test.match(Regex);
	return Details;
}

function checkreporter1(voliss) {
	// Test for [yyyy] 1 xxx 1
	// R. v. Adams, [1995] 4 SCR 707
	var Test = voliss;
	var Regex = /\[(\d\d\d\d)\]\s+(\d+)\s+([A-Z]+)\s+(\d+)/;
	var Details = Test.match(Regex);
	return Details;
}

function checkreporter2(voliss) {
	// Test for [yyyy] xxx 1
	// Les Pétroles Inc. v. Tremblay et al., [1963] SCR 120
	var Test = voliss;
	var Regex = /\[(\d\d\d\d)\]\s+([A-Z]+)\s+(\d+)/;
	var Details = Test.match(Regex);
	return Details;
}

function checkreporter3(voliss) {
	// Test for 12 xxx (1th) 123
	// R. v. J.R.B., 24 CR (4th) 184
	var Test = voliss;
	var Regex = /(\d+)\s+([A-Z]+)\s+\((\d+)(?:\w+)\)\s(\d+)/;
	var Details = Test.match(Regex);
	return Details;
}

function checkcanlii(voliss) {
	// CanLII information
	// R. v. Adams, 1995 CanLII 56 (SCC)
	var Test = voliss;
	var Regex = /(\d\d\d\d+)\s+(CanLII)\s+(\d+)/;
	var Details = Test.match(Regex);
	return Details;
}

function neutralreference(newItem, details) {
	newItem.yearAsVolume = details[1];
	newItem.firstPage = details[3];
}

function reporter1reference(newItem,details) {
	newItem.yearAsVolume = details[1];
	newItem.reporterVolume = details[2];
	newItem.reporter = details[3];
	newItem.firstPage = details[4];
}

function reporter2reference(newItem,details) {
	newItem.yearAsVolume = details[1];
	newItem.reporter = details[2];
	newItem.firstPage = details[3];
}

function reporter3reference(newItem,details) {
	newItem.reporterVolume = details[1];
	newItem.reporter = details[2];
	newItem.issue = details[3];
	newItem.firstPage = details[4];
}

function canliireference(newItem, details) {
	newItem.yearAsVolume = details[1];
	newItem.reporter = details[2];
	newItem.firstPage = details[3];
}

function createneutral(voliss1,voliss2,doc,url) {
	var neutral = new Zotero.Item("case");
	var neutralDetails = checkneutral(voliss2);
	neutralreference(neutral, neutralDetails);
	othervalues(doc, url, neutral, voliss1);
	return neutral;
}

function createneutral2(voliss1,voliss2,doc,url) {
	var neutral = new Zotero.Item("case");
	var neutralDetails = checkneutral2(voliss2);
	neutralreference(neutral, neutralDetails);
	othervalues(doc, url, neutral, voliss1);
	return neutral;
}

function createreporter1(voliss1,voliss2,doc,url) {
	var reporter1 = new Zotero.Item("case");
	var reporter1Details = checkreporter1(voliss1);
	reporter1reference(reporter1, reporter1Details);
	othervalues(doc, url, reporter1, voliss2);
	return reporter1;
}

function createreporter2(voliss1,voliss2,doc,url) {
	var reporter2 = new Zotero.Item("case");
	var reporter2Details = checkreporter2(voliss1);
	reporter2reference(reporter2, reporter2Details);
	othervalues(doc, url, reporter2, voliss2);
	return reporter2;
}

function createreporter3(voliss1,voliss2,doc,url) {
	var reporter3 = new Zotero.Item("case");
	var reporter3Details = checkreporter3(voliss1);
	reporter3reference(reporter3, reporter3Details);
	othervalues(doc, url, reporter3, voliss2);
	return reporter3;
}

function createcanlii(voliss1,voliss2,doc,url) {
	var canlii = new Zotero.Item("case");
	var canliiDetails = checkcanlii(voliss1);
	canliireference(canlii, canliiDetails);
	othervalues(doc, url, canlii, voliss2);
	return canlii;
}

function createrelationship(items) {
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

function othervalues(doc, url, newItem, voliss) {
	var citationParts = voliss.split(',');
	newItem.caseName = citationParts[0];
	var provinceRegex = /https?:\/\/(?:www\.)?canlii\.org[^/]*\/(?:en|fr)\/([^/]+)\/[^/]+\/doc\/.+/;
	var provinceURL = url;
	var provinceDetails = provinceURL.match(provinceRegex);
	var province = provinceDetails[1];
	if (province == 'ca') {
		jurisdiction = province;
	}
	else {
		jurisdiction = "ca:"+province;
	}
	
	newItem.jurisdiction = jurisdiction

	language = doc.documentElement.lang;
	newItem.language = language
	court_description = text('#breadcrumbs span', 2);
	newItem.dateDecided = ZU.xpathText(doc, '//div[@id="documentMeta"]//div[contains(text(), "Date")]/following-sibling::div');
	
	court_description = text('#breadcrumbs span', 2);
	newItem.dateDecided = ZU.xpathText(doc, '//div[@id="documentMeta"]//div[contains(text(), "Date")]/following-sibling::div');
	
	if (courtsDict[jurisdiction].language[language].court[court_description]) {
		court = courtsDict[jurisdiction].language[language].court[court_description].LRRName;
	} else {
		court = court_description;
	}
	newItem.court = court
	
	newItem.docketNumber = ZU.xpathText(doc, '//div[@id="documentMeta"]//div[contains(text(), "File number") or contains(text(), "Numéro de dossier")]/following-sibling::div');
	var otherCitations = ZU.xpathText(doc, '//div[@id="documentMeta"]//div[contains(text(), "Other citations") or contains(text(), "Autres citations")]/following-sibling::div');
	if (otherCitations) {
		newItem.notes.push({ note: "Other Citations: " + ZU.trimInternal(otherCitations) });
	}
	
	var shortUrl = doc.getElementsByClassName('documentStaticUrl')[0];
	if (shortUrl) {
		newItem.url = shortUrl.textContent.trim();
	}

	// attach link to pdf version
	// Z.debug(url)
	var pdfurl = url.replace(/\.html(?:[?#].*)?/, ".pdf");
	newItem.attachments.push({
		url: pdfurl,
		title: "CanLII Full Text PDF",
		mimeType: "application/pdf"
	});
	newItem.attachments.push({
		document: doc,
		title: "CanLII Snapshot"
	});
}

function completeitems(items) {
	// Save the items
	for (i = 0, ilen = items.length; i < ilen; i += 1) {
		items[i].complete();
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
}/** BEGIN TEST CASES **/
var testCases = [
	{
		"type": "web",
		"url": "https://www.canlii.org/en/ca/scc/doc/2010/2010scc2/2010scc2.html",
		"items": [
			{
				"itemType": "case",
				"caseName": "MiningWatch Canada v. Canada (Fisheries and Oceans)",
				"creators": [],
				"dateDecided": "2010-01-21",
				"court": "Supreme Court of Canada",
				"docketNumber": "32797",
				"firstPage": "2",
				"jurisdiction": "ca",
				"language": "en",
				"url": "https://canlii.ca/t/27jmr",
				"yearAsVolume": "2010",
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
				"notes": [
					{
						"note": "Other Citations: 397 NR 232 — [2010] SCJ No 2 (QL) — [2010] ACS no 2"
					}
				],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/ca/fct/doc/2011/2011fc119/2011fc119.html?searchUrlHash=AAAAAQAjU3V0dGllIHYuIENhbmFkYSAoQXR0b3JuZXkgR2VuZXJhbCkAAAAAAQ",
		"items": [
			{
				"itemType": "case",
				"caseName": "Suttie v. Canada (Attorney General)",
				"creators": [],
				"dateDecided": "2011-02-02",
				"court": "Federal Court",
				"docketNumber": "T-1089-10",
				"firstPage": "119",
				"jurisdiction": "ca",
				"language": "en",
				"url": "https://canlii.ca/t/2flrk",
				"yearAsVolume": "2011",
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
		"url": "https://www.canlii.org/fr/ca/csc/doc/2010/2010csc2/2010csc2.html",
		"items": [
			{
				"itemType": "case",
				"caseName": "Mines Alerte Canada c. Canada (Pêches et Océans)",
				"creators": [],
				"dateDecided": "2010-01-21",
				"court": "Cour suprême du Canada",
				"docketNumber": "32797",
				"firstPage": "2",
				"jurisdiction": "ca",
				"language": "fr",
				"url": "https://canlii.ca/t/27jms",
				"yearAsVolume": "2010",
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
				"notes": [
					{
						"note": "Other Citations: 397 NR 232 — [2010] SCJ No 2 (QL) — [2010] ACS no 2"
					}
				],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/fr/ca/cfpi/doc/2011/2011cf119/2011cf119.html?searchUrlHash=AAAAAQAjU3V0dGllIHYuIENhbmFkYSAoQXR0b3JuZXkgR2VuZXJhbCkAAAAAAQ",
		"items": [
			{
				"itemType": "case",
				"caseName": "Suttie c. Canada (Procureur Général)",
				"creators": [],
				"dateDecided": "2011-02-02",
				"court": "Cour fédérale",
				"docketNumber": "T-1089-10",
				"firstPage": "119",
				"jurisdiction": "ca",
				"language": "fr",
				"url": "https://canlii.ca/t/fks9z",
				"yearAsVolume": "2011",
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
		"url": "https://www.canlii.org/en/ca/scc/doc/2010/2010scc2/2010scc2.html",
		"items": [
			{
				"itemType": "case",
				"caseName": "MiningWatch Canada v. Canada (Fisheries and Oceans)",
				"creators": [],
				"dateDecided": "2010-01-21",
				"court": "Supreme Court of Canada",
				"docketNumber": "32797",
				"firstPage": "2",
				"jurisdiction": "ca",
				"language": "en",
				"url": "https://canlii.ca/t/27jmr",
				"yearAsVolume": "2010",
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
				"notes": [
					{
						"note": "Other Citations: 397 NR 232 — [2010] SCJ No 2 (QL) — [2010] ACS no 2"
					}
				],
				"seeAlso": []
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/ca/scc/doc/1962/1962canlii93/1962canlii93.html",
		"items": [
			{
				"itemType": "case",
				"caseName": "Les Pétroles Inc. v. Tremblay et al.",
				"creators": [],
				"dateDecided": "1962-12-17",
				"court": "Supreme Court of Canada",
				"firstPage": "120",
				"itemID": "0",
				"jurisdiction": "ca",
				"language": "en",
				"reporter": "SCR",
				"url": "https://canlii.ca/t/22vwz",
				"yearAsVolume": "1963",
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
				"seeAlso": [
					"1"
				]
			},
			{
				"itemType": "case",
				"caseName": "Les Pétroles Inc. v. Tremblay et al.",
				"creators": [],
				"dateDecided": "1962-12-17",
				"court": "Supreme Court of Canada",
				"firstPage": "93",
				"itemID": "1",
				"jurisdiction": "ca",
				"language": "en",
				"reporter": "CanLII",
				"url": "https://canlii.ca/t/22vwz",
				"yearAsVolume": "1962",
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
				"seeAlso": [
					"0"
				]
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/en/ab/abpc/doc/1980/1980canlii3033/1980canlii3033.html",
		"items": [
			{
				"itemType": "case",
				"caseName": "R. v. Charron",
				"creators": [],
				"dateDecided": "1980-05-20",
				"court": "Provincial Court",
				"firstPage": "3033",
				"itemID": "0",
				"jurisdiction": "ca:ab",
				"language": "en",
				"reporter": "CanLII",
				"url": "https://canlii.ca/t/gb9v0",
				"yearAsVolume": "1980",
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
				"notes": [
					{
						"note": "Other Citations: [1980] 5 WWR 573 — 17 CR (3d) 187"
					}
				],
				"seeAlso": [
					"1"
				]
			},
			{
				"itemType": "case",
				"caseName": "R. v. Charron",
				"creators": [],
				"dateDecided": "1980-05-20",
				"court": "Provincial Court",
				"firstPage": "573",
				"itemID": "1",
				"jurisdiction": "ca:ab",
				"language": "en",
				"reporter": "WWR",
				"reporterVolume": "5",
				"url": "https://canlii.ca/t/gb9v0",
				"yearAsVolume": "1980",
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
				"notes": [
					{
						"note": "Other Citations: [1980] 5 WWR 573 — 17 CR (3d) 187"
					}
				],
				"seeAlso": [
					"0"
				]
			}
		]
	},
	{
		"type": "web",
		"url": "https://www.canlii.org/fr/qc/qctaq/doc/2020/2020canlii41352/2020canlii41352.html",
		"items": [
			{
				"itemType": "case",
				"caseName": "Loranc Alkhouri c Bureau de LA Sécurité Privée",
				"creators": [],
				"dateDecided": "2020-06-10",
				"court": "Tribunal administratif du Québec",
				"docketNumber": "SAE-Q-243775-1909",
				"firstPage": "0683",
				"itemID": "0",
				"jurisdiction": "ca:qc",
				"language": "fr",
				"url": "https://canlii.ca/t/j8cl4",
				"yearAsVolume": "2020",
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
		"url": "https://www.canlii.org/en/ca/scc/doc/1996/1996canlii191/1996canlii191.html",
		"items": [
			{
				"itemType": "case",
				"caseName": "Gordon v. Goertz",
				"creators": [],
				"dateDecided": "1996-05-02",
				"court": "supreme.court",
				"docketNumber": "24622",
				"firstPage": "27",
				"itemID": "0",
				"jurisdiction": "ca",
				"language": "en",
				"reporter": "SCR",
				"reporterVolume": "2",
				"url": "https://canlii.ca/t/1fr99",
				"yearAsVolume": "1996",
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
				"notes": [
					{
						"note": "Other Citations: 134 DLR (4th) 321 — 196 NR 321 — 114 WAC 241 — [1996] 5 WWR 457 — 141 Sask R 241 — 19 RFL (4th) 177 — AZ-96111061 — [1996] CarswellSask 199 — EYB 1996-30431 — JE 96-959 — [1996] SCJ No 52 (QL) — [1996] ACS no 52 — [1996] RDF 209 — 62 ACWS (3d) 737"
					}
				],
				"seeAlso": [
					"1"
				]
			},
			{
				"itemType": "case",
				"caseName": "Gordon v. Goertz",
				"creators": [],
				"dateDecided": "1996-05-02",
				"court": "supreme.court",
				"docketNumber": "24622",
				"firstPage": "191",
				"itemID": "1",
				"jurisdiction": "ca",
				"language": "en",
				"reporter": "CanLII",
				"url": "https://canlii.ca/t/1fr99",
				"yearAsVolume": "1996",
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
				"notes": [
					{
						"note": "Other Citations: 134 DLR (4th) 321 — 196 NR 321 — 114 WAC 241 — [1996] 5 WWR 457 — 141 Sask R 241 — 19 RFL (4th) 177 — AZ-96111061 — [1996] CarswellSask 199 — EYB 1996-30431 — JE 96-959 — [1996] SCJ No 52 (QL) — [1996] ACS no 52 — [1996] RDF 209 — 62 ACWS (3d) 737"
					}
				],
				"seeAlso": [
					"0"
				]
			}
		]
	}
]
/** END TEST CASES **/
