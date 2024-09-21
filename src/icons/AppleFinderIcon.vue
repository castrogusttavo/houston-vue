
<template>
  <Icon :iconName="'apple-finder'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AppleFinderIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'apple-finder'
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
