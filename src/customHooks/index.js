import {useState} from 'react';

function useForm(initValues) {
	const [values, setValues] = useState(initValues);
	

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
	}

	return {
		values,
		handleChange,
		clearForm,
	};
}

export default useForm;