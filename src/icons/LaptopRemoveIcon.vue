
<template>
  <Icon :iconName="'laptop-remove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaptopRemoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'laptop-remove'
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
