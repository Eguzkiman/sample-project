export default function getAverageGrade(grades) {
	return grades.reduce((sum, i) => sum + i) / grades.length;
}
