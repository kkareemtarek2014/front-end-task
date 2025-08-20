import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { PropertyListing, APIResponse } from "@/types";

interface ListingsQuery {
  page?: number;
  limit?: number;
  search?: string;
  status?: string[];
  unitType?: string[];
  searchType?: "unitId" | "unitType";
}

export const listingsApi = createApi({
  reducerPath: "listingsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  tagTypes: ["Listings"],
  endpoints: (builder) => ({
    getListings: builder.query<APIResponse, ListingsQuery>({
      query: ({
        page = 1,
        limit = 8,
        search,
        status,
        unitType,
        searchType = "unitId",
      }) => {
        const sortField = searchType === "unitType" ? "unit_type" : "unit_id";

        const params = new URLSearchParams({
          _page: String(page),
          _limit: String(limit),
          _sort: sortField,
          _order: "asc",
        });

        if (search) {
          const searchField =
            searchType === "unitType" ? "unit_type_like" : "unit_id_like";
          params.set(searchField, search);
        }

        if (status && status.length > 0) {
          status.forEach((statusValue) => {
            if (statusValue && typeof statusValue === "string") {
              params.append("status", statusValue.toLowerCase());
            }
          });
        }
        if (unitType && Array.isArray(unitType) && unitType.length > 0) {
          unitType.forEach((unitTypeValue) => {
            if (unitTypeValue && typeof unitTypeValue === "string") {
              params.append("unit_type", unitTypeValue.toLowerCase());
            }
          });
        }

        return `listings?${params.toString()}`;
      },
      transformResponse: (response: PropertyListing[], meta): APIResponse => {
        const total =
          Number(meta?.response?.headers.get("X-Total-Count")) ||
          response.length;
        const url = new URL(meta!.response!.url);
        const limit = Number(url.searchParams.get("_limit")) || response.length;
        const page = Number(url.searchParams.get("_page")) || 1;
        return { data: response, total, page, limit };
      },
      providesTags: ["Listings"],
    }),
  }),
});

export const { useGetListingsQuery } = listingsApi;
