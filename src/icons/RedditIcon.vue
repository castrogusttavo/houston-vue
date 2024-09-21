
<template>
  <Icon :iconName="'reddit'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RedditIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'reddit'
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
