const arr = [
  {
    name: "Khoi",
  },
  {
    name: "Nam",
  },
  {
    name: "Viet",
  },
];
const htmlTemplate = `
<ul>
    <li>
    ${arr.map((item) => {
      // Phần này không còn là code JS nữa rồi, nó thành thẻ html
      return <div>${item}</div>;
    })}
    </li>
</ul>
`;
