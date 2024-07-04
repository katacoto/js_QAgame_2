// 診断結果
const result = [
    { 
        type: 'ヴァータ VATA\n空＋風',
        detail: '◆体質について\nヴァータの代表的な特徴は“アンバランス”なところ。体のイメージではで胸板も薄い感じです。変化が好きでたくさんの事に興味を持つところや、好奇心旺盛で新しい事を積極的に始めますが飽きっぽいところがああります。フットワークが軽く、行動力があるけれどスタミナがあまりないので消耗しやすい。気まぐれ屋さんで考えがコロコロ変わったりするところや優柔不断なところもヴァータのバランスが崩れると目立ちます。\n柔軟性があり、新しい環境や人と打ち解けるのが早いけれど、実は変化に非常に敏感なため、知らないうちにストレスを溜め込みがちなところがあります。ヴァータはとにかく“アンバランス”で、忙しかったり落ち込むと、食欲がなくなったり食べること自体を忘れてしまったりと不規則になりがちです。\n\n◆食事について\n潤いが必要なので、温かくて水分と油分が多いものをとりましょう。例えば、スープなどがおすすめです。\n\n◆おすすめアロマ\nサンダルウッド バランスが崩れると出やすい憂鬱な気持ちや無気力、不安定な気持ちを和らげてくれる効果があります。'
    },{ 
        type: 'ピッタ PITTA\n水＋火',
        detail: '◆体質について\nピッタはバランスが良く、筋肉が付きやすく柔軟な体な人が特徴です。代表的な特徴は“燃えている”ところ。食欲も旺盛で消化力も高いです。チャレンジ精神旺盛で強い精神面を持っているので、ちょっとの事では諦めず、体調が少し悪くても「自分は出来るんだ！」と思い頑張り過ぎてしまいがちですが、実はとてもデリケートなので気がついたら大きな病気をして、また自分を追い込んでしまう傾向があります。ピッタのバランスが乱れると、批判的で他の意見に対して聞く耳を持たなかったり喧嘩っ早くなり人と揉めたりしがちです。\nまた、ピッタの代表的な特徴は、何かに対して強いこだわりがあるため、神経質になったり、自分や他人に対してもちょっとした失敗が許せなかったりします。\n\n◆食事について\n消化能力が強いため、食事の量が多くなりがちです。食べる量を調整し、酸味や辛い物を控えるようにしましょう。\n\n◆おすすめアロマ\nミント 怒りや興奮をおさめる効果が期待できます。これからの季節、花粉症の症状緩和にもおすすめです。',
    },{ 
        type: 'カファ KAPHA\n地＋水',
        detail: '◆体質について\nカファは、がっしりしていて骨太です。ゆっくり、のんびりしているので、動作も話し方も全ておっとりしています。とても愛情深く献身的なので、信頼している人に対して優しく、その人にために尽くします。争いごとが苦手で平和主義なので誰からも好かれるタイプです。忍耐力があるので、どんなに辛くても目標を達成するまで粘り強くコツコツとやり遂げます。とても穏やかで“安定している”カファは、バランスが崩れると思考が鈍くなり頑固になりがち。また、無気力になり、何事も楽な方を選ぶ傾向があります。 ヴァータタイプとは真逆で、新しい事や変化をあまり好まないタイプでもあります。また、過去の経験を長い間根に持ったり、貪欲や愛欲に溺れたりなんて事もあります。\n\n◆食事について\nカファは重くなりがちなので、炭水化物を抜いたり、無理がない程度で空腹になるまで食事を控えるのも良いでしょう。\n\n◆おすすめアロマ\nサンダルウッド バランスが崩れると出やすい憂鬱な気持ちや無気力、不安定な気持ちを和らげてくれる効果があります。'
    }
]

// 診断結果の表示
const $result = document.getElementById('js-result');
const $result_2 = document.getElementById('js-result-2');
const $resultDetail = document.getElementById('js-resultDetail');
const $resultDetail_2 = document.getElementById('js-resultDetail-2');

// questionのスコア取得
const vataScore = localStorage.getItem('js-vata');
const pittaScore = localStorage.getItem('js-pitta');
const kaphaScore = localStorage.getItem('js-kapha');

// スコアの表示
document.getElementById('js-vata').textContent = vataScore;
document.getElementById('js-pitta').textContent = pittaScore;
document.getElementById('js-kapha').textContent = kaphaScore;


// 　診断結果タイプの出し分け
const setupResult = () => {
    if(vataScore > pittaScore || vataScore > kaphaScore){
        console.log($result.innerText = result[0].type);
        console.log($resultDetail.innerText = result[0].detail);
    
    } else if (pittaScore > vataScore || pittaScore > kaphaScore){
        console.log($result.innerText = result[1].type);
        console.log($resultDetail.innerText = result[1].detail);
        
    } else if (kaphaScore > vataScore || kaphaScore > pittaScore){
        console.log($result.innerText = result[2].type);
        console.log($resultDetail.innerText = result[2].detail);
    } 
    else if (vataScore ==  pittaScore){
        console.log($result.innerText = result[0].type);
        console.log($resultDetail.innerText = result[0].detail);
        console.log($result_2.innerText = result[1].type);
        console.log($resultDetail_2.innerText = result[1].detail);
    } else if (vataScore ==  kaphaScore){
        console.log($result.innerText = result[0].type);
        console.log($resultDetail.innerText = result[0].detail);
        console.log($result_2.innerText = result[2].type);
        console.log($resultDetail_2.innerText = result[2].detail);
    } else if (pittaScore ==  kaphaScore){
        console.log($result.innerText = result[1].type);
        console.log($resultDetail.innerText = result[1].detail);
        console.log($result_2.innerText = result[2].type);
        console.log($resultDetail_2.innerText = result[2].detail);
    } 
}
setupResult ();

