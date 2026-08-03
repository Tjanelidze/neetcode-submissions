class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false

        const objS = {};
        const objT = {};
        for (let i = 0; i < s.length; i++) {
            objS[s[i]] = (objS[s[i]] || 0) + 1
            objT[t[i]] = (objT[t[i]] || 0) + 1
        }

        for(s in objS) {
            if(objS[s] !== objT[s]) return false
        }

        return true
    }
}
