function compareTriplets(al, bo) {  

    let alice = 0, bob = 0;
    al.forEach((item, i) => {      // или // bo.forEach((item, i) => 
        (al[i] > bo[i]) && alice++;
        (al[i] < bo[i]) && bob++;
    });

    return [alice, bob];
}
