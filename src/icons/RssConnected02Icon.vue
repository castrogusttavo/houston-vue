
<template>
  <Icon :iconName="'rss-connected-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RssConnected02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rss-connected-02'
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
