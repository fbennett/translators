{
	"translatorID": "6a3e392d-1284-4c81-89b9-4994a2d8a290",
	"label": "CourtListener",
	"creator": "Frank Bennett",
	"target": "https://www.courtlistener.com/(?:(?:docket|opinion)/[0-9]+/|(?:\\?q=|.*\\&q=)).*",
	"minVersion": "1.0",
	"maxVersion": "",
	"priority": 100,
	"inRepository": true,
	"translatorType": 4,
	"browserSupport": "gc",
	"lastUpdated": "2021-01-04 22:44:44"
}

var codeMap = {
	"acca": "us:fed;army.court.criminal.appeals", 
	"afcca": "us:fed;air.force.court.criminal.appeals", 
	"ag": "us:fed;attorney.general", 
	"akb": "us:c9:ak.d;bankruptcy.court", 
	"akd": "us:c9:ak.d;district.court", 
	"ala": "us:al;supreme.court", 
	"alacivapp": "us:al;court.civil.appeals", 
	"alacrimapp": "us:al;court.criminal.appeals", 
	"alactapp": "us:al;court.appeals", 
	"alaska": "us:ak;supreme.court", 
	"alaskactapp": "us:ak;court.appeals", 
	"ald": "us:c11:al.d;district.court", 
	"almb": "us:c11:al.md;bankruptcy.court", 
	"almd": "us:c11:al.md;district.court", 
	"alnb": "us:c11:al.nd;bankruptcy.court", 
	"alnd": "us:c11:al.nd;district.court", 
	"alsb": "us:c11:al.sd;bankruptcy.court", 
	"alsd": "us:c11:al.sd;district.court", 
	"arb": "us:c9:az.d;bankruptcy.court", 
	"areb": "us:c8:ar.ed;bankruptcy.court", 
	"ared": "us:c8:ar.ed;district.court", 
	"ariz": "us:az;supreme.court", 
	"arizctapp": "us:az;court.appeals", 
	"ariztaxct": "us:az;tax.court", 
	"ark": "us:ar;supreme.court", 
	"arkag": "us:ar;attorney.general", 
	"arkctapp": "us:ar;court.appeals", 
	"arkworkcompcom": "us:ar;workers.compensation.commission", 
	"armfor": "us:fed;court.appeals.armed.forces", 
	"arwb": "us:c8:ar.wd;bankruptcy.court", 
	"arwd": "us:c8:ar.wd;district.court", 
	"asbca": "us:fed;armed.services.board.contract.appeals", 
	"azd": "us:c9:az.d;district.court", 
	"bap1": "us:c1;bankruptcy.appellate.panel", 
	"bap10": "us:c10;bankruptcy.appellate.panel", 
	"bap2": "us:c2;bankruptcy.appellate.panel", 
	"bap6": "us:c6;bankruptcy.appellate.panel", 
	"bap8": "us:c8;bankruptcy.appellate.panel", 
	"bap9": "us:c9;bankruptcy.appellate.panel", 
	"bapma": "us:ma;bankruptcy.appellate.panel", 
	"bapme": "us:c1:me.d;bankruptcy.appellate.panel", 
	"bva": "us:c;board.veterans.appeals", 
	"ca1": "us:c1;court.appeals", 
	"ca10": "us:c10;court.appeals", 
	"ca11": "us:c11;court.appeals", 
	"ca2": "us:c2;court.appeals", 
	"ca3": "us:c3;court.appeals", 
	"ca4": "us:c4;court.appeals", 
	"ca5": "us:c5;court.appeals", 
	"ca6": "us:c6;court.appeals", 
	"ca7": "us:c7;court.appeals", 
	"ca8": "us:c8;court.appeals", 
	"ca9": "us:c9;court.appeals", 
	"caca": "us:ca.d;circuit.court", 
	"cacb": "us:c9:ca.cd;bankruptcy.court", 
	"cacd": "us:c9:ca.cd;district.court", 
	"cadc": "us:c0;court.appeals", 
	"caeb": "us:c9:ca.ed;bankruptcy.court", 
	"caed": "us:c9:ca.ed;district.court", 
	"cafc": "us:c;court.appeals.federal.circuit", 
	"cal": "us:ca;supreme.court", 
	"calag": "us:ca;attorney.general", 
	"calappdeptsuper": "us:ca;appellate.division.superior.court", 
	"calctapp": "us:ca;court.appeal", 
	"californiad": "us:c9:ca.d;district.court", 
	"canalzoned": "us:c5:pz.d;district.court", 
	"canb": "us:c9:ca.nd;bankruptcy.court", 
	"cand": "us:c9:ca.nd;district.court", 
	"casb": "us:c9:ca.sd;bankruptcy.court", 
	"casd": "us:c9:ca.sd;district.court", 
	"cavc": "us:c;court.appeals.veterans.claims", 
	"cc": "us:c;court.claims", 
	"ccpa": "us:c;court.customs.patent.appeals", 
	"circtdel": "us:de.d;circuit.court", 
	"circtnc": "us:nc.d;circuit.court", 
	"circttenn": "us:tn.d;circuit.court", 
	"cit": "us:c;court.international.trade", 
	"cjdpa": "us:pa;court.judicial.discipline", 
	"cob": "us:c10:co.d;bankruptcy.court", 
	"cod": "us:c10:co.d;district.court", 
	"colo": "us:co;supreme.court", 
	"coloag": "us:co;attorney.general", 
	"coloctapp": "us:co;court.appeals", 
	"coloworkcompcom": "us:co;industrial.claim.appeals", 
	"com": "us:fed;commerce.court", 
	"conn": "us:ct;supreme.court", 
	"connappct": "us:ct;appellate.court", 
	"connsuperct": "us:ct;superior.court", 
	"connworkcompcom": "us:ct;compensation.review.board", 
	"ctb": "us:c2:ct.d;bankruptcy.court", 
	"ctd": "us:c2:ct.d;district.court", 
	"cusc": "us:c;customs.court", 
	"dc": "us:dc;court.appeals", 
	"dcb": "us:c0:dc.d;bankruptcy.court", 
	"dcd": "us:c0:dc.d;district.court", 
	"deb": "us:c3:de.d;bankruptcy.court", 
	"ded": "us:c3:de.d;district.court", 
	"del": "us:de;supreme.court", 
	"delch": "us:de;court.chancery", 
	"delctcompl": "us:de;court.common.pleas", 
	"delfamct": "us:de;family.court", 
	"deljudct": "us:de;court.judiciary", 
	"delsuperct": "us:de;superior.court", 
	"eca": "us:fed;emergency.court.appeals", 
	"fisc": "us:fed;foreign.intelligence.surveillance.court", 
	"fiscr": "us:fed;foreign.intelligence.surveillance.court.review", 
	"fla": "us:fl;supreme.court", 
	"flaag": "us:fl;attorney.general", 
	"fladistctapp": "us:fl;district.court.appeal", 
	"fld": "us:c11:fl.d;district.court", 
	"flmb": "us:c11:fl.md;bankruptcy.court", 
	"flmd": "us:c11:fl.md;district.court", 
	"flnb": "us:c11:fl.nd;bankruptcy.court", 
	"flnd": "us:c11:fl.nd;district.court", 
	"flsb": "us:c11:fl.sd;bankruptcy.court", 
	"flsd": "us:c11:fl.sd;district.court", 
	"ga": "us:ga;supreme.court", 
	"gactapp": "us:ga;court.appeals", 
	"gad": "us:c11:ga.d;district.court", 
	"gamb": "us:c11:ga.md;bankruptcy.court", 
	"gamd": "us:c11:ga.md;district.court", 
	"ganb": "us:c11:ga.nd;bankruptcy.court", 
	"gand": "us:c11:ga.nd;district.court", 
	"gasb": "us:c11:ga.sd;bankruptcy.court", 
	"gasd": "us:c11:ga.sd;district.court", 
	"gub": "us:c9:gu.d;bankruptcy.court", 
	"gud": "us:c9:gu.d;district.court", 
	"haw": "us:hi;supreme.court", 
	"hawapp": "us:hi;intermediate.court.appeals", 
	"hib": "us:c9:hi.d;bankruptcy.court", 
	"hid": "us:c9:hi.d;district.court", 
	"iad": "us:c8:ia.d;district.court", 
	"ianb": "us:c8:ia.nd;bankruptcy.court", 
	"iand": "us:c8:ia.nd;district.court", 
	"iasb": "us:c8:ia.sd;bankruptcy.court", 
	"iasd": "us:c8:ia.sd;district.court", 
	"idaho": "us:id;supreme.court", 
	"idahoctapp": "us:id;court.appeals", 
	"idb": "us:c9:id.d;bankruptcy.court", 
	"idd": "us:c9:id.d;district.court", 
	"ilcb": "us:c7:il.cd;bankruptcy.court", 
	"ilcd": "us:c7:il.cd;district.court", 
	"ill": "us:il;supreme.court", 
	"illappct": "us:il;appellate.court", 
	"illinoisd": "us:c7:il.d;district.court", 
	"illinoised": "us:c7:il.ed;district.court", 
	"ilnb": "us:c7:il.nd;bankruptcy.court", 
	"ilnd": "us:c7:il.nd;district.court", 
	"ilsb": "us:c7:il.sd;bankruptcy.court", 
	"ilsd": "us:c7:il.sd;district.court", 
	"ind": "us:in;supreme.court", 
	"indctapp": "us:in;court.appeals", 
	"indianad": "us:c7:in.d;district.court", 
	"indtc": "us:in;tax.court", 
	"innb": "us:c7:in.nd;bankruptcy.court", 
	"innd": "us:c7:in.nd;district.court", 
	"insb": "us:c7:in.sd;bankruptcy.court", 
	"insd": "us:c7:in.sd;district.court", 
	"iowa": "us:ia;supreme.court", 
	"iowactapp": "us:ia;court.appeals", 
	"jpml": "us:fed;judicial.panel.multidistrict.litigation", 
	"kan": "us:ks;supreme.court", 
	"kanag": "us:ks;attorney.general", 
	"kanctapp": "us:ks;court.appeals", 
	"kingsbench": "gb:england.and.wales;kb", 
	"ksb": "us:c10:ks.d;bankruptcy.court", 
	"ksd": "us:c10:ks.d;district.court", 
	"ky": "us:ky;supreme.court", 
	"kyctapp": "us:ky;court.appeals", 
	"kyctapphigh": "us:ky;court.appeals.high", 
	"kyd": "us:c6:ky.d;district.court", 
	"kyeb": "us:c6:ky.ed;bankruptcy.court", 
	"kyed": "us:c6:ky.ed;district.court", 
	"kywb": "us:c6:ky.wd;bankruptcy.court", 
	"kywd": "us:c6:ky.wd;district.court", 
	"la": "us:la;supreme.court", 
	"laag": "us:la;attorney.general", 
	"lactapp": "us:la;court.appeal", 
	"lad": "us:c5:la.d;district.court", 
	"laeb": "us:c5:la.ed;bankruptcy.court", 
	"laed": "us:c5:la.ed;district.court", 
	"lamb": "us:c5:la.md;bankruptcy.court", 
	"lamd": "us:c5:la.md;district.court", 
	"lawb": "us:c5:la.wd;bankruptcy.court", 
	"lawd": "us:c5:la.wd;district.court", 
	"mab": "us:c1:ma.d;bankruptcy.court", 
	"mad": "us:c1:ma.d;district.court", 
	"mass": "us:ma;supreme.judicial.court", 
	"massappct": "us:ma;appeals.court", 
	"massdistct": "us:ma;district.court", 
	"masssuperct": "us:ma;superior.court", 
	"maworkcompcom": "us:ma;department.industrial.accidents", 
	"mc": "us:fed;court.military.commission.review", 
	"md": "us:md;court.appeals", 
	"mdag": "us:md;attorney.general", 
	"mdb": "us:c4:md.d;bankruptcy.court", 
	"mdctspecapp": "us:md;court.special.appeals", 
	"mdd": "us:c4:md.d;district.court", 
	"me": "us:me;supreme.judicial.court", 
	"meb": "us:c1:me.d;bankruptcy.court", 
	"med": "us:c1:me.d;district.court", 
	"mich": "us:mi;supreme.court", 
	"michctapp": "us:mi;court.appeals", 
	"michd": "us:c6:mi.d;district.court", 
	"mieb": "us:c8:mn.d;bankruptcy.court", 
	"mied": "us:c8:mn.d;district.court", 
	"minn": "us:mn;supreme.court", 
	"minnag": "us:mn;attorney.general", 
	"minnctapp": "us:mn;court.appeals", 
	"miss": "us:ms;supreme.court", 
	"missctapp": "us:ms;court.appeals", 
	"missd": "us:c5:ms.d;district.court", 
	"miwb": "us:c6:mi.wd;bankruptcy.court", 
	"miwd": "us:c6:mi.wd;district.court", 
	"mnb": "us:c6:mi.ed;bankruptcy.court", 
	"mnd": "us:c6:mi.ed;district.court", 
	"mo": "us:mo;supreme.court", 
	"moag": "us:mo;attorney.general", 
	"mocd": "us:c8:mo.cd;district.court", 
	"moctapp": "us:mo;court.appeals", 
	"mod": "us:c8:mo.d;district.court", 
	"moeb": "us:c8:mo.ed;bankruptcy.court", 
	"moed": "us:c8:mo.ed;district.court", 
	"mont": "us:mt;supreme.court", 
	"montag": "us:mt;attorney.general", 
	"monttc": "us:mt;tax.appeal.board", 
	"mosd": "us:c8:mo.sd;district.court", 
	"mowb": "us:c8:mo.wd;bankruptcy.court", 
	"mowd": "us:c8:mo.wd;district.court", 
	"msnb": "us:c5:ms.nd;bankruptcy.court", 
	"msnd": "us:c5:ms.nd;district.court", 
	"mspb": "us:c;merit.systems.protection.board", 
	"mssb": "us:c5:ms.sd;bankruptcy.court", 
	"mssd": "us:c5:ms.sd;district.court", 
	"mtb": "us:c9:mt.d;bankruptcy.court", 
	"mtd": "us:c9:mt.d;district.court", 
	"nc": "us:nc;supreme.court", 
	"ncctapp": "us:nc;court.appeals", 
	"ncd": "us:c4:nc.d;district.court", 
	"nceb": "us:c4:nc.ed;bankruptcy.court", 
	"nced": "us:c4:nc.ed;district.court", 
	"ncmb": "us:c4:nc.md;bankruptcy.court", 
	"ncmd": "us:c4:nc.md;district.court", 
	"ncsuperct": "us:nc;superior.court", 
	"ncwb": "us:c4:nc.wd;bankruptcy.court", 
	"ncwd": "us:c4:nc.wd;district.court", 
	"ncworkcompcom": "us:nc;industrial.commission", 
	"nd": "us:nd;supreme.court", 
	"ndb": "us:c8:nd.d;bankruptcy.court", 
	"ndctapp": "us:nd;court.appeals", 
	"ndd": "us:c8:nd.d;district.court", 
	"neb": "us:ne;supreme.court", 
	"nebag": "us:ne;attorney.general", 
	"nebctapp": "us:ne;court.appeals", 
	"nebraskab": "us:c8:ne.d;bankruptcy.court", 
	"ned": "us:c8:ne.d;district.court", 
	"nev": "us:nv;supreme.court", 
	"nh": "us:nh;supreme.court", 
	"nhb": "us:c1:nh.d;bankruptcy.court", 
	"nhd": "us:c1:nh.d;district.court", 
	"nj": "us:nj;supreme.court", 
	"njb": "us:c3:nj.d;bankruptcy.court", 
	"njch": "us:nj;court.chancery", 
	"njd": "us:c3:nj.d;district.court", 
	"njsuperctappdiv": "us:nj;superior.court", 
	"njtaxct": "us:nj;tax.court", 
	"nm": "us:nm;supreme.court", 
	"nmb": "us:c10:nm.d;bankruptcy.court", 
	"nmcca": "us:fed;navy-marine.corps.court.criminal.appeals", 
	"nmctapp": "us:nm;court.appeals", 
	"nmd": "us:c10:nm.d;district.court", 
	"nmib": "us:c9:mp.d;bankruptcy.court", 
	"nmid": "us:c9:mp.d;district.court", 
	"nvb": "us:c9:nv.d;bankruptcy.court", 
	"nvd": "us:c9:nv.d;district.court", 
	"ny": "us:ny;court.appeals", 
	"nyag": "us:ny;attorney.general", 
	"nyappdiv": "us:ny;appellate.division.supreme.court", 
	"nyappterm": "us:ny;appellate.term.supreme.court", 
	"nycivct": "us:ny:nyc;civil.court", 
	"nycrimct": "us:ny:nyc;criminal.court", 
	"nyd": "us:c2:ny.d;district.court", 
	"nyeb": "us:c2:ny.ed;bankruptcy.court", 
	"nyed": "us:c2:ny.ed;district.court", 
	"nyfamct": "us:ny;family.court", 
	"nynb": "us:c2:ny.nd;bankruptcy.court", 
	"nynd": "us:c2:ny.nd;district.court", 
	"nysb": "us:c2:ny.sd;bankruptcy.court", 
	"nysd": "us:c2:ny.sd;district.court", 
	"nysupct": "us:ny;supreme.court", 
	"nysurct": "us:ny;surrogates.court", 
	"nywb": "us:c2:ny.wd;bankruptcy.court", 
	"nywd": "us:c2:ny.wd;district.court", 
	"ohio": "us:oh;supreme.court", 
	"ohioctapp": "us:oh;court.appeals", 
	"ohioctcl": "us:oh;court.claims", 
	"ohiod": "us:c6:oh.d;district.court", 
	"ohnb": "us:c6:oh.nd;bankruptcy.court", 
	"ohnd": "us:c6:oh.nd;district.court", 
	"ohsb": "us:c6:oh.sd;bankruptcy.court", 
	"ohsd": "us:c6:oh.sd;district.court", 
	"okeb": "us:c10:ok.ed;bankruptcy.court", 
	"oked": "us:c10:ok.ed;district.court", 
	"okla": "us:ok;supreme.court", 
	"oklaag": "us:ok;attorney.general.reports", 
	"oklacivapp": "us:ok;court.civil.appeals", 
	"oklacoj": "us:ok;court.judiciary", 
	"oklacrimapp": "us:ok;court.criminal.appeals", 
	"oklajeap": "us:ok;judicial.ethics.advisory.panel", 
	"oknb": "us:c10:ok.nd;bankruptcy.court", 
	"oknd": "us:c10:ok.nd;district.court", 
	"okwb": "us:c10:ok.wd;bankruptcy.court", 
	"okwd": "us:c10:ok.wd;district.court", 
	"or": "us:or;supreme.court", 
	"orb": "us:c9:or.d;bankruptcy.court", 
	"orctapp": "us:or;court.appeals", 
	"ord": "us:c9:or.d;district.court", 
	"orld": "us:orleans.d;district.court", 
	"ortc": "us:or;tax.court", 
	"pa": "us:pa;supreme.court", 
	"pacommwct": "us:pa;commonwealth.court", 
	"paeb": "us:c3:pa.ed;bankruptcy.court", 
	"paed": "us:c3:pa.ed;district.court", 
	"pamb": "us:c3:pa.md;bankruptcy.court", 
	"pamd": "us:c3:pa.md;district.court", 
	"pasuperct": "us:pa;superior.court", 
	"pawb": "us:c3:pa.wd;bankruptcy.court", 
	"pawd": "us:c3:pa.wd;district.court", 
	"pennsylvaniad": "us:c3:pa.d;district.court", 
	"prb": "us:c1:pr.d;bankruptcy.court", 
	"prd": "us:c1:pr.d;district.court", 
	"reglrailreorgct": "us:fed;special.court.regional.rail.reorganization.act", 
	"ri": "us:ri;supreme.court", 
	"rib": "us:c1:ri.d;bankruptcy.court", 
	"rid": "us:c1:ri.d;district.court", 
	"risuperct": "us:ri;superior.court", 
	"sc": "us:sc;supreme.court", 
	"scb": "us:c4:sc.d;bankruptcy.court", 
	"scctapp": "us:sc;court.appeals", 
	"scd": "us:c4:sc.d;district.court", 
	"scotus": "us;supreme.court", 
	"sd": "us:sd;supreme.court", 
	"sdb": "us:c8:sd.d;bankruptcy.court", 
	"sdd": "us:c8:sd.d;district.court", 
	"southcarolinaed": "us:c4:sc.ed;district.court", 
	"southcarolinawd": "us:c4:sc.wd;district.court", 
	"stp": "us:pa;special.tribunal", 
	"sttex": "us:tx.d;special.tribunal", 
	"tax": "us:fed;tax.court", 
	"tecoa": "us:fed;temporary.emergency.court.appeals", 
	"tenn": "us:tn;supreme.court", 
	"tenncrimapp": "us:tn;court.criminal.appeals", 
	"tennctapp": "us:tn;court.appeals", 
	"tennessed": "us:c6:tn.d;district.court", 
	"tennesseeb": "us:c6:tn.d;bankruptcy.court", 
	"tennsuperct": "us:tn;superior.court.law.equity", 
	"tennworkcompapp": "us:tn;wcab",
	"tennworkcompcl": "us:tn;cwcc",
	"tex": "us:tx;supreme.court", 
	"texag": "us:tx;attorney.general", 
	"texapp": "us:tx;court.appeals", 
	"texcrimapp": "us:tx;court.criminal.appeals", 
	"texd": "us:c5:tx.d;district.court", 
	"texjpml": "us:tx;judicial.panel.multidistrict.litigation", 
	"texreview": "us:tx;special.court.review", 
	"tneb": "us:c6:tn.ed;bankruptcy.court", 
	"tned": "us:c6:tn.ed;district.court", 
	"tnmb": "us:c6:tn.md;bankruptcy.court", 
	"tnmd": "us:c6:tn.md;district.court", 
	"tnwb": "us:c6:tn.wd;bankruptcy.court", 
	"tnwd": "us:c6:tn.wd;district.court", 
	"txeb": "us:c5:tx.ed;bankruptcy.court", 
	"txed": "us:c5:tx.ed;district.court", 
	"txnb": "us:c5:tx.nd;bankruptcy.court", 
	"txnd": "us:c5:tx.nd;district.court", 
	"txsb": "us:c5:tx.sd;bankruptcy.court", 
	"txsd": "us:c5:tx.sd;district.court", 
	"txwb": "us:c5:tx.wd;bankruptcy.court", 
	"txwd": "us:c5:tx.wd;district.court", 
	"uscfc": "us:c;court.federal.claims", 
	"usjc": "us:fed;judicial.conference.committee", 
	"utah": "us:ut;supreme.court", 
	"utahctapp": "us:ut;court.appeals", 
	"utb": "us:c10:ut.d;bankruptcy.court", 
	"utd": "us:c10:ut.d;district.court", 
	"va": "us:va;supreme.court", 
	"vactapp": "us:va;court.appeals", 
	"vad": "us:c4:va.d;district.court", 
	"vaeb": "us:c4:va.ed;bankruptcy.court", 
	"vaed": "us:c4:va.ed;district.court", 
	"vawb": "us:c4:va.wd;bankruptcy.court", 
	"vawd": "us:c4:va.wd;district.court", 
	"vib": "us:c3:vi.d;bankruptcy.court", 
	"vid": "us:c3:vi.d;district.court", 
	"vt": "us:vt;supreme.court", 
	"vtb": "us:c2:vt.d;bankruptcy.court", 
	"vtd": "us:c2:vt.d;district.court", 
	"waeb": "us:c9:wa.ed;bankruptcy.court", 
	"waed": "us:c9:wa.ed;district.court", 
	"wash": "us:wa;supreme.court", 
	"washag": "us:wa;attorney.general", 
	"washctapp": "us:wa;court.appeals", 
	"washd": "us:c9:wa.d;district.court", 
	"wawb": "us:c9:wa.wd;bankruptcy.court", 
	"wawd": "us:c9:wa.wd;district.court", 
	"wieb": "us:c7:wi.ed;bankruptcy.court", 
	"wied": "us:c7:wi.ed;district.court", 
	"wis": "us:wi;supreme.court", 
	"wisag": "us:wi;attorney.general", 
	"wisctapp": "us:wi;court.appeals", 
	"wisd": "us:c7:wi.d;district.court", 
	"wiwb": "us:c7:wi.wd;bankruptcy.court", 
	"wiwd": "us:c7:wi.wd;district.court", 
	"wva": "us:wv;supreme.court", 
	"wvad": "us:c4:wv.d;district.court", 
	"wvnb": "us:c4:wv.nd;bankruptcy.court", 
	"wvnd": "us:c4:wv.nd;district.court", 
	"wvsb": "us:c4:wv.sd;bankruptcy.court", 
	"wvsd": "us:c4:wv.sd;district.court", 
	"wyb": "us:c10:wy.d;bankruptcy.court", 
	"wyd": "us:c10:wy.d;district.court", 
	"wyo": "us:wy;supreme.court"
}

var citeTypes = [
	"federal_cite_one",
	"federal_cite_two",
	"federal_cite_three",
	"state_cite_one",
	"state_cite_two",
	"state_cite_three",
	"state_cite_regional",
	"specialty_cite_one",
	"scotus_early_cite",
	"lexis_cite",
	"westlaw_cite",
	"neutral_cite"
]

var procSegments = [
	"cluster",
	"docket",
	"audio"
]

function fixTitle(str) {
	var str = ZU.capitalizeTitle(str.toLowerCase(), true);
	var lst = str.split("\'");
	for (var i=1,ilen=lst.length;i<ilen;i++) {
		lst[i] = lst[i].slice(0, 1).toUpperCase() + lst[i].slice(1);
	}
	return lst.join("\'");
}

function padDocketNumber(str, len) {
	if (len < 0) {
		str = str.slice(len);
	} else {
		str = str.slice(0, len);
	}
	len = Math.abs(len);
	while (str.length < len) {
		str = `0${str}`;
	}
	return str;
}

function fixCourtCode(str) {
	str = str.toLowerCase().replace(/^(bk|c|.*(?:bank|misc|cr|c.?v).*)$/, (p, p1) => {
		if (p1 === "c") {
			return "cv";
		} else if (p1 === "bk") {
			return "bk";
		} else if (p1.indexOf("cr") > -1) {
			return "cr";
		} else if (p1.match(/c.?v/)) {
			return "cv";
		} else if (p1.indexOf("misc") > -1) {
			return "mc";
		} else if (p1.indexOf("bank") > -1) {
			return "bk";
		} else {
			return p;
		}
	});
	return str;
}

function normalizeDocketNumber(str) {
	function _normalizeThree(p, p1, p2, p3) {
		p1 = padDocketNumber(p1, -2);
		p2 = fixCourtCode(p2);
		p3 = padDocketNumber(p3, 5);
		return `${p1}-${p2}-${p3}`;
	}
	function _normalizeTwo(p, p1, p2) {
		p1 = padDocketNumber(p1, -2);
		p3 = padDocketNumber(p2, 5);
		return `${p1}-${p2}`;
	}
	str = str.replace(/^[^0-9]*(?:[0-9]:)*([0-9]+)[\s-–~]*([\s.a-zA-Z]+)[\s-–~]*([0-9]+).*$/, _normalizeThree);
	str = str.replace(/^([0-9]+)[\s-–~]+([0-9]+)$/, _normalizeTwo);
	return str;
}

function fixDocketNumber(item) {
	// Abort if nothing to work with
	if (!item.docketNumber) return item.docketNumber;
	// Just strip weird numeric prefix for RECAP docket numbers
	if (item.url.indexOf("/recap") > -1) {
		var str = item.docketNumber
		if (str) {
			str = item.docketNumber.replace(/^[0-9]:/, "");
		}
		return str;
	} else if (item.court === "bankruptcy.court") {
		// Bankruptcy cases seem not to have a case type ID
		// in Pacer ... ?
		return item.docketNumber;
	}
	// Fix docket numbers on federal trial and appellate cases
	if (item.jurisdiction.match(/^us:c[0-9]/)) {
		var docnos = item.docketNumber.split(/,\s+/);
		var label = null;
		// This obviously won't happen now (see above)
		if (item.court === "bankruptcy.court") {
			label = "bk";
		}
		for (var i=0,ilen=docnos.length;i<ilen;i++) {
			// Remove all trailing cruft always
			docnos[i] = docnos[i].replace(/[^0-9]+$/, "");
			var docno = docnos[i];
			// Remove any weird numeric prefix on docket number
			docnos[i] = docnos[i].replace(/[0-9]:/, "");
			// If a uniform docket number, normalize it
			docnos[i] = normalizeDocketNumber(docnos[i]);
			// Check for leading label and regular numeric pair
			var m = docno.match(/(^[^0-9]*)([0-9]+)[\s-–~]([0-9]+)$/);
			// If no leading label or docno is irregular, leave this one unscathed
			if (!m || (!label && !m[1])) continue;
			// Check leading label for a hint
			if (!label) {
				label = fixCourtCode(m[1]);
			}
			docnos[i] = normalizeDocketNumber(`${m[2]}-${label}-${m[3]}`);
		}
		return docnos.join(", ");
	} else {
		// General cleanup, remove funky labels
		return item.docketNumber.replace(/^[^0-9]\s[0-9]/, "");
	}
}

var proc = {
	cluster: {
		setData: function(item, obj) {
			//Zotero.debug("proc: cluster");
			var firstCite = true;
			item.caseName = fixTitle(obj.case_name);
			item.shortTitle = fixTitle(obj.case_name_short);
			var extras = [];
			for (var i=0,ilen=obj.citations.length; i<ilen; i++) {
				var citation = obj.citations[i];
				if (i === 0) {
					if (citation.type === 8) {
						item.yearAsVolume = citation.volume;
						item.pages = citation.page;
					} else {
						item.reporterVolume = citation.volume;
						item.reporter = citation.reporter;
						item.pages = citation.page;
					}
				} else {
					var cite = `${citation.volume} ${citation.reporter} ${citation.page}`;
					extras.push(cite);
				}
			}
			item.dateDecided = obj.date_filed;
			if (extras.length) {
				item.extra = "Other cites: " + extras.join("; ")
			}
		},
		setURLs: function(item, obj) {
			var sub_opinions = [];
			for (var i=0,ilen=obj.sub_opinions.length;i<ilen;i++) {
				sub_opinions.push(obj.sub_opinions[i] + '?fields=html_with_citations,description');
			}
			urls.opinion = sub_opinions;
			urls.docket = [obj.docket + "?fields=docket_number,case_name,case_name_short,court,audio_files"];
		}
	},
	docket: {
		setData: function(item, obj, doc) {
			// Zotero.debug("proc: docket");
			item.docketNumber = obj.docket_number;
			item.filingDate = obj.date_filed;
			
			// Zotero.debug("proc: court");
			var flp_code = obj.court.replace(/^.*?\/([^\/]*)\/*$/, "$1")
			if (codeMap[flp_code]) {
				var codeSplit = codeMap[flp_code].split(";")
				item.jurisdiction = codeSplit[0];
				item.court = codeSplit[1];
			} else {
				item.jurisdiction = flp_code;
			}
			item.docketNumber = fixDocketNumber(item);
			if (item.jurisdiction === "us:il" && item.court === "appellate.court") {
				if (item.docketNumber) {
					var m = item.docketNumber.match(/^([0-9])-/);
					if (m) {
						item.jurisdiction = `${item.jurisdiction}:d${m[1]}`;
					}
				}
			}
			if (item.jurisdiction === "us:oh" && item.court === "court.appeals") {
				var contentNodes = ZU.xpath(doc, '//div[@id="opinion-content"]');
				if (contentNodes) {
					var txt = contentNodes[0].textContent;
					var divisions = [
						"first",
						"second",
						"third",
						"fourth",
						"fifth",
						"sixth",
						"seventh",
						"eighth",
						"ninth",
						"tenth",
						"eleventh",
						"twelfth"
					]
					var rex = new RegExp(`(${divisions.join("|")})`, "i");
					var m = txt.match(rex);
					if (m) {
						var division = divisions.indexOf(m[1].toLowerCase()) + 1;
						item.jurisdiction = `${item.jurisdiction}:d${division}`;
					}
				}
			}
		},
		setURLs: function(item, obj) {
			var flp_code = obj.court.replace(/^.*?\/([^\/]*)\/*$/, "$1");
			urls.audio = [];
			// Insert warnings
			if (item.docketNumber) {
				var docketNumber = item.docketNumber;
				if (item.court === "bankruptcy.court") {
					item.docketNumber = `[CHECK AGAINST CASE REPORT] ${item.docketNumber}`
				}
				if (flp_code) {
					urls.audio.push('https://www.courtlistener.com/api/rest/v3/search/?type=oa&docket_number=' + docketNumber + '&court=' + flp_code);
				}
			}
		}
	},
	audio: {
		setData: function(item, obj) {
			// Zotero.debug("proc: audio");
			for (var i=0,ilen=obj.results.length;i<ilen;i++) {
			  var theattachment = {
				url: 'https://www.courtlistener.com' + obj.results[i].absolute_url,
				title: 'CourtListener Audio' + (i+1),
				snapshot: false
			  }
			  item.attachments.push(theattachment);
			}
		},
		setURLs: function(item, obj, callback) {
			// audio is the terminus
			if (callback) {
				urls.callback = callback;
			} else {
				urls.end = true;
			}
		}
	}
}

function runURLs(step, pos, item, doc, callback) {
	var mode = procSegments[step];
	var url = urls[mode][pos];
	if (urls.callback) {
		callback(item, doc);
		return;
	} else if (!url || urls.end) {
		item.complete();
		return;
	}
	ZU.doGet(url, function(txt){
		var obj = JSON.parse(txt);
		proc[mode].setData(item, obj, doc);
		if (!urls[mode] || urls[mode].length === 0 || pos === (urls[mode].length-1)) {
			proc[mode].setURLs(item, obj, callback);
			step += 1;
			// We have all the mode URLs we're going to get at this point,
			// so run through the sets until we find something we can
			// work with.
			for (var i=step,ilen=procSegments.length;i<ilen;i++) {
				mode = procSegments[i];
				if (urls[mode] && urls[mode].length > 0) {
					break;
				}
			}
			step = i < procSegments.length ? i : (procSegments.length - 1);
			pos = 0;
		} else {
			pos += 1;
		}
		runURLs(step, pos, item, doc, callback)
	}, null, null, {
		authorization: 'Token ' + ZU.getAppExtra('6a3e392d-1284-4c81-89b9-4994a2d8a290'),
		accept: 'application/json'
	});
}

var urls = {};

function scrapeCase(doc, url) {
	var num = url.replace(/^.*\/([0-9]+)\/.*/, "$1")
	var item = new Zotero.Item("case");
	item.attachments.push({
		url: url,
		mimeType: 'text/html',
		snapshot: true,
		css: "*{margin:0;padding:0;}div.mlz-outer{width: 60em;margin:0 auto;text-align:left;}body{text-align:center;}p{margin-top:0.75em;margin-bottom:0.75em;}div.mlz-link-button a{text-decoration:none;background:#cccccc;color:white;border-radius:1em;font-family:sans;padding:0.2em 0.8em 0.2em 0.8em;}div.mlz-link-button a:hover{background:#bbbbbb;}div.mlz-link-button{margin: 0.7em 0 0.8em 0;}pre.inline{white-space:pre;display:inline;}span.citation{white-space:pre;}",
		elementID: "opinion-content"
	});
	item.url = url.replace(/\?.*/, '');
	urls.cluster = ['https://www.courtlistener.com/api/rest/v3/clusters/' + num + "/?fields=docket,sub_opinions,date_filed,citations,case_name,case_name_short"];
	runURLs(0, 0, item, doc);
}

function scrapeDocketCase(doc, url) {
	var num = url.replace(/^.*\/([0-9]+)\/.*/, "$1")
	var item = new Zotero.Item("case");
	item.url = url.replace(/\?.*/, '');
	urls.docket = ['https://www.courtlistener.com/api/rest/v3/dockets/' + num + "/?fields=court,date_filed,docket_number,case_name,case_name_short"];
	runURLs(1, 0, item, doc);
}

function getMultiplesList(doc, type) {
	var res = ZU.xpath(doc, '//article/*/a[@class="visitable"][contains(@href,"/' + type + '/")][1]');
	if (!res.length) return false;
	var items = {};
	for (var i = 0; i < res.length; i++) {
		items[res[i].href] = ZU.trimInternal(res[i].textContent);
	}
	return items;
}

async function showDocketEntriesList(item, doc) {
	var items = {};
	var res = ZU.xpath(doc, '//div[@id="docket-entry-table"]/div[contains(@id, "entry-")]');
	if (!res.length) return false;
	var info = {};
	for (var i=0,ilen=res.length;i<ilen;i++) {
		var rowNode = res[i];
		var id = rowNode.getAttribute("id");
		if (!id.match(/^entry-[0-9]+/)) continue;
		var documentNumber = id.slice(6);
		info[documentNumber] = {};
		info[documentNumber].documentNumber = documentNumber;
		var date = ZU.xpath(rowNode, './div[2]/p')[0].textContent;
		info[documentNumber].extra = `Event Date: ${date}`;
		info[documentNumber].attachments = [];
		info[documentNumber].url = item.url + "#" + id;
		// Skip "Main Document" text, which may contain a weird soft-hyphen.
		var documentName = null;
		var paras = ZU.xpath(rowNode, './div[position() > 2]//p');
		for (var j=0,jlen=paras.length;j<jlen;j++) {
			var pNode = paras[j];
			var pTxt = pNode.textContent.trim();
			var pTxtClean = pTxt.replace(/\u00AD/g, "");
			if (!pTxtClean || pTxtClean === "Main Document") continue;
			documentName = pTxt;
			info[documentNumber].documentName = documentName;
			break;
		}
		var anchorRows = ZU.xpath(rowNode, './/div[contains(@class, "recap-documents")]');
		for (var j=0,jlen=anchorRows.length;j<jlen;j++) {
			var row = anchorRows[j];
			var buttonElem = row.children[2];
			var linkElem = ZU.xpath(buttonElem, './/a')[0];
			if (linkElem) {
				var myurl = linkElem.getAttribute("href");
				var attachment = {
					mimeType: "application/pdf",
					url: myurl
				}
				// If there is just one attachment, or if the
				// attachment has first-pos label of "Main Document",
				// omit title so that the attachment is automatically
				// named after the case.
				var labelOne = row.children[0].textContent.trim().replace(/\u00AD/g, "");
				if (labelOne !== "Main Document" && anchorRows.length > 1) {
					var label = [];
					if (labelOne) {
						label.push(labelOne);
					}
					var labelTwo = row.children[1].textContent.trim().replace(/\u00AD/g, "");
					if (labelTwo) {
						label.push(labelTwo);
					}
					label = label.join(": ");
					if (label) {
						attachment.title = label;
					}
				}
				info[documentNumber].attachments.push(attachment);
			}
		}
		items[documentNumber] = `#${documentNumber}: ${date}, ${documentName}`;
	}
	Zotero.selectItems(items, function (items) {
		for (var key in items) {
			var newItem = new Zotero.Item("case");
			for (var field in item) {
				if (field === "complete") continue;
				newItem[field] = item[field];
			}
			for (var field in info[key]) {
				newItem[field] = info[key][field];
			}
			newItem.complete();
		}
	});
}

function doDocketEntries(doc, url) {
	var num = url.replace(/^.*\/([0-9]+)\/.*/, "$1")
	var item = new Zotero.Item("case");
	item.url = url.replace(/\?.*/, '');
	urls.docket = ['https://www.courtlistener.com/api/rest/v3/dockets/' + num + "/?fields=docket_number,case_name,case_name_short,court,audio_files"];
	runURLs(1, 0, item, doc, showDocketEntriesList)
}

function detectWeb(doc, url) {
	if (url.match(/\/opinion\/[0-9]+/)) {
		return "case"
	} else if (url.match(/\/docket\/[0-9]+/)) {
		return "multiple";
	} else if (url.match(/[\?\&]q=/)) {
		return "multiple";
	} else {
		return false;
	}
}

function doWeb (doc, url) {
	url = url.replace(/\#.*$/, "");
	if (url.match(/\/opinion\/[0-9]+/)) {
		// Zotero.debug("Fetch case");
		scrapeCase(doc, url)
	} else if (url.match(/[\?\&]type=r/)) {
		// Zotero.debug("Fetch multiple docket cases");
		var items = getMultiplesList(doc, "docket");
		Zotero.selectItems(items, function (items) {
			if (!items) {
				return true;
			}
			var caseURLs = [];
			for (var i in items) {
				caseURLs.push(i);
			}
			ZU.processDocuments(caseURLs, scrapeDocketCase);
		});
	} else if (url.match(/[\?\&]q=/)) {
		// Zotero.debug("Fetch multiple opinions");
		var items = getMultiplesList(doc, "opinion");
		Zotero.selectItems(items, function (items) {
			if (!items) {
				return true;
			}
			var caseURLs = [];
			for (var i in items) {
				caseURLs.push(i);
			}
			ZU.processDocuments(caseURLs, scrapeCase);
		});
	} else if (url.match(/\/docket\//)) {
		// Zotero.debug("Fetch multiple docket entries");
		doDocketEntries(doc, url);
	} else {
		Zotero.debug("Nothing at all");
	}
}
/** BEGIN TEST CASES **/
var testCases = [
	{
		"type": "web",
		"url": "https://www.courtlistener.com/opinion/2456202/valore-v-islamic-republic-of-iran/?q=&type=o&order_by=score%20desc&stat_Precedential=on&filed_after=01%2F01%2F2006&court=dcd%20almd%20alnd%20alsd%20akd%20azd%20ared%20arwd%20cacd%20caed%20cand%20casd%20cod%20ctd%20ded%20flmd%20flnd%20flsd%20gamd%20gand%20gasd%20hid%20idd%20ilcd%20ilnd%20ilsd%20innd%20insd%20iand%20iasd%20ksd%20kyed%20kywd%20laed%20lamd%20lawd%20med%20mdd%20mad%20mied%20miwd%20mnd%20msnd%20mssd%20moed%20mowd%20mtd%20ned%20nvd%20nhd%20njd%20nmd%20nyed%20nynd%20nysd%20nywd%20nced%20ncmd%20ncwd%20ndd%20ohnd%20ohsd%20oked%20oknd%20okwd%20ord%20paed%20pamd%20pawd%20rid%20scd%20sdd%20tned%20tnmd%20tnwd%20txed%20txnd%20txsd%20txwd%20utd%20vtd%20vaed%20vawd%20waed%20wawd%20wvnd%20wvsd%20wied%20wiwd%20wyd%20gud%20nmid%20prd%20vid%20californiad%20caca%20circtdel%20illinoised%20illinoisd%20indianad%20orld%20circtnc%20ohiod%20pennsylvaniad%20southcarolinaed%20southcarolinawd%20tennessed%20circttenn%20canalzoned",
		"items": [
			{
				"itemType": "case",
				"caseName": "Valore v. Islamic Republic of Iran",
				"creators": [],
				"dateDecided": "2010-03-31",
				"court": "district.court",
				"docketNumber": "03-cv-01959, 06-cv-00516, 06-cv-00750, 08-cv-01273",
				"firstPage": "52",
				"jurisdiction": "us:c0:dc.d",
				"reporter": "F. Supp. 2d",
				"reporterVolume": 700,
				"shortTitle": "Valore",
				"url": "https://www.courtlistener.com/opinion/2456202/valore-v-islamic-republic-of-iran/",
				"attachments": [
					{
						"mimeType": "text/html",
						"snapshot": true,
						"css": "*{margin:0;padding:0;}div.mlz-outer{width: 60em;margin:0 auto;text-align:left;}body{text-align:center;}p{margin-top:0.75em;margin-bottom:0.75em;}div.mlz-link-button a{text-decoration:none;background:#cccccc;color:white;border-radius:1em;font-family:sans;padding:0.2em 0.8em 0.2em 0.8em;}div.mlz-link-button a:hover{background:#bbbbbb;}div.mlz-link-button{margin: 0.7em 0 0.8em 0;}pre.inline{white-space:pre;display:inline;}span.citation{white-space:pre;}",
						"elementID": "opinion-content"
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
		"url": "https://www.courtlistener.com/opinion/2360732/in-re-search-of-certain-cell-phones/?q=&type=o&order_by=score%20desc&case_name=cell%20phone&stat_Precedential=on&filed_after=01%2F01%2F2006&court=dcd",
		"items": [
			{
				"itemType": "case",
				"caseName": "In Re Search of Certain Cell Phones",
				"creators": [],
				"dateDecided": "2008-03-04",
				"court": "district.court",
				"docketNumber": "08-cr-00174, 08-cr-00175, 08-cr-00176, 08-cr-00177",
				"firstPage": "1",
				"jurisdiction": "us:c0:dc.d",
				"reporter": "F. Supp. 2d",
				"reporterVolume": 541,
				"url": "https://www.courtlistener.com/opinion/2360732/in-re-search-of-certain-cell-phones/",
				"attachments": [
					{
						"mimeType": "text/html",
						"snapshot": true,
						"css": "*{margin:0;padding:0;}div.mlz-outer{width: 60em;margin:0 auto;text-align:left;}body{text-align:center;}p{margin-top:0.75em;margin-bottom:0.75em;}div.mlz-link-button a{text-decoration:none;background:#cccccc;color:white;border-radius:1em;font-family:sans;padding:0.2em 0.8em 0.2em 0.8em;}div.mlz-link-button a:hover{background:#bbbbbb;}div.mlz-link-button{margin: 0.7em 0 0.8em 0;}pre.inline{white-space:pre;display:inline;}span.citation{white-space:pre;}",
						"elementID": "opinion-content"
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
		"url": "https://www.courtlistener.com/opinion/4456832/antoon-v-securus-technologies-inc/?q=flynn&type=o&order_by=score%20desc&stat_Precedential=on&stat_Non-Precedential=on&stat_Errata=on&stat_Separate%20Opinion=on&stat_In-chambers=on&stat_Relating-to%20orders=on&stat_Unknown%20Status=on&filed_after=08%2F31%2F2017&filed_before=03%2F08%2F2018&court=dcd",
		"items": [
			{
				"itemType": "case",
				"caseName": "Antoon v. Securus Technologies, Inc.",
				"creators": [],
				"dateDecided": "2018-01-03",
				"court": "district.court",
				"docketNumber": "17-mc-01892",
				"jurisdiction": "us:c0:dc.d",
				"shortTitle": "Antoon",
				"url": "https://www.courtlistener.com/opinion/4456832/antoon-v-securus-technologies-inc/",
				"attachments": [
					{
						"mimeType": "text/html",
						"snapshot": true,
						"css": "*{margin:0;padding:0;}div.mlz-outer{width: 60em;margin:0 auto;text-align:left;}body{text-align:center;}p{margin-top:0.75em;margin-bottom:0.75em;}div.mlz-link-button a{text-decoration:none;background:#cccccc;color:white;border-radius:1em;font-family:sans;padding:0.2em 0.8em 0.2em 0.8em;}div.mlz-link-button a:hover{background:#bbbbbb;}div.mlz-link-button{margin: 0.7em 0 0.8em 0;}pre.inline{white-space:pre;display:inline;}span.citation{white-space:pre;}",
						"elementID": "opinion-content"
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
		"url": "https://www.courtlistener.com/opinion/2375881/flynn-v-doyle/?q=flynn&type=o&order_by=score%20desc&stat_Precedential=on&stat_Non-Precedential=on&stat_Errata=on&stat_Separate%20Opinion=on&stat_In-chambers=on&stat_Relating-to%20orders=on&stat_Unknown%20Status=on&filed_after=01%2F01%2F2006&court=wied",
		"items": [
			{
				"itemType": "case",
				"caseName": "Flynn v. Doyle",
				"creators": [],
				"dateDecided": "2009-04-24",
				"court": "district.court",
				"docketNumber": "06-cv-00537",
				"firstPage": "987",
				"jurisdiction": "us:c7:wi.ed",
				"reporter": "F. Supp. 2d",
				"reporterVolume": 630,
				"shortTitle": "Flynn",
				"url": "https://www.courtlistener.com/opinion/2375881/flynn-v-doyle/",
				"attachments": [
					{
						"mimeType": "text/html",
						"snapshot": true,
						"css": "*{margin:0;padding:0;}div.mlz-outer{width: 60em;margin:0 auto;text-align:left;}body{text-align:center;}p{margin-top:0.75em;margin-bottom:0.75em;}div.mlz-link-button a{text-decoration:none;background:#cccccc;color:white;border-radius:1em;font-family:sans;padding:0.2em 0.8em 0.2em 0.8em;}div.mlz-link-button a:hover{background:#bbbbbb;}div.mlz-link-button{margin: 0.7em 0 0.8em 0;}pre.inline{white-space:pre;display:inline;}span.citation{white-space:pre;}",
						"elementID": "opinion-content"
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
		"url": "https://www.courtlistener.com/opinion/2115303/southeastern-metals-v-florida-metal-products/",
		"items": [
			{
				"itemType": "case",
				"caseName": "Southeastern Metals v. Florida Metal Products",
				"creators": [],
				"dateDecided": "2011-04-21",
				"court": "district.court",
				"docketNumber": "09-cv-01250",
				"firstPage": "1341",
				"jurisdiction": "us:c11:fl.md",
				"reporter": "F. Supp. 2d",
				"reporterVolume": 778,
				"url": "https://www.courtlistener.com/opinion/2115303/southeastern-metals-v-florida-metal-products/",
				"attachments": [
					{
						"mimeType": "text/html",
						"snapshot": true,
						"css": "*{margin:0;padding:0;}div.mlz-outer{width: 60em;margin:0 auto;text-align:left;}body{text-align:center;}p{margin-top:0.75em;margin-bottom:0.75em;}div.mlz-link-button a{text-decoration:none;background:#cccccc;color:white;border-radius:1em;font-family:sans;padding:0.2em 0.8em 0.2em 0.8em;}div.mlz-link-button a:hover{background:#bbbbbb;}div.mlz-link-button{margin: 0.7em 0 0.8em 0;}pre.inline{white-space:pre;display:inline;}span.citation{white-space:pre;}",
						"elementID": "opinion-content"
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
		"url": "https://www.courtlistener.com/opinion/2573394/nco-financial-systems-inc-v-yari/",
		"items": [
			{
				"itemType": "case",
				"caseName": "Nco Financial Systems, Inc. v. Yari",
				"creators": [],
				"dateDecided": "2006-03-30",
				"court": "district.court",
				"docketNumber": "06-cv-00286",
				"firstPage": "1237",
				"jurisdiction": "us:c10:co.d",
				"reporter": "F. Supp. 2d",
				"reporterVolume": 422,
				"shortTitle": "Yari",
				"url": "https://www.courtlistener.com/opinion/2573394/nco-financial-systems-inc-v-yari/",
				"attachments": [
					{
						"mimeType": "text/html",
						"snapshot": true,
						"css": "*{margin:0;padding:0;}div.mlz-outer{width: 60em;margin:0 auto;text-align:left;}body{text-align:center;}p{margin-top:0.75em;margin-bottom:0.75em;}div.mlz-link-button a{text-decoration:none;background:#cccccc;color:white;border-radius:1em;font-family:sans;padding:0.2em 0.8em 0.2em 0.8em;}div.mlz-link-button a:hover{background:#bbbbbb;}div.mlz-link-button{margin: 0.7em 0 0.8em 0;}pre.inline{white-space:pre;display:inline;}span.citation{white-space:pre;}",
						"elementID": "opinion-content"
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
		"url": "https://www.courtlistener.com/opinion/1522154/in-re-rodgers/?type=o&q=rodgers&type=o&order_by=score%20desc&stat_Precedential=on&court=bapme%20bapma%20almb%20alnb%20alsb%20akb%20arb%20areb%20arwb%20cacb%20caeb%20canb%20casb%20cob%20ctb%20deb%20dcb%20flmb%20flnb%20flsb%20gamb%20ganb%20gasb%20hib%20idb%20ilcb%20ilnb%20ilsb%20innb%20insb%20ianb%20iasb%20ksb%20kyeb%20kywb%20laeb%20lamb%20lawb%20meb%20mdb%20mab%20mieb%20miwb%20mnb%20msnb%20mssb%20moeb%20mowb%20mtb%20nebraskab%20nvb%20nhb%20njb%20nmb%20nyeb%20nynb%20nysb%20nywb%20nceb%20ncmb%20ncwb%20ndb%20ohnb%20ohsb%20okeb%20oknb%20okwb%20orb%20paeb%20pamb%20pawb%20rib%20scb%20sdb%20tneb%20tnmb%20tnwb%20tennesseeb%20txeb%20txnb%20txsb%20txwb%20utb%20vtb%20vaeb%20vawb%20waeb%20wawb%20wvnb%20wvsb%20wieb%20wiwb%20wyb%20gub%20nmib%20prb%20vib",
		"items": [
			{
				"itemType": "case",
				"caseName": "In Re Rodgers",
				"creators": [],
				"dateDecided": "2010-05-19",
				"court": "bankruptcy.court",
				"docketNumber": "[CHECK AGAINST CASE REPORT] 9:09-bk-13886-ALP",
				"firstPage": "910",
				"jurisdiction": "us:c11:fl.md",
				"reporter": "B.R.",
				"reporterVolume": 430,
				"url": "https://www.courtlistener.com/opinion/1522154/in-re-rodgers/",
				"attachments": [
					{
						"mimeType": "text/html",
						"snapshot": true,
						"css": "*{margin:0;padding:0;}div.mlz-outer{width: 60em;margin:0 auto;text-align:left;}body{text-align:center;}p{margin-top:0.75em;margin-bottom:0.75em;}div.mlz-link-button a{text-decoration:none;background:#cccccc;color:white;border-radius:1em;font-family:sans;padding:0.2em 0.8em 0.2em 0.8em;}div.mlz-link-button a:hover{background:#bbbbbb;}div.mlz-link-button{margin: 0.7em 0 0.8em 0;}pre.inline{white-space:pre;display:inline;}span.citation{white-space:pre;}",
						"elementID": "opinion-content"
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
		"url": "https://www.courtlistener.com/opinion/1816815/in-re-singletary/?q=rodgers&type=o&order_by=score%20desc&stat_Precedential=on&filed_after=01%2F01%2F2006&court=bapme%20bapma%20almb%20alnb%20alsb%20akb%20arb%20areb%20arwb%20cacb%20caeb%20canb%20casb%20cob%20ctb%20deb%20dcb%20flmb%20flnb%20flsb%20gamb%20ganb%20gasb%20hib%20idb%20ilcb%20ilnb%20ilsb%20innb%20insb%20ianb%20iasb%20ksb%20kyeb%20kywb%20laeb%20lamb%20lawb%20meb%20mdb%20mab%20mieb%20miwb%20mnb%20msnb%20mssb%20moeb%20mowb%20mtb%20nebraskab%20nvb%20nhb%20njb%20nmb%20nyeb%20nynb%20nysb%20nywb%20nceb%20ncmb%20ncwb%20ndb%20ohnb%20ohsb%20okeb%20oknb%20okwb%20orb%20paeb%20pamb%20pawb%20rib%20scb%20sdb%20tneb%20tnmb%20tnwb%20tennesseeb%20txeb%20txnb%20txsb%20txwb%20utb%20vtb%20vaeb%20vawb%20waeb%20wawb%20wvnb%20wvsb%20wieb%20wiwb%20wyb%20gub%20nmib%20prb%20vib",
		"items": [
			{
				"itemType": "case",
				"caseName": "In Re Singletary",
				"creators": [],
				"dateDecided": "2006-10-19",
				"court": "bankruptcy.court",
				"docketNumber": "[CHECK AGAINST CASE REPORT] 17-30699",
				"firstPage": "455",
				"jurisdiction": "us:c5:tx.sd",
				"reporter": "B.R.",
				"reporterVolume": 354,
				"url": "https://www.courtlistener.com/opinion/1816815/in-re-singletary/",
				"attachments": [
					{
						"mimeType": "text/html",
						"snapshot": true,
						"css": "*{margin:0;padding:0;}div.mlz-outer{width: 60em;margin:0 auto;text-align:left;}body{text-align:center;}p{margin-top:0.75em;margin-bottom:0.75em;}div.mlz-link-button a{text-decoration:none;background:#cccccc;color:white;border-radius:1em;font-family:sans;padding:0.2em 0.8em 0.2em 0.8em;}div.mlz-link-button a:hover{background:#bbbbbb;}div.mlz-link-button{margin: 0.7em 0 0.8em 0;}pre.inline{white-space:pre;display:inline;}span.citation{white-space:pre;}",
						"elementID": "opinion-content"
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
		"url": "https://www.courtlistener.com/opinion/1991450/in-re-blanton-smith-corp/?type=o&q=smith&type=o&order_by=score%20desc&stat_Precedential=on&court=almb%20alnb%20alsb%20akb%20arb%20areb%20arwb%20cacb%20caeb%20canb%20casb%20cob%20ctb%20deb%20dcb%20flmb%20flnb%20flsb%20gamb%20ganb%20gasb%20hib%20idb%20ilcb%20ilnb%20ilsb%20innb%20insb%20ianb%20iasb%20ksb%20kyeb%20kywb%20laeb%20lamb%20lawb%20meb%20mdb%20mab%20mieb%20miwb%20mnb%20msnb%20mssb%20moeb%20mowb%20mtb%20nebraskab%20nvb%20nhb%20njb%20nmb%20nyeb%20nynb%20nysb%20nywb%20nceb%20ncmb%20ncwb%20ndb%20ohnb%20ohsb%20okeb%20oknb%20okwb%20orb%20paeb%20pamb%20pawb%20rib%20scb%20sdb%20tneb%20tnmb%20tnwb%20tennesseeb%20txeb%20txnb%20txsb%20txwb%20utb%20vtb%20vaeb%20vawb%20waeb%20wawb%20wvnb%20wvsb%20wieb%20wiwb%20wyb%20gub%20nmib%20prb%20vib",
		"items": [
			{
				"itemType": "case",
				"caseName": "[CHECK AGAINST PAGE VIEW] In Re Blanton Smith Corp.",
				"creators": [],
				"dateDecided": "1980-11-26",
				"court": "bankruptcy.court",
				"docketNumber": "[CHECK AGAINST CASE REPORT] Bkrtcy. Nos. 380-01019, 380-01020",
				"firstPage": "410",
				"jurisdiction": "us:c6:tn.md",
				"reporter": "B.R.",
				"reporterVolume": 7,
				"shortTitle": "In Re Blanton Smith Corp.",
				"url": "https://www.courtlistener.com/opinion/1991450/in-re-blanton-smith-corp/",
				"attachments": [
					{
						"mimeType": "text/html",
						"snapshot": true,
						"css": "*{margin:0;padding:0;}div.mlz-outer{width: 60em;margin:0 auto;text-align:left;}body{text-align:center;}p{margin-top:0.75em;margin-bottom:0.75em;}div.mlz-link-button a{text-decoration:none;background:#cccccc;color:white;border-radius:1em;font-family:sans;padding:0.2em 0.8em 0.2em 0.8em;}div.mlz-link-button a:hover{background:#bbbbbb;}div.mlz-link-button{margin: 0.7em 0 0.8em 0;}pre.inline{white-space:pre;display:inline;}span.citation{white-space:pre;}",
						"elementID": "opinion-content"
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
		"url": "https://www.courtlistener.com/opinion/2088592/people-v-fuzz/?type=o&q=fuzz&type=o&order_by=score%20desc&stat_Precedential=on&court=illappct",
		"items": [
			{
				"itemType": "case",
				"caseName": "People v. Fuzz",
				"creators": [],
				"dateDecided": "1991-08-28",
				"court": "appellate.court",
				"docketNumber": "3-90-0896",
				"extra": "Other cites: 218 Ill. App. 3d 418; 578 N.E.2d 294",
				"firstPage": "167",
				"jurisdiction": "us:il:d3",
				"reporter": "Ill. Dec.",
				"reporterVolume": 161,
				"shortTitle": "Fuzz",
				"url": "https://www.courtlistener.com/opinion/2088592/people-v-fuzz/",
				"attachments": [
					{
						"mimeType": "text/html",
						"snapshot": true,
						"css": "*{margin:0;padding:0;}div.mlz-outer{width: 60em;margin:0 auto;text-align:left;}body{text-align:center;}p{margin-top:0.75em;margin-bottom:0.75em;}div.mlz-link-button a{text-decoration:none;background:#cccccc;color:white;border-radius:1em;font-family:sans;padding:0.2em 0.8em 0.2em 0.8em;}div.mlz-link-button a:hover{background:#bbbbbb;}div.mlz-link-button{margin: 0.7em 0 0.8em 0;}pre.inline{white-space:pre;display:inline;}span.citation{white-space:pre;}",
						"elementID": "opinion-content"
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
		"url": "https://www.courtlistener.com/opinion/2698937/state-v-cline/?q=bucket&type=o&order_by=score%20desc&stat_Precedential=on&filed_after=01%2F01%2F2012&court=ohioctapp",
		"items": [
			{
				"itemType": "case",
				"caseName": "State v. Cline",
				"creators": [],
				"dateDecided": "2013-04-08",
				"court": "court.appeals",
				"docketNumber": "12 CA 11",
				"firstPage": "1404",
				"jurisdiction": "us:oh:d5",
				"shortTitle": "Cline",
				"url": "https://www.courtlistener.com/opinion/2698937/state-v-cline/",
				"yearAsVolume": 2013,
				"attachments": [
					{
						"mimeType": "text/html",
						"snapshot": true,
						"css": "*{margin:0;padding:0;}div.mlz-outer{width: 60em;margin:0 auto;text-align:left;}body{text-align:center;}p{margin-top:0.75em;margin-bottom:0.75em;}div.mlz-link-button a{text-decoration:none;background:#cccccc;color:white;border-radius:1em;font-family:sans;padding:0.2em 0.8em 0.2em 0.8em;}div.mlz-link-button a:hover{background:#bbbbbb;}div.mlz-link-button{margin: 0.7em 0 0.8em 0;}pre.inline{white-space:pre;display:inline;}span.citation{white-space:pre;}",
						"elementID": "opinion-content"
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
