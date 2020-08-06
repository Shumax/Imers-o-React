import {useState} from 'react';

function useForm(initValuesCategory) {
	const [valuesCategory, setValuesCategory] = useState(initValuesCategory);

	function setValue(index, value){
		setValuesCategory({
			...valuesCategory,
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
		setValuesCategory(initValuesCategory);
	}

	return {
		valuesCategory,
		handleChange,
		clearForm,
	};
}

export default useForm;