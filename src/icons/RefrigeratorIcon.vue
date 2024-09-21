
<template>
  <Icon :iconName="'refrigerator'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RefrigeratorIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'refrigerator'
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
