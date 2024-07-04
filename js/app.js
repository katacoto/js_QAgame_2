const quiz = [
    {
        question: '体型',
        answers:
            [
                '痩せ型で食べても太らない',
                '中肉中背で平均的', 
                '子供の頃から太りやすい'
            ]
    },
    {
        question: '肌',
        answers:
            [
                '乾燥している',
                '滑らか・オイリー・シミやニキビができやすい', 
                '色白でもっちりしている'
            ]
    },
    {
        question: '目',
        answers:
            [
                '奥目、小さく細い、キョロキョロする',
                '鋭い・充血する', 
                '大きい・まつげが長い・潤んでいる'
            ]
    },{
        question: '髪',
        answers:
            [
                '硬く、乾燥している',
                '柔らかく細い', 
                '黒くて多い'
            ]
    },{
        question: '発汗',
        answers:
            [
                'あまりかかない',
                'よくかく、汗っかき', 
                '普通'
            ]
    },{
        question: '体温',
        answers:
            [
                '手足が冷たい',
                '体が熱い', 
                '全体が冷たい'
            ]
    },{
        question: '睡眠',
        answers:
            [
                '寝付きが悪い・不規則',
                '適度な睡眠', 
                'よく眠る・居眠りが多い'
            ]
    },{
        question: '食欲',
        answers:
            [
                'ムラがある・不規則',
                '食欲旺盛・食事を抜くとイライラする', 
                '食べることが大好きだが量は少ない'
            ]
    },{
        question: '排便',
        answers:
            [
                '便秘気味・硬便',
                '下痢気味・軟便', 
                '中程度の硬さ・時間を要す'
            ]
    },{
        question: '会話',
        answers:
            [
                'おしゃべり・早口',
                '話がまとまっている', 
                '話し方はゆっくり・長い'
            ]
    },{
        question: '記憶力',
        answers:
            [
                '物覚えが早いが忘れるのも早い',
                '鋭い理解力があり明確', 
                '一度覚えたら忘れにくい'
            ]
    },{
        question: '気候',
        answers:
            [
                '寒いのが苦手・暑い夏が好き',
                '暑いのが苦手・冬が好き', 
                '快適に過ごせれば良い'
            ]
    },{
        question: '行動',
        answers:
            [
                '歩くのが早い・おっちょこちょい',
                '計画的・チャレンジ精神旺盛', 
                'のんびり・食事もゆっくり'
            ]
    },
    
    {
        question: '買い物',
        answers:
            [
                '買い物大好き・買いすぎ',
                'ブランド志向・高級品好き', 
                '使うよりも貯める傾向'
            ]
    }
]


let quizIndex = 0;
const quizLength = quiz.length;
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// 診断結果用
const $vata = document.getElementById('vata');
const $pitta = document.getElementById('pitta');
const $kapha = document.getElementById('kapha');
const vata = "vata";
const pitta = "pitta";
const kapha = "kapha";
let vataScore = 0;
let pittaScore = 0; 
let kaphaScore = 0;


// 質問文と回答のまとめ
const setupQuiz = () => {
    console.log(document.getElementById('js-question').textContent = quiz[quizIndex].question);
    let buttonIndex = 0;
    $vata.textContent = quiz[quizIndex].answers[buttonIndex];
    $pitta.textContent = quiz[quizIndex].answers[buttonIndex+1];
    $kapha.textContent = quiz[quizIndex].answers[buttonIndex+2];
}
setupQuiz ();

//　クリックイベント
const clickHandler = (e) => {
    quizIndex++;
    if(quizIndex < quizLength){
        if(vata === e.target.id){
            vataScore++;
        } else if (pitta === e.target.id){
            pittaScore++;
        } else if (kapha === e.target.id){
            kaphaScore++;
        }
        setupQuiz()
        
    } else {
        if(vata === e.target.id){
            vataScore++;
        } else if (pitta === e.target.id){
            pittaScore++;
        } else if (kapha === e.target.id){
            kaphaScore++;
        }

        // 診断結果ページへ推移
        localStorage.setItem('js-vata', vataScore);
        localStorage.setItem('js-pitta', pittaScore);
        localStorage.setItem('js-kapha', kaphaScore);
        window.location.href='result.html';

        }

};

let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
};