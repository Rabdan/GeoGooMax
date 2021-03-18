var DATA = (function(){
    function Data(){
        this.urlPatterns = [
            //"<all_urls>"
            "*://www.google.com/*",
            "*://www.google.ac/*",
            "*://www.google.ad/*",
            "*://www.google.ae/*",
            "*://www.google.com.af/*",
            "*://www.google.com.ag/*",
            "*://www.google.com.ai/*",
            "*://www.google.al/*",
            "*://www.google.am/*",
            "*://www.google.co.ao/*",
            "*://www.google.com.ar/*",
            "*://www.google.as/*",
            "*://www.google.at/*",
            "*://www.google.com.au/*",
            "*://www.google.az/*",
            "*://www.google.ba/*",
            "*://www.google.com.bd/*",
            "*://www.google.be/*",
            "*://www.google.bf/*",
            "*://www.google.bg/*",
            "*://www.google.com.bh/*",
            "*://www.google.bi/*",
            "*://www.google.bj/*",
            "*://www.google.com.bn/*",
            "*://www.google.com.bo/*",
            "*://www.google.com.br/*",
            "*://www.google.bs/*",
            "*://www.google.co.bw/*",
            "*://www.google.by/*",
            "*://www.google.com.bz/*",
            "*://www.google.ca/*",
            "*://www.google.com.kh/*",
            "*://www.google.cc/*",
            "*://www.google.cd/*",
            "*://www.google.cf/*",
            "*://www.google.cat/*",
            "*://www.google.cg/*",
            "*://www.google.ch/*",
            "*://www.google.ci/*",
            "*://www.google.co.ck/*",
            "*://www.google.cl/*",
            "*://www.google.cm/*",
            "*://www.g.cn/*",
            "*://www.google.com.co/*",
            "*://www.google.co.cr/*",
            "*://www.google.com.cu/*",
            "*://www.google.cv/*",
            "*://www.google.com.cy/*",
            "*://www.google.cz/*",
            "*://www.google.de/*",
            "*://www.google.dj/*",
            "*://www.google.dk/*",
            "*://www.google.dm/*",
            "*://www.google.com.do/*",
            "*://www.google.dz/*",
            "*://www.google.com.ec/*",
            "*://www.google.ee/*",
            "*://www.google.com.eg/*",
            "*://www.google.es/*",
            "*://www.google.com.et/*",
            "*://www.google.fi/*",
            "*://www.google.com.fj/*",
            "*://www.google.fm/*",
            "*://www.google.fr/*",
            "*://www.google.ga/*",
            "*://www.google.ge/*",
            "*://www.google.gf/*",
            "*://www.google.gg/*",
            "*://www.google.com.gh/*",
            "*://www.google.com.gi/*",
            "*://www.google.gl/*",
            "*://www.google.gm/*",
            "*://www.google.gp/*",
            "*://www.google.gr/*",
            "*://www.google.com.gt/*",
            "*://www.google.gy/*",
            "*://www.google.com.hk/*",
            "*://www.google.hn/*",
            "*://www.google.hr/*",
            "*://www.google.ht/*",
            "*://www.google.hu/*",
            "*://www.google.co.id/*",
            "*://www.google.iq/*",
            "*://www.google.ie/*",
            "*://www.google.co.il/*",
            "*://www.google.im/*",
            "*://www.google.co.in/*",
            "*://www.google.io/*",
            "*://www.google.is/*",
            "*://www.google.it/*",
            "*://www.google.je/*",
            "*://www.google.com.jm/*",
            "*://www.google.jo/*",
            "*://www.google.co.jp/*",
            "*://www.google.co.ke/*",
            "*://www.google.ki/*",
            "*://www.google.kg/*",
            "*://www.google.co.kr/*",
            "*://www.google.com.kw/*",
            "*://www.google.kz/*",
            "*://www.google.la/*",
            "*://www.google.com.lb/*",
            "*://www.google.com.lc/*",
            "*://www.google.li/*",
            "*://www.google.lk/*",
            "*://www.google.co.ls/*",
            "*://www.google.lt/*",
            "*://www.google.lu/*",
            "*://www.google.lv/*",
            "*://www.google.com.ly/*",
            "*://www.google.co.ma/*",
            "*://www.google.md/*",
            "*://www.google.me/*",
            "*://www.google.mg/*",
            "*://www.google.mk/*",
            "*://www.google.ml/*",
            "*://www.google.mn/*",
            "*://www.google.ms/*",
            "*://www.google.com.mt/*",
            "*://www.google.mu/*",
            "*://www.google.mv/*",
            "*://www.google.mw/*",
            "*://www.google.com.mx/*",
            "*://www.google.com.my/*",
            "*://www.google.co.mz/*",
            "*://www.google.com.na/*",
            "*://www.google.ne/*",
            "*://www.google.com.nf/*",
            "*://www.google.com.ng/*",
            "*://www.google.com.ni/*",
            "*://www.google.nl/*",
            "*://www.google.no/*",
            "*://www.google.com.np/*",
            "*://www.google.nr/*",
            "*://www.google.nu/*",
            "*://www.google.co.nz/*",
            "*://www.google.com.om/*",
            "*://www.google.com.pa/*",
            "*://www.google.com.pe/*",
            "*://www.google.com.ph/*",
            "*://www.google.com.pk/*",
            "*://www.google.pl/*",
            "*://www.google.com.pg/*",
            "*://www.google.pn/*",
            "*://www.google.com.pr/*",
            "*://www.google.ps/*",
            "*://www.google.pt/*",
            "*://www.google.com.py/*",
            "*://www.google.com.qa/*",
            "*://www.google.ro/*",
            "*://www.google.rs/*",
            "*://www.google.ru/*",
            "*://www.google.rw/*",
            "*://www.google.com.sa/*",
            "*://www.google.com.sb/*",
            "*://www.google.sc/*",
            "*://www.google.se/*",
            "*://www.google.com.sg/*",
            "*://www.google.sh/*",
            "*://www.google.si/*",
            "*://www.google.sk/*",
            "*://www.google.com.sl/*",
            "*://www.google.sn/*",
            "*://www.google.sm/*",
            "*://www.google.so/*",
            "*://www.google.st/*",
            "*://www.google.com.sv/*",
            "*://www.google.td/*",
            "*://www.google.tg/*",
            "*://www.google.co.th/*",
            "*://www.google.com.tj/*",
            "*://www.google.tk/*",
            "*://www.google.tl/*",
            "*://www.google.tm/*",
            "*://www.google.to/*",
            "*://www.google.com.tn/*",
            "*://www.google.com.tr/*",
            "*://www.google.tt/*",
            "*://www.google.com.tw/*",
            "*://www.google.co.tz/*",
            "*://www.google.com.ua/*",
            "*://www.google.co.ug/*",
            "*://www.google.co.uk/*",
            "*://www.google.us/*",
            "*://www.google.com.uy/*",
            "*://www.google.co.uz/*",
            "*://www.google.com.vc/*",
            "*://www.google.co.ve/*",
            "*://www.google.vg/*",
            "*://www.google.co.vi/*",
            "*://www.google.com.vn/*",
            "*://www.google.vu/*",
            "*://www.google.ws/*",
            "*://www.google.co.za/*",
            "*://www.google.co.zm/*",
            "*://www.google.co.zw/*",
            "*://www.google.com.mm/*"
        ];

        this.symbolsByLength = { "4": "E", 
                             "5": "F", 
                             "6": "G", 
                             "7": "H", 
                             "8": "I", 
                             "9": "J", 
                             "10": "K", 
                             "11": "L", 
                             "12": "M", 
                             "13": "N", 
                             "14": "O", 
                             "15": "P", 
                             "16": "Q", 
                             "17": "R", 
                             "18": "S", 
                             "19": "T", 
                             "20": "U", 
                             "21": "V", 
                             "22": "W", 
                             "23": "X", 
                             "24": "Y", 
                             "25": "Z", 
                             "26": "a", 
                             "27": "b", 
                             "28": "c", 
                             "29": "d", 
                             "30": "e", 
                             "31": "f", 
                             "32": "g", 
                             "33": "h", 
                             "34": "i", 
                             "35": "j", 
                             "36": "k", 
                             "37": "l", 
                             "38": "m", 
                             "39": "n", 
                             "40": "o", 
                             "41": "p", 
                             "42": "q", 
                             "43": "r", 
                             "44": "s", 
                             "45": "t", 
                             "46": "u", 
                             "47": "v", 
                             "48": "w", 
                             "49": "x", 
                             "50": "y", 
                             "51": "z", 
                             "52": "0", 
                             "53": "1", 
                             "54": "2", 
                             "55": "3", 
                             "56": "4", 
                             "57": "5", 
                             "58": "6", 
                             "59": "7", 
                             "60": "8", 
                             "61": "9", 
                             "62": "-", 
                             "63": "", 
                             "64": "A", 
                             "65": "B", 
                             "66": "C", 
                             "67": "D", 
                             "68": "E", 
                             "69": "F", 
                             "70": "G", 
                             "71": "H", 
                             "72": "I", 
                             "73": "J", 
                             "76": "M", 
                             "83": "T", 
                             "89": "L"
                    };

            this.countryUrls = {
                "COM": "https://www.google.com",
                "AC": "https://www.google.ac",
                "AD": "https://www.google.ad",
                "AE": "https://www.google.ae",
                "AF": "https://www.google.com.af",
                "AG": "https://www.google.com.ag",
                "AI": "https://www.google.com.ai",
                "AL": "https://www.google.al",
                "AM": "https://www.google.am",
                "AO": "https://www.google.co.ao",
                "AR": "https://www.google.com.ar",
                "AS": "https://www.google.as",
                "AT": "https://www.google.at",
                "AU": "https://www.google.com.au",
                "AZ": "https://www.google.az",
                "BA": "https://www.google.ba",
                "BD": "https://www.google.com.bd",
                "BE": "https://www.google.be",
                "BF": "https://www.google.bf",
                "BG": "https://www.google.bg",
                "BH": "https://www.google.com.bh",
                "BI": "https://www.google.bi",
                "BJ": "https://www.google.bj",
                "BN": "https://www.google.com.bn",
                "BO": "https://www.google.com.bo",
                "BR": "https://www.google.com.br",
                "BS": "https://www.google.bs",
                "BW": "https://www.google.co.bw",
                "BY": "https://www.google.by",
                "BZ": "https://www.google.com.bz",
                "CA": "https://www.google.ca",
                "KH": "https://www.google.com.kh",
                "CC": "https://www.google.cc",
                "CD": "https://www.google.cd",
                "CF": "https://www.google.cf",
                "CAT": "https://www.google.cat",
                "CG": "https://www.google.cg",
                "CH": "https://www.google.ch",
                "CI": "https://www.google.ci",
                "CK": "https://www.google.co.ck",
                "CL": "https://www.google.cl",
                "CM": "https://www.google.cm",
                "CN": "https://www.g.cn",
                "CO": "https://www.google.com.co",
                "CR": "https://www.google.co.cr",
                "CU": "https://www.google.com.cu",
                "CV": "https://www.google.cv",
                "CY": "https://www.google.com.cy",
                "CZ": "https://www.google.cz",
                "DE": "https://www.google.de",
                "DJ": "https://www.google.dj",
                "DK": "https://www.google.dk",
                "DM": "https://www.google.dm",
                "DO": "https://www.google.com.do",
                "DZ": "https://www.google.dz",
                "EC": "https://www.google.com.ec",
                "EE": "https://www.google.ee",
                "EG": "https://www.google.com.eg",
                "ES": "https://www.google.es",
                "ET": "https://www.google.com.et",
                "FI": "https://www.google.fi",
                "FJ": "https://www.google.com.fj",
                "FM": "https://www.google.fm",
                "FR": "https://www.google.fr",
                "GA": "https://www.google.ga",
                "GE": "https://www.google.ge",
                "GF": "https://www.google.gf",
                "GG": "https://www.google.gg",
                "GH": "https://www.google.com.gh",
                "GI": "https://www.google.com.gi",
                "GL": "https://www.google.gl",
                "GM": "https://www.google.gm",
                "GP": "https://www.google.gp",
                "GR": "https://www.google.gr",
                "GT": "https://www.google.com.gt",
                "GY": "https://www.google.gy",
                "HK": "https://www.google.com.hk",
                "HN": "https://www.google.hn",
                "HR": "https://www.google.hr",
                "HT": "https://www.google.ht",
                "HU": "https://www.google.hu",
                "ID": "https://www.google.co.id",
                "IQ": "https://www.google.iq",
                "IE": "https://www.google.ie",
                "IL": "https://www.google.co.il",
                "IM": "https://www.google.im",
                "IN": "https://www.google.co.in",
                "IO": "https://www.google.io",
                "IS": "https://www.google.is",
                "IT": "https://www.google.it",
                "JE": "https://www.google.je",
                "JM": "https://www.google.com.jm",
                "JO": "https://www.google.jo",
                "JP": "https://www.google.co.jp",
                "KE": "https://www.google.co.ke",
                "KI": "https://www.google.ki",
                "KG": "https://www.google.kg",
                "KR": "https://www.google.co.kr",
                "KW": "https://www.google.com.kw",
                "KZ": "https://www.google.kz",
                "LA": "https://www.google.la",
                "LB": "https://www.google.com.lb",
                "LC": "https://www.google.com.lc",
                "LI": "https://www.google.li",
                "LK": "https://www.google.lk",
                "LS": "https://www.google.co.ls",
                "LT": "https://www.google.lt",
                "LU": "https://www.google.lu",
                "LV": "https://www.google.lv",
                "LY": "https://www.google.com.ly",
                "MA": "https://www.google.co.ma",
                "MD": "https://www.google.md",
                "ME": "https://www.google.me",
                "MG": "https://www.google.mg",
                "MK": "https://www.google.mk",
                "ML": "https://www.google.ml",
                "MN": "https://www.google.mn",
                "MS": "https://www.google.ms",
                "MT": "https://www.google.com.mt",
                "MU": "https://www.google.mu",
                "MV": "https://www.google.mv",
                "MW": "https://www.google.mw",
                "MX": "https://www.google.com.mx",
                "MY": "https://www.google.com.my",
                "MZ": "https://www.google.co.mz",
                "NA": "https://www.google.com.na",
                "NE": "https://www.google.ne",
                "NF": "https://www.google.com.nf",
                "NG": "https://www.google.com.ng",
                "NI": "https://www.google.com.ni",
                "NL": "https://www.google.nl",
                "NO": "https://www.google.no",
                "NP": "https://www.google.com.np",
                "NR": "https://www.google.nr",
                "NU": "https://www.google.nu",
                "NZ": "https://www.google.co.nz",
                "OM": "https://www.google.com.om",
                "PA": "https://www.google.com.pa",
                "PE": "https://www.google.com.pe",
                "PH": "https://www.google.com.ph",
                "PK": "https://www.google.com.pk",
                "PL": "https://www.google.pl",
                "PG": "https://www.google.com.pg",
                "PN": "https://www.google.pn",
                "PR": "https://www.google.com.pr",
                "PS": "https://www.google.ps",
                "PT": "https://www.google.pt",
                "PY": "https://www.google.com.py",
                "QA": "https://www.google.com.qa",
                "RO": "https://www.google.ro",
                "RS": "https://www.google.rs",
                "RU": "https://www.google.ru",
                "RW": "https://www.google.rw",
                "SA": "https://www.google.com.sa",
                "SB": "https://www.google.com.sb",
                "SC": "https://www.google.sc",
                "SE": "https://www.google.se",
                "SG": "https://www.google.com.sg",
                "SH": "https://www.google.sh",
                "SI": "https://www.google.si",
                "SK": "https://www.google.sk",
                "SL": "https://www.google.com.sl",
                "SN": "https://www.google.sn",
                "SM": "https://www.google.sm",
                "SO": "https://www.google.so",
                "ST": "https://www.google.st",
                "SV": "https://www.google.com.sv",
                "TD": "https://www.google.td",
                "TG": "https://www.google.tg",
                "TH": "https://www.google.co.th",
                "TJ": "https://www.google.com.tj",
                "TK": "https://www.google.tk",
                "TL": "https://www.google.tl",
                "TM": "https://www.google.tm",
                "TO": "https://www.google.to",
                "TN": "https://www.google.com.tn",
                "TR": "https://www.google.com.tr",
                "TT": "https://www.google.tt",
                "TW": "https://www.google.com.tw",
                "TZ": "https://www.google.co.tz",
                "UA": "https://www.google.com.ua",
                "UG": "https://www.google.co.ug",
                "UK": "https://www.google.co.uk", 
                "GB": "https://www.google.co.uk", 
                "US": "https://www.google.com",
                "UY": "https://www.google.com.uy",
                "UZ": "https://www.google.co.uz",
                "VC": "https://www.google.com.vc",
                "VE": "https://www.google.co.ve",
                "VG": "https://www.google.vg",
                "VI": "https://www.google.co.vi",
                "VN": "https://www.google.com.vn",
                "VU": "https://www.google.vu",
                "WS": "https://www.google.ws",
                "ZA": "https://www.google.co.za",
                "ZM": "https://www.google.co.zm",
                "ZW": "https://www.google.co.zw",
                "MM": "https://www.google.com.mm"
        };

        this.LangCodes = {
          "AD": {
            "name": "Andorra",
            "native": "Andorra",
            "phone": "376",
            "continent": "EU",
            "capital": "Andorra la Vella",
            "currency": "EUR",
            "languages": [
              "ca"
            ]
          },
          "AE": {
            "name": "United Arab Emirates",
            "native": "دولة الإمارات العربية المتحدة",
            "phone": "971",
            "continent": "AS",
            "capital": "Abu Dhabi",
            "currency": "AED",
            "languages": [
              "ar"
            ]
          },
          "AF": {
            "name": "Afghanistan",
            "native": "افغانستان",
            "phone": "93",
            "continent": "AS",
            "capital": "Kabul",
            "currency": "AFN",
            "languages": [
              "ps",
              "uz",
              "tk"
            ]
          },
          "AG": {
            "name": "Antigua and Barbuda",
            "native": "Antigua and Barbuda",
            "phone": "1268",
            "continent": "NA",
            "capital": "Saint John's",
            "currency": "XCD",
            "languages": [
              "en"
            ]
          },
          "AI": {
            "name": "Anguilla",
            "native": "Anguilla",
            "phone": "1264",
            "continent": "NA",
            "capital": "The Valley",
            "currency": "XCD",
            "languages": [
              "en"
            ]
          },
          "AL": {
            "name": "Albania",
            "native": "Shqipëria",
            "phone": "355",
            "continent": "EU",
            "capital": "Tirana",
            "currency": "ALL",
            "languages": [
              "sq"
            ]
          },
          "AM": {
            "name": "Armenia",
            "native": "Հայաստան",
            "phone": "374",
            "continent": "AS",
            "capital": "Yerevan",
            "currency": "AMD",
            "languages": [
              "hy",
              "ru"
            ]
          },
          "AO": {
            "name": "Angola",
            "native": "Angola",
            "phone": "244",
            "continent": "AF",
            "capital": "Luanda",
            "currency": "AOA",
            "languages": [
              "pt"
            ]
          },
          "AQ": {
            "name": "Antarctica",
            "native": "Antarctica",
            "phone": "672",
            "continent": "AN",
            "capital": "",
            "currency": "",
            "languages": []
          },
          "AR": {
            "name": "Argentina",
            "native": "Argentina",
            "phone": "54",
            "continent": "SA",
            "capital": "Buenos Aires",
            "currency": "ARS",
            "languages": [
              "es",
              "gn"
            ]
          },
          "AS": {
            "name": "American Samoa",
            "native": "American Samoa",
            "phone": "1684",
            "continent": "OC",
            "capital": "Pago Pago",
            "currency": "USD",
            "languages": [
              "en",
              "sm"
            ]
          },
          "AT": {
            "name": "Austria",
            "native": "Österreich",
            "phone": "43",
            "continent": "EU",
            "capital": "Vienna",
            "currency": "EUR",
            "languages": [
              "de"
            ]
          },
          "AU": {
            "name": "Australia",
            "native": "Australia",
            "phone": "61",
            "continent": "OC",
            "capital": "Canberra",
            "currency": "AUD",
            "languages": [
              "en"
            ]
          },
          "AW": {
            "name": "Aruba",
            "native": "Aruba",
            "phone": "297",
            "continent": "NA",
            "capital": "Oranjestad",
            "currency": "AWG",
            "languages": [
              "nl",
              "pa"
            ]
          },
          "AX": {
            "name": "Åland",
            "native": "Åland",
            "phone": "358",
            "continent": "EU",
            "capital": "Mariehamn",
            "currency": "EUR",
            "languages": [
              "sv"
            ]
          },
          "AZ": {
            "name": "Azerbaijan",
            "native": "Azərbaycan",
            "phone": "994",
            "continent": "AS",
            "capital": "Baku",
            "currency": "AZN",
            "languages": [
              "az"
            ]
          },
          "BA": {
            "name": "Bosnia and Herzegovina",
            "native": "Bosna i Hercegovina",
            "phone": "387",
            "continent": "EU",
            "capital": "Sarajevo",
            "currency": "BAM",
            "languages": [
              "bs",
              "hr",
              "sr"
            ]
          },
          "BB": {
            "name": "Barbados",
            "native": "Barbados",
            "phone": "1246",
            "continent": "NA",
            "capital": "Bridgetown",
            "currency": "BBD",
            "languages": [
              "en"
            ]
          },
          "BD": {
            "name": "Bangladesh",
            "native": "Bangladesh",
            "phone": "880",
            "continent": "AS",
            "capital": "Dhaka",
            "currency": "BDT",
            "languages": [
              "bn"
            ]
          },
          "BE": {
            "name": "Belgium",
            "native": "België",
            "phone": "32",
            "continent": "EU",
            "capital": "Brussels",
            "currency": "EUR",
            "languages": [
              "nl",
              "fr",
              "de"
            ]
          },
          "BF": {
            "name": "Burkina Faso",
            "native": "Burkina Faso",
            "phone": "226",
            "continent": "AF",
            "capital": "Ouagadougou",
            "currency": "XOF",
            "languages": [
              "fr",
              "ff"
            ]
          },
          "BG": {
            "name": "Bulgaria",
            "native": "България",
            "phone": "359",
            "continent": "EU",
            "capital": "Sofia",
            "currency": "BGN",
            "languages": [
              "bg"
            ]
          },
          "BH": {
            "name": "Bahrain",
            "native": "‏البحرين",
            "phone": "973",
            "continent": "AS",
            "capital": "Manama",
            "currency": "BHD",
            "languages": [
              "ar"
            ]
          },
          "BI": {
            "name": "Burundi",
            "native": "Burundi",
            "phone": "257",
            "continent": "AF",
            "capital": "Bujumbura",
            "currency": "BIF",
            "languages": [
              "fr",
              "rn"
            ]
          },
          "BJ": {
            "name": "Benin",
            "native": "Bénin",
            "phone": "229",
            "continent": "AF",
            "capital": "Porto-Novo",
            "currency": "XOF",
            "languages": [
              "fr"
            ]
          },
          "BL": {
            "name": "Saint Barthélemy",
            "native": "Saint-Barthélemy",
            "phone": "590",
            "continent": "NA",
            "capital": "Gustavia",
            "currency": "EUR",
            "languages": [
              "fr"
            ]
          },
          "BM": {
            "name": "Bermuda",
            "native": "Bermuda",
            "phone": "1441",
            "continent": "NA",
            "capital": "Hamilton",
            "currency": "BMD",
            "languages": [
              "en"
            ]
          },
          "BN": {
            "name": "Brunei",
            "native": "Negara Brunei Darussalam",
            "phone": "673",
            "continent": "AS",
            "capital": "Bandar Seri Begawan",
            "currency": "BND",
            "languages": [
              "ms"
            ]
          },
          "BO": {
            "name": "Bolivia",
            "native": "Bolivia",
            "phone": "591",
            "continent": "SA",
            "capital": "Sucre",
            "currency": "BOB,BOV",
            "languages": [
              "es",
              "ay",
              "qu"
            ]
          },
          "BQ": {
            "name": "Bonaire",
            "native": "Bonaire",
            "phone": "5997",
            "continent": "NA",
            "capital": "Kralendijk",
            "currency": "USD",
            "languages": [
              "nl"
            ]
          },
          "BR": {
            "name": "Brazil",
            "native": "Brasil",
            "phone": "55",
            "continent": "SA",
            "capital": "Brasília",
            "currency": "BRL",
            "languages": [
              "pt"
            ]
          },
          "BS": {
            "name": "Bahamas",
            "native": "Bahamas",
            "phone": "1242",
            "continent": "NA",
            "capital": "Nassau",
            "currency": "BSD",
            "languages": [
              "en"
            ]
          },
          "BT": {
            "name": "Bhutan",
            "native": "ʼbrug-yul",
            "phone": "975",
            "continent": "AS",
            "capital": "Thimphu",
            "currency": "BTN,INR",
            "languages": [
              "dz"
            ]
          },
          "BV": {
            "name": "Bouvet Island",
            "native": "Bouvetøya",
            "phone": "47",
            "continent": "AN",
            "capital": "",
            "currency": "NOK",
            "languages": [
              "no",
              "nb",
              "nn"
            ]
          },
          "BW": {
            "name": "Botswana",
            "native": "Botswana",
            "phone": "267",
            "continent": "AF",
            "capital": "Gaborone",
            "currency": "BWP",
            "languages": [
              "en",
              "tn"
            ]
          },
          "BY": {
            "name": "Belarus",
            "native": "Белару́сь",
            "phone": "375",
            "continent": "EU",
            "capital": "Minsk",
            "currency": "BYN",
            "languages": [
              "be",
              "ru"
            ]
          },
          "BZ": {
            "name": "Belize",
            "native": "Belize",
            "phone": "501",
            "continent": "NA",
            "capital": "Belmopan",
            "currency": "BZD",
            "languages": [
              "en",
              "es"
            ]
          },
          "CA": {
            "name": "Canada",
            "native": "Canada",
            "phone": "1",
            "continent": "NA",
            "capital": "Ottawa",
            "currency": "CAD",
            "languages": [
              "en",
              "fr"
            ]
          },
          "CC": {
            "name": "Cocos [Keeling] Islands",
            "native": "Cocos (Keeling) Islands",
            "phone": "61",
            "continent": "AS",
            "capital": "West Island",
            "currency": "AUD",
            "languages": [
              "en"
            ]
          },
          "CD": {
            "name": "Democratic Republic of the Congo",
            "native": "République démocratique du Congo",
            "phone": "243",
            "continent": "AF",
            "capital": "Kinshasa",
            "currency": "CDF",
            "languages": [
              "fr",
              "ln",
              "kg",
              "sw",
              "lu"
            ]
          },
          "CF": {
            "name": "Central African Republic",
            "native": "Ködörösêse tî Bêafrîka",
            "phone": "236",
            "continent": "AF",
            "capital": "Bangui",
            "currency": "XAF",
            "languages": [
              "fr",
              "sg"
            ]
          },
          "CG": {
            "name": "Republic of the Congo",
            "native": "République du Congo",
            "phone": "242",
            "continent": "AF",
            "capital": "Brazzaville",
            "currency": "XAF",
            "languages": [
              "fr",
              "ln"
            ]
          },
          "CH": {
            "name": "Switzerland",
            "native": "Schweiz",
            "phone": "41",
            "continent": "EU",
            "capital": "Bern",
            "currency": "CHE,CHF,CHW",
            "languages": [
              "de",
              "fr",
              "it"
            ]
          },
          "CI": {
            "name": "Ivory Coast",
            "native": "Côte d'Ivoire",
            "phone": "225",
            "continent": "AF",
            "capital": "Yamoussoukro",
            "currency": "XOF",
            "languages": [
              "fr"
            ]
          },
          "CK": {
            "name": "Cook Islands",
            "native": "Cook Islands",
            "phone": "682",
            "continent": "OC",
            "capital": "Avarua",
            "currency": "NZD",
            "languages": [
              "en"
            ]
          },
          "CL": {
            "name": "Chile",
            "native": "Chile",
            "phone": "56",
            "continent": "SA",
            "capital": "Santiago",
            "currency": "CLF,CLP",
            "languages": [
              "es"
            ]
          },
          "CM": {
            "name": "Cameroon",
            "native": "Cameroon",
            "phone": "237",
            "continent": "AF",
            "capital": "Yaoundé",
            "currency": "XAF",
            "languages": [
              "en",
              "fr"
            ]
          },
          "CN": {
            "name": "China",
            "native": "中国",
            "phone": "86",
            "continent": "AS",
            "capital": "Beijing",
            "currency": "CNY",
            "languages": [
              "zh"
            ]
          },
          "CO": {
            "name": "Colombia",
            "native": "Colombia",
            "phone": "57",
            "continent": "SA",
            "capital": "Bogotá",
            "currency": "COP",
            "languages": [
              "es"
            ]
          },
          "CR": {
            "name": "Costa Rica",
            "native": "Costa Rica",
            "phone": "506",
            "continent": "NA",
            "capital": "San José",
            "currency": "CRC",
            "languages": [
              "es"
            ]
          },
          "CU": {
            "name": "Cuba",
            "native": "Cuba",
            "phone": "53",
            "continent": "NA",
            "capital": "Havana",
            "currency": "CUC,CUP",
            "languages": [
              "es"
            ]
          },
          "CV": {
            "name": "Cape Verde",
            "native": "Cabo Verde",
            "phone": "238",
            "continent": "AF",
            "capital": "Praia",
            "currency": "CVE",
            "languages": [
              "pt"
            ]
          },
          "CW": {
            "name": "Curacao",
            "native": "Curaçao",
            "phone": "5999",
            "continent": "NA",
            "capital": "Willemstad",
            "currency": "ANG",
            "languages": [
              "nl",
              "pa",
              "en"
            ]
          },
          "CX": {
            "name": "Christmas Island",
            "native": "Christmas Island",
            "phone": "61",
            "continent": "AS",
            "capital": "Flying Fish Cove",
            "currency": "AUD",
            "languages": [
              "en"
            ]
          },
          "CY": {
            "name": "Cyprus",
            "native": "Κύπρος",
            "phone": "357",
            "continent": "EU",
            "capital": "Nicosia",
            "currency": "EUR",
            "languages": [
              "el",
              "tr",
              "hy"
            ]
          },
          "CZ": {
            "name": "Czech Republic",
            "native": "Česká republika",
            "phone": "420",
            "continent": "EU",
            "capital": "Prague",
            "currency": "CZK",
            "languages": [
              "cs",
              "sk"
            ]
          },
          "DE": {
            "name": "Germany",
            "native": "Deutschland",
            "phone": "49",
            "continent": "EU",
            "capital": "Berlin",
            "currency": "EUR",
            "languages": [
              "de"
            ]
          },
          "DJ": {
            "name": "Djibouti",
            "native": "Djibouti",
            "phone": "253",
            "continent": "AF",
            "capital": "Djibouti",
            "currency": "DJF",
            "languages": [
              "fr",
              "ar"
            ]
          },
          "DK": {
            "name": "Denmark",
            "native": "Danmark",
            "phone": "45",
            "continent": "EU",
            "capital": "Copenhagen",
            "currency": "DKK",
            "languages": [
              "da"
            ]
          },
          "DM": {
            "name": "Dominica",
            "native": "Dominica",
            "phone": "1767",
            "continent": "NA",
            "capital": "Roseau",
            "currency": "XCD",
            "languages": [
              "en"
            ]
          },
          "DO": {
            "name": "Dominican Republic",
            "native": "República Dominicana",
            "phone": "1809,1829,1849",
            "continent": "NA",
            "capital": "Santo Domingo",
            "currency": "DOP",
            "languages": [
              "es"
            ]
          },
          "DZ": {
            "name": "Algeria",
            "native": "الجزائر",
            "phone": "213",
            "continent": "AF",
            "capital": "Algiers",
            "currency": "DZD",
            "languages": [
              "ar"
            ]
          },
          "EC": {
            "name": "Ecuador",
            "native": "Ecuador",
            "phone": "593",
            "continent": "SA",
            "capital": "Quito",
            "currency": "USD",
            "languages": [
              "es"
            ]
          },
          "EE": {
            "name": "Estonia",
            "native": "Eesti",
            "phone": "372",
            "continent": "EU",
            "capital": "Tallinn",
            "currency": "EUR",
            "languages": [
              "et"
            ]
          },
          "EG": {
            "name": "Egypt",
            "native": "مصر‎",
            "phone": "20",
            "continent": "AF",
            "capital": "Cairo",
            "currency": "EGP",
            "languages": [
              "ar"
            ]
          },
          "EH": {
            "name": "Western Sahara",
            "native": "الصحراء الغربية",
            "phone": "212",
            "continent": "AF",
            "capital": "El Aaiún",
            "currency": "MAD,DZD,MRU",
            "languages": [
              "es"
            ]
          },
          "ER": {
            "name": "Eritrea",
            "native": "ኤርትራ",
            "phone": "291",
            "continent": "AF",
            "capital": "Asmara",
            "currency": "ERN",
            "languages": [
              "ti",
              "ar",
              "en"
            ]
          },
          "ES": {
            "name": "Spain",
            "native": "España",
            "phone": "34",
            "continent": "EU",
            "capital": "Madrid",
            "currency": "EUR",
            "languages": [
              "es",
              "eu",
              "ca",
              "gl",
              "oc"
            ]
          },
          "ET": {
            "name": "Ethiopia",
            "native": "ኢትዮጵያ",
            "phone": "251",
            "continent": "AF",
            "capital": "Addis Ababa",
            "currency": "ETB",
            "languages": [
              "am"
            ]
          },
          "FI": {
            "name": "Finland",
            "native": "Suomi",
            "phone": "358",
            "continent": "EU",
            "capital": "Helsinki",
            "currency": "EUR",
            "languages": [
              "fi",
              "sv"
            ]
          },
          "FJ": {
            "name": "Fiji",
            "native": "Fiji",
            "phone": "679",
            "continent": "OC",
            "capital": "Suva",
            "currency": "FJD",
            "languages": [
              "en",
              "fj",
              "hi",
              "ur"
            ]
          },
          "FK": {
            "name": "Falkland Islands",
            "native": "Falkland Islands",
            "phone": "500",
            "continent": "SA",
            "capital": "Stanley",
            "currency": "FKP",
            "languages": [
              "en"
            ]
          },
          "FM": {
            "name": "Micronesia",
            "native": "Micronesia",
            "phone": "691",
            "continent": "OC",
            "capital": "Palikir",
            "currency": "USD",
            "languages": [
              "en"
            ]
          },
          "FO": {
            "name": "Faroe Islands",
            "native": "Føroyar",
            "phone": "298",
            "continent": "EU",
            "capital": "Tórshavn",
            "currency": "DKK",
            "languages": [
              "fo"
            ]
          },
          "FR": {
            "name": "France",
            "native": "France",
            "phone": "33",
            "continent": "EU",
            "capital": "Paris",
            "currency": "EUR",
            "languages": [
              "fr"
            ]
          },
          "GA": {
            "name": "Gabon",
            "native": "Gabon",
            "phone": "241",
            "continent": "AF",
            "capital": "Libreville",
            "currency": "XAF",
            "languages": [
              "fr"
            ]
          },
          "GB": {
            "name": "United Kingdom",
            "native": "United Kingdom",
            "phone": "44",
            "continent": "EU",
            "capital": "London",
            "currency": "GBP",
            "languages": [
              "en"
            ]
          },
          "GD": {
            "name": "Grenada",
            "native": "Grenada",
            "phone": "1473",
            "continent": "NA",
            "capital": "St. George's",
            "currency": "XCD",
            "languages": [
              "en"
            ]
          },
          "GE": {
            "name": "Georgia",
            "native": "საქართველო",
            "phone": "995",
            "continent": "AS",
            "capital": "Tbilisi",
            "currency": "GEL",
            "languages": [
              "ka"
            ]
          },
          "GF": {
            "name": "French Guiana",
            "native": "Guyane française",
            "phone": "594",
            "continent": "SA",
            "capital": "Cayenne",
            "currency": "EUR",
            "languages": [
              "fr"
            ]
          },
          "GG": {
            "name": "Guernsey",
            "native": "Guernsey",
            "phone": "44",
            "continent": "EU",
            "capital": "St. Peter Port",
            "currency": "GBP",
            "languages": [
              "en",
              "fr"
            ]
          },
          "GH": {
            "name": "Ghana",
            "native": "Ghana",
            "phone": "233",
            "continent": "AF",
            "capital": "Accra",
            "currency": "GHS",
            "languages": [
              "en"
            ]
          },
          "GI": {
            "name": "Gibraltar",
            "native": "Gibraltar",
            "phone": "350",
            "continent": "EU",
            "capital": "Gibraltar",
            "currency": "GIP",
            "languages": [
              "en"
            ]
          },
          "GL": {
            "name": "Greenland",
            "native": "Kalaallit Nunaat",
            "phone": "299",
            "continent": "NA",
            "capital": "Nuuk",
            "currency": "DKK",
            "languages": [
              "kl"
            ]
          },
          "GM": {
            "name": "Gambia",
            "native": "Gambia",
            "phone": "220",
            "continent": "AF",
            "capital": "Banjul",
            "currency": "GMD",
            "languages": [
              "en"
            ]
          },
          "GN": {
            "name": "Guinea",
            "native": "Guinée",
            "phone": "224",
            "continent": "AF",
            "capital": "Conakry",
            "currency": "GNF",
            "languages": [
              "fr",
              "ff"
            ]
          },
          "GP": {
            "name": "Guadeloupe",
            "native": "Guadeloupe",
            "phone": "590",
            "continent": "NA",
            "capital": "Basse-Terre",
            "currency": "EUR",
            "languages": [
              "fr"
            ]
          },
          "GQ": {
            "name": "Equatorial Guinea",
            "native": "Guinea Ecuatorial",
            "phone": "240",
            "continent": "AF",
            "capital": "Malabo",
            "currency": "XAF",
            "languages": [
              "es",
              "fr"
            ]
          },
          "GR": {
            "name": "Greece",
            "native": "Ελλάδα",
            "phone": "30",
            "continent": "EU",
            "capital": "Athens",
            "currency": "EUR",
            "languages": [
              "el"
            ]
          },
          "GS": {
            "name": "South Georgia and the South Sandwich Islands",
            "native": "South Georgia",
            "phone": "500",
            "continent": "AN",
            "capital": "King Edward Point",
            "currency": "GBP",
            "languages": [
              "en"
            ]
          },
          "GT": {
            "name": "Guatemala",
            "native": "Guatemala",
            "phone": "502",
            "continent": "NA",
            "capital": "Guatemala City",
            "currency": "GTQ",
            "languages": [
              "es"
            ]
          },
          "GU": {
            "name": "Guam",
            "native": "Guam",
            "phone": "1671",
            "continent": "OC",
            "capital": "Hagåtña",
            "currency": "USD",
            "languages": [
              "en",
              "ch",
              "es"
            ]
          },
          "GW": {
            "name": "Guinea-Bissau",
            "native": "Guiné-Bissau",
            "phone": "245",
            "continent": "AF",
            "capital": "Bissau",
            "currency": "XOF",
            "languages": [
              "pt"
            ]
          },
          "GY": {
            "name": "Guyana",
            "native": "Guyana",
            "phone": "592",
            "continent": "SA",
            "capital": "Georgetown",
            "currency": "GYD",
            "languages": [
              "en"
            ]
          },
          "HK": {
            "name": "Hong Kong",
            "native": "香港",
            "phone": "852",
            "continent": "AS",
            "capital": "City of Victoria",
            "currency": "HKD",
            "languages": [
              "zh",
              "en"
            ]
          },
          "HM": {
            "name": "Heard Island and McDonald Islands",
            "native": "Heard Island and McDonald Islands",
            "phone": "61",
            "continent": "AN",
            "capital": "",
            "currency": "AUD",
            "languages": [
              "en"
            ]
          },
          "HN": {
            "name": "Honduras",
            "native": "Honduras",
            "phone": "504",
            "continent": "NA",
            "capital": "Tegucigalpa",
            "currency": "HNL",
            "languages": [
              "es"
            ]
          },
          "HR": {
            "name": "Croatia",
            "native": "Hrvatska",
            "phone": "385",
            "continent": "EU",
            "capital": "Zagreb",
            "currency": "HRK",
            "languages": [
              "hr"
            ]
          },
          "HT": {
            "name": "Haiti",
            "native": "Haïti",
            "phone": "509",
            "continent": "NA",
            "capital": "Port-au-Prince",
            "currency": "HTG,USD",
            "languages": [
              "fr",
              "ht"
            ]
          },
          "HU": {
            "name": "Hungary",
            "native": "Magyarország",
            "phone": "36",
            "continent": "EU",
            "capital": "Budapest",
            "currency": "HUF",
            "languages": [
              "hu"
            ]
          },
          "ID": {
            "name": "Indonesia",
            "native": "Indonesia",
            "phone": "62",
            "continent": "AS",
            "capital": "Jakarta",
            "currency": "IDR",
            "languages": [
              "id"
            ]
          },
          "IE": {
            "name": "Ireland",
            "native": "Éire",
            "phone": "353",
            "continent": "EU",
            "capital": "Dublin",
            "currency": "EUR",
            "languages": [
              "ga",
              "en"
            ]
          },
          "IL": {
            "name": "Israel",
            "native": "יִשְׂרָאֵל",
            "phone": "972",
            "continent": "AS",
            "capital": "Jerusalem",
            "currency": "ILS",
            "languages": [
              "he",
              "ar"
            ]
          },
          "IM": {
            "name": "Isle of Man",
            "native": "Isle of Man",
            "phone": "44",
            "continent": "EU",
            "capital": "Douglas",
            "currency": "GBP",
            "languages": [
              "en",
              "gv"
            ]
          },
          "IN": {
            "name": "India",
            "native": "भारत",
            "phone": "91",
            "continent": "AS",
            "capital": "New Delhi",
            "currency": "INR",
            "languages": [
              "hi",
              "en"
            ]
          },
          "IO": {
            "name": "British Indian Ocean Territory",
            "native": "British Indian Ocean Territory",
            "phone": "246",
            "continent": "AS",
            "capital": "Diego Garcia",
            "currency": "USD",
            "languages": [
              "en"
            ]
          },
          "IQ": {
            "name": "Iraq",
            "native": "العراق",
            "phone": "964",
            "continent": "AS",
            "capital": "Baghdad",
            "currency": "IQD",
            "languages": [
              "ar",
              "ku"
            ]
          },
          "IR": {
            "name": "Iran",
            "native": "ایران",
            "phone": "98",
            "continent": "AS",
            "capital": "Tehran",
            "currency": "IRR",
            "languages": [
              "fa"
            ]
          },
          "IS": {
            "name": "Iceland",
            "native": "Ísland",
            "phone": "354",
            "continent": "EU",
            "capital": "Reykjavik",
            "currency": "ISK",
            "languages": [
              "is"
            ]
          },
          "IT": {
            "name": "Italy",
            "native": "Italia",
            "phone": "39",
            "continent": "EU",
            "capital": "Rome",
            "currency": "EUR",
            "languages": [
              "it"
            ]
          },
          "JE": {
            "name": "Jersey",
            "native": "Jersey",
            "phone": "44",
            "continent": "EU",
            "capital": "Saint Helier",
            "currency": "GBP",
            "languages": [
              "en",
              "fr"
            ]
          },
          "JM": {
            "name": "Jamaica",
            "native": "Jamaica",
            "phone": "1876",
            "continent": "NA",
            "capital": "Kingston",
            "currency": "JMD",
            "languages": [
              "en"
            ]
          },
          "JO": {
            "name": "Jordan",
            "native": "الأردن",
            "phone": "962",
            "continent": "AS",
            "capital": "Amman",
            "currency": "JOD",
            "languages": [
              "ar"
            ]
          },
          "JP": {
            "name": "Japan",
            "native": "日本",
            "phone": "81",
            "continent": "AS",
            "capital": "Tokyo",
            "currency": "JPY",
            "languages": [
              "ja"
            ]
          },
          "KE": {
            "name": "Kenya",
            "native": "Kenya",
            "phone": "254",
            "continent": "AF",
            "capital": "Nairobi",
            "currency": "KES",
            "languages": [
              "en",
              "sw"
            ]
          },
          "KG": {
            "name": "Kyrgyzstan",
            "native": "Кыргызстан",
            "phone": "996",
            "continent": "AS",
            "capital": "Bishkek",
            "currency": "KGS",
            "languages": [
              "ky",
              "ru"
            ]
          },
          "KH": {
            "name": "Cambodia",
            "native": "Kâmpŭchéa",
            "phone": "855",
            "continent": "AS",
            "capital": "Phnom Penh",
            "currency": "KHR",
            "languages": [
              "km"
            ]
          },
          "KI": {
            "name": "Kiribati",
            "native": "Kiribati",
            "phone": "686",
            "continent": "OC",
            "capital": "South Tarawa",
            "currency": "AUD",
            "languages": [
              "en"
            ]
          },
          "KM": {
            "name": "Comoros",
            "native": "Komori",
            "phone": "269",
            "continent": "AF",
            "capital": "Moroni",
            "currency": "KMF",
            "languages": [
              "ar",
              "fr"
            ]
          },
          "KN": {
            "name": "Saint Kitts and Nevis",
            "native": "Saint Kitts and Nevis",
            "phone": "1869",
            "continent": "NA",
            "capital": "Basseterre",
            "currency": "XCD",
            "languages": [
              "en"
            ]
          },
          "KP": {
            "name": "North Korea",
            "native": "북한",
            "phone": "850",
            "continent": "AS",
            "capital": "Pyongyang",
            "currency": "KPW",
            "languages": [
              "ko"
            ]
          },
          "KR": {
            "name": "South Korea",
            "native": "대한민국",
            "phone": "82",
            "continent": "AS",
            "capital": "Seoul",
            "currency": "KRW",
            "languages": [
              "ko"
            ]
          },
          "KW": {
            "name": "Kuwait",
            "native": "الكويت",
            "phone": "965",
            "continent": "AS",
            "capital": "Kuwait City",
            "currency": "KWD",
            "languages": [
              "ar"
            ]
          },
          "KY": {
            "name": "Cayman Islands",
            "native": "Cayman Islands",
            "phone": "1345",
            "continent": "NA",
            "capital": "George Town",
            "currency": "KYD",
            "languages": [
              "en"
            ]
          },
          "KZ": {
            "name": "Kazakhstan",
            "native": "Қазақстан",
            "phone": "76,77",
            "continent": "AS",
            "capital": "Astana",
            "currency": "KZT",
            "languages": [
              "kk",
              "ru"
            ]
          },
          "LA": {
            "name": "Laos",
            "native": "ສປປລາວ",
            "phone": "856",
            "continent": "AS",
            "capital": "Vientiane",
            "currency": "LAK",
            "languages": [
              "lo"
            ]
          },
          "LB": {
            "name": "Lebanon",
            "native": "لبنان",
            "phone": "961",
            "continent": "AS",
            "capital": "Beirut",
            "currency": "LBP",
            "languages": [
              "ar",
              "fr"
            ]
          },
          "LC": {
            "name": "Saint Lucia",
            "native": "Saint Lucia",
            "phone": "1758",
            "continent": "NA",
            "capital": "Castries",
            "currency": "XCD",
            "languages": [
              "en"
            ]
          },
          "LI": {
            "name": "Liechtenstein",
            "native": "Liechtenstein",
            "phone": "423",
            "continent": "EU",
            "capital": "Vaduz",
            "currency": "CHF",
            "languages": [
              "de"
            ]
          },
          "LK": {
            "name": "Sri Lanka",
            "native": "śrī laṃkāva",
            "phone": "94",
            "continent": "AS",
            "capital": "Colombo",
            "currency": "LKR",
            "languages": [
              "si",
              "ta"
            ]
          },
          "LR": {
            "name": "Liberia",
            "native": "Liberia",
            "phone": "231",
            "continent": "AF",
            "capital": "Monrovia",
            "currency": "LRD",
            "languages": [
              "en"
            ]
          },
          "LS": {
            "name": "Lesotho",
            "native": "Lesotho",
            "phone": "266",
            "continent": "AF",
            "capital": "Maseru",
            "currency": "LSL,ZAR",
            "languages": [
              "en",
              "st"
            ]
          },
          "LT": {
            "name": "Lithuania",
            "native": "Lietuva",
            "phone": "370",
            "continent": "EU",
            "capital": "Vilnius",
            "currency": "EUR",
            "languages": [
              "lt"
            ]
          },
          "LU": {
            "name": "Luxembourg",
            "native": "Luxembourg",
            "phone": "352",
            "continent": "EU",
            "capital": "Luxembourg",
            "currency": "EUR",
            "languages": [
              "fr",
              "de",
              "lb"
            ]
          },
          "LV": {
            "name": "Latvia",
            "native": "Latvija",
            "phone": "371",
            "continent": "EU",
            "capital": "Riga",
            "currency": "EUR",
            "languages": [
              "lv"
            ]
          },
          "LY": {
            "name": "Libya",
            "native": "‏ليبيا",
            "phone": "218",
            "continent": "AF",
            "capital": "Tripoli",
            "currency": "LYD",
            "languages": [
              "ar"
            ]
          },
          "MA": {
            "name": "Morocco",
            "native": "المغرب",
            "phone": "212",
            "continent": "AF",
            "capital": "Rabat",
            "currency": "MAD",
            "languages": [
              "ar"
            ]
          },
          "MC": {
            "name": "Monaco",
            "native": "Monaco",
            "phone": "377",
            "continent": "EU",
            "capital": "Monaco",
            "currency": "EUR",
            "languages": [
              "fr"
            ]
          },
          "MD": {
            "name": "Moldova",
            "native": "Moldova",
            "phone": "373",
            "continent": "EU",
            "capital": "Chișinău",
            "currency": "MDL",
            "languages": [
              "ro"
            ]
          },
          "ME": {
            "name": "Montenegro",
            "native": "Црна Гора",
            "phone": "382",
            "continent": "EU",
            "capital": "Podgorica",
            "currency": "EUR",
            "languages": [
              "sr",
              "bs",
              "sq",
              "hr"
            ]
          },
          "MF": {
            "name": "Saint Martin",
            "native": "Saint-Martin",
            "phone": "590",
            "continent": "NA",
            "capital": "Marigot",
            "currency": "EUR",
            "languages": [
              "en",
              "fr",
              "nl"
            ]
          },
          "MG": {
            "name": "Madagascar",
            "native": "Madagasikara",
            "phone": "261",
            "continent": "AF",
            "capital": "Antananarivo",
            "currency": "MGA",
            "languages": [
              "fr",
              "mg"
            ]
          },
          "MH": {
            "name": "Marshall Islands",
            "native": "M̧ajeļ",
            "phone": "692",
            "continent": "OC",
            "capital": "Majuro",
            "currency": "USD",
            "languages": [
              "en",
              "mh"
            ]
          },
          "MK": {
            "name": "North Macedonia",
            "native": "Северна Македонија",
            "phone": "389",
            "continent": "EU",
            "capital": "Skopje",
            "currency": "MKD",
            "languages": [
              "mk"
            ]
          },
          "ML": {
            "name": "Mali",
            "native": "Mali",
            "phone": "223",
            "continent": "AF",
            "capital": "Bamako",
            "currency": "XOF",
            "languages": [
              "fr"
            ]
          },
          "MM": {
            "name": "Myanmar [Burma]",
            "native": "မြန်မာ",
            "phone": "95",
            "continent": "AS",
            "capital": "Naypyidaw",
            "currency": "MMK",
            "languages": [
              "my"
            ]
          },
          "MN": {
            "name": "Mongolia",
            "native": "Монгол улс",
            "phone": "976",
            "continent": "AS",
            "capital": "Ulan Bator",
            "currency": "MNT",
            "languages": [
              "mn"
            ]
          },
          "MO": {
            "name": "Macao",
            "native": "澳門",
            "phone": "853",
            "continent": "AS",
            "capital": "",
            "currency": "MOP",
            "languages": [
              "zh",
              "pt"
            ]
          },
          "MP": {
            "name": "Northern Mariana Islands",
            "native": "Northern Mariana Islands",
            "phone": "1670",
            "continent": "OC",
            "capital": "Saipan",
            "currency": "USD",
            "languages": [
              "en",
              "ch"
            ]
          },
          "MQ": {
            "name": "Martinique",
            "native": "Martinique",
            "phone": "596",
            "continent": "NA",
            "capital": "Fort-de-France",
            "currency": "EUR",
            "languages": [
              "fr"
            ]
          },
          "MR": {
            "name": "Mauritania",
            "native": "موريتانيا",
            "phone": "222",
            "continent": "AF",
            "capital": "Nouakchott",
            "currency": "MRU",
            "languages": [
              "ar"
            ]
          },
          "MS": {
            "name": "Montserrat",
            "native": "Montserrat",
            "phone": "1664",
            "continent": "NA",
            "capital": "Plymouth",
            "currency": "XCD",
            "languages": [
              "en"
            ]
          },
          "MT": {
            "name": "Malta",
            "native": "Malta",
            "phone": "356",
            "continent": "EU",
            "capital": "Valletta",
            "currency": "EUR",
            "languages": [
              "mt",
              "en"
            ]
          },
          "MU": {
            "name": "Mauritius",
            "native": "Maurice",
            "phone": "230",
            "continent": "AF",
            "capital": "Port Louis",
            "currency": "MUR",
            "languages": [
              "en"
            ]
          },
          "MV": {
            "name": "Maldives",
            "native": "Maldives",
            "phone": "960",
            "continent": "AS",
            "capital": "Malé",
            "currency": "MVR",
            "languages": [
              "dv"
            ]
          },
          "MW": {
            "name": "Malawi",
            "native": "Malawi",
            "phone": "265",
            "continent": "AF",
            "capital": "Lilongwe",
            "currency": "MWK",
            "languages": [
              "en",
              "ny"
            ]
          },
          "MX": {
            "name": "Mexico",
            "native": "México",
            "phone": "52",
            "continent": "NA",
            "capital": "Mexico City",
            "currency": "MXN",
            "languages": [
              "es"
            ]
          },
          "MY": {
            "name": "Malaysia",
            "native": "Malaysia",
            "phone": "60",
            "continent": "AS",
            "capital": "Kuala Lumpur",
            "currency": "MYR",
            "languages": [
              "ms"
            ]
          },
          "MZ": {
            "name": "Mozambique",
            "native": "Moçambique",
            "phone": "258",
            "continent": "AF",
            "capital": "Maputo",
            "currency": "MZN",
            "languages": [
              "pt"
            ]
          },
          "NA": {
            "name": "Namibia",
            "native": "Namibia",
            "phone": "264",
            "continent": "AF",
            "capital": "Windhoek",
            "currency": "NAD,ZAR",
            "languages": [
              "en",
              "af"
            ]
          },
          "NC": {
            "name": "New Caledonia",
            "native": "Nouvelle-Calédonie",
            "phone": "687",
            "continent": "OC",
            "capital": "Nouméa",
            "currency": "XPF",
            "languages": [
              "fr"
            ]
          },
          "NE": {
            "name": "Niger",
            "native": "Niger",
            "phone": "227",
            "continent": "AF",
            "capital": "Niamey",
            "currency": "XOF",
            "languages": [
              "fr"
            ]
          },
          "NF": {
            "name": "Norfolk Island",
            "native": "Norfolk Island",
            "phone": "672",
            "continent": "OC",
            "capital": "Kingston",
            "currency": "AUD",
            "languages": [
              "en"
            ]
          },
          "NG": {
            "name": "Nigeria",
            "native": "Nigeria",
            "phone": "234",
            "continent": "AF",
            "capital": "Abuja",
            "currency": "NGN",
            "languages": [
              "en"
            ]
          },
          "NI": {
            "name": "Nicaragua",
            "native": "Nicaragua",
            "phone": "505",
            "continent": "NA",
            "capital": "Managua",
            "currency": "NIO",
            "languages": [
              "es"
            ]
          },
          "NL": {
            "name": "Netherlands",
            "native": "Nederland",
            "phone": "31",
            "continent": "EU",
            "capital": "Amsterdam",
            "currency": "EUR",
            "languages": [
              "nl"
            ]
          },
          "NO": {
            "name": "Norway",
            "native": "Norge",
            "phone": "47",
            "continent": "EU",
            "capital": "Oslo",
            "currency": "NOK",
            "languages": [
              "no",
              "nb",
              "nn"
            ]
          },
          "NP": {
            "name": "Nepal",
            "native": "नपल",
            "phone": "977",
            "continent": "AS",
            "capital": "Kathmandu",
            "currency": "NPR",
            "languages": [
              "ne"
            ]
          },
          "NR": {
            "name": "Nauru",
            "native": "Nauru",
            "phone": "674",
            "continent": "OC",
            "capital": "Yaren",
            "currency": "AUD",
            "languages": [
              "en",
              "na"
            ]
          },
          "NU": {
            "name": "Niue",
            "native": "Niuē",
            "phone": "683",
            "continent": "OC",
            "capital": "Alofi",
            "currency": "NZD",
            "languages": [
              "en"
            ]
          },
          "NZ": {
            "name": "New Zealand",
            "native": "New Zealand",
            "phone": "64",
            "continent": "OC",
            "capital": "Wellington",
            "currency": "NZD",
            "languages": [
              "en",
              "mi"
            ]
          },
          "OM": {
            "name": "Oman",
            "native": "عمان",
            "phone": "968",
            "continent": "AS",
            "capital": "Muscat",
            "currency": "OMR",
            "languages": [
              "ar"
            ]
          },
          "PA": {
            "name": "Panama",
            "native": "Panamá",
            "phone": "507",
            "continent": "NA",
            "capital": "Panama City",
            "currency": "PAB,USD",
            "languages": [
              "es"
            ]
          },
          "PE": {
            "name": "Peru",
            "native": "Perú",
            "phone": "51",
            "continent": "SA",
            "capital": "Lima",
            "currency": "PEN",
            "languages": [
              "es"
            ]
          },
          "PF": {
            "name": "French Polynesia",
            "native": "Polynésie française",
            "phone": "689",
            "continent": "OC",
            "capital": "Papeetē",
            "currency": "XPF",
            "languages": [
              "fr"
            ]
          },
          "PG": {
            "name": "Papua New Guinea",
            "native": "Papua Niugini",
            "phone": "675",
            "continent": "OC",
            "capital": "Port Moresby",
            "currency": "PGK",
            "languages": [
              "en"
            ]
          },
          "PH": {
            "name": "Philippines",
            "native": "Pilipinas",
            "phone": "63",
            "continent": "AS",
            "capital": "Manila",
            "currency": "PHP",
            "languages": [
              "en"
            ]
          },
          "PK": {
            "name": "Pakistan",
            "native": "Pakistan",
            "phone": "92",
            "continent": "AS",
            "capital": "Islamabad",
            "currency": "PKR",
            "languages": [
              "en",
              "ur"
            ]
          },
          "PL": {
            "name": "Poland",
            "native": "Polska",
            "phone": "48",
            "continent": "EU",
            "capital": "Warsaw",
            "currency": "PLN",
            "languages": [
              "pl"
            ]
          },
          "PM": {
            "name": "Saint Pierre and Miquelon",
            "native": "Saint-Pierre-et-Miquelon",
            "phone": "508",
            "continent": "NA",
            "capital": "Saint-Pierre",
            "currency": "EUR",
            "languages": [
              "fr"
            ]
          },
          "PN": {
            "name": "Pitcairn Islands",
            "native": "Pitcairn Islands",
            "phone": "64",
            "continent": "OC",
            "capital": "Adamstown",
            "currency": "NZD",
            "languages": [
              "en"
            ]
          },
          "PR": {
            "name": "Puerto Rico",
            "native": "Puerto Rico",
            "phone": "1787,1939",
            "continent": "NA",
            "capital": "San Juan",
            "currency": "USD",
            "languages": [
              "es",
              "en"
            ]
          },
          "PS": {
            "name": "Palestine",
            "native": "فلسطين",
            "phone": "970",
            "continent": "AS",
            "capital": "Ramallah",
            "currency": "ILS",
            "languages": [
              "ar"
            ]
          },
          "PT": {
            "name": "Portugal",
            "native": "Portugal",
            "phone": "351",
            "continent": "EU",
            "capital": "Lisbon",
            "currency": "EUR",
            "languages": [
              "pt"
            ]
          },
          "PW": {
            "name": "Palau",
            "native": "Palau",
            "phone": "680",
            "continent": "OC",
            "capital": "Ngerulmud",
            "currency": "USD",
            "languages": [
              "en"
            ]
          },
          "PY": {
            "name": "Paraguay",
            "native": "Paraguay",
            "phone": "595",
            "continent": "SA",
            "capital": "Asunción",
            "currency": "PYG",
            "languages": [
              "es",
              "gn"
            ]
          },
          "QA": {
            "name": "Qatar",
            "native": "قطر",
            "phone": "974",
            "continent": "AS",
            "capital": "Doha",
            "currency": "QAR",
            "languages": [
              "ar"
            ]
          },
          "RE": {
            "name": "Réunion",
            "native": "La Réunion",
            "phone": "262",
            "continent": "AF",
            "capital": "Saint-Denis",
            "currency": "EUR",
            "languages": [
              "fr"
            ]
          },
          "RO": {
            "name": "Romania",
            "native": "România",
            "phone": "40",
            "continent": "EU",
            "capital": "Bucharest",
            "currency": "RON",
            "languages": [
              "ro"
            ]
          },
          "RS": {
            "name": "Serbia",
            "native": "Србија",
            "phone": "381",
            "continent": "EU",
            "capital": "Belgrade",
            "currency": "RSD",
            "languages": [
              "sr"
            ]
          },
          "RU": {
            "name": "Russia",
            "native": "Россия",
            "phone": "7",
            "continent": "EU",
            "capital": "Moscow",
            "currency": "RUB",
            "languages": [
              "ru"
            ]
          },
          "RW": {
            "name": "Rwanda",
            "native": "Rwanda",
            "phone": "250",
            "continent": "AF",
            "capital": "Kigali",
            "currency": "RWF",
            "languages": [
              "rw",
              "en",
              "fr"
            ]
          },
          "SA": {
            "name": "Saudi Arabia",
            "native": "العربية السعودية",
            "phone": "966",
            "continent": "AS",
            "capital": "Riyadh",
            "currency": "SAR",
            "languages": [
              "ar"
            ]
          },
          "SB": {
            "name": "Solomon Islands",
            "native": "Solomon Islands",
            "phone": "677",
            "continent": "OC",
            "capital": "Honiara",
            "currency": "SBD",
            "languages": [
              "en"
            ]
          },
          "SC": {
            "name": "Seychelles",
            "native": "Seychelles",
            "phone": "248",
            "continent": "AF",
            "capital": "Victoria",
            "currency": "SCR",
            "languages": [
              "fr",
              "en"
            ]
          },
          "SD": {
            "name": "Sudan",
            "native": "السودان",
            "phone": "249",
            "continent": "AF",
            "capital": "Khartoum",
            "currency": "SDG",
            "languages": [
              "ar",
              "en"
            ]
          },
          "SE": {
            "name": "Sweden",
            "native": "Sverige",
            "phone": "46",
            "continent": "EU",
            "capital": "Stockholm",
            "currency": "SEK",
            "languages": [
              "sv"
            ]
          },
          "SG": {
            "name": "Singapore",
            "native": "Singapore",
            "phone": "65",
            "continent": "AS",
            "capital": "Singapore",
            "currency": "SGD",
            "languages": [
              "en",
              "ms",
              "ta",
              "zh"
            ]
          },
          "SH": {
            "name": "Saint Helena",
            "native": "Saint Helena",
            "phone": "290",
            "continent": "AF",
            "capital": "Jamestown",
            "currency": "SHP",
            "languages": [
              "en"
            ]
          },
          "SI": {
            "name": "Slovenia",
            "native": "Slovenija",
            "phone": "386",
            "continent": "EU",
            "capital": "Ljubljana",
            "currency": "EUR",
            "languages": [
              "sl"
            ]
          },
          "SJ": {
            "name": "Svalbard and Jan Mayen",
            "native": "Svalbard og Jan Mayen",
            "phone": "4779",
            "continent": "EU",
            "capital": "Longyearbyen",
            "currency": "NOK",
            "languages": [
              "no"
            ]
          },
          "SK": {
            "name": "Slovakia",
            "native": "Slovensko",
            "phone": "421",
            "continent": "EU",
            "capital": "Bratislava",
            "currency": "EUR",
            "languages": [
              "sk"
            ]
          },
          "SL": {
            "name": "Sierra Leone",
            "native": "Sierra Leone",
            "phone": "232",
            "continent": "AF",
            "capital": "Freetown",
            "currency": "SLL",
            "languages": [
              "en"
            ]
          },
          "SM": {
            "name": "San Marino",
            "native": "San Marino",
            "phone": "378",
            "continent": "EU",
            "capital": "City of San Marino",
            "currency": "EUR",
            "languages": [
              "it"
            ]
          },
          "SN": {
            "name": "Senegal",
            "native": "Sénégal",
            "phone": "221",
            "continent": "AF",
            "capital": "Dakar",
            "currency": "XOF",
            "languages": [
              "fr"
            ]
          },
          "SO": {
            "name": "Somalia",
            "native": "Soomaaliya",
            "phone": "252",
            "continent": "AF",
            "capital": "Mogadishu",
            "currency": "SOS",
            "languages": [
              "so",
              "ar"
            ]
          },
          "SR": {
            "name": "Suriname",
            "native": "Suriname",
            "phone": "597",
            "continent": "SA",
            "capital": "Paramaribo",
            "currency": "SRD",
            "languages": [
              "nl"
            ]
          },
          "SS": {
            "name": "South Sudan",
            "native": "South Sudan",
            "phone": "211",
            "continent": "AF",
            "capital": "Juba",
            "currency": "SSP",
            "languages": [
              "en"
            ]
          },
          "ST": {
            "name": "São Tomé and Príncipe",
            "native": "São Tomé e Príncipe",
            "phone": "239",
            "continent": "AF",
            "capital": "São Tomé",
            "currency": "STN",
            "languages": [
              "pt"
            ]
          },
          "SV": {
            "name": "El Salvador",
            "native": "El Salvador",
            "phone": "503",
            "continent": "NA",
            "capital": "San Salvador",
            "currency": "SVC,USD",
            "languages": [
              "es"
            ]
          },
          "SX": {
            "name": "Sint Maarten",
            "native": "Sint Maarten",
            "phone": "1721",
            "continent": "NA",
            "capital": "Philipsburg",
            "currency": "ANG",
            "languages": [
              "nl",
              "en"
            ]
          },
          "SY": {
            "name": "Syria",
            "native": "سوريا",
            "phone": "963",
            "continent": "AS",
            "capital": "Damascus",
            "currency": "SYP",
            "languages": [
              "ar"
            ]
          },
          "SZ": {
            "name": "Swaziland",
            "native": "Swaziland",
            "phone": "268",
            "continent": "AF",
            "capital": "Lobamba",
            "currency": "SZL",
            "languages": [
              "en",
              "ss"
            ]
          },
          "TC": {
            "name": "Turks and Caicos Islands",
            "native": "Turks and Caicos Islands",
            "phone": "1649",
            "continent": "NA",
            "capital": "Cockburn Town",
            "currency": "USD",
            "languages": [
              "en"
            ]
          },
          "TD": {
            "name": "Chad",
            "native": "Tchad",
            "phone": "235",
            "continent": "AF",
            "capital": "N'Djamena",
            "currency": "XAF",
            "languages": [
              "fr",
              "ar"
            ]
          },
          "TF": {
            "name": "French Southern Territories",
            "native": "Territoire des Terres australes et antarctiques fr",
            "phone": "262",
            "continent": "AN",
            "capital": "Port-aux-Français",
            "currency": "EUR",
            "languages": [
              "fr"
            ]
          },
          "TG": {
            "name": "Togo",
            "native": "Togo",
            "phone": "228",
            "continent": "AF",
            "capital": "Lomé",
            "currency": "XOF",
            "languages": [
              "fr"
            ]
          },
          "TH": {
            "name": "Thailand",
            "native": "ประเทศไทย",
            "phone": "66",
            "continent": "AS",
            "capital": "Bangkok",
            "currency": "THB",
            "languages": [
              "th"
            ]
          },
          "TJ": {
            "name": "Tajikistan",
            "native": "Тоҷикистон",
            "phone": "992",
            "continent": "AS",
            "capital": "Dushanbe",
            "currency": "TJS",
            "languages": [
              "tg",
              "ru"
            ]
          },
          "TK": {
            "name": "Tokelau",
            "native": "Tokelau",
            "phone": "690",
            "continent": "OC",
            "capital": "Fakaofo",
            "currency": "NZD",
            "languages": [
              "en"
            ]
          },
          "TL": {
            "name": "East Timor",
            "native": "Timor-Leste",
            "phone": "670",
            "continent": "OC",
            "capital": "Dili",
            "currency": "USD",
            "languages": [
              "pt"
            ]
          },
          "TM": {
            "name": "Turkmenistan",
            "native": "Türkmenistan",
            "phone": "993",
            "continent": "AS",
            "capital": "Ashgabat",
            "currency": "TMT",
            "languages": [
              "tk",
              "ru"
            ]
          },
          "TN": {
            "name": "Tunisia",
            "native": "تونس",
            "phone": "216",
            "continent": "AF",
            "capital": "Tunis",
            "currency": "TND",
            "languages": [
              "ar"
            ]
          },
          "TO": {
            "name": "Tonga",
            "native": "Tonga",
            "phone": "676",
            "continent": "OC",
            "capital": "Nuku'alofa",
            "currency": "TOP",
            "languages": [
              "en",
              "to"
            ]
          },
          "TR": {
            "name": "Turkey",
            "native": "Türkiye",
            "phone": "90",
            "continent": "AS",
            "capital": "Ankara",
            "currency": "TRY",
            "languages": [
              "tr"
            ]
          },
          "TT": {
            "name": "Trinidad and Tobago",
            "native": "Trinidad and Tobago",
            "phone": "1868",
            "continent": "NA",
            "capital": "Port of Spain",
            "currency": "TTD",
            "languages": [
              "en"
            ]
          },
          "TV": {
            "name": "Tuvalu",
            "native": "Tuvalu",
            "phone": "688",
            "continent": "OC",
            "capital": "Funafuti",
            "currency": "AUD",
            "languages": [
              "en"
            ]
          },
          "TW": {
            "name": "Taiwan",
            "native": "臺灣",
            "phone": "886",
            "continent": "AS",
            "capital": "Taipei",
            "currency": "TWD",
            "languages": [
              "zh"
            ]
          },
          "TZ": {
            "name": "Tanzania",
            "native": "Tanzania",
            "phone": "255",
            "continent": "AF",
            "capital": "Dodoma",
            "currency": "TZS",
            "languages": [
              "sw",
              "en"
            ]
          },
          "UA": {
            "name": "Ukraine",
            "native": "Україна",
            "phone": "380",
            "continent": "EU",
            "capital": "Kyiv",
            "currency": "UAH",
            "languages": [
              "uk"
            ]
          },
          "UG": {
            "name": "Uganda",
            "native": "Uganda",
            "phone": "256",
            "continent": "AF",
            "capital": "Kampala",
            "currency": "UGX",
            "languages": [
              "en",
              "sw"
            ]
          },
          "UM": {
            "name": "U.S. Minor Outlying Islands",
            "native": "United States Minor Outlying Islands",
            "phone": "1",
            "continent": "OC",
            "capital": "",
            "currency": "USD",
            "languages": [
              "en"
            ]
          },
          "US": {
            "name": "United States",
            "native": "United States",
            "phone": "1",
            "continent": "NA",
            "capital": "Washington D.C.",
            "currency": "USD,USN,USS",
            "languages": [
              "en"
            ]
          },
          "UY": {
            "name": "Uruguay",
            "native": "Uruguay",
            "phone": "598",
            "continent": "SA",
            "capital": "Montevideo",
            "currency": "UYI,UYU",
            "languages": [
              "es"
            ]
          },
          "UZ": {
            "name": "Uzbekistan",
            "native": "O‘zbekiston",
            "phone": "998",
            "continent": "AS",
            "capital": "Tashkent",
            "currency": "UZS",
            "languages": [
              "uz",
              "ru"
            ]
          },
          "VA": {
            "name": "Vatican City",
            "native": "Vaticano",
            "phone": "379",
            "continent": "EU",
            "capital": "Vatican City",
            "currency": "EUR",
            "languages": [
              "it",
              "la"
            ]
          },
          "VC": {
            "name": "Saint Vincent and the Grenadines",
            "native": "Saint Vincent and the Grenadines",
            "phone": "1784",
            "continent": "NA",
            "capital": "Kingstown",
            "currency": "XCD",
            "languages": [
              "en"
            ]
          },
          "VE": {
            "name": "Venezuela",
            "native": "Venezuela",
            "phone": "58",
            "continent": "SA",
            "capital": "Caracas",
            "currency": "VES",
            "languages": [
              "es"
            ]
          },
          "VG": {
            "name": "British Virgin Islands",
            "native": "British Virgin Islands",
            "phone": "1284",
            "continent": "NA",
            "capital": "Road Town",
            "currency": "USD",
            "languages": [
              "en"
            ]
          },
          "VI": {
            "name": "U.S. Virgin Islands",
            "native": "United States Virgin Islands",
            "phone": "1340",
            "continent": "NA",
            "capital": "Charlotte Amalie",
            "currency": "USD",
            "languages": [
              "en"
            ]
          },
          "VN": {
            "name": "Vietnam",
            "native": "Việt Nam",
            "phone": "84",
            "continent": "AS",
            "capital": "Hanoi",
            "currency": "VND",
            "languages": [
              "vi"
            ]
          },
          "VU": {
            "name": "Vanuatu",
            "native": "Vanuatu",
            "phone": "678",
            "continent": "OC",
            "capital": "Port Vila",
            "currency": "VUV",
            "languages": [
              "bi",
              "en",
              "fr"
            ]
          },
          "WF": {
            "name": "Wallis and Futuna",
            "native": "Wallis et Futuna",
            "phone": "681",
            "continent": "OC",
            "capital": "Mata-Utu",
            "currency": "XPF",
            "languages": [
              "fr"
            ]
          },
          "WS": {
            "name": "Samoa",
            "native": "Samoa",
            "phone": "685",
            "continent": "OC",
            "capital": "Apia",
            "currency": "WST",
            "languages": [
              "sm",
              "en"
            ]
          },
          "XK": {
            "name": "Kosovo",
            "native": "Republika e Kosovës",
            "phone": "377,381,383,386",
            "continent": "EU",
            "capital": "Pristina",
            "currency": "EUR",
            "languages": [
              "sq",
              "sr"
            ]
          },
          "YE": {
            "name": "Yemen",
            "native": "اليَمَن",
            "phone": "967",
            "continent": "AS",
            "capital": "Sana'a",
            "currency": "YER",
            "languages": [
              "ar"
            ]
          },
          "YT": {
            "name": "Mayotte",
            "native": "Mayotte",
            "phone": "262",
            "continent": "AF",
            "capital": "Mamoudzou",
            "currency": "EUR",
            "languages": [
              "fr"
            ]
          },
          "ZA": {
            "name": "South Africa",
            "native": "South Africa",
            "phone": "27",
            "continent": "AF",
            "capital": "Pretoria",
            "currency": "ZAR",
            "languages": [
              "af",
              "en",
              "nr",
              "st",
              "ss",
              "tn",
              "ts",
              "ve",
              "xh",
              "zu"
            ]
          },
          "ZM": {
            "name": "Zambia",
            "native": "Zambia",
            "phone": "260",
            "continent": "AF",
            "capital": "Lusaka",
            "currency": "ZMW",
            "languages": [
              "en"
            ]
          },
          "ZW": {
            "name": "Zimbabwe",
            "native": "Zimbabwe",
            "phone": "263",
            "continent": "AF",
            "capital": "Harare",
            "currency": "USD,ZAR,BWP,GBP,AUD,CNY,INR,JPY",
            "languages": [
              "en",
              "sn",
              "nd"
            ]
          }
        }
    }

    return new Data();
})();

