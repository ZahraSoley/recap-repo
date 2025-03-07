import { useState } from "react"

const wait = (ms) => { return new Promise((resolve) => setTimeout(resolve, ms)) }

const useSubmit = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState(null)

    const submit = async (data, ms) => {
        setIsLoading(true)
        try {
            await wait(ms)
            setResponse({
                type: 'success',
                message: `see you soon on ${data.date}`
            })
        }
        catch (error) {
            setResponse({
                type: 'fail',
                message: "something went wrong!"
            })
        }
        finally {
            setIsLoading(false)
        }
    }

    return { submit, response, isLoading }
}
export default useSubmit;
