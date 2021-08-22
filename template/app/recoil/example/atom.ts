import {atom} from 'recoil';

interface ExampleAtom {
  name: string;
  value: string;
}

const exampleAtom = atom({
  key: 'exampleAtom',
  default: 'default' as string,
});

export default exampleAtom;
