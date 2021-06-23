import { useState } from "react"

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)
    const onChangeInput = (e) => {
        const newValue = e.target.value
        const fildName = e.target.name

        setForm({ ...form, [fildName]: newValue })
    }
    return[form, onChangeInput]
}
