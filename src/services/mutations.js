import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "../configs/api";

export const useRegister = () => {
  const mutationFn = (data) => api.post("auth/register", data);

  return useMutation({ mutationFn });
};

export const useLogin = () => {
  const mutationFn = (data) => api.post("auth/login", data);

  return useMutation({ mutationFn });
};

export const useCreateProducts = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("products", data);

  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ["all-products"] });
  };

  return useMutation({ mutationFn, onSuccess });
};

export const useDeleteProducts = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.delete("products", data);

  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: ["all-products"] });
  };

  return useMutation({ mutationFn, onSuccess });
};
