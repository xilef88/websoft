



function generateLottoNumbers() {
    let data = {
        lotto: []
    };
    for (let i = 0; i < 7; i++) {
        const randomNumber = Math.floor((Math.random() * 35) + 1);
        if (data.lotto.includes(randomNumber)) {
            i--;
        } else {
            data.lotto.push(randomNumber);
        }
    }
    data.lotto.sort(
        (a, b) => {
            return a - b
        }
    );
    return data.lotto;
}
 const lottoNumbers = generateLottoNumbers();
 document.getElementById("lotto").innerHTML = lottoNumbers;
