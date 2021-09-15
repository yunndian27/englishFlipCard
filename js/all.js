const enWordInfo = [
    {
        numbers: '1',
        animal: 'alligator',
        letter: 'Aa',
        phonics: '/ æ /',
        trans: '鱷魚',
    },
    {
        numbers: '2',
        animal: 'bear',
        letter: 'Bb',
        phonics: '/ b /',
        trans: '熊',
    },
    {
        numbers: '3',
        animal: 'cat',
        letter: 'Cc',
        phonics: '/ k /',
        trans: '貓',
    },
    {
        numbers: '4',
        animal: 'duck',
        letter: 'Dd',
        phonics: '/ d /',
        trans: '鴨子',
    },
    {
        numbers: '5',
        animal: 'elephant',
        letter: 'Ee',
        phonics: '/ ɛ /',
        trans: '大象',
    },
    {
        numbers: '6',
        animal: 'frog',
        letter: 'Ff',
        phonics: '/ f /',
        trans: '青蛙',
    },
    {
        numbers: '7',
        animal: 'giraffe',
        letter: 'Gg',
        phonics: '/ g /',
        trans: '長頸鹿',
    },
    {
        numbers: '8',
        animal: 'hippopotamus',
        letter: 'Hh',
        phonics: '/ h /',
        trans: '河馬',
    },
    {
        numbers: '9',
        animal: 'iguana',
        letter: 'Ii',
        phonics: '/ ɪ /',
        trans: '鬣蜥',
    },
    {
        numbers: '10',
        animal: 'jellyfish',
        letter: 'Jj',
        phonics: '/ dʒ /',
        trans: '水母',
    },
    {
        numbers: '11',
        animal: 'koala',
        letter: 'Kk',
        phonics: '/ k /',
        trans: '無尾熊',
    },
    {
        numbers: '12',
        animal: 'lion',
        letter: 'Ll',
        phonics: '/ l /',
        trans: '獅子',
    },
    {
        numbers: '13',
        animal: 'monkey',
        letter: 'Mm',
        phonics: '/ m /',
        trans: '猴子',
    },
    {
        numbers: '14',
        animal: 'narwhal',
        letter: 'Nn',
        phonics: '/ n /',
        trans: '獨角鯨',
    },
    {
        numbers: '15',
        animal: 'octopus',
        letter: 'Oo',
        phonics: '/ a /',
        trans: '章魚',
    },
    {
        numbers: '16',
        animal: 'pig',
        letter: 'Pp',
        phonics: '/ p /',
        trans: '豬',
    },
    {
        numbers: '17',
        animal: 'quetzal',
        letter: 'Qq',
        phonics: '/ kw /',
        trans: '克沙爾鳥',
    },
    {
        numbers: '18',
        animal: 'rabbit',
        letter: 'Rr',
        phonics: '/ r /',
        trans: '兔子',
    },
    {
        numbers: '19',
        animal: 'snake',
        letter: 'Ss',
        phonics: '/ s /',
        trans: '蛇',
    },
    {
        numbers: '20',
        animal: 'tiger',
        letter: 'Tt',
        phonics: '/ t /',
        trans: '老虎',
    },
    {
        numbers: '21',
        animal: 'unicorn',
        letter: 'Uu',
        phonics: '/ ʌ /',
        trans: '獨角獸',
    },
    {
        numbers: '22',
        animal: 'vampire bat',
        letter: 'Vv',
        phonics: '/ v /',
        trans: '吸血蝙蝠',
    },
    {
        numbers: '23',
        animal: 'whale',
        letter: 'Ww',
        phonics: '/ w /',
        trans: '鯨魚',
    },
    {
        numbers: '24',
        animal: 'x-ray fish',
        letter: 'Xx',
        phonics: '/ ks /',
        trans: 'X射線魚',
    },
    {
        numbers: '25',
        animal: 'yak',
        letter: 'Yy',
        phonics: '/ j /',
        trans: '犛牛',
    },
    {
        numbers: '26',
        animal: 'zebra',
        letter: 'Zz',
        phonics: '/ z /',
        trans: '斑馬',
    },
];

let time = 0;
let runTime = 0;

const playgame = () => {
    $('.card-clear').removeClass('card-clear')
    $('#game-animal').empty()
    $('#game-letter').empty()
    $('#show').empty()
    time = 0;
    $('#timeup').text(Math.round(time * 10) / 10)

    const arr = [];

    for (let i = 0; i < 9; i++) {
        const rand = Math.floor(Math.random() * enWordInfo.length);

        if (arr.includes(enWordInfo[rand])) {
            i--;
        } else {
            arr.push(enWordInfo[rand]);
        }
    }

    // 產生 9 張卡片
    for (let i = 0; i < arr.length; i++) {
        $('#game-animal').append(`
        <div class="card">
            <div class="card-front"></div>
            <div class="card-back"></div>
        </div>
    `);

        $('#game-letter').append(`
        <div class="card">
            <div class="card-front"></div>
            <div class="card-back"></div>
        </div>
    `);
    }

    // 花色 打散
    for (let i = 0; i < 9; i++) {
        $('#game-animal .card').eq(i).find('.card-front').css('background-image', `url(https://github.com/yunndian27/englishFlipCard/blob/main/images/animal${arr[i].numbers}.jpg) `);

        $('#game-letter .card').eq(i).find('.card-front').css('background-image', `url(https://github.com/yunndian27/englishFlipCard/blob/main/images/letter${arr[i].numbers}.jpg) `);

        $('#game-animal .card').eq(i).attr('data-card', arr[i].numbers);
        $('#game-letter .card').eq(i).attr('data-card', arr[i].numbers);

        let target = Math.floor(Math.random() * enWordInfo.length);
        $('#game-animal .card').eq(target).insertAfter($('#game-animal .card').eq(i));
        target = Math.floor(Math.random() * 9);
        $('#game-letter .card').eq(target).insertAfter($('#game-letter .card').eq(i));
    }

    runTime = setInterval(() => {
        time += 1;
        $('#timeup').text(Math.round(time * 10) / 10);
    }, 1000);
};

// 打開卡片
$('#game-animal, #game-letter').on('click', '.card', function () {
    if (!game) return

    if (!$(this).hasClass('card-open')) {
        if ($('.card-open').length === 1 && $(this).parent().attr('id') !== $('.card-open').eq(0).parent().attr('id')) {
            $(this).addClass('card-open');
        } else if ($('.card-open').length === 0) {
            $(this).addClass('card-open');
        }
    }

    if ($('.card-open').length === 2) {
        if ($('.card-open').eq(0).attr('data-card') === $('.card-open').eq(1).attr('data-card')) {
            $('.card-open').fadeTo(1000, 0).addClass('card-clear');
            setTimeout(() => {
                findEnglish();
                intro();
            }, 1000);
            addCard();
        }

        setTimeout(() => {
            $('.card-open').removeClass('card-open');
        }, 1000);
    }

    if ($('.card-clear').length === 18) {
        clearInterval(runTime);
        Swal.fire({
            title: '恭喜過關',
            text: '再玩一次可以學到不同的單字喔！',
        });
        // alert('恭喜過關')
        $('#start').attr('disabled', false);
        $('#start').css('background-color', '#e500a4')
        $('#show').empty();
        $('.container .goodPic').css('display', 'block');
    }
});

// 出現卡片
const addCard = () => {
    $('#show').append(`
            <div class="desc">
                <div class="englishPic">
                    <img>
                </div>
                <div class="pic-letter">
                    <h3></h3><span></span>
                </div>
                <div class="pic-name">
                    <h3></h3><span></span>                        
                </div>
            </div>
            `);
};

// 中間內容介紹
const intro = () => {
    $('#show').css('display', 'block');
    $('#show').addClass('ani-fadein');
};

// 攤牌內容
const findEnglish = () => {
    let englishId = $('.card-open').eq(0).attr('data-card') - 1;

    $('.englishPic img').attr('src', `images/animal${enWordInfo[englishId].numbers}.jpg`);

    $('#show .pic-letter h3').text(`${enWordInfo[englishId].letter}`);
    $('#show .pic-letter span').text(`${enWordInfo[englishId].phonics}`);

    $('#show .pic-name h3').text(`${enWordInfo[englishId].animal}`);
    $('#show .pic-name span').text(`${enWordInfo[englishId].trans}`);
};


$('#start').click(function () {
    game = true;
    $(this).attr('disabled', true);
    $(this).css('background-color', '#ccc');
    $('.mask').css('display', 'none');
    $('.rec').css('display', 'block');
    $('.container .goodPic').css('display', 'none');
    playgame();
});
