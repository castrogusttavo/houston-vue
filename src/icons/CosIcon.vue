
<template>
  <Icon :iconName="'cos'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CosIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cos'
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
