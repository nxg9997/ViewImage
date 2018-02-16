
let page = document.querySelector('html');
var btn = document.createElement('td');

let clickthings = document.querySelectorAll('.rg_bx');
console.log(clickthings);

for (let i = 0; i < clickthings.length; i++)
{
    //console.log(clickthings[i]);
    clickthings[i].onmousedown = CreateButton;
}
//.onmousedown = CreateButton;

function CreateButton()
{
    console.log('clicked');
    let check = document.querySelector('.VIEWIMAGE');
    if ( check != null){
        check.parentNode.removeChild(check);
    }

    let popup = document.querySelector('.irc_c');
    let imgsrc = popup.querySelector('.irc_mi');
    let btable = document.querySelector('.irc_but_r tbody tr');

    console.log('src:' + imgsrc.src);
    console.log(btable);

    let btnhtml = '<a target="_blank" class="irc_vpl i3599 irc_lth VIEWIMAGE" rel="noopener" jsaction="mousedown:irc.rl;keydown:irc.rlk" data-noload="" tabindex="0" href="'+ imgsrc.src +'" ping="https://www.google.com/url?sa=i&amp;rct=j&amp;q=&amp;esrc=s&amp;source=images&amp;cd=&amp;cad=rja&amp;uact=8&amp;ved=0ahUKEwjkjqadpqnZAhXDUt8KHdGjCbIQjxwIAw&amp;url=https%3A%2F%2Fwww.pokemon.com%2F&amp;psig=AOvVaw3K1vlrI7emzJJRItRiF-T8&amp;ust=1518831456004874"><span class="_RKw _wtf _Ptf"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg></span><span class="_WKw">View Image</span></a>';

    //let btn = document.createElement('td');
    btn.innerHTML = btnhtml;
    btable.appendChild(btn);
    console.log(btable);
    //console.log("src: " + imgsrc);

}