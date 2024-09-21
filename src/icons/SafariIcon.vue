
<template>
  <Icon :iconName="'safari'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SafariIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'safari'
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
