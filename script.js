addEventListener("DOMContentLoaded", (event) => {
    const readingCheckbox = document.getElementById('readingCheckbox')
    const phoneticsCheckbox = document.getElementById('phoneticsCheckbox')
    const divBoard = document.getElementById('divBoard')
    const divDummy = document.getElementById('divDummy')

    // get the saved text


    divBoard.innerHTML = getCookie("savedtext");
    divBoard.innerHTML = intro_story;

    setSampleStoriesListeners();

    setReadingMode(true);
});

readingCheckbox.addEventListener('change', (event) => {
    setReadingMode(event.currentTarget.checked);
})
phoneticsCheckbox.addEventListener('change', (event) => {
    setPhoneticsMode(event.currentTarget.checked);
})

function setReadingMode(checked) {
    if (checked) {
        resetDivDummy();
        divBoard.style.display = 'none';
        divDummy.style.display = 'block';

        setCookie("savedtext", divBoard.innerHTML, 3);

        highlightText();

        readingCheckbox.checked = true;
    } else {
        phoneticsCheckbox.checked = false;
        readingCheckbox.checked = false;
        divBoard.style.display = 'block';
        divDummy.style.display = 'none';
    }
}

function setPhoneticsMode(checked) {
    if (checked) {
        divBoard.style.display = 'none';
        divDummy.style.display = 'block';
        readingCheckbox.checked = true;
        phoneticsCheckbox.checked = true;
        resetDivDummy();
        changeTextAsPhonetics();
        highlightText();
    } else {
        resetDivDummy();
        setReadingMode(readingCheckbox.checked);
        phoneticsCheckbox.checked = false;
    }
}

function resetDivDummy() {
    divDummy.innerHTML = divBoard.innerHTML;
}

function changeTextAsPhonetics() {
    let textContent = divDummy.innerHTML;
    textContent = textContent.replace(/A /g, " Ə ");
    textContent = textContent.replace(/Am /g, "Əm ");
    textContent = textContent.replace(/An /g, "Ən ");
    textContent = textContent.replace(/And /g, "Ənd ");
    textContent = textContent.replace(/Any /g, "Ənɪ ");
    textContent = textContent.replace(/Are /g, "Ə ");
    textContent = textContent.replace(/As /g, "Əz ");
    textContent = textContent.replace(/At /g, "Ət ");
    textContent = textContent.replace(/Be /g, "Bɪ ");
    textContent = textContent.replace(/Been /g, "Bɪn ");
    textContent = textContent.replace(/but /g, "Bət ");
    textContent = textContent.replace(/Can /g, "Kən ");
    textContent = textContent.replace(/Could /g, "Kəd ");
    textContent = textContent.replace(/Do /g, "Də ");
    textContent = textContent.replace(/Does /g, "Dəz ");
    textContent = textContent.replace(/For /g, "Fə ");
    textContent = textContent.replace(/From /g, "Frəm ");
    textContent = textContent.replace(/Had /g, "Həd ");
    textContent = textContent.replace(/Has /g, "Həz ");
    textContent = textContent.replace(/Have /g, "Həv ");
    textContent = textContent.replace(/He /g, "Hɪ ");
    textContent = textContent.replace(/Her /g, "Ə ");
    textContent = textContent.replace(/Him /g, "ɪm ");
    textContent = textContent.replace(/His /g, "ɪz ");
    textContent = textContent.replace(/I /g, "Ʌ ");
    textContent = textContent.replace(/Me /g, "Mɪ ");
    textContent = textContent.replace(/Must /g, "Məst ");
    textContent = textContent.replace(/Of /g, "Əv ");
    textContent = textContent.replace(/Our /g, "ɑː ");
    textContent = textContent.replace(/Shall /g, "Ʃəl ");
    textContent = textContent.replace(/She /g, "Ʃɪ ");
    textContent = textContent.replace(/Should /g, "Ʃəd ");
    textContent = textContent.replace(/Some /g, "Səm ");
    textContent = textContent.replace(/Than /g, "Ðən ");
    textContent = textContent.replace(/The /g, "Ðə ");
    textContent = textContent.replace(/Them /g, "Ðəm ");
    textContent = textContent.replace(/There /g, "Ðə ");
    textContent = textContent.replace(/To /g, "Tə ");
    textContent = textContent.replace(/Us /g, "Əs ");
    textContent = textContent.replace(/Was /g, "Wəz ");
    textContent = textContent.replace(/We /g, "Wɪ ");
    textContent = textContent.replace(/Were /g, "Wə ");
    textContent = textContent.replace(/Who /g, "Hʊ ");
    textContent = textContent.replace(/Will /g, "Wəl ");
    textContent = textContent.replace(/Would /g, "Wəd ");
    textContent = textContent.replace(/You /g, "Jə ");
    textContent = textContent.replace(/Yours /g, "Jə ");

    textContent = textContent.replace(/ a /g, " ə ");
    textContent = textContent.replace(/ am /g, " əm ");
    textContent = textContent.replace(/ an /g, " ən ");
    textContent = textContent.replace(/ and /g, " ənd ");
    textContent = textContent.replace(/ any /g, " ənɪ ");
    textContent = textContent.replace(/ are /g, " ə ");
    textContent = textContent.replace(/ as /g, " əz ");
    textContent = textContent.replace(/ at /g, " ət ");
    textContent = textContent.replace(/ be /g, " bɪ ");
    textContent = textContent.replace(/ been /g, " bɪn ");
    textContent = textContent.replace(/ but /g, " bət ");
    textContent = textContent.replace(/ can /g, " kən ");
    textContent = textContent.replace(/ could /g, " kəd ");
    textContent = textContent.replace(/ do /g, " də ");
    textContent = textContent.replace(/ does /g, " dəz ");
    textContent = textContent.replace(/ for /g, " fə ");
    textContent = textContent.replace(/ from /g, " frəm ");
    textContent = textContent.replace(/ had /g, " həd ");
    textContent = textContent.replace(/ has /g, " həz ");
    textContent = textContent.replace(/ have /g, " həv ");
    textContent = textContent.replace(/ he /g, " hɪ ");
    textContent = textContent.replace(/ her /g, " ə ");
    textContent = textContent.replace(/ him /g, " ɪm ");
    textContent = textContent.replace(/ his /g, " ɪz ");
    textContent = textContent.replace(/ i /g, " ʌ ");
    textContent = textContent.replace(/ me /g, " mɪ ");
    textContent = textContent.replace(/ must /g, " məst ");
    textContent = textContent.replace(/ of /g, " əv ");
    textContent = textContent.replace(/ our /g, " ɑː ");
    textContent = textContent.replace(/ shall /g, " ʃəl ");
    textContent = textContent.replace(/ she /g, " ʃɪ ");
    textContent = textContent.replace(/ should /g, " ʃəd ");
    textContent = textContent.replace(/ some /g, " səm ");
    textContent = textContent.replace(/ than /g, " ðən ");
    textContent = textContent.replace(/ the /g, " ðə ");
    textContent = textContent.replace(/ them /g, " ðəm ");
    textContent = textContent.replace(/ there /g, " ðə ");
    textContent = textContent.replace(/ to /g, " tə ");
    textContent = textContent.replace(/ us /g, " əs ");
    textContent = textContent.replace(/ was /g, " wəz ");
    textContent = textContent.replace(/ we /g, " wɪ ");
    textContent = textContent.replace(/ were /g, " wə ");
    textContent = textContent.replace(/ who /g, " hʊ ");
    textContent = textContent.replace(/ will /g, " wəl ");
    textContent = textContent.replace(/ would /g, " wəd ");
    textContent = textContent.replace(/ you /g, " jə ");
    textContent = textContent.replace(/ your /g, " jə ");
    textContent = textContent.replace(/ yours /g, " jə ");
    divDummy.innerHTML = textContent;
}


function highlightText() {
    //highlight function
    var highLightedWord = ["Ə ", "Əm ", "Ən ", "Ənd ", "Ənɪ ", "Ə ", "Əz ", "Ət ", "Bɪ ", "Bɪn ", "Bət ", "Kən ", "Kəd ", "Də ", "Dəz ", "Fə ", "Frəm ", "Həd ", "Həz ", "Həv ", "Hɪ ", "Ə ", "ɪm ", "ɪz ", "Ʌ ", "Mɪ ", "Məst ", "Əv ", "ɑː ", "Ʃəl ", "Ʃɪ ", "Ʃəd ", "Səm ", "Ðən ", "Ðə ", "Ðəm ", "Ðə ", "Tə ", "Əs ", "Wəz ", "Wɪ ", "Wə ", "Hʊ ", "Wəl ", "Wəd ", "Jə ", "Jə ", "Jə ", " ə ", " əm ", " ən ", " ənd ", " ənɪ ", " ə ", " əz ", " ət ", " bɪ ", " bɪn ", " bət ", " kən ", " kəd ", " də ", " dəz ", " fə ", " frəm ", " həd ", " həz ", " həv ", " hɪ ", " ə ", " ɪm ", " ɪz ", " ʌ ", " mɪ ", " məst ", " əv ", " ɑː ", " ʃəl ", " ʃɪ ", " ʃəd ", " səm ", " ðən ", " ðə ", " ðəm ", " ðə ", " tə ", " əs ", " wəz ", " wɪ ", " wə ", " hʊ ", " wəl ", " wəd ", " jə ", "A ", "Am ", "An ", "And ", "Any ", "Are ", "As ", "At ", "Be ", "Been ", "but ", "Can ", "Could ", "Do ", "Does ", "For ", "From ", "Had ", "Has ", "Have ", "He ", "Her ", "Him ", "His ", "I ", "Me ", "Must ", "Of ", "Our ", "Shall ", "She ", "Should ", "Some ", "Than ", "The ", "Them ", "There ", "To ", "Us ", "Was ", "We ", "Were ", "Who ", "Will ", "Would ", "You ", "Your ", "Yours ", " a ", " am ", " an ", " and ", " any ", " are ", " as ", " at ", " be ", " been ", " but ", " can ", " could ", " do ", " does ", " for ", " from ", " had ", " has ", " have ", " he ", " her ", " him ", " his ", " i ", " me ", " must ", " of ", " our ", " shall ", " she ", " should ", " some ", " than ", " the ", " them ", " there ", " to ", " us ", " was ", " we ", " were ", " who ", " will ", " would ", " you ", " your ", " yours "];
    var regexFromMyArray = new RegExp(highLightedWord.join("|"), 'g'); //'i' = ignore case

    divDummy.innerHTML = divDummy.innerHTML.replace(regexFromMyArray, function (str) {
        return '<span class="weakFormWordStyle">' + str + '</span>'
    })
}

// var target = $("#dummy");
// $("#board").scroll(function () {
//     target.prop("scrollTop", this.scrollTop).prop("scrollLeft", this.scrollLeft);
// });



// cookie utils
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;url=127.0.0.1";

    document.cookie = cname + "=" + cvalue;
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function setSampleStoriesListeners() {
    const theLastLeaf = document.getElementById('theLastLeaf');
    const tellTale = document.getElementById('tellTale');
    const mCreativity = document.getElementById('mCreativity');
    const tim = document.getElementById('tim');
    const polCor = document.getElementById('polCor');
    const intro = document.getElementById('intro');

    // stories are in stories.js




    theLastLeaf.onclick = function () {
        divBoard.innerHTML = theLastLeaf_story;
        setPhoneticsMode(false);
        setReadingMode(true);
    };
    tellTale.onclick = function () {
        divBoard.innerHTML = tellTale_story;
        setPhoneticsMode(false);
        setReadingMode(true);
    };
    mCreativity.onclick = function () {
        divBoard.innerHTML = mCreativity_story;
        setPhoneticsMode(false);
        setReadingMode(true);
    };
    tim.onclick = function () {
        divBoard.innerHTML = tim_story;
        setPhoneticsMode(false);
        setReadingMode(true);
    };
    polCor.onclick = function () {
        divBoard.innerHTML = polCor_story;
        setPhoneticsMode(false);
        setReadingMode(true);
    };
    intro.onclick = function () {
        divBoard.innerHTML = intro_story;
        setPhoneticsMode(false);
        setReadingMode(true);
    };
}