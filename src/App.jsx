import { atom, useRecoilValue } from "recoil";

const Atom = atom({
  key: "someKey",
  default: NaN,
});

function App() {
  const recoilValue = useRecoilValue(Atom);
  return <div>{String(recoilValue)}</div>;
}

export default App;
