
<template>
  <Icon :iconName="'segment'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SegmentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'segment'
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
