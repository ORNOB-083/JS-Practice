//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
    if (typeof currentPrice === 'number' && typeof discount === 'number' && !isNaN(currentPrice) && !isNaN(discount)) {
        const discountAmount = (currentPrice * discount) / 100;
        const newPrice = currentPrice - discountAmount;
        return newPrice.toFixed(3);
    }
    return 'Invalid';
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    if (typeof otp === 'string' && otp.startsWith('ph-') && otp.length === 8) {
        return true;
    }
    else if (typeof otp !== 'string') {
        return 'Invalid'
    }
    return false;
}

//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
    if (typeof omr !== 'object' || Array.isArray(omr) || omr === null) {
        return 'Invalid';
    }
    let { right, wrong, skip } = omr;
    if ((omr.right + omr.wrong + omr.skip) === 100) {
        const calculation = (right * 1) - (wrong * 0.5);
        return Math.round(calculation);
    }
    return 'Invalid';
}

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
    if (!Array.isArray(array)) {
        return 'Invalid';
    }
    else {
        let countHa = 0;
        let countNa = 0;
        for (const cal of array) {
            if (cal === 'ha') {
                countHa++;
            }
            else if (cal === 'na') {
                countNa++;
            }
        }
        if (countHa > countNa) {
            return true;
        }
        else if (countHa === countNa) {
            return 'equal';
        }
        return false;
    }
}

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
    if (typeof str !== 'string' || str.trim() === '') {
        return 'Invalid';
    }
    else {
        let count = 0;
        for (const res of str) {
            if (res === ' ') {
                count--;
            }
            count++;
        }
        const words = str.split(' ');
        let longestWord = '';
        for (const word of words) {
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        }
        return { "longwords": longestWord, "token": count };
    }
}