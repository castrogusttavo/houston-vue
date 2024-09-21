
<template>
  <Icon :iconName="'paint-bucket'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PaintBucketIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'paint-bucket'
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
