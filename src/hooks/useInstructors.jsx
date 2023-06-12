import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructors = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructors/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isInstructor, isInstructorLoading]
}

export default useInstructors;