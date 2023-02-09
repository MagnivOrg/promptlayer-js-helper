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
const requestStartTime = Date.now()
const response = await openai.createCompletion({
  model: model,
  prompt: prompt
});
const requestEndTime = Date.now()

// Log the request in PromptLayer
promptLayer(['js-test'], prompt, model, response.data, requestStartTime, requestEndTime);