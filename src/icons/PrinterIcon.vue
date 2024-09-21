
<template>
  <Icon :iconName="'printer'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PrinterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'printer'
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
