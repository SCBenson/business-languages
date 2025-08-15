<template>
  
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center"> <img :src="bgLogoUrl" height="150"> </img> </v-col>
        <v-col cols="12"><p>{{
            $t("media.header.paragraph1")
          }}</p></v-col>
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
    </v-container>
</template>

<script>
import bgLogoUrl from "@/assets/business-and-guiness-logo.jpg";
export default {
  data() {
    const videoItems = [
      {
        title: "Online Training with BLA",
        vidUrl: "https://www.youtube.com/embed/R_yIsDe1jqQ?si=gNeKUPHuEKSzurqq",
      },
      {
        title: "1st Business & Guinness Live Event",
        vidUrl: "https://www.youtube.com/embed/vaYdu_-WQos?si=-X8AwAmcckuonrpr",
      },
      {
        title: "2nd Business & Guinness Live Event",
        vidUrl: "https://www.youtube.com/embed/MADHvnf9fdM?si=XdNaW53aU6NvQke_",
      },
      {
        title: "3rd Business & Guinness Live Event",
        vidUrl: "https://www.youtube.com/embed/qqIwivDvOxg?si=TniLhcFY0f5--FGN",
      },
      {
        title: "4th Business & Guinness Live Event",
        vidUrl: "https://www.youtube.com/embed/q7t6vkReYIU?si=l18MsYGZTxDZr4Uj",
      },
      {
        title: "5th Business & Guinness Live Event",
        vidUrl: "https://www.youtube.com/embed/qJmBTcIW9yQ?si=da0P0rmv24jMI6A5",
      },
      {
        title: "Business & Guinness Halloween Special Live Event",
        vidUrl: "https://www.youtube.com/embed/Dqo0qEjW6lU?si=D4ifUpCZ_ok6diAG",
      },
      {
        title: "7th Business & Guinness Live Event",
        vidUrl: "https://www.youtube.com/embed/n3TWtDMoEsU?si=anAkQkZYL8spB7Wc",
      },
      {
        title: "8th Business & Guinness Live Event",
        vidUrl: "https://www.youtube.com/embed/5siF578Avmo?si=S2tbrxkosaiJDZyD",
      },
      {
        title: "9th Business & Guinness Live Event",
        vidUrl: "https://www.youtube.com/embed/--GVXW_CO8w?si=opL6VFseRGZ7UG0G",
      },
      {
        title: "10th Business & Guinness Live Event",
        vidUrl: "https://www.youtube.com/embed/rEgMj-0kpLk?si=caSLOAh-Ei2BzEsA",
      },
      {
        title: "11th Business & Guinness Live Event",
        vidUrl: "https://www.youtube.com/embed/BcdVx0lii0w?si=7YXhAxN_fLJgfveg",
      },
      {
        title: "12th Business & Guinness Live Event",
        vidUrl: "https://www.youtube.com/embed/_O_CVZeSaxs?si=kCOWjj0j9hac0wGF",
      },
      {
        title: "13th Business & Guinness Live Event",
        vidUrl: "https://www.youtube.com/embed/gzdmatcjWq0?si=bFbPpDIQuqL3tY9t",
      },
    ];
    return {
      bgLogoUrl,
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
