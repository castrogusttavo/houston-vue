
<template>
  <Icon :iconName="'music-note-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MusicNote01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'music-note-01'
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
