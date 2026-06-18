import { useQuery } from '@tanstack/react-query';
import { fetchRoles } from '../services/rolesService';

export const useRoles = () => {
  return useQuery({
    queryKey: ['roles'],
    queryFn: fetchRoles,
  });
};
