import { isNil, isObject, some, keys } from 'lodash'
import { Action } from 'redux';

export function createReducer(_state: any, handlers: Record<string, Function>) {
  // initial state is required
  if (_state === undefined) {
      throw new Error('initial state is required')
  }

  // handlers must be an object
  if (isNil(handlers) || !isObject(handlers)) {
      throw new Error('handlers must be an object')
  }

  // handlers cannot have an undefined key
  if (some(keys(handlers), (key) => isNil(key))) {
      throw new Error('handlers cannot have an undefined key')
  }

  const customReducer = (state = _state, action: Action) => {
      let { type }  = action;
      const handler = !isNil(handlers[type]) ? handlers[type] : null;

      if (isNil(handler))
          return {...state};

      return handler(state, action);
  };

  return customReducer;
}