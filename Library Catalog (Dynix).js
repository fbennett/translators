{
	"translatorID": "774d7dc2-3474-2684-392c-f787789ec63d",
	"label": "Library Catalog (Dynix)",
	"creator": "Simon Kornblith and Sylvain Machefert",
	"target": "ipac\\.jsp\\?.*(?:uri=(?:link|full)=[0-9]|menu=search|term=)",
	"minVersion": "2.1",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "gcsbv",
	"lastUpdated": "2012-12-03 05:12:02"
}

function detectWeb(doc, url) {
	// make sure there are multiple results
	if (getSearchResults(doc).length) {
	  return "multiple";
	} else if(url.match(/[&?]uri=[^&#]+/)) {	//single item entries have a ui parameter
		return "book";
	}
}

function getSearchResults(doc) {
	//search result
	var res = ZU.xpath(doc, '(//center[1])/table/tbody/tr/td\
					/table//td[1]/a[starts-with(@href,"javascript:buildNewList")]');
	//search results, different format (see porbase.bnportugal.pt test cases)
	if(!res.length) {
		res = ZU.xpath(doc, 'html/body/table/tbody/tr[1]/td/table[5]/tbody/tr/td\
								/table/tbody/tr/td[2]/a[@href]');
	}

	return res;
}

function doWeb(doc, url) {
	var uri = doc.location.href;
	var detailsRe = new RegExp('ipac\.jsp\?.*uri=(?:full|link)=[0-9]');
	
	var uris = new Array();
	if(detectWeb(doc,uri) == "book") {
		if (uri.indexOf("#") !== -1) {
			uris.push(uri.replace(/#/,'&fullmarc=true#'));
		} else {
			uris.push(uri+'&fullmarc=true');
		}
		marcscrape(uris);
	} else {
		var results = getSearchResults(doc);
		var items = {};
		for(var i=0, n=results.length; i<n; i++) {
			items[results[i].href] = results[i].textContent;
		}

		Zotero.selectItems(items, function (items) {
			if (!items) {
				return true;
			}

			var uriRe = new RegExp("^javascript:buildNewList\\('([^']+)");
			var uris = new Array();
			for(var i in items) {
				var m = uriRe.exec(i);
				if(m) {
					uris.push(unescape(m[1]) + '&fullmarc=true');
				} else {
					uris.push(i+'&fullmarc=true');
				}
			}
			marcscrape(uris);
		});
	}
}

function marcscrape(uris){
	var translator = Zotero.loadTranslator("import");
	translator.setTranslator("a6ee60df-1ddc-4aae-bb25-45e0537be973");
	translator.getTranslatorObject(function (marc) {
		Zotero.Utilities.processDocuments(uris, function (newDoc) {
				scrape(newDoc, marc);
			}, function() {}, null);
	});
}   

function scrape(newDoc, marc) {
	var elmts = ZU.xpath(newDoc, '//form/table[@class="tableBackground"]/tbody/tr/td/table[@class="tableBackground"]/tbody/tr[td[1]/a[@class="normalBlackFont1"]]');
	if(!elmts.length) elmts = ZU.xpath(newDoc, '//form/table[@class="tableBackground"]/tbody/tr/td/table[@class="tableBackground"]/tbody/tr[td[1]/a[@class="boldBlackFont1"]]');

	var record = new marc.record();		
	for(var i=0, n=elmts.length; i<n; i++) {
		var elmt = elmts[i];
		var field = ZU.superCleanString(ZU.xpathText(elmt, './TD[1]/A[1]/text()[1]') || '');
		var value = (ZU.xpathText(elmt, './TD[2]/TABLE[1]/TBODY[1]/TR[1]/TD/A[1]', null, '') || '').trim();

		// Sometimes, the field contains "LDR: ", "001: ". We can delete these extra characters
		field = field.replace(/[\s:]/g, "");
		if (field == "LDR"){
  			record.leader = value;
		} else if(field != "FMT") {
			// In french catalogs (in unimarc), the delimiter isn't the $ but \xA4 is used. Added there
			// Also added the fact that subfield codes can be numerics
			value = value.replace(/[\xA4\$]([a-z0-9]) ?/g, marc.subfieldDelimiter+"$1");
			var code = field.substring(0, 3);
			var ind = "";
			if(field.length > 3) {
				ind = field[3];
				if(field.length > 4) {
					ind += field[4];
				}
			}
			record.addField(code, ind, value);
		}
	}

	
	var newItem = new Zotero.Item();
	record.translate(newItem);

	var uri = newDoc.location.href;
	var domain = uri.match(/https?:\/\/([^/]+)/);
	newItem.libraryCatalog = domain[1]+" Library Catalog";

	// 20091210 : We try to get a permalink on the record
	var perma = uri.match(/(https?:\/\/[^/]+.*ipac\.jsp\?).*(uri\=[^&]*)/);
	var profile = uri.match(/(profile\=[^&]*)/);
	if (perma && perma[1] && perma[2])
	{
		var permalink = perma[1] + perma[2];
		// Sometimes, for libraries with multiple profiles, it can be useful
		// to store the permalink with the profile used
		if (profile)
		{
			permalink = permalink + "&" + profile[1];
		}
		newItem.attachments = [{url:permalink, title:"Original record", mimeType:"text/html", snapshot:false}];
	}
	else
	{
		Zotero.debug("Unable to create permalink on " + uri);
	}

	newItem.complete();
}

/** BEGIN TEST CASES **/
var testCases = [
	{
		"type": "web",
		"url": "http://siris-libraries.si.edu/ipac20/ipac.jsp?&profile=all&source=~!silibraries&uri=full=3100001~!820431~!0#focus",
		"items": [
			{
				"itemType": "book",
				"creators": [
					{
						"lastName": "Pennsylvania Academy of the Fine Arts",
						"fieldMode": true
					},
					{
						"firstName": "Thomas",
						"lastName": "Eakins",
						"creatorType": "contributor"
					},
					{
						"firstName": "Susan Macdowell",
						"lastName": "Eakins",
						"creatorType": "contributor"
					},
					{
						"firstName": "Benjamin",
						"lastName": "Eakins",
						"creatorType": "contributor"
					},
					{
						"firstName": "Charles",
						"lastName": "Bregler",
						"creatorType": "contributor"
					},
					{
						"firstName": "Kathleen A.",
						"lastName": "Foster",
						"creatorType": "contributor"
					}
				],
				"notes": [
					{
						"note": "Reproduces the full texts of the manuscripts in Bregler's collection Fully co-ordinated with and cross-referenced to a companion volume, Writing about Eakins, which contains biographical and critical essays, chronologies, lists of all the manuscripts and an index to microfiche locations At head of title: Archives, Pennsylvania Academy of the Fine Arts Title on information label issued with set: Microfiche edition of the manuscripts in Charles Bregler's Thomas Eakins Collection"
					},
					{
						"note": "Series 1. The papers of Thomas Eakins -- (12 microfiches) Series 2. The papers of Susan Macdowell Eakins (8 microfiches) -- Series 3. Benjamin Eakins and Macdowell family papers (1 microfiche) -- Series 4. The papers of Charles Bregler (16 microfiches)"
					}
				],
				"tags": [
					"Eakins, Thomas",
					"Eakins, Susan Macdowell",
					"Eakins, Benjamin",
					"Bregler, Charles",
					"Bregler, Charles",
					"Library",
					"McDowell family",
					"Manuscripts",
					"Private collections",
					"Pennsylvania Philadelphia"
				],
				"seeAlso": [],
				"attachments": [
					{
						"title": "Original record",
						"mimeType": "text/html",
						"snapshot": false
					}
				],
				"ISBN": "0812282248",
				"title": "Charles Bregler's Thomas Eakins collection",
				"place": "Philadelphia, PA",
				"publisher": "University of Pennsylvania Press",
				"date": "1989",
				"numPages": "37",
				"callNumber": "mfc 000652",
				"libraryCatalog": "siris-libraries.si.edu Library Catalog"
			}
		]
	},
	{
		"type": "web",
		"url": "http://siris-libraries.si.edu/ipac20/ipac.jsp?session=Y3X077P415286.52120&menu=search&aspect=Keyword&npp=20&ipp=20&spp=20&profile=liball&ri=&term=&index=GW&x=0&y=0&aspect=Keyword&term=smith&index=AW&term=&index=TW&term=&index=SW&term=&index=.JW",
		"items": "multiple"
	},
	{
		"type": "web",
		"url": "http://ipac.kings.edu/ipac20/ipac.jsp?menu=search&aspect=basic_search&npp=30&ipp=20&spp=20&profile=kc&ri=&index=.GW&term=test&x=0&y=0&aspect=basic_search",
		"items": "multiple"
	},
	{
		"type": "web",
		"url": "http://porbase.bnportugal.pt/ipac20/ipac.jsp?session=13544929K8D9M.93320&profile=porbase&uindex=TL&term=La%20exportaci%C3%B3n%20del%20jam%C3%B3n%20y%20otros%20derivados%20c%C3%A1rnicos%20:%20requisitos%20t%C3%A9cnicos&aspect=subtab11&menu=search&source=~!bnp",
		"items": "multiple"
	},
	{
		"type": "web",
		"url": "http://porbase.bnportugal.pt/ipac20/ipac.jsp?session=13544Q6S70C55.90629&menu=search&aspect=subtab11&npp=20&ipp=20&spp=20&profile=porbase&ri=&term=jamon&index=.GW&x=0&y=0&aspect=subtab11",
		"items": "multiple"
	}
]
/** END TEST CASES **/