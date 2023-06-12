import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructors = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/teachers/${user?.email}`);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
}

export default useInstructors;