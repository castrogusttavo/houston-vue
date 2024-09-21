
<template>
  <Icon :iconName="'thumbs-down-rectangle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThumbsDownRectangleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'thumbs-down-rectangle'
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
