
<template>
  <Icon :iconName="'rss-connected-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RssConnected01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rss-connected-01'
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
