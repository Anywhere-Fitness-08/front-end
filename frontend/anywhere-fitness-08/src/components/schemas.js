import * as Yup from 'yup';


export const newClassFormSchema = Yup.object().shape({
    name: Yup.string().required('You must enter an event name'),
    type: Yup.string().required('Must enter a type of event'),
    start_time: Yup.string().required('Must enter a start time'),
    duration: Yup.string().required('Must enter a duration for the event'),
    intensity: Yup.string().required('Must select an intensity'),
    location: Yup.string().required('Must enter a location'),
    registered_max: Yup.string().required('Must enter a max number of students')
  })

export const loginSchema = Yup.object().shape({
    username: Yup.string().required('Please enter your username.'),
    password: Yup.string().required('Please enter your password')
  })

export const registerSchema = Yup.object().shape({
    firstName: Yup.string().required('You must enter your first name').min(2, 'Your first name must be 2 charaters or more'),
    lastName: Yup.string().required('You must enter your last name').min(2, 'Your last name must be 2 charaters or more'),
    email: Yup.string().required('you must enter a email'),
    username: Yup.string().required('You must enter a username').min(6, 'You must enter a username longer than 6 characters'),
    password: Yup.string().required('You must enter a password').min(6, 'You must enter a password longer than 6 characters')
})