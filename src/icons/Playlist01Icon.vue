
<template>
  <Icon :iconName="'playlist-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Playlist01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'playlist-01'
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
