import React from 'react'
import {useSupportHistoryQuery} from '../../services/postApis'
import PostCard from '../components/post-card';

const DonateHistory = () => {

  const { data, isSuccess } = useSupportHistoryQuery()

  return (
    <>
      <div className="flex-col items-center size-70 fam-posts">
          {isSuccess && data && data.length > 0 && (
            <>
              {data.map((post) => (
                <PostCard key={post.id} post={post}/>
              ))}
            </>
          )}
      </div>
    </>
  )
}

export default DonateHistory
