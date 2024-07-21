let input = document.querySelector("#input");
let output = document.querySelector("#output");
let submit = document.querySelector("#submit");
let fromImage = document.querySelector('#img1');
let toImage = document.querySelector('#img2');
let fromSelect = document.querySelector('.from select');
let toSelect = document.querySelector('.to select');
let rate = document.querySelector('.rate');

const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };


// Use loop to append all country codes

 for(let country in countryList)
 {
    if(country!='USD')
    {
        let newOption = document.createElement('option');
        newOption.innerText = country;
        fromSelect.appendChild(newOption);
    }
 }

 for(let country in countryList)
 {
    if(country!='INR')
    {
        let newOption = document.createElement('option');
        newOption.innerText = country;
        toSelect.appendChild(newOption);
    }
 }

let data;


let getData = async function()
{

    // Prevent default action of a form

    // Get from country
    let fromCountry = fromSelect.value.toLowerCase();
    // console.log(fromCountry);
    // Get to country
    let toCountry = toSelect.value.toLowerCase();
    // console.log(toCountry);

    // console.log("Fetching...");
    let URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${fromCountry}.json`;
    let response = await fetch(URL);
    // console.log(response);
    // console.log("Parsing...");
    data = await response.json();
    // console.log(data);
    //  Data Format -->  data['usd']['inr'] --> data[fromCountry][toCountry] 
    //  Data have all curencies for formCountry to other countries
    // Get input value
    let inputData = input.value;
    // console.log("inputData",inputData);
    // Get base rate 
   let baseRate = data[fromCountry][toCountry];
   //console.log("baseRate",baseRate);
   //console.log("answer",baseRate*inputData);
   
   // Output the final answer
   output.value = baseRate*inputData;

  // change the output message
  //  1 USD = 80 INR
   rate.innerText = `1 ${fromCountry.toUpperCase()} = ${baseRate} ${toCountry.toUpperCase()}`;

   // change flag 

    let countryCode1 = countryList[fromCountry.toUpperCase()];
    let newSrc1 = `https://flagsapi.com/${countryCode1}/flat/64.png`;
    let img1 = fromImage.parentElement.querySelector("#img1");
    img1.src = newSrc1;
    
    let countryCode2 = countryList[toCountry.toUpperCase()];
    let newSrc2 = `https://flagsapi.com/${countryCode2}/flat/64.png`;
    let img2 = toImage.parentElement.querySelector("#img2");
    img2.src = newSrc2;


}

submit.addEventListener("click",getData);



