
<template>
  <Icon :iconName="'music-note-square-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MusicNoteSquare01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'music-note-square-01'
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
