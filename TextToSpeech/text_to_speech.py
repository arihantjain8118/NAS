# Import the required module for text 
# to speech conversion 
from gtts import gTTS 
#from playsound import playsound as ps
# This module is imported so that we can 
# play the converted audio 
import os 
import pygame
# The text that you want to convert to audio
def play_audio(mytext):

    # Language in which you want to convert 
    language = 'en'

    # Passing the text and language to the engine, 
    # here we have marked slow=False. Which tells 
    # the module that the converted audio should 
    # have a high speed
    
    myobj = gTTS(text=mytext, lang=language, slow=False) 

    # Saving the converted audio in a mp3 file named 
    # welcome 
    myobj.save("welcome.mp3")
    
    #ps('welcome.mp3')
    # Playing the converted file 
    #os.system("mpg321 welcome.mp3")
    pygame.mixer.init()
    pygame.mixer.music.load("welcome.mp3")

    pygame.mixer.music.play()

    while pygame.mixer.music.get_busy() == True:
        continue
    
play_audio("This is the news")



