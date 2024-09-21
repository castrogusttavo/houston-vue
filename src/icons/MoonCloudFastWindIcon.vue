
<template>
  <Icon :iconName="'moon-cloud-fast-wind'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoonCloudFastWindIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon-cloud-fast-wind'
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
