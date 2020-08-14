import {useState} from 'react';

import validateForm from './validateForm';

function useForm(initValues) {
	const [values, setValues] = useState(initValues);
	const [hasErrors, setHasErros] = useState({});
	

	function setValue(index, value){
		setValues({
			...values,
			[index]: value
		})
	}

	function handleChange(event){
		setValue(
			event.target.getAttribute('name'),
			event.target.value
		);
	}

	function clearForm() {
		setValues(initValues);
		setHasErros({});
	}

	function validate(values){
		setHasErros(validateForm(values));
	}

	return {
		values,
		hasErrors,
		validate,
		handleChange,
		clearForm
	};
}

export default useForm;