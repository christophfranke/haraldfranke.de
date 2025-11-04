<template>
  <div class="video-wrapper">
    <h2 v-if="videoTitle" class="video-title">{{ videoTitle }}</h2>
    <div v-if="!activated" class="video-preview" @click="activate">
      <img :src="thumbnailUrl" :alt="videoTitle" class="thumbnail" />
      <div class="play-button">
        <svg width="68" height="48" viewBox="0 0 68 48">
          <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
          <path d="M 45,24 27,14 27,34" fill="#fff"></path>
        </svg>
      </div>
    </div>
    <div v-else class="video-embed">
      <iframe
        :src="`https://www.youtube-nocookie.com/embed/${videoId}`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Video',
  props: {
    primary: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      activated: false
    }
  },

  computed: {
    videoEmbed() {
      return this.primary.video_embed
    },
    videoId() {
      if (!this.videoEmbed || !this.videoEmbed.embed_url) return null

      const url = this.videoEmbed.embed_url

      // Extract YouTube video ID from various URL formats
      const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?\/]+)/,
        /youtube\.com\/v\/([^&?\/]+)/
      ]

      for (const pattern of patterns) {
        const match = url.match(pattern)
        if (match) return match[1]
      }

      return null
    },
    thumbnailUrl() {
      // Use Prismic's oEmbed thumbnail if available
      if (this.videoEmbed?.thumbnail_url) {
        return this.videoEmbed.thumbnail_url
      }
      // Fallback to YouTube thumbnail API
      return this.videoId ? `https://i.ytimg.com/vi/${this.videoId}/maxresdefault.jpg` : null
    },
    videoTitle() {
      return this.videoEmbed?.title || 'Video'
    }
  },

  methods: {
    activate() {
      this.activated = true
    }
  }
}
</script>

<style scoped lang="scss">
.video-wrapper {
  grid-column: 1 / -1;
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
  box-sizing: border-box;
}

.video-preview {
  position: relative;
  cursor: pointer;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background: #000;
  overflow: hidden;
  width: 100%;

  .thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
  }

  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.2s ease;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  }

  &:hover .play-button {
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.video-embed {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  width: 100%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
