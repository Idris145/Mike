const say = require('say');

const introMessage = 'Hello! My name is Mike, your virtual assistant. I\'m here to help you with tasks, answer your questions, and make your day a bit easier. Whether you need information, reminders, or just someone to talk to, I\'m here to assist. Let me know how I can be of service!';

// Using default system voice and speed
say.speak(introMessage);

// If you want to use a specific voice (voice names will vary by system, so you might need to experiment or check documentation/platform specifics)
// say.speak(introMessage, 'Alex'); // replace 'Alex' with voice of your choice
