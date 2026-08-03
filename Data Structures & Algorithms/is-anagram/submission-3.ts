class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const s_size = s.length, t_size = t.length, isAnagram = new Array(26).fill(0), a_asc_code = 'a'.charCodeAt(0)



        if(s_size !== t_size) return false


        for(let i = 0; i < s.length; i++) {
            isAnagram[s[i].charCodeAt(0) - a_asc_code]++
            isAnagram[t[i].charCodeAt(0) - a_asc_code]--
        }

        return isAnagram.every(c => c === 0)

        // const objS: Record<string, number> = {};
        // const objT: Record<string, number>= {};
        // for (let i = 0; i < s.length; i++) {
        //     objS[s[i]] = (objS[s[i]] || 0) + 1
        //     objT[t[i]] = (objT[t[i]] || 0) + 1
        // }

        // for(s in objS) {
        //     if(objS[s] !== objT[s]) return false
        // }

        return true
    }
}
