
<template>
  <Icon :iconName="'scroll'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ScrollIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'scroll'
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
