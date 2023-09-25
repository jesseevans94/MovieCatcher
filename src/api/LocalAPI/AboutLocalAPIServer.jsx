import { useEffect, useState } from "react"
import AboutLocalApiList from "./AboutLocalApiList"

const AboutLocalApiServer = () => {
    const [bioData, setBioData] = useState([]);

    const baseURL = 'http://localhost:8080/bio/'
    useEffect(() => {
        fetchBio('all')
    }, [])
    const fetchBio = async (name) => {
        let url = baseURL
        if (name) {
            url += `name/${name}`
        }
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const data = await response.json()
            setBioData(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <AboutLocalApiList bioList={bioData} />
        </div>
    )
}
export default AboutLocalApiServer