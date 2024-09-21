
<template>
  <Icon :iconName="'thumbs-down-ellipse'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThumbsDownEllipseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'thumbs-down-ellipse'
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
