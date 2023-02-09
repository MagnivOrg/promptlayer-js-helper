import promptLayer from './promptlayer.js';

const time = Math.floor(Date.now() / 1000);
const fakeRequestResponse = { 
    "id": "cmpl-fakefakefakefake", 
    "object": "text_completion", 
    "created": 1673388884, 
    "model": "text-engine-123", 
    "choices": [ { "text": "\n\nN/A", "index": 0, "logprobs": null, "finish_reason": "stop" } ], 
    "usage": { "prompt_tokens": 563, "completion_tokens": 5, "total_tokens": 568 } 
}
promptLayer(['js-test'], 'hi this is a fake prompt', 'test-engine-123', fakeRequestResponse, time, time);