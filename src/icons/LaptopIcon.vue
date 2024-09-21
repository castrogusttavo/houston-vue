
<template>
  <Icon :iconName="'laptop'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaptopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'laptop'
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
