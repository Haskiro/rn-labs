import React, { useState } from "react";

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues);

    const handleChange = (name) => (value) => {
        setForm((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return {
        form,
        handleChange,
    };
};