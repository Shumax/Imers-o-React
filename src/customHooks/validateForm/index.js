export default function validateForm (values) {
	let errors = {};

	if (!values.category) {
		errors.category = "Você precisa selecionar uma categoria!";
	}

	return errors;
}