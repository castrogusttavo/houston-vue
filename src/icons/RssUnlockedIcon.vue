
<template>
  <Icon :iconName="'rss-unlocked'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RssUnlockedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rss-unlocked'
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
