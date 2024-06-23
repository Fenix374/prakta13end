import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { TextField, Button, FormControl, InputLabel, FormHelperText } from '@mui/material';
import { CREDENTIALS } from './CREDENTIALS';

const FeedbackForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const sendEmail = (data) => {
        const emailData = {
            name: data.name,
            email: data.email,
            message: data.message
        };

        emailjs.send(CREDENTIALS.serviceId, CREDENTIALS.templateId, emailData, CREDENTIALS.userId)
            .then((result) => {
                console.log(result.text);
                console.log("SVO");
                reset();
            }, (error) => {
                console.error(error.text);
            });
    };

    return (
        <form className="feedback-form" onSubmit={handleSubmit(sendEmail)}>
            <TextField
                id="name"
                label="Имя"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register('name', {required: true})}
                error={!!errors.name}
                helperText={errors.name && 'Поле обязательно для заполнения'}
            />

            <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register('email', {required: true, pattern: /^\S+@\S+$/i})}
                error={!!errors.email}
                helperText={errors.email && 'Введите корректный email'}
            />

            <TextField
                id="message"
                label="Сообщение"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                margin="normal"
                {...register('message', {required: true})}
                error={!!errors.message}
                helperText={errors.message && 'Поле обязательно для заполнения'}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
                Отправить
            </Button>
        </form>


    );
};

export default FeedbackForm;
