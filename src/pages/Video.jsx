import React from 'react';
import styled from 'styled-components';
import Comments from './Comments ';// Import the Comments component

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
  background-color: lightgray;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Recommend = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const VideoWrapper = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const VideoTitle = styled.h2`
  margin-top: 0;
`;

const VideoDescription = styled.p`
  color: #666;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const ActionButton = styled.button`
  background-color: #f1f1f1;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;
`;

const ViewsCount = styled.span`
  color: #666;
  margin-left: auto;
`;

const RecommendedVideoWrapper = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const RecommendedVideoTitle = styled.h3`
  margin-top: 0;
`;

const RecommendedVideoDescription = styled.p`
  color: #666;
`;

const RecommendedVideo = () => {
  return (
    <RecommendedVideoWrapper>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/RECOMMENDED_VIDEO_ID"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <RecommendedVideoTitle>Recommended Video Title</RecommendedVideoTitle>
      <RecommendedVideoDescription>Recommended Video Description</RecommendedVideoDescription>
    </RecommendedVideoWrapper>
  );
};

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          {/* Embedded YouTube video */}
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <VideoTitle>Video Title</VideoTitle>
          <VideoDescription>Video Description</VideoDescription>
          <label>channel 1yr</label>
          <Actions>
            
            <ActionButton>Like</ActionButton>
            <ActionButton>Dislike</ActionButton>
            <ActionButton>Share</ActionButton>
            <ActionButton>Subscribe</ActionButton>
            <ActionButton>Comment</ActionButton>
            <ViewsCount>1000 views</ViewsCount>
          </Actions>
        </VideoWrapper>
        <Comments /> {/* Add the Comments component */}
      </Content>
      <Recommend>
        <RecommendedVideo />
        <RecommendedVideo />
        <RecommendedVideo />
      </Recommend>
    </Container>
  );
};

export default Video;
