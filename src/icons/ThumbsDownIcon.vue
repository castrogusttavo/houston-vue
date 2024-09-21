
<template>
  <Icon :iconName="'thumbs-down'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThumbsDownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'thumbs-down'
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
