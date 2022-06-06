import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseUrl = 'http://localhost:4000'

export const apiSlice = createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseUrl}) ,
    tagTypes:['Students'],
    endpoints: builder =>({
            getCategories: builder.query({
                //get request 
                 query:()=> '/students',
                  
                  providesTags:['Students']
                
            }),

            addTranstion:builder.mutation({
                query:(initial) =>({
                    url:'/students',
                    method:"POST",
                    body:initial,
                     


                }),
               
                invalidatesTags:['Students']
                
            }),
            deletTranstion:builder.mutation({
                query:(id) =>({
                    url:`/students/${id}`,
                    method:"DELETE",
                 
                   
                }),
        
                invalidatesTags:['Students']
                
            }),
         

            updateTranstion:builder.mutation({
                query:({id, ...rest}) =>({
                    url:`/students/${id}`,
                    method:"PUT",
                    body:rest
                 
                   
                }),

                invalidatesTags:['Students']
            }),
        

    })
})





export default apiSlice;