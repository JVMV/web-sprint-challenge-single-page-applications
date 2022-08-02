import * as yup from 'yup';

const orderSchema = yup.object().shape({
    nameinput: yup
        .string()
        .trim()
        .required('Please enter a name for the order')
        .min(2, "name must be at least 2 characters"),
    address: yup
        .string()
        .trim()
        .required('We need an address for the order')
        .min(10, "A valid address is needed"),
    email: yup
        .string()
        .email('We need an email for the order')
        .required('Please enter an email'),
    pizzaStyle: yup
        .string()
        .oneOf(['artisan', 'deepdish', 'original'], 'Select a pizza style'),
    pizzaSize: yup
        .string()
        .oneOf(['personal', 'medium', 'large'], 'Select a pizza size'),
    yerp: yup
        .string()
        .oneOf(['yerp', 'nah'], 'YERR?!'),
    specialInstructions: yup
        .string()
        .max(60, 'Maximum of 60 characters'),
    
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushrooms: yup.boolean(),
    cheese: yup.boolean(),
    cheesyMac: yup.boolean(),
    salad: yup.boolean(),
    breadsticks: yup.boolean(),
    pasta: yup.boolean(),
    brisk: yup.boolean(),
    horchata: yup.boolean(),
    beer: yup.boolean(),
    wine: yup.boolean()
})

export default orderSchema