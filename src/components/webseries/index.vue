<template>
  <v-component class="mx-4">
    <v-row>
      <v-col class="text-center mt-2 pb-0">
        <h1>Web Series</h1>
      </v-col>
    </v-row>
    <v-row class="px-4">
      <template v-for="(item, index) in videoItems" :key="index">
        <v-col cols="12" sm="6" md="4" lg="4" xl="4">
          <v-sheet class="video-container">
            <div class="video-title-bar">
              {{ item.title }}
            </div>
            <!-- Show thumbnail until clicked -->
            <div
              v-if="!videoActive[index]"
              class="thumbnail-container"
              @click="activateVideo(index)"
            >
              <img
                :src="getYouTubeThumbnailUrl(item.vidUrl)"
                :alt="item.title"
                class="thumbnail-image"
              />
              <div class="play-button">
                <v-icon color="white" size="large">mdi-play</v-icon>
              </div>
            </div>

            <!-- Show iframe only after clicking -->
            <iframe
              v-if="videoActive[index]"
              :src="videoUrls[index]"
              :title="item.title"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              class="video-iframe"
            ></iframe>
          </v-sheet>
        </v-col>
      </template>
    </v-row>
  </v-component>
</template>

<script>
export default {
  data() {
    const videoItems = [
      {
        title: "Web Series Episode 1",
        vidUrl: "https://www.youtube.com/embed/VgFy6h3Z0z0?si=PvhUnjooGbcDjKr9",
      },
      {
        title: "Web Series Episode 2",
        vidUrl: "https://www.youtube.com/embed/aN1IsmQEQ88?si=4IwOk0zgQtgZQ_6u",
      },
      {
        title: "Web Series Episode 3",
        vidUrl: "https://www.youtube.com/embed/HfpvCg98qoA?si=B9z9S-EbVc5J3jdz",
      },
      {
        title: "Web Series Episode 4",
        vidUrl: "https://www.youtube.com/embed/mRwLYcdPq2s?si=6-_gAH3_ib30AGN-",
      },
    ];
    return {
      videoItems: videoItems,
      videoActive: Array(videoItems.length).fill(false),
      videoUrls: videoItems.map((item) => item.vidUrl),
    };
  },
  methods: {
    activateVideo(index) {
      let videoUrl = this.videoItems[index].vidUrl;

      // Only process if the URL isn't empty
      if (videoUrl) {
        // Add autoplay parameter
        if (videoUrl.includes("?")) {
          videoUrl = `${videoUrl}&autoplay=1`;
        } else {
          videoUrl = `${videoUrl}?autoplay=1`;
        }

        // Update the URL in the dedicated array
        this.videoUrls[index] = videoUrl;
      }

      // Set the video as active
      this.videoActive[index] = true;

      console.log("Video activated:", index, "URL:", this.videoUrls[index]);
    },
    getYouTubeThumbnailUrl(videoUrl) {
      // Return placeholder for empty URLs
      if (!videoUrl) {
        return "/api/placeholder/400/320";
      }

      // Extract video ID from YouTube embed URL
      const regExp = /embed\/([\w-]+)/;
      const match = videoUrl.match(regExp);

      if (match && match[1]) {
        const videoId = match[1];
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      }

      return "/api/placeholder/400/320";
    },
  },
};
</script>
<style scoped>
.video-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
}

.video-title-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  z-index: 10;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.video-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumbnail-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: #000;
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.thumbnail-container:hover .play-button {
  background-color: rgba(255, 0, 0, 0.8);
}

/* Responsive adjustments */
@media (min-width: 1200px) {
  .play-button {
    width: 80px;
    height: 80px;
  }
  .video-title-bar {
    font-size: 16px;
    padding: 10px 15px;
  }
}
@media (max-width: 600px) {
  .video-title-bar {
    font-size: 12px;
    padding: 6px 8px;
  }
}
</style>
