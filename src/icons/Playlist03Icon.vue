
<template>
  <Icon :iconName="'playlist-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Playlist03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'playlist-03'
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
