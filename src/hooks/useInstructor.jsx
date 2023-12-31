import { useEffect, useState } from "react";

const useInstructor = () => {
    const [instructors, setInstructor] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://assignment-12-server-flame-nu.vercel.app/instructors')
        .then(res => res.json())
        .then(data => {
            setInstructor(data)})
            setLoading(false)
    }, [])
    return [instructors, loading]
}

export default useInstructor;