import promptLayer from './promptlayer.js';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const model = "code-davinci-002";
const prompt = "You: How do I combine arrays?\nJavaScript chatbot: You can use the concat() method.\nYou: How do you make an alert appear after 10 seconds?\nJavaScript chatbot";
const requestStartTime = Date.now()
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
const requestEndTime = Date.now()
promptLayer(['js-test'], prompt, model, response.data, requestStartTime, requestEndTime);