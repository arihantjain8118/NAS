from nltk.tokenize import sent_tokenize
from wordFrequency import createWordFreq
from sentScore import sentencesScores
from threshold import avgScore
from summary import generateSummary

text = '''new coronavirus case has been confirmed in India, taking the overall count to six in the country. The latest case has been reported in Jaipur, Rajasthan. The patient, an Italian tourist, tested positive for novel coranavirus on Tuesday, Union health ministry sources said.

The first sample collected from the tourist on Saturday had tested negative, but his condition deteriorated and a second sample was collected, which tested positive on Monday.

"Since there was a variation in the reports, samples were sent to the National Institute of Virology (NIV), Pune for testing," officials said, adding that it had tested positive.

On Monday, two new coronavirus cases were reported in India. The first case was in delhi and the second in Telangana. The patients have a travel history to Italy and Dubai, respectively. Italy of late has seen a spike in coronavirus cases and UAE (where Dubai is located) too has reported more than 20 positive cases so far. aking note of these cases, the government held and emergency meeting of the Group of Ministers formed to monitor the coronavirus outbreak.

On Tuesday, the Union health ministry issued a fresh travel advisroy. The government has decided to cancel all visa/eVisa that had been granted to nationals from Italy, Iran, South Korea and Japan on or before March 3. The ban is for those who had yet not entered India. In a statement, the government said this decision would be implemented with immediate effect.'''

#creating the word frequency table
freq_table = createWordFreq(text)

#tokenizing the sentences
sent = sent_tokenize(text)

#Scoring the sentences
scores = sentencesScores(sent, freq_table)

#finding the threshold
threshold = avgScore(scores)

#generating the summary
summary = generateSummary(sent, scores, 1.5*threshold)

print(summary)