import { Box } from "@chakra-ui/react";

const VideoPlayer = (props) => {
  return (
    <Box>
      <video
        controls={false}
        autoPlay
        muted
        playsInline
        style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        onEnded={props.onVideoOver}
      >
        <source src={props.videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoPlayer;
