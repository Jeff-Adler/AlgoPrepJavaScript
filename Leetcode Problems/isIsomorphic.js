const isIsomorphic = (s, t) => {
  let sMap = {};

  for (let i = 0; i < s.length; i++) {
    if (
      (map[s[i]] && map[s[i]] !== t[i]) ||
      (Object.values(map).includes(t[i]) && !Object.keys(map).includes(s[i]))
    ) {
      return false;
    }
    map[s[i]] = t[i];
    console.log(map);
  }

  return true;
};

console.log(isIsomorphic('egg', 'add'));
