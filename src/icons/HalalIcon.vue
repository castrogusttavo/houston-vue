
<template>
  <Icon :iconName="'halal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HalalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'halal'
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
