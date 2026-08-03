class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
   isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const count = new Int32Array(26);
    const a = 97; // 'a'.charCodeAt(0)

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - a]++;
        count[t.charCodeAt(i) - a]--;
    }

    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) return false;
    }
    return true;
}
}
