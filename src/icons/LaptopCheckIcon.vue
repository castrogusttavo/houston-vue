
<template>
  <Icon :iconName="'laptop-check'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaptopCheckIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'laptop-check'
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
