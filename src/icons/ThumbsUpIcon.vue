
<template>
  <Icon :iconName="'thumbs-up'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThumbsUpIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'thumbs-up'
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
