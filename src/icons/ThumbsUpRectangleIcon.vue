
<template>
  <Icon :iconName="'thumbs-up-rectangle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThumbsUpRectangleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'thumbs-up-rectangle'
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
