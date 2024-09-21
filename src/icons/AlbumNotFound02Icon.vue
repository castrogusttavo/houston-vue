
<template>
  <Icon :iconName="'album-not-found-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlbumNotFound02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'album-not-found-02'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
