let t = new Date()
    , rocy = t.getFullYear() - 1911
    , arr = rocy.toString().split("")
    , char = ""
    , ROCY = "";
for (let k in arr) {
    switch (+arr[k]) {
        case 1:
            char = "一"
            break;
        case 2:
            char = "二"
            break;
        case 3:
            char = "三"
            break;
        case 4:
            char = "四"
            break;
        case 5:
            char = "五"
            break;
        case 6:
            char = "六"
            break;
        case 7:
            char = "七"
            break;
        case 8:
            char = "八"
            break;
        case 9:
            char = "九"
            break;
        default:
            char = "〇"
    }
    ROCY += char;
}
console.log("中華民國" + ROCY + "年");