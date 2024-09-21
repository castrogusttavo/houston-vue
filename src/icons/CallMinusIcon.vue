
<template>
  <Icon :iconName="'call-minus'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallMinusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-minus'
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
