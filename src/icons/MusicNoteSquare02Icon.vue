
<template>
  <Icon :iconName="'music-note-square-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MusicNoteSquare02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'music-note-square-02'
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
