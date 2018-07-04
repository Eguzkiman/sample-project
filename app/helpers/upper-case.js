import { helper } from '@ember/component/helper';

export function upperCase(params/*, hash*/) {
	let [text] = params;
	return text.toUpperCase();
}

export default helper(upperCase);
