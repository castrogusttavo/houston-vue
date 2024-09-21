
<template>
  <Icon :iconName="'apple-news'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AppleNewsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'apple-news'
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
