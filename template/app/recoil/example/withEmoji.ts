import {selector} from 'recoil';
import exampleAtom from './atom';

const withEmoji = selector({
  key: 'withEmoji',
  get: ({get}) => {
    let value = get(exampleAtom);
    return `😀${value} 😃`;
  },
});

export {withEmoji};
