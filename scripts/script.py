import pyttsx3
introMessage = 'Hello! My name is Mike, your virtual assistant. I\'m here to help you with tasks, answer your questions, and make your day a bit easier. Whether you need information, reminders, or just someone to talk to, I\'m here to assist. Let me know how I can be of service!'
engine = pyttsx3.init()

# Set properties before adding things to say
engine.setProperty('rate', 150)   # Speed percent (can go over 100)
engine.setProperty('volume', 0.8)  # Volume 0.0 to 1.0

# Get available voices and select one
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[1].id)  # Change index based on your system

engine.say(introMessage)
engine.runAndWait()
