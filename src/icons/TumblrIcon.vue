
<template>
  <Icon :iconName="'tumblr'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TumblrIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tumblr'
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
