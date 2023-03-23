import promptLayer from './promptlayer.js';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// completion example
const model = "code-davinci-002";
var prompt = "You: How do I combine arrays?\nJavaScript chatbot: You can use the concat() method.\nYou: How do you make an alert appear after 10 seconds?\nJavaScript chatbot";
var requestStartTime = Date.now()
const response = await openai.createCompletion({
  model: model,
  prompt: prompt,
  temperature: 0,
  max_tokens: 60,
  top_p: 1.0,
  frequency_penalty: 0.5,
  presence_penalty: 0.0,
  stop: ["You:"],
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