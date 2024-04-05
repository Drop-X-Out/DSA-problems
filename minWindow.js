/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t === "") return "";

    const countT ={};
    const window ={};

    for (let c of t){
        countT[c] = 1 +(countT[c] || 0)
    }

    let have =0;
    const need = Object.keys(countT).length;
    let res = [-1,-1];
    let resLen = Infinity;
    let l=0

    for(let r =0 ;r < s.length;r++){
        const char = s[r];

        window[char] = 1+(window[char] || 0 );

        if(countT[char] && window[char] === countT[char]){
            have++
        }

        while(have === need){
            if(r-l +1<resLen){
                res = [l,r];
                resLen=r-l+1;
            }

            window[s[l]]--;
            if(countT[s[l]] && window[s[l]] < countT[s[l]]){
                have--
            }
         l++   
        }
        
    }

    const [start,end] = res
    return resLen!== Infinity ? s.substring(start,end+1):'';
};