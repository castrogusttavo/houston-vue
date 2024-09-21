
<template>
  <Icon :iconName="'music-note-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MusicNote02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'music-note-02'
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
