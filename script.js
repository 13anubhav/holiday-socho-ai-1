const chatContainer = document.getElementById('chat-container');
const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const form = document.querySelector('form');

const openaiApiKey = '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';
const modelEngine = 'text-davinci-003'; // or other models like curie, babbage, etc.

const openaiInstance = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    Authorization: `Bearer ${openaiApiKey}`,
    'Content-Type': 'application/json',
  },
});

const generateResponse = async (message) => {
const prompt = `The following is a conversation with a ChatGPT. The bot will respond to your messages. \n\nUser: ${message}\nChatGPT:`;

const response = await openaiInstance.post('/engines/' + modelEngine + '/completions', {
prompt: prompt,
max_tokens: 250, // Set max_tokens to 500 for a word limit of 500 words
n: 1,
// stop: '\n',
});

return response.data.choices[0].text.trim();
var output =response.data.choices[0].text.trim();
console.log(output);
alert(output)
  
};

  const addMessageToChat = (message, sender) => {
    const newMessage = document.createElement('div');
    newMessage.innerText = `${sender}: ${message}`;
    chatHistory.appendChild(newMessage);
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    const userInputValue = userInput.value;
    addMessageToChat(userInputValue, 'User');
    const response = await generateResponse(userInputValue);
    addMessageToChat(response, 'ChatGPT');
    userInput.value = '';
  };

  form.addEventListener('submit', sendMessage);


fun();
console.log(output);

function getCapitalLetters(str) {
var capitalLetters = [];

for (var i = 0; i < str.length; i++) {
var char = str.charAt(i);

if (char >= "A" && char <= "Z") {
  capitalLetters.push(char);
}
}

return capitalLetters;
}
