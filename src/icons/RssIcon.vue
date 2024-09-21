
<template>
  <Icon :iconName="'rss'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RssIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rss'
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
