import promptLayer from './promptlayer.js';
import { Configuration, OpenAIApi } from "openai";

// Create a new OpenAI API client
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Make a request to the OpenAI API
const model = "text-davinci-003";
const prompt = "Q: How do I combine arrays in Javascript?\nA:";
var requestStartTime = Date.now()
const response = await openai.createCompletion({
  model: model,
  prompt: prompt
});

var requestEndTime = Date.now()
promptLayer(['js-test'], model, "openai.Completion.create", prompt, undefined, response.data, requestStartTime, requestEndTime);

//chatcompletion example
var messages = [{role: "user", content: "Hello world"}]
requestStartTime = Date.now()
const completion = await openai.createChatCompletion({
  model: "gpt-4",
  messages: messages,
});
requestEndTime = Date.now()
promptLayer(['js-test-completion'], "gpt-4" , "openai.ChatCompletion.create", undefined, messages, completion.data, requestStartTime, requestEndTime);