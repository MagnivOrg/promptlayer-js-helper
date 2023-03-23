// Credit to Dominic Nguyen https://twitter.com/domng_me for making this helper function
export default async function promptLayer(tags, engine, functionName, prompt, messages, requestResponse, requestStartTime, requestEndTime) {
  if (!process.env.PROMPTLAYER_API_KEY) {
    console.error('promptLayer', 'no api key')
    return Promise.resolve();
  }
  
  if (prompt === null && messages === null) {
    console.error('promptLayer', 'no prompt or messages')
    return Promise.resolve();
  }

  var kwargs = {"engine": engine};
  if (messages !== null) {
    kwargs["messages"] = messages;
  } 
  if (prompt !== null) {
    kwargs["prompt"] = prompt;
  }

  try {
    const requestInput = {
      "function_name": functionName,
      "args": [],
      "kwargs": kwargs,
      "tags": tags,
      "request_response": requestResponse,
      "request_start_time": Math.floor(requestStartTime / 1000),
      "request_end_time": Math.floor(requestEndTime / 1000),
      "api_key": process.env.PROMPTLAYER_API_KEY,
    };
    const data = await fetch('https://api.promptlayer.com/track-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(requestInput),
    })
  } catch (e) {
    console.error('promptLayer error', e);
  }
}