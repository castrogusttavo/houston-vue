
<template>
  <Icon :iconName="'music-note-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MusicNote04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'music-note-04'
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
