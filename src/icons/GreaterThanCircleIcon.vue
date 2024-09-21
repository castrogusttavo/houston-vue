
<template>
  <Icon :iconName="'greater-than-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GreaterThanCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'greater-than-circle'
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
