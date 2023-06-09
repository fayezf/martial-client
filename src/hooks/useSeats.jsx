import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useSeats = () => {
    const {user} = useContext(AuthContext);

    const { refetch,  data: seat = [] } = useQuery({
        queryKey: ['seats', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/seats?email=${user.email}`)
            return res.json()
        },
      })

      return [seat, refetch]
}

export default useSeats;