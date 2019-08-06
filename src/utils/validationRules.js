export const required = value =>
	value ? null : "Обов'язкове поле"

export const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? "Мейл не валідний" : undefined