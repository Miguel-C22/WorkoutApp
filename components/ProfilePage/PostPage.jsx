import React, { useEffect } from 'react'
import  useFetchUsersPosts from "../../customHooks/fetchUsersPosts"
import useLoader from '../../customHooks/loader';

function PostPage() {
     //Call function to fetch data to display all Posts posts
     const { fetchPosts, publicData } = useFetchUsersPosts()
     const {loading, setLoading, Loader} = useLoader()
     
     useEffect(() => {
      if (publicData.length < 0) {
          setLoading(true);
      } else {
          setLoading(false);
          console.log('Public Data:', publicData);
      }
  }, [publicData]);

  return (
    <div>
      {loading ? "loading" : 
        <>
          {publicData.map(data => {
            console.log(data._id)
            return (
              <React.Fragment key={data._id}>
                <p>{data.description}</p>
                {data.exercises.map(data => {
                  return (
                    <React.Fragment key={data._id}>
                    {data.exercise}
                  </React.Fragment>
                  )
                })}
              </React.Fragment>
            )
          })
        }
      </>}
    </div>
  )
}

export default PostPage