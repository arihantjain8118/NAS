def avgScore(scores):
	sum = 0
	for val in scores:
		sum+=scores[val]

	avg_val = int(sum/len(scores))
	return avg_val