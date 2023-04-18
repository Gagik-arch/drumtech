
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


