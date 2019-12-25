function snail(arr) {
    const next = ((step = 0) => (res, arr) => {
        switch (step++ % 4) {
            case 0: 
                return res.push(...arr.shift());
            case 1:
                return arr.forEach(a => { res.push(a.pop()) });
            case 2:
                return res.push(...arr.pop().reverse());
            case 3:
                return arr.slice().reverse().forEach(a => { res.push(a.shift()) });
        }
    })();
    
    const res = [];
    
    while (arr.length > 0 && arr[0].length > 0) {
        next(res, arr);
    }
  
    return res;
}
