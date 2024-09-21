
<template>
  <Icon :iconName="'broccoli'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BroccoliIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'broccoli'
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
