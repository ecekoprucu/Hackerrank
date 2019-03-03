function rankAndScore(scores){
    let obj = {};
    let rank = 1;


    for(let key of scores){
        if(!obj.hasOwnProperty(key)){
            let pair = {[key]: rank}
            obj = {...obj, ...pair};

            rank++;
        }
    }

    return obj;
}


function climbingLeaderboard(scores, alice) {
    let res=[];
    let rankedscores=rankAndScore(scores);

    for(let score of alice){
        if(scores.length===0){
            res.push(1);
        } else {
            for(let i=scores.length-1; i>=0; i--){
                if(scores[i]===score){
                    res.push(rankedscores[score]);
                    break;
                } else if (score<scores[i]){
                    res.push(rankedscores[scores[i]]+1);
                    break;
                } else if (score>scores[0]){
                    res.push(1);
                    break;
                }
            }
        }
    }
