import {ChangeEvent, memo, useCallback, useState} from "react";

export const Container = memo(() => {

    return (
        <>
            <Input/>
            <Title title="Я title" />
        </>
    );
});


const Title = (props: { title: string }) => {
    console.log('title')
        return (
            <h3>{props.title}</h3>
        )
};

const Input = memo(() => {
    const [value, setValue] = useState('');

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }, []);

    return (
        <input type="text" placeholder="Placeholder" value={value} onChange={handleChange} />
    )
})