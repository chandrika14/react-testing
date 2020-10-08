import { SAVE } from './types';

export function save(data) {
  return {
    type: SAVE,
    data
  }
}
