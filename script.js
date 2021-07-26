//TYPEWRITER WORD
const typeWord = document.getElementById('describe');

const typewriter = new Typewriter (typeWord, {
    loop: true
});

typewriter.typeString('I am a frontend Software Developer.')
    .pauseFor(1500)
    .deleteAll()
    .typeString('I turn designs into beautiful & efficient code')
    .pauseFor(1500)
    // .deleteChars(7)
    // .typeString('<strong>I turn designs into beautiful code</strong>')
    //.pauseFor(1500)
    .deleteAll()
    .typeString('I am a content creator')
    .pauseFor(1500)
    .start();