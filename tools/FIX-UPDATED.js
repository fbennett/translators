const fs = require("fs");
const path = require("path");

var fn = process.argv[2];

var transPath = (fn) => {
    let pth = path.join(__dirname, "..");
    if (fn) {
        return path.join(pth, fn);
    } else {
        return pth;
    }
}

if (fs.existsSync(transPath(fn))) {
	let atime = fs.statSync(transPath(fn)).atime;
    let mtime = fs.statSync(transPath(fn)).mtime;
	
    let newDate = mtime.toISOString().replace(/(?:\.[0-9]{3}Z)/, "").replace("T", " ");;
	
    var txt = fs.readFileSync(transPath(fn)).toString();
    var lst = txt.split("\n");
    for (let i=0,ilen=lst.length; i<ilen; i++) {
        var line = lst[i];
        var m = line.match(/^(\s*\"lastUpdated\":\s*\")(.*)(\"\s*)$/);
        if (m) {
            oldDate = m[2];
            if (oldDate !== newDate) {
                lst[i] = `${m[1]}${newDate}${m[3]}`;
                txt = lst.join("\n");
                fs.writeFileSync(transPath(fn), txt);
				fs.utimesSync(transPath(fn), atime, mtime);
                break;
            }
        }
    }
} else {
	console.log(`Oops. ${transPath(fn)} not found.`);
}

