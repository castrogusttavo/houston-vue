
<template>
  <Icon :iconName="'laptop-programming'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaptopProgrammingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'laptop-programming'
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
