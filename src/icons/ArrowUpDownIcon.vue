
<template>
  <Icon :iconName="'arrow-up-down'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowUpDownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-up-down'
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
