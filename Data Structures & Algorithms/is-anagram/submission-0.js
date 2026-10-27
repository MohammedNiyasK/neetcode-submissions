class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const charMap = new Map();
        if(s.length !== t.length) return false;
        for(let i=0;i<s.length;i++){
          let currChar = s[i];
          if(charMap.has(currChar)){
            charMap.set(currChar, charMap.get(currChar) + 1);
          }else{
            charMap.set(currChar, 1);
          }
        }

        for(let i=0;i<t.length;i++){
            let currChar = t[i];
            if(charMap.has(currChar) && charMap.get(currChar) > 0){
                charMap.set(currChar, charMap.get(currChar) - 1);
            }else{
                return false;
            }
        }

        for(const val of charMap.values()){
            if(val !== 0){
                return false;
            }
        }

        return true;
    }
}
