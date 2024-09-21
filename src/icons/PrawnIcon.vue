
<template>
  <Icon :iconName="'prawn'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PrawnIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'prawn'
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
