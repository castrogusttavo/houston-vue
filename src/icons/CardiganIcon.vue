
<template>
  <Icon :iconName="'cardigan'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CardiganIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cardigan'
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
