/*
2023.11.23
소멘텀 메인에 뜨는 명언
랜덤으로 나오게 한다.
*/

const quotes = [
    {
        quote:"허물이 있다면, 버리기를 두려워 말라",
        author:"공자",
    },
    {
        quote:"나이가 성숙을 보장하지는 않는다",
        author:"라와나 블랙웰",
    },
    {
        quote:" 인생에서 많은 패배에 직면하겠지만 결코 패배하지 말라",
        author:"마야 안젤루",
    },
    {
        quote:"인생에서 가장 큰 영광은 넘어지지 않는 것에 있는 것이 아니라 매번 일어선다는 데 있다",
        author:"넬슨 만델라",
    },
    {
        quote:"생활은 과감한 모험이거나 아니면 아무것도 아니다",
        author:"헬렌켈러",
    },
    {
        quote:"이또한 지나가리라",
        author:"에트 혹 트란시비트",
    },
    {
        quote:"내 인생을 바꾸는 사람은 자신입니다. 아무도 대신해줄 수 없어요",
        author:"캐롤 버넷",
    },
    {
        quote:"인생은 불공평 합니다. 익숙해지세요",
        author:"빌 게이츠",
    },
    {
        quote:"즐거움은 영원히 유행에 뒤떨어지지 않는다",
        author:"릴리 퓰리처",
    },
    {
        quote:"인생은 산이다. 당신의 목표는 정상에 도달하는 것이 아니라 당신의 길을 찾는 것이다",
        author:"막심 라가세",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[Math.floor(Math.random() * quotes.length)]);
const todatQuote = quotes[Math.floor(Math.random() * quotes.length)];

// quote.innerText = quotes[Math.floor(Math.random() * quotes.length)].quote;
// author.innerText = quotes[Math.floor(Math.random() * quotes.length)].author;

quote.innerText = todatQuote.quote;
author.innerText = todatQuote.author;
