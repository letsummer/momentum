const quotes = [
    {
        quote: "내가 알아서 할게",
        author: "이지영",
    },
    {
        quote: "자기인생 자기가 알아서",
        author: "이지영",
    },
    {
        quote: "하루하루 열심히 한다는 건 적금과도 같다",
        author: "최원태",
    },
    {
        quote: "난 귀한 존재야",
        author: "김성민",
    },
    {
        quote: "운동이 힘들어야지 정신차리지",
        author: "최재훈",
    },
    {
        quote: "끝날 때까지 끝난 게 아니다",
        author: "베이브 루스",
    },
    {
        quote: "우승 말고는 딱히 하고 싶지도 않습니다.",
        author: "이정후",
    },
    {
        quote: "뭐야...뭔소리야 이게?",
        author: "최원태",
    },
    {
        quote: "키움 빼고는 다 별로야",
        author: "오주원",
    },
    {
        quote: "얘는 진짜 키움을 사랑해",
        author: "심수창",
    },
    {
        quote: "팬분들 제가 초밥 사드리고 싶네요",
        author: "최원태",
    },
    {
        quote: "엄마가 잘생겼다는 사람 조심하래요",
        author: "이승호",
    },
    {
        quote: "사실 미리 하면 과제라는게 그렇게 어려운게 아니거든요?",
        author: "고해주",
    },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:nth-child(2)");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;