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
	"lastUpdated": "2021-02-06 15:43:59"
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
	var newItem = new Zotero.Item("case");
	var voliss = doc.getElementsByClassName('documentMeta-citation')[0].nextElementSibling;
	voliss = ZU.trimInternal(
		ZU.xpathText(voliss, './node()[not(self::script)]', null, '') // We technically only use ./text() parts, but this is less confusing
	);
	// e.g. Reference re Secession of Quebec, 1998 CanLII 793 (SCC), [1998] 2 SCR 217, <http://canlii.ca/t/1fqr3>, retrieved on 2019-11-25
	var citationParts = voliss.split(',');
	newItem.caseName = citationParts[0];
	
	// Test for neutral citation
	// Suttie c. Canada (Procureur Général), 2011 CF 119
	var neutralTest = voliss;
	var neutralRegex = /(\d\d\d\d+)\s+([A-Z]+)\s+(\d+)\s+\(CanLII\)/;
	var neutralDetails = neutralTest.match(neutralRegex);

	// CanLII information
	// R. v. Adams, 1995 CanLII 56 (SCC)
	var CanLIITest = voliss;
	var CanLIIRegex = /(\d\d\d\d+)\s+(CanLII)\s+(\d+)/;
	var CanLIIDetails = CanLIITest.match(CanLIIRegex);

	// Test for [yyyy] 1 xxx 1
	// R. v. Adams, [1995] 4 SCR 707
	var reporterTest1 = voliss;
	var reporter1Regex = /\[(\d\d\d\d)\]\s+(\d+)\s+([A-Z]+)\s+(\d+)/;
	var reporter1Details = reporterTest1.match(reporter1Regex);

	// Test for [yyyy] xxx 1
	// Les Pétroles Inc. v. Tremblay et al., [1963] SCR 120
	var reporterTest2 = voliss;
	var reporter2Regex = /\[(\d\d\d\d)\]\s+([A-Z]+)\s+(\d+)/;
	var reporter2Details = reporterTest2.match(reporter2Regex);

	if (neutralDetails) {
		newItem.yearAsVolume = neutralDetails[1];
		newItem.firstPage = neutralDetails[3];
	}
	
	else if (reporter1Details) {
		newItem.yearAsVolume = reporter1Details[1];
		newItem.reporterVolume = reporter1Details[2];
		newItem.reporter = reporter1Details[3];
		newItem.firstPage = reporter1Details[4];
		newItem.filingDate = CanLIIDetails[1];
		newItem.archive = CanLIIDetails[2];
		newItem.archiveLocation = CanLIIDetails[3];
	}
	
	else if (reporter2Details) {
		newItem.yearAsVolume = reporter2Details[1];
		newItem.reporter = reporter2Details[2];
		newItem.firstPage = reporter2Details[3];
		newItem.filingDate = CanLIIDetails[1];
		newItem.archive = CanLIIDetails[2];
		newItem.archiveLocation = CanLIIDetails[3];
	}

	else if (CanLIIDetails) {
		newItem.filingDate = CanLIIDetails[1];
		newItem.archive = CanLIIDetails[2];
		newItem.archiveLocation = CanLIIDetails[3];
		
		var otherCitation = ZU.xpathText(doc, '//div[@id="documentMeta"]//div[contains(text(), "Other citations") or contains(text(), "Autres citations") or contains(text(), "Other citation") or contains(text(), "Autre citation")]/following-sibling::div');
		
		var neutralTest2 = otherCitation;
		var neutralRegex2 = /(\d\d\d\d)\s+([A-Z]+)\s+(\d+)/;
		var neutralDetails2 = neutralTest2.match(neutralRegex2);

		var reporterTest3 = otherCitation;
		var reporter3Regex = /\[(\d\d\d\d)\]\s+(\d+)\s+([A-Z]+)\s+(\d+)/;
		var reporter3Details = reporterTest3.match(reporter3Regex);
		
		var reporterTest4 = otherCitation;
		var reporter4Regex = /\[(\d\d\d\d)\]\s+([A-Z]+)\s+(\d+)/;
		var reporter4Details = reporterTest4.match(reporter4Regex);
		
		if (neutralDetails2) {
			newItem.yearAsVolume = neutralDetails2[1];
			newItem.firstPage = neutralDetails2[3];
		}
		
		else if (reporter3Details) {
			newItem.yearAsVolume = reporter3Details[1];
			newItem.reporterVolume = reporter3Details[2];
			newItem.reporter = reporter3Details[3];
			newItem.firstPage = reporter3Details[4];
		}
		
		else if (reporter4Details) {
			newItem.yearAsVolume = reporter4Details[1];
			newItem.reporter = reporter4Details[2];
			newItem.firstPage = reporter4Details[3];
		}
	}

	var provinceRegex = /https?:\/\/(?:www\.)?canlii\.org[^/]*\/(?:en|fr)\/([^/]+)\/[^/]+\/doc\/.+/;
	var provinceURL = url;
	var provinceDetails = provinceURL.match(provinceRegex);
	var province = provinceDetails[1];
	if (province == 'ca') {
		newItem.jurisdiction = province;
	}
	else {
		newItem.jurisdiction = "ca:"+province;
	}

	newItem.language = doc.documentElement.lang;
	newItem.court = text('#breadcrumbs span', 2);
	newItem.dateDecided = ZU.xpathText(doc, '//div[@id="documentMeta"]//div[contains(text(), "Date")]/following-sibling::div');
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
	newItem.complete();
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
				"archive": "CanLII",
				"archiveLocation": "93",
				"court": "Supreme Court of Canada",
				"filingDate": "1962",
				"firstPage": "120",
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
				"seeAlso": []
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
				"archive": "CanLII",
				"archiveLocation": "3033",
				"court": "Provincial Court",
				"filingDate": "1980",
				"firstPage": "573",
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
				"seeAlso": []
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
				"archive": "CanLII",
				"archiveLocation": "41352",
				"court": "Tribunal administratif du Québec",
				"docketNumber": "SAE-Q-243775-1909",
				"filingDate": "2020",
				"firstPage": "0683",
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
	}
]
/** END TEST CASES **/
