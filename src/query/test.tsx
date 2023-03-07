import { useQuery } from "@tanstack/react-query"
import { AxiosResponse, AxiosError } from "axios"

import { API_ENDPOINT_FIZZBUZZ } from "../constants/api-endpoint"
import { getApiClient } from "../modules/axios"
import { MultipleTest } from "../type"

const getMultipleValue = (count: number) => {
  return getApiClient({
    "Content-Type": "application/json",
  }).post(`/${API_ENDPOINT_FIZZBUZZ}`, count)
}

export const useGetMultipleValue = (
  count: number,
) => {
  return useQuery<AxiosResponse<MultipleTest>, AxiosError>(
    ["getValue", count],
    () => getMultipleValue(count)
  )
}