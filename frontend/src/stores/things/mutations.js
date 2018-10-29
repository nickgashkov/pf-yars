const setThing = (state, payload) => {
  state.thing = payload.thing;
};

const setThings = (state, payload) => {
  state.things = payload.things;
};

export { setThing };
export { setThings };
