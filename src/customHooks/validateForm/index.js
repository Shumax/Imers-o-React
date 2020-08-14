export default function validateForm (values) {
	let errors = {};

	if (!values.category) {
		errors.category = "Você precisa selecionar uma categoria!";
	}

	if(!values.titulo) {
		errors.titulo = "Digite um nome para a categoria!";
	}

	return errors;
}