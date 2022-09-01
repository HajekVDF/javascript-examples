// Pig Latin je jazyková hra používaná anglicky mluvícími dětmi.
// Hra spočívá v tom, že první písmeno slova se posune na konec a poté se ke slovu připojí "ay".


function pigLatin(sentence){
    let words, translated;
    
    // větu rozdělíme na slova podle mezer a uložíme je do pole words
    words = sentence.split(" ")

    // procházíme pole slov, která jednotlivě překládáme do Pig Latin
    // vracíme přeložené slovo, které se následně ukládá do pole translated
    translated = words.map(function(word){
        let first, rest;

        // do proměnné first uložíme první písmeno slova 
        first = word.substring(0, 1);

        // do proměnné rest uložíme zbytek slova
        rest = word.substring(1)

        // vracíme přeložené slovo
        return rest + first + "ay";
    })

    // vracíme spojená slova z pole translated a mezi ně vkládáme mezeru
    return translated.join(" ");
    
}

// přeložená věta na výstupu bude vypadat takto: "igpay noay aay oadray"
console.log(pigLatin("pig on a road"));