import SignItem from "./SignItem";

const SIGNS = [
  {
    id: "a",
    letter: "a",
    image: "images/signs/a.png",
  },
  {
    id: "b",
    letter: "b",
    image: "images/signs/b.png",
  },
  {
    id: "c",
    letter: "c",
    image: "images/signs/c.png",
  },
  {
    id: "d",
    letter: "d",
    image: "images/signs/d.png",
  },
  {
    id: "e",
    letter: "e",
    image: "images/signs/e.png",
  },
  {
    id: "f",
    letter: "f",
    image: "images/signs/f.png",
  },
  {
    id: "g",
    letter: "g",
    image: "images/signs/g.png",
  },
  {
    id: "h",
    letter: "h",
    image: "images/signs/h.png",
  },
  {
    id: "i",
    letter: "i",
    image: "images/signs/i.png",
  },
  {
    id: "j",
    letter: "j",
    image: "images/signs/j.png",
  },
  {
    id: "k",
    letter: "k",
    image: "images/signs/k.png",
  },
  {
    id: "l",
    letter: "l",
    image: "images/signs/l.png",
  },
  {
    id: "m",
    letter: "m",
    image: "images/signs/m.png",
  },
  {
    id: "n",
    letter: "n",
    image: "images/signs/n.png",
  },
  {
    id: "o",
    letter: "o",
    image: "images/signs/o.png",
  },
  {
    id: "p",
    letter: "p",
    image: "images/signs/p.png",
  },
  {
    id: "q",
    letter: "q",
    image: "images/signs/q.png",
  },
  {
    id: "r",
    letter: "r",
    image: "images/signs/r.png",
  },
  {
    id: "s",
    letter: "s",
    image: "images/signs/s.png",
  },
  {
    id: "t",
    letter: "t",
    image: "images/signs/t.png",
  },
  {
    id: "u",
    letter: "u",
    image: "images/signs/u.png",
  },
  {
    id: "v",
    letter: "v",
    image: "images/signs/v.png",
  },
  {
    id: "w",
    letter: "w",
    image: "images/signs/w.png",
  },
  {
    id: "x",
    letter: "x",
    image: "images/signs/x.png",
  },
  {
    id: "y",
    letter: "y",
    image: "images/signs/y.png",
  },
  {
    id: "z",
    letter: "z",
    image: "images/signs/z.png",
  },
  {
    id: " ",
    letter: " ",
    image: "images/signs/blank.png",
  },
];

const TranslationResult = ({ inputPhrase }) => {
  let newArray = [];

  const lowerCaseArray = inputPhrase.toLowerCase().split("");

  lowerCaseArray.forEach((letter) => {
    newArray.push(SIGNS.find((sign) => sign.id === letter));
  });
  console.log(newArray);

  const translated = newArray.map((sign, index) => {
    return (
      <SignItem key={sign.id + index} letter={sign.letter} image={sign.image} />
    );
  });

  return (
    <section className="translated">
      <h3 className="mb-5">{inputPhrase}</h3>
      <div className="sign-list">{translated}</div>
    </section>
  );
};

export default TranslationResult;
