import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useSeats = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure()

    const { refetch,  data: seat = [] } = useQuery({
        queryKey: ['seats', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/seats?email=${user?.email}`)
            return res.data;
        },
      })

      return [seat, refetch]
}

export default useSeats;