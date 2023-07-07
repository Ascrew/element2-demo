<template>
  <div class="me-loading">
    <div class="loader">
      <div class="loader-inner">
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
      </div>
    </div>
    <div class="loading-text">{{ loadingText }}</div>
  </div>
</template>

<script>
export default {
  name: "MeLoading",
  props: {
    loadingText: {
      type: String,
      default: "",
    },
  },
};
</script>
