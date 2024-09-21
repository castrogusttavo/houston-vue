
<template>
  <Icon :iconName="'circle-arrow-up-down'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowUpDownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-up-down'
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
