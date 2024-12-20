import React from 'react'

const VideoSection = () => {
    return (
        <div className='container mx-auto'>
            <iframe
                className='w-[1200px] h-[600px] mt-[80px] mx-auto rounded-[60px] '
                src="https://www.youtube.com/embed/7zhw8h6bXgw?si=KK4KikUEGQZAv1ZE"
                frameborder="0"
                allowfullscreen
            />
        </div>
    )
}

export default VideoSection