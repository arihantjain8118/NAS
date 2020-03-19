def generateSummary(sent, scores, threshold):
	summary = ''
	for sentence in sent:
		if sentence[:10] in scores and scores[sentence[:10]] > threshold:
			summary += ' ' + sentence

	return summary
