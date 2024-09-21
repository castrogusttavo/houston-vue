
<template>
  <Icon :iconName="'thumbs-up-ellipse'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThumbsUpEllipseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'thumbs-up-ellipse'
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
