
<template>
  <Icon :iconName="'soundcloud'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SoundcloudIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'soundcloud'
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
