

let rsp = ['scissors' , 'rock' , 'paper'];
let rsps = ['가위' , '바위' , '보'];
let str = 0;
let win = 0;
let mys = 0;

let percentp=0 , strp = 0 , rspsp = 0;

function rps(n)
{
    let percent = 0;
    let random = Math.ceil(Math.random()*3);
    let randoms = random-1;
    let comimg = document.getElementsByClassName('comimg')[0];
    let crps = document.getElementById('crps');
    const npc = document.getElementById('npc');
    
    if ((n > random && !(n==3&&random==1) )|| (n==1 && random ==3))
    {
        win++;
        mys = '<p>'+1+'</p>'+mys;
        document.getElementById('playgame').innerHTML = '당신이 이겼습니다.';
    }

    else if (n==random)
    {
        mys = '<p>'+0+'비김</p>'+mys;
        document.getElementById('playgame').innerHTML = '비겼습니다.';
    }
    else
    {
        mys = '<p>'+0+'</p>'+mys;
        document.getElementById('playgame').innerHTML = '당신이 졌습니다.';
        npc.classList.add('npcmove');
    }

    comimg.innerHTML = '<img src="images/'+rsp[randoms]+'.png" alt=""가위바위보>';
    crps.innerHTML = rsps[randoms];
    
    str++;

    percent = win/str*100;
    
    percentp = '<p>'+percent.toFixed(2)+'%'+'</p>'+percentp;
    strp = '<p>'+str+'<p>'+strp;
    rspsp = '<p>'+rsps[n-1]+'<p>'+rspsp;

    document.getElementById('allnum').innerHTML = strp;
    document.getElementById('mynum').innerHTML = rspsp;
    document.getElementById('myscore').innerHTML = mys;
    document.getElementById('winpercent').innerHTML = percentp;
    
}

npc.addEventListener('animationend', classrmv,false);

function classrmv()
{
    npc.classList.remove('npcmove');
}


function doc(n , str)
{
    document.getElementsByClassName('meimg')[0].innerHTML = '<img src="images/'+n+'.png" alt=""가위바위보>';
    document.getElementById('mrps').innerHTML = str ;
}
