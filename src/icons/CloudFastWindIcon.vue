
<template>
  <Icon :iconName="'cloud-fast-wind'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CloudFastWindIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cloud-fast-wind'
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
