import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const  bookService = createApi({

     reducerPath: 'stateStudent',
     tagTypes: ["students"],
     baseQuery: fetchBaseQuery({
           baseUrl: 'http://localhost:4000',
           prepareHeaders: (headers, {getState}) =>{
             
                const {authSlice : {token},}  = getState()
                console.log('states:',token)
               headers.set("authorization", token ? token : '' )
               return headers
           }
     }),

     endpoints: (builder) =>({
     
              

     getbooks: builder.query({
          query: () =>({
            
                   url: 'students',
                   method: 'GET' 
          }),
          

            providesTags: ['students']
     }),

     createBooks : builder.mutation({ 
           query: (data) =>({
               headers:{
                    "Content-type": "application/json"
               },
               url: 'students',
               method: 'POST',

                 body: data
               
           }),

           invalidatesTags:["students"]
     }) ,
                
     
       deletBooks : builder.mutation({
            query: (id) =>({
                      url:`students/${id}`,
                      method: "DELETE"
            }),
            invalidatesTags:["students"]
       }),

 
       userLogin: builder.mutation({
            query: (user) =>{

                   console.log('user Login', user) 
                   return{

                   }
            }
       })
         
     }),

});


  
export const {useGetbooksQuery, useCreateBooksMutation, useDeletBooksMutation, useUserLoginMutation}  = bookService



