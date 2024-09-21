
<template>
  <Icon :iconName="'moon-cloud-slow-wind'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoonCloudSlowWindIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon-cloud-slow-wind'
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
