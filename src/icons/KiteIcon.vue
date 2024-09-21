
<template>
  <Icon :iconName="'kite'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KiteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'kite'
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
