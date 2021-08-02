import {atom} from 'recoil';

interface ExampleAtom {
  name: string;
  value: string;
}

const exampleAtom = atom({
  key: 'exampleAtom',
  default: {} as ExampleAtom,
});

export default exampleAtom;
