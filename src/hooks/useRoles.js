import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { fetchRoles } from '../services/rolesService';

export const useRoles = () => {
  const query = useQuery({
    queryKey: ['roles'],
    queryFn: fetchRoles,
  });

  const toastIdRef = useRef(null);

  useEffect(() => {
    if (query.isLoading) {
      toastIdRef.current = toast.loading('Loading roles...');
    }
  }, [query.isLoading]);

  useEffect(() => {
    if (query.isSuccess) {
      toast.success('Roles fetched successfully', { id: toastIdRef.current });
    }
  }, [query.isSuccess]);

  useEffect(() => {
    if (query.isError) {
      toast.error('Failed to fetch roles', { id: toastIdRef.current });
    }
  }, [query.isError]);

  return query;
};
