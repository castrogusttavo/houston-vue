
<template>
  <Icon :iconName="'winking'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WinkingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'winking'
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
