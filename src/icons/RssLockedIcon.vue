
<template>
  <Icon :iconName="'rss-locked'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RssLockedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rss-locked'
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
