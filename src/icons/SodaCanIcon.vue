
<template>
  <Icon :iconName="'soda-can'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SodaCanIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'soda-can'
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
