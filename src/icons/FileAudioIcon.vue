
<template>
  <Icon :iconName="'file-audio'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileAudioIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-audio'
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
