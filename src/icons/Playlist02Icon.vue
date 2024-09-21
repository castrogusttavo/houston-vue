
<template>
  <Icon :iconName="'playlist-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Playlist02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'playlist-02'
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
