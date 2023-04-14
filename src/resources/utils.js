const getShortHandOfEdge = (style, ...values) => {
  const _genCss = (...values) => ({
    [style + "Top"]: values[0],
    [style + "Right"]: values[1],
    [style + "Bottom"]: values[2],
    [style + "Left"]: values[3],
  });
  if (values.length === 1) {
    return _genCss(values[0], values[0], values[0], values[0]);
  }
  if (values.length === 2) {
    return _genCss(values[0], values[1], values[0], values[1]);
  }
  if (values.length === 3) {
    return _genCss(values[0], values[1], values[2], values[1]);
  }
  return _genCss(values[0], values[1], values[2], values[3]);
};

export function padding(...values) {
  return getShortHandOfEdge("padding", ...values);
};

export const margin = (...values) => getShortHandOfEdge("margin", ...values);

export const validateFields = (query = [], data = []) => {
  return data?.filter(r => query.includes(r)).length < query.length;
};

export const onChangeBody = (e, body, setBody) => {
  const bodyCopy = JSON.parse(JSON.stringify(body));
  if (e.text === "") {
    delete bodyCopy[e.name];
    setBody(bodyCopy);
    return;
  }
  if (e.isValid !== undefined) {
    if (e.isValid) {
      bodyCopy[e.name] = e.text;
    } else {
      delete bodyCopy[e.name];
    }
  } else {
    bodyCopy[e.name] = e.text;
  }
  setBody(bodyCopy);
};
