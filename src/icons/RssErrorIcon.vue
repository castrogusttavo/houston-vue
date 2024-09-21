
<template>
  <Icon :iconName="'rss-error'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RssErrorIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rss-error'
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
