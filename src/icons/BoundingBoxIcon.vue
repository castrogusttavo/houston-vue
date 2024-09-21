
<template>
  <Icon :iconName="'bounding-box'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BoundingBoxIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bounding-box'
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
